import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function FAQ() {
  const { t } = useI18n()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-12 lg:py-20 lg:px-12">
      <SectionHeading
        index="09"
        label={t.sections.faq.label}
        title={t.sections.faq.title}
        description={t.sections.faq.description}
        align="center"
      />

      <div className="mt-12 divide-y divide-line border-y border-line">
        {t.faq.items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg tracking-tight text-ink sm:text-xl">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-center text-sm text-muted">
          <a href="#booking" className="text-ink underline decoration-line underline-offset-4 hover:text-accent">
            {t.nav.bookCall}
          </a>
        </p>
      </Reveal>
    </section>
  )
}
