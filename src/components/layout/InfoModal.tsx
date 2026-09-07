import { useRef, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useFocusTrap } from '@/hooks/useFocusTrap'

interface InfoModalProps {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

/**
 * Lightweight popup for secondary info (Privacy, Accessibility) that doesn't
 * need its own route — keeps visitors on "/" so the section nav always works,
 * instead of navigating away to a page with no #work/#process/etc. anchors.
 */
export function InfoModal({ open, title, onClose, children }: InfoModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useFocusTrap(containerRef, open, onClose)

  return (
    <AnimatePresence>
      {open && (
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
            aria-labelledby="info-modal-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg border border-line bg-paper p-8 sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-line/70 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <h2 id="info-modal-title" className="font-display text-2xl tracking-tight text-ink">
              {title}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
