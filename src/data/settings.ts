// Site-wide configuration. Update these values before launch.
// See README.md for a full walkthrough of every field below.

import type { SocialLink } from '@/types/content'

/**
 * Calendly scheduling page URL.
 * Replace with your real Calendly link, e.g. https://calendly.com/your-name/consultation
 */
export const CALENDLY_URL = 'https://calendly.com/jamesbaldwindean2015/client-meetup'

/** Path to the downloadable résumé, served from /public. */
export const RESUME_URL = '/resume.pdf'

/** Filename suggested to the browser when the résumé is downloaded. */
export const RESUME_DOWNLOAD_NAME = 'James-Dean-Resume.pdf'

/** Social profile URLs — replace placeholders with real profiles. */
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/iamjamesdean01/' },
  { platform: 'Facebook', url: 'https://www.facebook.com/James.Dean220/' },
  { platform: 'GitHub', url: 'https://github.com/p00rmanS' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/jamesdean2020/' },
]
