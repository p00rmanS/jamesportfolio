import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { useProjectModal } from '@/context/ProjectModalContext'

// Editorial sizing pattern for the first six projects: one large lead,
// two medium, one full-width, two small — avoids a repetitive identical grid.
const LAYOUT: Array<{ span: string; size: 'lg' | 'md' | 'sm' }> = [
  { span: 'lg:col-span-7', size: 'lg' },
  { span: 'lg:col-span-5', size: 'md' },
  { span: 'lg:col-span-5', size: 'md' },
  { span: 'lg:col-span-7', size: 'lg' },
  { span: 'lg:col-span-6', size: 'sm' },
  { span: 'lg:col-span-6', size: 'sm' },
]

export function SelectedWork() {
  const { projects } = content
  const { openProject } = useProjectModal()
  const { t } = useI18n()

  if (projects.length === 0) {
    return (
      <section id="work" className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 lg:px-12">
        <SectionHeading index="01" label={t.sections.work.label} title="Work is on its way." />
        <p className="mt-8 max-w-md text-muted">
          [Add projects to src/data/content.ts to populate this section.]
        </p>
      </section>
    )
  }

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 lg:px-12">
      <SectionHeading
        index="01"
        label={t.sections.work.label}
        title={t.sections.work.title}
        description={t.sections.work.description}
      />

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-12">
        {projects.slice(0, 6).map((project, i) => {
          const layout = LAYOUT[i % LAYOUT.length]
          return (
            <Reveal key={project.id} className={layout.span} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} size={layout.size} onOpen={() => openProject(project.id)} />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
