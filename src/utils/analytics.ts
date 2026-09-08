import { CLOUDFLARE_ANALYTICS_TOKEN } from '@/data/settings'

/**
 * Loads the Cloudflare Web Analytics beacon — a single lightweight script,
 * no cookies, no consent banner needed. No-ops entirely until a real token
 * is set in src/data/settings.ts, so nothing is requested in local dev or
 * before the site has an analytics account attached.
 */
export function initAnalytics() {
  if (!CLOUDFLARE_ANALYTICS_TOKEN) return

  const script = document.createElement('script')
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  script.defer = true
  script.setAttribute('data-cf-beacon', JSON.stringify({ token: CLOUDFLARE_ANALYTICS_TOKEN }))
  document.head.appendChild(script)
}
