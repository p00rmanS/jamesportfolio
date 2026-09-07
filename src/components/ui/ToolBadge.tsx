import { Scissors } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ToolItem } from '@/types/content'

const ICON_VARIANTS: Record<NonNullable<ToolItem['iconVariant']>, LucideIcon> = {
  scissors: Scissors,
}

interface ToolBadgeProps {
  tool: ToolItem
}

/**
 * A single "Tools & Technologies" chip. Renders a real brand logo when we
 * have the file, a generated letter badge in the brand's colors when we
 * don't, a generic interface icon as a looser stand-in, or — if none of
 * those apply — a plain text chip.
 */
export function ToolBadge({ tool }: ToolBadgeProps) {
  if (tool.logo) {
    return (
      <li className="flex shrink-0 items-center gap-2 whitespace-nowrap border border-line py-1.5 pl-1.5 pr-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-white p-1">
          <img src={tool.logo} alt="" className="h-full w-full object-contain" />
        </span>
        <span className="text-xs text-ink">{tool.name}</span>
      </li>
    )
  }

  if (tool.monogram) {
    return (
      <li className="flex shrink-0 items-center gap-2 whitespace-nowrap border border-line py-1.5 pl-1.5 pr-3">
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm text-[9px] font-bold leading-none"
          style={{ backgroundColor: tool.monogram.bg, color: tool.monogram.fg }}
        >
          {tool.monogram.text}
        </span>
        <span className="text-xs text-ink">{tool.name}</span>
      </li>
    )
  }

  if (tool.iconVariant) {
    const Icon = ICON_VARIANTS[tool.iconVariant]
    return (
      <li className="flex shrink-0 items-center gap-2 whitespace-nowrap border border-line py-1.5 pl-1.5 pr-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[#1a1a1a]">
          <Icon className="h-3.5 w-3.5 text-white" aria-hidden="true" />
        </span>
        <span className="text-xs text-ink">{tool.name}</span>
      </li>
    )
  }

  return <li className="shrink-0 whitespace-nowrap border border-line px-3 py-1 text-xs text-muted">{tool.name}</li>
}
