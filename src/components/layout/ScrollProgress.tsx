import { useScrollProgress } from '@/hooks/useScrollProgress'

/** Thin fixed progress bar reflecting how far down the page the visitor has scrolled. */
export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
