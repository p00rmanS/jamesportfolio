import type { ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'

interface SectionHeadingProps {
  index: string
  label: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}

/** Editorial numbered section label used to open every major section. */
export function SectionHeading({ index, label, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal
      className={
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      }
    >
      <div className="mb-5 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-muted">
        <span className="tnum text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">{title}</h2>
      {description && <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{description}</p>}
    </Reveal>
  )
}
