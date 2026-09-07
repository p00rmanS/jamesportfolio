import { useState } from 'react'
import { Play } from 'lucide-react'
import { MediaFrame } from '@/components/ui/MediaFrame'
import type { VideoItem } from '@/types/content'
import { cn } from '@/utils/cn'

interface VideoCardProps {
  video: VideoItem
  featured?: boolean
}

function embedUrl(video: VideoItem): string | null {
  if (video.source.type === 'youtube' && video.source.src && video.source.src !== 'REPLACE_YOUTUBE_ID') {
    return `https://www.youtube-nocookie.com/embed/${video.source.src}?autoplay=1&rel=0`
  }
  if (video.source.type === 'vimeo' && video.source.src && video.source.src !== 'REPLACE_VIMEO_ID') {
    return `https://player.vimeo.com/video/${video.source.src}?autoplay=1`
  }
  return null
}

/**
 * Shows a thumbnail with a play affordance until clicked — the real player
 * (native <video> or a YouTube/Vimeo iframe) is only mounted on demand, so
 * videos never all load at once.
 */
export function VideoCard({ video, featured }: VideoCardProps) {
  const [activated, setActivated] = useState(false)
  const hasLocalSrc = video.source.type === 'local' && Boolean(video.source.src)
  const iframeSrc = embedUrl(video)
  const canPlay = hasLocalSrc || iframeSrc !== null

  return (
    <div>
      <div
        className={cn(
          'relative overflow-hidden bg-surface',
          featured ? 'aspect-video' : 'aspect-video',
        )}
      >
        {activated && canPlay ? (
          hasLocalSrc ? (
            <video className="h-full w-full object-cover" controls autoPlay playsInline>
              <source src={video.source.src} />
              {video.captionsSrc && <track kind="captions" src={video.captionsSrc} label="English" default />}
              Your browser doesn’t support embedded video.
            </video>
          ) : (
            <iframe
              className="h-full w-full"
              src={iframeSrc ?? undefined}
              title={video.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )
        ) : (
          <button
            type="button"
            onClick={() => setActivated(true)}
            disabled={!canPlay}
            aria-label={canPlay ? `Play ${video.title}` : `${video.title} — video source not added yet`}
            className="group relative block h-full w-full disabled:cursor-not-allowed"
          >
            <MediaFrame
              src={video.thumbnail}
              alt={`${video.title} thumbnail`}
              label="Add thumbnail"
              aspectClassName="aspect-video"
              className="h-full"
            />
            <span
              className={cn(
                'absolute inset-0 flex items-center justify-center bg-paper/20 transition-colors',
                canPlay && 'group-hover:bg-paper/35',
              )}
            >
              <span
                className={cn(
                  'flex h-14 w-14 items-center justify-center rounded-full border transition-transform',
                  canPlay
                    ? 'border-line/70 bg-paper/80 text-ink group-hover:scale-110 group-hover:border-accent group-hover:text-accent'
                    : 'border-line/40 bg-paper/60 text-muted',
                )}
              >
                <Play className="h-5 w-5 translate-x-0.5" aria-hidden="true" />
              </span>
            </span>
            {!canPlay && (
              <span className="absolute bottom-3 left-3 font-sans text-[11px] uppercase tracking-[0.14em] text-muted">
                Add video source
              </span>
            )}
          </button>
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.14em] text-muted">
          <span className="text-accent">{video.category}</span>
        </div>
        <h3 className="mt-1.5 font-display text-lg leading-snug tracking-tight text-ink">{video.title}</h3>
        <p className="mt-1 font-sans text-sm text-muted">{video.client}</p>
      </div>
    </div>
  )
}
