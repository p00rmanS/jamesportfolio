import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { HeroShowreel } from '@/components/sections/HeroShowreel'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { scrollToHash } from '@/utils/scrollTo'

export function Hero() {
  const { hero, brand } = content
  const { t } = useI18n()
  const reducedMotion = useReducedMotion()

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-sans text-xs uppercase tracking-[0.22em] text-muted"
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1 className="font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
            {t.hero.headline.map((line, i) => (
              <motion.span
                key={line}
                initial={reducedMotion ? undefined : { opacity: 0, y: 32 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block overflow-hidden"
              >
                {i === t.hero.headline.length - 1 ? <span className="text-accent">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.hero.subcopy}
          </motion.p>

          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Button href={hero.primaryCtaHref}>{t.hero.primaryCta}</Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button href={hero.secondaryCtaHref} variant="secondary">
                {t.hero.secondaryCta}
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center"
        >
          <HeroShowreel hero={hero} />
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollToHash('#work')}
        aria-label={`Scroll to ${brand.name} selected work`}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-ink sm:flex"
      >
        <span className="font-sans text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </button>
    </section>
  )
}
