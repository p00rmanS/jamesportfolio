import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/utils/cn'

interface DashboardCardProps {
  icon: LucideIcon
  label: string
  title: string
  href: string
  className?: string
  children?: ReactNode
}

/** One card in the dashboard grid — icon+label kicker, title, body, and a link out to the full site section. */
export function DashboardCard({ icon: Icon, label, title, href, className, children }: DashboardCardProps) {
  return (
    <a
      href={href}
      className={cn(
        'group flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-colors hover:border-accent',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
        </span>
        <ArrowUpRight
          className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-4 font-display text-xl tracking-tight text-ink">{title}</h3>
      {children && <div className="mt-3 flex-1">{children}</div>}
    </a>
  )
}
