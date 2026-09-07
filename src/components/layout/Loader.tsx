import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const SESSION_KEY = 'jsync-visited'
const DURATION_MS = 1200

/**
 * Brief synchronization-themed loader shown on first visit only (session
 * storage skips it on repeat visits/navigations). Respects reduced motion
 * by skipping straight to content.
 */
export function Loader() {
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.sessionStorage.getItem(SESSION_KEY)
  })

  useEffect(() => {
    if (!visible) return
    window.sessionStorage.setItem(SESSION_KEY, '1')
    if (reducedMotion) {
      setVisible(false)
      return
    }
    const timer = setTimeout(() => setVisible(false), DURATION_MS)
    return () => clearTimeout(timer)
  }, [visible, reducedMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="presentation"
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-3 font-display text-2xl tracking-tight text-ink">
            <span>J</span>
            <span className="relative flex h-2 w-16 items-center overflow-hidden rounded-full bg-line">
              <motion.span
                className="absolute h-full w-6 rounded-full bg-accent"
                animate={{ x: [-24, 64] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
            <span>Sync</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
