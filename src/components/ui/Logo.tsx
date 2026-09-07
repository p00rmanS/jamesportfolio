import { content } from '@/data/content'
import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  /** Icon-only, no wordmark — used in tight spaces. */
  iconOnly?: boolean
  size?: 'md' | 'lg'
}

const ICON_SIZE = { md: 'h-7 w-7', lg: 'h-10 w-10' }
const TEXT_SIZE = { md: 'text-xl', lg: 'text-3xl' }

/**
 * Original J Sync mark: a "J" glyph paired with an orbiting dot and arc,
 * standing in for synchronization. Uses currentColor for the glyph and the
 * theme accent for the orbit, so it adapts automatically between light and
 * dark mode.
 */
export function Logo({ className, iconOnly = false, size = 'md' }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 text-ink', className)}>
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={cn('shrink-0', ICON_SIZE[size])}>
        <path
          d="M23 18h8v22c0 6-3.2 9-9 9-3 0-5.4-1-7-2.6l3.6-4.8c1 .9 2 1.4 3.2 1.4 1.6 0 2.2-1 2.2-3.2V18Z"
          fill="currentColor"
        />
        <path
          d="M36 11a15 15 0 0 1 15 15"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="44" cy="22" r="4.5" fill="var(--accent)" />
      </svg>
      {!iconOnly && (
        <span className={cn('font-display tracking-tight', TEXT_SIZE[size])}>{content.brand.name}</span>
      )}
    </span>
  )
}
