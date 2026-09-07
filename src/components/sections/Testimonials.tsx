import { content } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

/** Renders nothing until real, verified testimonials exist in content.ts. */
export function Testimonials() {
  const { testimonials } = content
  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 lg:px-12">
      <SectionHeading index="08" label="Testimonials" title="What clients say." />

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <Reveal key={testimonial.name} delay={i * 0.08}>
            <figure className="border-t border-line pt-6">
              <blockquote className="font-display text-xl leading-snug tracking-tight text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 font-sans text-sm text-muted">
                {testimonial.name} — {testimonial.company}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
