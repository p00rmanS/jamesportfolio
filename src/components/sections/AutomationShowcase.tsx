import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { AutomationDiagram } from '@/components/sections/AutomationDiagram'

export function AutomationShowcase() {
  const { automations } = content
  const { t } = useI18n()
  const [openId, setOpenId] = useState<string | null>(automations[0]?.id ?? null)

  return (
    <section id="automation" className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 lg:px-12">
      <SectionHeading
        index="04"
        label={t.sections.automation.label}
        title={t.sections.automation.title}
        description={t.sections.automation.description}
      />

      {automations.length === 0 ? (
        <p className="mt-12 max-w-md text-muted">[Add automation examples to src/data/content.ts.]</p>
      ) : (
        <div className="mt-12 divide-y divide-line border-y border-line">
          {automations.map((automation, i) => {
            const isOpen = openId === automation.id
            return (
              <Reveal key={automation.id} delay={Math.min(i * 0.04, 0.2)}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : automation.id)}
                    aria-expanded={isOpen}
                    aria-controls={`automation-panel-${automation.id}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="tnum font-sans text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                        {automation.name}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`automation-panel-${automation.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid items-start gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                          <div className="min-w-0">
                            <h4 className="font-sans text-xs uppercase tracking-[0.14em] text-muted">
                              Client Problem
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-ink">{automation.clientProblem}</p>

                            <h4 className="mt-6 font-sans text-xs uppercase tracking-[0.14em] text-muted">
                              Business Benefit
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-ink">{automation.businessBenefit}</p>

                            <h4 className="mt-6 font-sans text-xs uppercase tracking-[0.14em] text-muted">
                              Tools &amp; Platforms
                            </h4>
                            <ul className="mt-2 flex flex-wrap gap-2">
                              {automation.tools.map((tool) => (
                                <li key={tool} className="border border-line px-3 py-1 text-xs text-muted">
                                  {tool}
                                </li>
                              ))}
                            </ul>

                            <h4 className="mt-6 font-sans text-xs uppercase tracking-[0.14em] text-muted">
                              Verified Outcome
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                              {automation.verifiedOutcome ?? '[Add verified outcome once available]'}
                            </p>
                          </div>

                          <div className="min-w-0">
                            <h4 className="mb-4 font-sans text-xs uppercase tracking-[0.14em] text-muted">
                              Workflow
                            </h4>
                            <AutomationDiagram
                              trigger={automation.trigger}
                              steps={automation.workflowSteps}
                              benefit={automation.businessBenefit}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      )}
    </section>
  )
}
