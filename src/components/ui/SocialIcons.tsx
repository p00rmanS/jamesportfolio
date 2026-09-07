import type { SocialPlatform } from '@/types/content'

/** Original inline SVG marks — no icon library, no emoji. Each is a 24x24 viewBox, stroke-based to match. */
export const SOCIAL_ICON_PATHS: Record<SocialPlatform, React.ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  Facebook: (
    <path d="M14 8.5h2.5V5H14c-2.2 0-4 1.8-4 4v2.5H7.5V15H10v6h3v-6h2.6l.6-3.5H13V9c0-.6.4-.5 1-.5Z" />
  ),
  GitHub: (
    <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3.04-1.2-3.04-1.2-.4-1.05-1-1.32-1-1.32-.83-.57.06-.56.06-.56.9.06 1.38.94 1.38.94.8 1.4 2.1 1 2.62.76.08-.6.32-1 .58-1.23-2-.23-4.1-1-4.1-4.5 0-1 .35-1.8.93-2.44-.1-.23-.4-1.15.1-2.4 0 0 .76-.24 2.48.93a8.5 8.5 0 0 1 4.52 0c1.72-1.17 2.48-.93 2.48-.93.5 1.25.2 2.17.1 2.4.58.64.93 1.45.93 2.44 0 3.5-2.1 4.27-4.11 4.5.33.28.62.85.62 1.7v2.53c0 .24.15.52.6.43A9 9 0 0 0 12 3Z" />
  ),
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.2" fill="currentColor" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 16.5V10" />
      <path d="M11 12.8c0-1.6 1.2-2.8 2.7-2.8s2.3 1 2.3 3v3.5" />
    </>
  ),
}

interface SocialIconProps {
  platform: SocialPlatform
  className?: string
}

export function SocialIcon({ platform, className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {SOCIAL_ICON_PATHS[platform]}
    </svg>
  )
}
