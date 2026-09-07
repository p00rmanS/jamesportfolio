import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Loader } from '@/components/layout/Loader'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Home } from '@/pages/Home'

// Privacy/Accessibility are popup modals from the footer (see Footer.tsx),
// not routes — that way section nav links always work, since Home never
// unmounts. Anything else unmatched still gets a real 404 page.
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })))
// The dashboard is a fully separate layout (its own sidebar, no top nav or
// footer), so it renders standalone instead of inside MainSite's chrome.
const Dashboard = lazy(() => import('@/pages/Dashboard').then((m) => ({ default: m.Dashboard })))

function MainSite() {
  return (
    <div className="grain min-h-screen bg-paper text-ink">
      <Loader />
      <ScrollProgress />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper" />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<MainSite />} />
      </Routes>
    </Suspense>
  )
}
