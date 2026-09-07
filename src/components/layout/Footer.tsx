import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { InfoModal } from '@/components/layout/InfoModal'

type InfoPanel = 'privacy' | 'accessibility' | null

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  const [openPanel, setOpenPanel] = useState<InfoPanel>(null)

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-14 text-center lg:px-12 lg:py-16">
        <div>
          <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-muted">{t.footer.connect}</h3>
          <div className="mt-5 flex flex-col items-center gap-6">
            <SocialLinks />
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 font-sans text-sm text-muted transition-colors hover:text-ink"
            >
              {t.footer.backToTop}
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-xs text-muted sm:flex-row sm:justify-between">
          <span>
            © {year} {content.brand.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="/dashboard" className="transition-colors hover:text-ink">
              {t.dashboard.altViewLabel}
            </a>
            <button type="button" onClick={() => setOpenPanel('privacy')} className="transition-colors hover:text-ink">
              {t.footer.privacy}
            </button>
            <button
              type="button"
              onClick={() => setOpenPanel('accessibility')}
              className="transition-colors hover:text-ink"
            >
              {t.footer.accessibility}
            </button>
          </div>
        </div>
      </div>

      <InfoModal open={openPanel === 'privacy'} title={t.footer.privacy} onClose={() => setOpenPanel(null)}>
        <p>
          J Sync collects only what’s needed to respond to your inquiry: the name, email, and time you provide
          through the Calendly booking widget on this site. This information is used solely to communicate with you
          about your project — it is never sold, and never shared with third parties for marketing purposes.
        </p>
        <p>
          Scheduling is handled by Calendly, which processes that information under its own privacy policy.
        </p>
        <p>
          You can request access to, or deletion of, any information J Sync holds about you at any time by
          emailing{' '}
          <a href={`mailto:${content.brand.email}`} className="text-ink underline decoration-line hover:text-accent">
            {content.brand.email}
          </a>
          .
        </p>
      </InfoModal>

      <InfoModal open={openPanel === 'accessibility'} title={t.footer.accessibility} onClose={() => setOpenPanel(null)}>
        <p>
          J Sync is built to meet WCAG 2.2 AA guidelines: semantic HTML, visible keyboard focus states, accessible
          menus and modals, descriptive alt text, and full support for reduced-motion preferences.
        </p>
        <p>
          This is an ongoing commitment, not a one-time check. If you run into a barrier anywhere on this site,
          please reach out at{' '}
          <a href={`mailto:${content.brand.email}`} className="text-ink underline decoration-line hover:text-accent">
            {content.brand.email}
          </a>{' '}
          and it will be addressed.
        </p>
      </InfoModal>
    </footer>
  )
}
