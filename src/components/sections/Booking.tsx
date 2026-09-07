import { useState, type FormEvent } from 'react'
import { ExternalLink } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { useInView } from '@/hooks/useInView'
import { useCalendlyScript } from '@/hooks/useCalendlyScript'
import { CALENDLY_URL } from '@/data/settings'

interface FormState {
  name: string
  email: string
  service: string
  message: string
}

const INITIAL_STATE: FormState = { name: '', email: '', service: '', message: '' }
type Errors = Partial<Record<'name' | 'email' | 'service', string>>
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fieldClass =
  'w-full border border-line bg-transparent px-4 py-3 font-sans text-sm text-ink placeholder:text-muted focus-visible:border-accent'

export function Booking() {
  const { t } = useI18n()
  // Loading the Calendly script slightly ahead of when the popup is actually
  // needed means there's no delay the moment someone submits the form.
  const { ref, inView } = useInView<HTMLDivElement>('300px')
  useCalendlyScript(inView)
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<Errors>({})

  const serviceOptions = [
    t.services.items['video-production'].title,
    t.services.items['content-creation'].title,
    t.services.items['website-development'].title,
    t.services.items['workflow-automation'].title,
  ]

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = t.booking.form.errors.name
    if (!form.email.trim()) {
      next.email = t.booking.form.errors.email
    } else if (!EMAIL_PATTERN.test(form.email)) {
      next.email = t.booking.form.errors.emailInvalid
    }
    if (!form.service) next.service = t.booking.form.errors.service
    return next
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    const prefill = {
      name: form.name,
      email: form.email,
      customAnswers: { a1: form.service, a2: form.message },
    }

    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL, prefill })
    } else {
      // Script blocked or still loading — fall back to a plain new tab rather than doing nothing.
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="booking" ref={ref} className="mx-auto max-w-xl px-6 py-12 lg:py-20 lg:px-12">
      <Reveal>
        <SectionHeading index="09" label={t.sections.booking.label} title={t.sections.booking.title} align="center" />
        <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-muted">{t.booking.description}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} noValidate className="mx-auto mt-10 grid max-w-md gap-5">
          <div>
            <label htmlFor="booking-name" className="mb-2 block font-sans text-xs uppercase tracking-[0.14em] text-muted">
              {t.booking.form.name}
            </label>
            <input
              id="booking-name"
              type="text"
              autoComplete="name"
              className={fieldClass}
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'booking-name-error' : undefined}
            />
            {errors.name && (
              <p id="booking-name-error" role="alert" className="mt-2 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="booking-email" className="mb-2 block font-sans text-xs uppercase tracking-[0.14em] text-muted">
              {t.booking.form.email}
            </label>
            <input
              id="booking-email"
              type="email"
              autoComplete="email"
              className={fieldClass}
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'booking-email-error' : undefined}
            />
            {errors.email && (
              <p id="booking-email-error" role="alert" className="mt-2 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="booking-service" className="mb-2 block font-sans text-xs uppercase tracking-[0.14em] text-muted">
              {t.booking.form.service}
            </label>
            <select
              id="booking-service"
              className={fieldClass}
              value={form.service}
              onChange={(e) => update('service', e.target.value)}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'booking-service-error' : undefined}
            >
              <option value="">{t.booking.form.selectService}</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              <option value={t.booking.form.notSure}>{t.booking.form.notSure}</option>
            </select>
            {errors.service && (
              <p id="booking-service-error" role="alert" className="mt-2 text-xs text-red-400">
                {errors.service}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="booking-message" className="mb-2 block font-sans text-xs uppercase tracking-[0.14em] text-muted">
              {t.booking.form.message}
            </label>
            <textarea
              id="booking-message"
              rows={3}
              className={fieldClass}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
            />
          </div>

          <Button type="submit" className="mt-2 w-full">
            {t.booking.form.continue}
          </Button>
        </form>

        <div className="mt-6 flex justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-muted transition-colors hover:text-ink"
          >
            {t.booking.bookNow}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
