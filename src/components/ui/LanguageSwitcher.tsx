import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useI18n, LOCALES } from '@/i18n/I18nContext'
import { Flag } from '@/components/ui/Flags'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MenuPosition {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

const MENU_WIDTH = 208 // w-52
const MENU_MAX_HEIGHT = 320 // max-h-80
const GAP = 12

/**
 * Globe-icon dropdown for switching the site language, with a flag + native
 * name per option. The menu is portaled to <body> and positioned from the
 * trigger button's own coordinates — needed because this switcher gets
 * reused inside scrollable containers (e.g. the dashboard sidebar), where a
 * plain `position: absolute` menu gets clipped by the ancestor's overflow.
 *
 * The button can sit anywhere on screen (far right in the header, far left
 * in the dashboard sidebar), so alignment flips based on available space
 * instead of always opening down-and-right.
 */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState<MenuPosition>({ top: 0, left: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    if (!open || !buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top

    const vertical: MenuPosition =
      spaceBelow >= MENU_MAX_HEIGHT || spaceBelow >= spaceAbove
        ? { top: rect.bottom + GAP }
        : { bottom: window.innerHeight - rect.top + GAP }
    const horizontal: MenuPosition =
      window.innerWidth - rect.left >= MENU_WIDTH ? { left: rect.left } : { right: window.innerWidth - rect.right }

    setPosition({ ...vertical, ...horizontal })
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (containerRef.current?.contains(target) || listRef.current?.contains(target)) return
      setOpen(false)
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    // Closes instead of following the trigger — simpler and more reliable
    // than repositioning on every scroll frame of every possible ancestor.
    const handleScroll = () => setOpen(false)
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    window.addEventListener('scroll', handleScroll, { capture: true, passive: true })
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
      window.removeEventListener('scroll', handleScroll, { capture: true })
    }
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
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

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.ul
              ref={listRef}
              role="listbox"
              aria-label={t.language.label}
              initial={reducedMotion ? undefined : { opacity: 0, y: -8 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              style={{ position: 'fixed', ...position }}
              className="z-50 max-h-80 w-52 overflow-y-auto border border-line bg-paper py-1 shadow-lg"
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
                    <span className="h-[18px] w-6 shrink-0 overflow-hidden border border-line/50">
                      <Flag code={item.code} />
                    </span>
                    <span>{item.nativeName}</span>
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  )
}
