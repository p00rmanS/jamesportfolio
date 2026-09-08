import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ErrorBoundary } from '@/components/layout/ErrorBoundary'
import { scrollToHash } from '@/utils/scrollTo'
import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { VideoPortfolio } from '@/components/sections/VideoPortfolio'
import { ContentShowcase } from '@/components/sections/ContentShowcase'
import { AutomationShowcase } from '@/components/sections/AutomationShowcase'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
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
  FAQ,
  Booking,
]

export function Home() {
  const { hash } = useLocation()

  // Handles arriving at "/#booking" etc. from another route (e.g. a case
  // study page's CTA) — this router doesn't scroll to hashes on its own,
  // unlike same-page nav links which call scrollToHash directly on click.
  useEffect(() => {
    if (!hash) return
    const id = window.requestAnimationFrame(() => scrollToHash(hash))
    return () => window.cancelAnimationFrame(id)
  }, [hash])

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
