import type { ReactNode } from 'react'
import { useMagnetic } from '@/hooks/useMagnetic'

interface MagneticButtonProps {
  children: ReactNode
  strength?: number
  className?: string
}

/** Wraps a standout CTA with a restrained magnetic pull toward the cursor (desktop only). */
export function MagneticButton({ children, strength = 0.2, className }: MagneticButtonProps) {
  const ref = useMagnetic<HTMLDivElement>(strength)

  return (
    <div ref={ref} className={`inline-block transition-transform duration-200 ease-out ${className ?? ''}`}>
      {children}
    </div>
  )
}
