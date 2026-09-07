import { FolderOpen, UserRound, Workflow, Compass, Layers, Quote, ArrowUpRight } from 'lucide-react'
import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar'
import { DashboardCard } from '@/components/dashboard/DashboardCard'
import { ToolsTicker } from '@/components/dashboard/ToolsTicker'

/**
 * Alternate "dashboard" portfolio view — same content and translations as
 * the main site, presented as a sidebar + card layout instead of a single
 * scrolling page. Lives at /dashboard; every card links back into the main
 * site's matching section for the full interactive experience (project
 * modals, the booking flow, etc.) rather than duplicating that logic here.
 */
export function Dashboard() {
  const { t } = useI18n()
  const { projects, services, process, testimonials, brand } = content
  const featuredProject = projects[0]
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-paper text-ink">
      <DashboardSidebar />

      <main className="lg:pl-64">
        <div id="top" className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
                {t.hero.headline[0]}
                <br />
                <span className="text-accent">{t.hero.headline[1]}</span>
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{t.hero.subcopy}</p>
            </div>
            <a
              href="/#booking"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 font-sans text-sm text-paper transition-colors hover:bg-accent"
            >
              {t.dashboard.getInTouch}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </header>

          <div className="mt-10">
            <ToolsTicker />
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              icon={FolderOpen}
              label={t.sections.work.label}
              title={t.sections.work.title}
              href="/#work"
              className="sm:col-span-2"
            >
              {featuredProject && (
                <p className="text-sm leading-relaxed text-muted">
                  <span className="text-ink">{featuredProject.title}</span> — {featuredProject.summary}
                </p>
              )}
            </DashboardCard>

            <DashboardCard icon={UserRound} label={t.sections.about.label} title={t.about.introQuote} href="/#about" />

            <DashboardCard
              icon={Workflow}
              label={t.sections.automation.label}
              title={t.sections.automation.title}
              href="/#automation"
            >
              <p className="text-sm leading-relaxed text-muted">{t.sections.automation.description}</p>
            </DashboardCard>

            <DashboardCard icon={Compass} label={t.sections.process.label} title={t.sections.process.title} href="/#process">
              <ol className="space-y-1.5 text-sm text-ink">
                {process.map((step) => (
                  <li key={step.id} className="flex gap-2">
                    <span className="tnum text-muted">{step.number}</span>
                    {t.process[step.id].title}
                  </li>
                ))}
              </ol>
            </DashboardCard>

            <DashboardCard
              icon={Layers}
              label={t.sections.services.label}
              title={t.sections.services.title}
              href="/#services"
            >
              <ol className="space-y-1.5 text-sm text-ink">
                {services.map((service, i) => (
                  <li key={service.id} className="flex gap-2">
                    <span className="tnum text-muted">{String(i + 1).padStart(2, '0')}</span>
                    {t.services.items[service.id].title}
                  </li>
                ))}
              </ol>
            </DashboardCard>

            {testimonials.length > 0 && (
              <DashboardCard icon={Quote} label="Testimonials" title="What clients say." href="/#testimonials">
                <blockquote className="text-sm italic leading-relaxed text-muted">
                  “{testimonials[0].quote}”
                </blockquote>
              </DashboardCard>
            )}
          </div>

          <footer className="mt-10 flex flex-col items-center gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
            <span>
              © {year} {brand.name}
            </span>
            <a href="/" className="transition-colors hover:text-ink">
              {t.dashboard.fullSite} →
            </a>
          </footer>
        </div>
      </main>
    </div>
  )
}
