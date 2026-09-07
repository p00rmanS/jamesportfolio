import type { SocialPlatform } from '@/types/content'

// Badges from gauravghongde/social-icons (MIT): https://github.com/gauravghongde/social-icons
const SOCIAL_ICON_SLUG: Record<SocialPlatform, string> = {
  Instagram: 'instagram',
  Facebook: 'facebook',
  GitHub: 'github',
  LinkedIn: 'linkedin',
}

interface SocialIconProps {
  platform: SocialPlatform
  className?: string
}

/**
 * Each badge ships a black and a white variant with the mark cut out of a
 * solid circle, so it only reads correctly against the page background.
 * The white badge shows on the dark (default) theme, the black one on
 * light — swapped via the `.light` root class, same as every other themed
 * color in this app, so it flips instantly with no re-render needed.
 */
export function SocialIcon({ platform, className }: SocialIconProps) {
  const slug = SOCIAL_ICON_SLUG[platform]
  return (
    <>
      <img src={`/icons/social/${slug}-white.svg`} alt="" className={`theme-icon-dark ${className ?? ''}`} />
      <img src={`/icons/social/${slug}-black.svg`} alt="" className={`theme-icon-light ${className ?? ''}`} />
    </>
  )
}
