import { content } from '@/data/content'
import { useI18n } from '@/i18n/I18nContext'
import { ToolBadge } from '@/components/ui/ToolBadge'

/** Horizontal, scrollable strip of tool badges — the "Daily Drivers" bar. */
export function ToolsTicker() {
  const { about } = content
  const { t } = useI18n()

  return (
    <div id="tools" className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-sans text-[11px] uppercase tracking-[0.14em]">
        <span className="text-accent">{t.dashboard.dailyDrivers}</span>
        <span className="text-muted">·</span>
        <span className="text-muted">{t.dashboard.toolsIWorkWith}</span>
      </div>
      <ul className="flex gap-2 overflow-x-auto pb-1">
        {about.tools.map((tool) => (
          <ToolBadge key={tool.name} tool={tool} />
        ))}
      </ul>
    </div>
  )
}
