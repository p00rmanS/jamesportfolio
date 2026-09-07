import { ErrorBoundary } from '@/components/layout/ErrorBoundary'
import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { VideoPortfolio } from '@/components/sections/VideoPortfolio'
import { ContentShowcase } from '@/components/sections/ContentShowcase'
import { AutomationShowcase } from '@/components/sections/AutomationShowcase'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { Booking } from '@/components/sections/Booking'
import { ProjectModalProvider } from '@/context/ProjectModalContext'

const SECTIONS = [
  Hero,
  SelectedWork,
  VideoPortfolio,
  ContentShowcase,
  AutomationShowcase,
  Services,
  Process,
  About,
  Testimonials,
  Booking,
]

export function Home() {
  return (
    <ProjectModalProvider>
      <main id="main">
        {SECTIONS.map((Section) => (
          <ErrorBoundary key={Section.name}>
            <Section />
          </ErrorBoundary>
        ))}
      </main>
    </ProjectModalProvider>
  )
}
