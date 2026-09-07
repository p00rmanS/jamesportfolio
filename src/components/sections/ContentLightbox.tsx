import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import type { ContentPiece } from '@/types/content'

interface ContentLightboxProps {
  item: ContentPiece | null
  onClose: () => void
}

const aspectByOrientation: Record<ContentPiece['orientation'], string> = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-video',
  square: 'aspect-square',
}

export function ContentLightbox({ item, onClose }: ContentLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useFocusTrap(containerRef, item !== null, onClose)

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-paper/95 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl border border-line bg-paper"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-line/70 bg-paper/80 text-ink backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <MediaFrame
              src={item.media.src}
              alt={item.media.alt}
              label={`${item.category} — Add media`}
              aspectClassName={aspectByOrientation[item.orientation]}
              priority
            />
            <div className="p-6 sm:p-8">
              <span className="font-sans text-xs uppercase tracking-[0.14em] text-accent">{item.category}</span>
              <h2 id="lightbox-title" className="mt-3 font-display text-2xl tracking-tight">
                {item.title}
              </h2>
              {item.description && <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
