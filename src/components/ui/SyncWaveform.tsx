import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const BAR_HEIGHTS = [0.3, 0.55, 0.85, 0.5, 1, 0.4, 0.7, 0.95, 0.35, 0.6, 0.8, 0.45, 0.9, 0.5, 0.65, 0.3]

/**
 * Original abstract "synchronization" art used as the hero's visual anchor
 * — a set of bars that pulse in and out of sync, standing in for footage
 * until a real showreel is added. Purely decorative.
 */
export function SyncWaveform() {
  const reducedMotion = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center gap-[3px] bg-surface px-8 sm:gap-1.5"
    >
      {BAR_HEIGHTS.map((h, i) => (
        <motion.span
          key={i}
          className="w-full max-w-3 rounded-full bg-gradient-to-t from-accent/20 to-accent"
          style={{ height: `${h * 100}%` }}
          animate={
            reducedMotion
              ? undefined
              : {
                  scaleY: [0.4, 1, 0.6, 0.9, 0.4],
                }
          }
          transition={{
            duration: 3 + (i % 5) * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.08,
          }}
        />
      ))}
    </div>
  )
}
