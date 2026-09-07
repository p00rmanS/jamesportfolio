import { useEffect, useRef, useState } from 'react'

/**
 * Returns true once the ref'd element has entered the viewport (with a
 * configurable rootMargin so loading can start slightly ahead of scroll).
 * Stays true after the first intersection — used to lazy-init heavy widgets
 * (video players, the Calendly embed) without re-triggering on scroll-away.
 */
export function useInView<T extends HTMLElement>(rootMargin = '200px') {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, inView])

  return { ref, inView }
}
