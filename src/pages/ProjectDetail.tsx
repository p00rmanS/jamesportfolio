import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { content } from '@/data/content'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Standalone, indexable, shareable URL for one project (/work/:projectId) —
 * the same data shown in the ProjectModal popup, but as a real page with its
 * own <title> so it can be linked directly and crawled on its own.
 */
export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = content.projects.find((p) => p.id === projectId)

  useEffect(() => {
    if (!project) return
    const previousTitle = document.title
    document.title = `${project.title} — ${content.brand.name}`
    return () => {
      document.title = previousTitle
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  return (
    <main className="mx-auto max-w-4xl px-6 py-32 lg:px-12">
      <Reveal>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 font-sans text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all work
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap items-center gap-3 font-sans text-xs uppercase tracking-[0.14em] text-muted">
          <span className="text-accent">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span className="tnum">{project.year}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">{project.title}</h1>
        <p className="mt-2 font-sans text-sm text-muted">{project.client}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <MediaFrame
          src={project.cover.src}
          alt={project.cover.alt}
          label={`${project.category} — Add cover image`}
          aspectClassName="aspect-video"
          className="mt-10 border border-line"
          priority
        />
      </Reveal>

      <div className="mt-10 grid gap-10 sm:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.15}>
          <p className="max-w-xl text-base leading-relaxed text-muted">{project.description}</p>
          <dl className="mt-8 border-t border-line pt-6">
            <dt className="font-sans text-xs uppercase tracking-[0.14em] text-muted">Outcome</dt>
            <dd className="mt-2 text-sm text-ink">{project.outcome}</dd>
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-sans text-xs uppercase tracking-[0.14em] text-muted">Services Provided</h2>
          <ul className="mt-4 space-y-2">
            {project.servicesProvided.map((service) => (
              <li key={service} className="border-b border-line py-2 text-sm text-ink">
                {service}
              </li>
            ))}
          </ul>
          <Link
            to="/#booking"
            className="mt-8 flex w-full items-center justify-center border border-line px-5 py-3.5 font-sans text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Discuss a similar project
          </Link>
        </Reveal>
      </div>
    </main>
  )
}
