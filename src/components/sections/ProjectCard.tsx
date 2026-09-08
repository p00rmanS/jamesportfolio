import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MediaFrame } from '@/components/ui/MediaFrame'
import type { Project } from '@/types/content'
import { cn } from '@/utils/cn'

interface ProjectCardProps {
  project: Project
  onOpen: () => void
  size?: 'lg' | 'md' | 'sm'
}

const aspectBySize: Record<NonNullable<ProjectCardProps['size']>, string> = {
  lg: 'aspect-[4/3]',
  md: 'aspect-[4/3]',
  sm: 'aspect-square',
}

export function ProjectCard({ project, onOpen, size = 'md' }: ProjectCardProps) {
  return (
    <div className="group w-full">
      <motion.button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <MediaFrame
              src={project.cover.src}
              alt={project.cover.alt}
              label={`${project.category} — Add cover image`}
              aspectClassName={aspectBySize[size]}
            />
          </div>
          <span className="absolute left-4 top-4 border border-line/70 bg-paper/70 px-2.5 py-1 font-sans text-[11px] uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3
              className={cn(
                'font-display leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-accent',
                size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl',
              )}
            >
              {project.title}
            </h3>
            <p className="mt-1.5 font-sans text-sm text-muted">{project.client}</p>
          </div>
          <span className="tnum shrink-0 pt-1 font-sans text-sm text-muted">{project.year}</span>
        </div>
      </motion.button>

      <Link
        to={`/work/${project.id}`}
        className="mt-2 inline-block font-sans text-xs text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent"
      >
        View case study
      </Link>
    </div>
  )
}
