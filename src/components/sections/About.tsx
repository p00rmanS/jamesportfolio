import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { ToolBadge } from '@/components/ui/ToolBadge'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  const { about, brand } = content
  const { t } = useI18n()

  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 lg:px-12">
      <SectionHeading
        index="07"
        label={t.sections.about.label}
        title={t.sections.about.title.replace('{brand}', brand.name)}
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <MediaFrame
            src={about.portraitSrc}
            alt="James Dean, founder of J Sync"
            label="Add professional portrait"
            aspectClassName="aspect-[4/5]"
            className="border border-line"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl">{t.about.introQuote}</p>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">{about.background}</p>

          <div className="mt-10">
            <h3 className="font-sans text-xs uppercase tracking-[0.14em] text-muted">{t.about.toolsLabel}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.tools.map((tool) => (
                <ToolBadge key={tool.name} tool={tool} />
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
