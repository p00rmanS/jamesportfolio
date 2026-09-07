import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from '@/utils/cn'

interface MediaFrameProps {
  src?: string
  alt: string
  label?: string
  aspectClassName?: string
  className?: string
  priority?: boolean
}

/**
 * Displays an image, or a clearly labeled placeholder when no src is set
 * (sample content) or the image fails to load (missing-image fallback
 * state). Reused across project covers, video thumbnails, and the content
 * gallery so every "add your own media" spot behaves consistently.
 */
export function MediaFrame({ src, alt, label, aspectClassName = 'aspect-[4/3]', className, priority }: MediaFrameProps) {
  const [errored, setErrored] = useState(false)
  const showPlaceholder = !src || errored

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-surface',
        aspectClassName,
        className,
      )}
    >
      {showPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-line bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,var(--line)_10px,var(--line)_11px)] px-6 text-center">
          <ImageOff className="h-5 w-5 text-muted" aria-hidden="true" />
          <span className="max-w-[16rem] font-sans text-xs uppercase tracking-[0.14em] text-muted">
            {label ?? 'Add media'}
          </span>
        </div>
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  )
}
