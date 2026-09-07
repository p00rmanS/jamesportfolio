import { useEffect, useState } from 'react'

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_STYLES_HREF = 'https://assets.calendly.com/assets/external/widget.css'

type LoadState = 'idle' | 'loading' | 'ready' | 'error'

/**
 * Loads the Calendly embed script + styles only once, and only when called
 * (the booking section calls this once it is near the viewport). If the
 * script fails to load — offline, blocked, etc. — callers should fall back
 * to the plain "Open Calendly" link.
 */
export function useCalendlyScript(shouldLoad: boolean): LoadState {
  const [state, setState] = useState<LoadState>('idle')

  useEffect(() => {
    if (!shouldLoad) return

    if (window.Calendly) {
      setState('ready')
      return
    }

    setState('loading')

    if (!document.querySelector(`link[href="${CALENDLY_STYLES_HREF}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = CALENDLY_STYLES_HREF
      document.head.appendChild(link)
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT_SRC}"]`)
    const handleLoad = () => setState('ready')
    const handleError = () => setState('error')

    if (!script) {
      script = document.createElement('script')
      script.src = CALENDLY_SCRIPT_SRC
      script.async = true
      document.body.appendChild(script)
    }

    script.addEventListener('load', handleLoad)
    script.addEventListener('error', handleError)

    return () => {
      script?.removeEventListener('load', handleLoad)
      script?.removeEventListener('error', handleError)
    }
  }, [shouldLoad])

  return state
}

interface CalendlyPrefill {
  name?: string
  email?: string
  customAnswers?: Record<string, string>
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement; prefill?: CalendlyPrefill }) => void
      initPopupWidget: (options: { url: string; prefill?: CalendlyPrefill }) => void
    }
  }
}
