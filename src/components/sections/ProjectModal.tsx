import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { Button } from '@/components/ui/Button'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { scrollToHash } from '@/utils/scrollTo'
import type { Project } from '@/types/content'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function ProjectModal({ project, onClose, onPrev, onNext }: ProjectModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useFocusTrap(containerRef, project !== null, onClose)

  useEffect(() => {
    if (!project) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [project, onNext, onPrev])

  return (
    <AnimatePresence>
      {project && (
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
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl border border-line bg-paper"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-line/70 bg-paper/80 text-ink backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <MediaFrame
              src={project.cover.src}
              alt={project.cover.alt}
              label={`${project.category} — Add cover image`}
              aspectClassName="aspect-video"
              priority
            />

            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3 font-sans text-xs uppercase tracking-[0.14em] text-muted">
                  <span className="text-accent">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tnum">{project.year}</span>
                </div>
                <h2 id="project-modal-title" className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-2 font-sans text-sm text-muted">{project.client}</p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{project.description}</p>

                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6">
                  <div>
                    <dt className="font-sans text-xs uppercase tracking-[0.14em] text-muted">Outcome</dt>
                    <dd className="mt-2 text-sm text-ink">{project.outcome}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.14em] text-muted">Services Provided</h3>
                <ul className="mt-4 space-y-2">
                  {project.servicesProvided.map((service) => (
                    <li key={service} className="border-b border-line py-2 text-sm text-ink">
                      {service}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#booking"
                  variant="secondary"
                  className="mt-8 w-full"
                  onClick={(e) => {
                    e.preventDefault()
                    onClose()
                    scrollToHash('#booking')
                  }}
                >
                  Discuss a similar project
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-line px-6 py-4 sm:px-10">
              <button
                type="button"
                onClick={onPrev}
                className="flex items-center gap-2 font-sans text-sm text-muted transition-colors hover:text-ink"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                Previous
              </button>
              <button
                type="button"
                onClick={onNext}
                className="flex items-center gap-2 font-sans text-sm text-muted transition-colors hover:text-ink"
              >
                Next
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
