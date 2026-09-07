import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToHash } from '@/utils/scrollTo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { cn } from '@/utils/cn'

/**
 * Fixed left sidebar for the alternate "dashboard" portfolio view — profile
 * block, in-page nav, theme/language controls, and a link back to the main
 * single-page site. Desktop only (`lg:flex`); the cards remain the primary
 * content on small screens, so nothing is lost without it there.
 */
export function DashboardSidebar() {
  const { about, brand } = content
  const { t } = useI18n()

  const navItems: Array<{ id: string; href: string; label: string }> = [
    { id: 'work', href: '#work', label: t.nav.work },
    { id: 'services', href: '#services', label: t.nav.services },
    { id: 'tools', href: '#tools', label: t.dashboard.toolsIWorkWith },
    { id: 'process', href: '#process', label: t.nav.process },
    { id: 'about', href: '#about', label: t.nav.about },
  ]
  const activeId = useActiveSection(navItems.map((item) => item.id))

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToHash(href)
  }

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col overflow-y-auto border-r border-line bg-paper px-6 py-8 lg:flex">
      <a href="#top" onClick={(e) => handleNavClick(e, '#top')} className="flex flex-col items-center text-center">
        <div className="h-16 w-16 overflow-hidden rounded-full border border-line">
          <MediaFrame src={about.portraitSrc} alt={`${brand.name} founder`} aspectClassName="aspect-square" />
        </div>
        <p className="mt-3 font-display text-base tracking-tight text-ink">{brand.name}</p>
        <p className="text-xs text-muted">@jsync</p>
      </a>
      <SocialLinks className="mt-4 justify-center" />

      <nav aria-label="Dashboard" className="mt-10 flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const isActive = activeId === item.id
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'rounded-lg px-3 py-2 font-sans text-sm transition-colors',
                isActive ? 'bg-surface text-ink' : 'text-muted hover:bg-surface hover:text-ink',
              )}
            >
              {item.label}
            </a>
          )
        })}
      </nav>

      <div className="mt-6 flex items-center justify-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      <a
        href="/"
        className="mt-6 border border-line px-3 py-2 text-center font-sans text-xs text-muted transition-colors hover:border-accent hover:text-ink"
      >
        ← {t.dashboard.fullSite}
      </a>
    </aside>
  )
}
