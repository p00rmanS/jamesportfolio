import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'
import { content } from '@/data/content'
import { RESUME_URL, RESUME_DOWNLOAD_NAME } from '@/data/settings'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useI18n } from '@/i18n/I18nContext'
import type { Translations } from '@/i18n/types'
import { useCommandPalette } from '@/context/CommandPaletteContext'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Logo } from '@/components/ui/Logo'
import { scrollToHash } from '@/utils/scrollTo'
import { cn } from '@/utils/cn'

const SECTION_IDS = content.nav.map((link) => link.href.replace('#', ''))

export function Header() {
  const { t } = useI18n()
  const { open: openCommandPalette } = useCommandPalette()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollToHash(href)
    window.history.replaceState(null, '', href)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-500',
        scrolled ? 'bg-paper/85 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <a href="#main" className="skip-link bg-accent px-4 py-2 text-sm text-accent-ink">
        Skip to content
      </a>

      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#top" onClick={(e) => handleNavClick(e, '#top')} aria-label={`${content.brand.name} — home`}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {content.nav.map((link) => {
            const id = link.href.replace('#', '') as keyof Translations['nav']
            const isActive = activeId === id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative py-2 font-sans text-sm tracking-wide transition-colors',
                  isActive ? 'text-ink' : 'text-muted hover:text-ink',
                )}
              >
                {t.nav[id]}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300',
                    isActive ? 'w-full' : 'w-0',
                  )}
                />
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={RESUME_URL}
            download={RESUME_DOWNLOAD_NAME}
            className="font-sans text-sm text-muted transition-colors hover:text-ink"
          >
            {t.nav.resume}
          </a>
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label={t.commandPalette.placeholder}
            title={t.commandPalette.placeholder}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-ink"
          >
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#booking"
            onClick={(e) => handleNavClick(e, '#booking')}
            className="border border-line px-5 py-2.5 font-sans text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {t.nav.bookCall}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label={t.commandPalette.placeholder}
            className="flex h-9 w-9 items-center justify-center text-ink"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center text-ink"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between px-6">
              <Logo />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center text-ink"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-6">
              {content.nav.map((link, i) => {
                const id = link.href.replace('#', '') as keyof Translations['nav']
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="border-b border-line py-4 font-display text-3xl text-ink"
                  >
                    {t.nav[id]}
                  </motion.a>
                )
              })}
              <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME} className="mt-6 font-sans text-sm text-muted">
                {t.nav.resume}
              </a>
            </nav>
            <div className="px-6 pb-10">
              <a
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                className="flex w-full items-center justify-center border border-line py-4 font-sans text-sm text-ink"
              >
                {t.nav.bookCall}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
