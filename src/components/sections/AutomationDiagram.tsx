import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AutomationDiagramProps {
  trigger: string
  steps: string[]
  benefit: string
}

/** Lightweight node-and-line workflow visualization: trigger → steps → benefit. */
export function AutomationDiagram({ trigger, steps, benefit }: AutomationDiagramProps) {
  const reducedMotion = useReducedMotion()
  const nodes = [trigger, ...steps, benefit]

  return (
    <div className="flex flex-col gap-0 overflow-x-auto pb-2" role="list" aria-label="Automation workflow steps">
      <div className="flex min-w-max items-stretch">
        {nodes.map((node, i) => {
          const isFirst = i === 0
          const isLast = i === nodes.length - 1
          return (
            <div key={i} className="flex items-center" role="listitem">
              <div
                className={
                  'flex w-44 flex-col gap-2 border p-4 ' +
                  (isFirst
                    ? 'border-accent bg-accent/[0.06]'
                    : isLast
                      ? 'border-line bg-surface'
                      : 'border-line bg-transparent')
                }
              >
                {isFirst && (
                  <span className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.14em] text-accent">
                    <Zap className="h-3 w-3" aria-hidden="true" />
                    Trigger
                  </span>
                )}
                {isLast && (
                  <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-muted">Benefit</span>
                )}
                <p className="text-xs leading-snug text-ink">{node}</p>
              </div>
              {!isLast && (
                <div className="relative h-px w-10 shrink-0 bg-line">
                  {!reducedMotion && (
                    <motion.span
                      className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-accent"
                      animate={{ left: ['0%', '100%'] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
