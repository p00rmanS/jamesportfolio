import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function Process() {
  const { process } = content
  const { t } = useI18n()

  return (
    <section id="process" className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 lg:px-12">
      <SectionHeading
        index="06"
        label={t.sections.process.label}
        title={t.sections.process.title}
        description={t.sections.process.description}
      />

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => {
          const copy = t.process[step.id]
          return (
            <Reveal key={step.id} delay={i * 0.1}>
              <div className="relative border-t border-line pt-6">
                <span className="tnum font-display text-5xl text-accent">{step.number}</span>
                <h3 className="mt-6 font-display text-2xl tracking-tight text-ink">{copy.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{copy.description}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
