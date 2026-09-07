import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useI18n, LOCALES } from '@/i18n/I18nContext'
import { Flag } from '@/components/ui/Flags'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/** Globe-icon dropdown for switching the site language, with a flag + native name per option. */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.language.label}
        title={t.language.label}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-ink"
      >
        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t.language.label}
            initial={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-50 mt-3 max-h-80 w-52 overflow-y-auto border border-line bg-paper py-1 shadow-lg"
          >
            {LOCALES.map((item) => (
              <li key={item.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === item.code}
                  onClick={() => {
                    setLocale(item.code)
                    setOpen(false)
                  }}
                  className={
                    'flex w-full items-center gap-3 px-3 py-2 text-left font-sans text-sm transition-colors ' +
                    (locale === item.code ? 'text-accent' : 'text-ink hover:bg-surface')
                  }
                >
                  <span className="h-3.5 w-5 shrink-0 overflow-hidden border border-line/50">
                    <Flag code={item.code} />
                  </span>
                  <span>{item.nativeName}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
