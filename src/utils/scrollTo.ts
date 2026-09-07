/** Smooth-scrolls to an in-page #anchor, accounting for the sticky header height. */
export function scrollToHash(hash: string) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return

  const headerOffset = 88
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}
