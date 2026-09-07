import { Link } from 'react-router-dom'
import { content } from '@/data/content'

export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">Error 404</span>
      <h1 className="mt-6 font-display text-5xl tracking-tight text-ink sm:text-6xl">Page not found.</h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-10 border border-line px-6 py-3.5 font-sans text-sm text-ink transition-colors hover:border-accent hover:text-accent"
      >
        Back to {content.brand.name}
      </Link>
    </main>
  )
}
