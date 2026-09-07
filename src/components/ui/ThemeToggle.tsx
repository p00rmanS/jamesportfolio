import { Lightbulb, LightbulbOff } from 'lucide-react'
import { motion, useAnimationControls } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * A pull-cord light switch: clicking (or pressing Enter/Space) "pulls" the
 * cord down and toggles the theme, like switching a bulb on or off.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reducedMotion = useReducedMotion()
  const controls = useAnimationControls()
  const isLight = theme === 'light'

  const handleClick = async () => {
    if (!reducedMotion) {
      await controls.start({ y: 10, transition: { duration: 0.12, ease: 'easeIn' } })
      controls.start({ y: 0, transition: { type: 'spring', stiffness: 420, damping: 14 } })
    }
    toggleTheme()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="group flex flex-col items-center gap-0.5 px-2 py-1 focus-visible:outline-offset-4"
    >
      <span aria-hidden="true" className="h-3 w-px bg-line transition-colors group-hover:bg-accent" />
      <motion.span
        animate={controls}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-accent"
      >
        {isLight ? (
          <Lightbulb className="h-4 w-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <LightbulbOff className="h-4 w-4 text-muted transition-colors group-hover:text-accent" strokeWidth={1.75} aria-hidden="true" />
        )}
      </motion.span>
    </button>
  )
}
