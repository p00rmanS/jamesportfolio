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
  { platform: 'Instagram', url: 'https://instagram.com/REPLACE-WITH-JSYNC' },
  { platform: 'Facebook', url: 'https://facebook.com/REPLACE-WITH-JSYNC' },
  { platform: 'GitHub', url: 'https://github.com/REPLACE-WITH-JSYNC' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/REPLACE-WITH-JSYNC' },
]
