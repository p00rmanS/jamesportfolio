import { Video, Sparkles, Layers, Globe, Workflow, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { scrollToHash } from '@/utils/scrollTo'

const ICONS: LucideIcon[] = [Video, Sparkles, Layers, Globe, Workflow]

export function Services() {
  const { services } = content
  const { t } = useI18n()

  return (
    <section id="services" className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 lg:px-12">
      <SectionHeading
        index="05"
        label={t.sections.services.label}
        title={t.sections.services.title}
        description={t.sections.services.description}
      />

      <div className="mt-12 divide-y divide-line border-y border-line">
        {services.map((service, i) => {
          const Icon = ICONS[i % ICONS.length]
          const copy = t.services.items[service.id as keyof typeof t.services.items]
          return (
            <Reveal key={service.id} delay={Math.min(i * 0.05, 0.2)}>
              <div className="grid gap-6 py-10 lg:grid-cols-[16rem_1fr] lg:items-center">
                <div className="flex items-start gap-4">
                  <Icon className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl tracking-tight text-ink">{copy.title}</h3>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-ink">
                    {copy.description} <span className="text-muted">{copy.idealFor}</span>
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    {service.deliverables.map((item, di) => (
                      <span key={item} className="font-sans text-xs text-muted">
                        {item}
                        {di < service.deliverables.length - 1 && <span aria-hidden="true"> · </span>}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToHash('#booking')}
                    className="group mt-5 flex items-center gap-1.5 font-sans text-sm text-ink transition-colors hover:text-accent"
                  >
                    {t.services.askAboutService}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
