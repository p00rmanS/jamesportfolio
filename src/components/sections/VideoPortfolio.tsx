import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { VideoCard } from '@/components/sections/VideoCard'

export function VideoPortfolio() {
  const { videos } = content
  const { t } = useI18n()
  const featured = videos.find((v) => v.featured)
  const rest = videos.filter((v) => v !== featured)

  return (
    <section id="videos" className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 lg:px-12">
      <SectionHeading
        index="02"
        label={t.sections.videos.label}
        title={t.sections.videos.title}
        description={t.sections.videos.description}
      />

      {videos.length === 0 ? (
        <p className="mt-12 max-w-md text-muted">[Add videos to src/data/content.ts to populate this section.]</p>
      ) : (
        <div className="mt-12 space-y-16">
          {featured && (
            <Reveal>
              <VideoCard video={featured} featured />
            </Reveal>
          )}
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((video, i) => (
              <Reveal key={video.id} delay={(i % 3) * 0.08}>
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
