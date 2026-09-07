import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { content } from '@/data/content'
import { ProjectModal } from '@/components/sections/ProjectModal'
import { scrollToHash } from '@/utils/scrollTo'

interface ProjectModalContextValue {
  openProject: (id: string) => void
}

const ProjectModalContext = createContext<ProjectModalContextValue | null>(null)

/** Provides a single shared project-detail modal, openable from any section (Work grid or Services links). */
export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const { projects } = content
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Stable references so ProjectModal's effects (focus trap, arrow-key nav)
  // don't tear down and re-attach their listeners on every render.
  const handleClose = useCallback(() => setActiveIndex(null), [])
  const handlePrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + projects.length) % projects.length)),
    [projects.length],
  )
  const handleNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % projects.length)),
    [projects.length],
  )

  const value = useMemo<ProjectModalContextValue>(
    () => ({
      openProject: (id: string) => {
        const index = projects.findIndex((p) => p.id === id)
        if (index === -1) return
        scrollToHash('#work')
        setActiveIndex(index)
      },
    }),
    [projects],
  )

  const activeProject = activeIndex !== null ? projects[activeIndex] : null

  return (
    <ProjectModalContext.Provider value={value}>
      {children}
      <ProjectModal project={activeProject} onClose={handleClose} onPrev={handlePrev} onNext={handleNext} />
    </ProjectModalContext.Provider>
  )
}

export function useProjectModal(): ProjectModalContextValue {
  const ctx = useContext(ProjectModalContext)
  if (!ctx) throw new Error('useProjectModal must be used within a ProjectModalProvider')
  return ctx
}
