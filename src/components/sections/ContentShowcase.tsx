import { useMemo, useState } from 'react'
import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { Reveal } from '@/components/ui/Reveal'
import { ContentLightbox } from '@/components/sections/ContentLightbox'
import type { ContentCategory, ContentPiece } from '@/types/content'
import { cn } from '@/utils/cn'
import { ASPECT_BY_ORIENTATION } from '@/utils/contentAspect'

const FILTERS: Array<ContentCategory | 'All'> = ['All', 'Social', 'Campaigns', 'Design', 'Behind the Scenes']

export function ContentShowcase() {
  const { contentGallery } = content
  const { t } = useI18n()
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const [activeItem, setActiveItem] = useState<ContentPiece | null>(null)

  const filtered = useMemo(
    () => (filter === 'All' ? contentGallery : contentGallery.filter((item) => item.category === filter)),
    [contentGallery, filter],
  )

  return (
    <section id="content" className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 lg:px-12">
      <SectionHeading
        index="03"
        label={t.sections.content.label}
        title={t.sections.content.title}
        description={t.sections.content.description}
      />

      <div role="group" aria-label="Filter content by category" className="mt-10 flex flex-wrap gap-2">
        {FILTERS.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setFilter(label)}
            aria-pressed={filter === label}
            className={cn(
              'border px-4 py-2 font-sans text-sm transition-colors',
              filter === label ? 'border-accent text-accent' : 'border-line text-muted hover:text-ink',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 max-w-md text-muted">[No items in this category yet — add more in src/data/content.ts.]</p>
      ) : (
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 0.06} className="mb-6 break-inside-avoid">
              <button type="button" onClick={() => setActiveItem(item)} className="group block w-full text-left">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                    <MediaFrame
                      src={item.media.src}
                      alt={item.media.alt}
                      label={`${item.category} — Add media`}
                      aspectClassName={ASPECT_BY_ORIENTATION[item.orientation]}
                    />
                  </div>
                </div>
                <p className="mt-3 font-sans text-sm text-ink transition-colors group-hover:text-accent">{item.title}</p>
              </button>
            </Reveal>
          ))}
        </div>
      )}

      <ContentLightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  )
}
