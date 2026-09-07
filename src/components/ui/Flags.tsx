import type { LocaleCode } from '@/i18n/locales'

// Simplified original flag illustrations (not traced from any source), each a
// 30x20 viewBox. Small UI icons, not vexillologically exact — legibility at
// ~20px width mattered more than precise proportions or emblem detail.

const STAR_UNIT: [number, number][] = [
  [0, -1],
  [0.235, -0.324],
  [0.95, -0.31],
  [0.38, 0.124],
  [0.59, 0.81],
  [0, 0.4],
  [-0.59, 0.81],
  [-0.38, 0.124],
  [-0.95, -0.31],
  [-0.235, -0.324],
]

function Star({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  const points = STAR_UNIT.map(([x, y]) => `${cx + x * r},${cy + y * r}`).join(' ')
  return <polygon points={points} fill={fill} />
}

function FlagFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 30 20" className="h-full w-full" aria-hidden="true">
      {children}
    </svg>
  )
}

const flags: Record<LocaleCode, React.ReactNode> = {
  en: (
    <FlagFrame>
      <rect width="30" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y} width="30" height="1.54" fill="#B22234" />
      ))}
      <rect width="13" height="10.8" fill="#3C3B6E" />
      {[2, 4.5, 7, 9.5].flatMap((y) =>
        [2, 5, 8, 11].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.5" fill="#fff" />),
      )}
    </FlagFrame>
  ),
  es: (
    <FlagFrame>
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
    </FlagFrame>
  ),
  fr: (
    <FlagFrame>
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </FlagFrame>
  ),
  de: (
    <FlagFrame>
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </FlagFrame>
  ),
  nl: (
    <FlagFrame>
      <rect width="30" height="6.67" fill="#AE1C28" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#21468B" />
    </FlagFrame>
  ),
  ja: (
    <FlagFrame>
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="5.5" fill="#BC002D" />
    </FlagFrame>
  ),
  ko: (
    <FlagFrame>
      <rect width="30" height="20" fill="#fff" />
      <path d="M15 4.5a5.5 5.5 0 0 1 0 11 2.75 2.75 0 0 1 0-5.5 2.75 2.75 0 0 0 0-5.5Z" fill="#CD2E3A" />
      <path d="M15 4.5a5.5 5.5 0 0 0 0 11 2.75 2.75 0 0 0 0-5.5 2.75 2.75 0 0 1 0-5.5Z" fill="#0047A0" />
      <g stroke="#000" strokeWidth="0.5">
        <line x1="4" y1="4.5" x2="7.2" y2="4.5" />
        <line x1="4" y1="5.5" x2="7.2" y2="5.5" />
        <line x1="4" y1="6.5" x2="7.2" y2="6.5" />
        <line x1="22.8" y1="13.5" x2="26" y2="13.5" />
        <line x1="22.8" y1="14.5" x2="26" y2="14.5" />
        <line x1="22.8" y1="15.5" x2="26" y2="15.5" />
      </g>
    </FlagFrame>
  ),
  vi: (
    <FlagFrame>
      <rect width="30" height="20" fill="#DA251D" />
      <Star cx={15} cy={10} r={4.5} fill="#FFFF00" />
    </FlagFrame>
  ),
  'zh-CN': (
    <FlagFrame>
      <rect width="30" height="20" fill="#DE2910" />
      <Star cx={7} cy={6} r={3.2} fill="#FFDE00" />
      <Star cx={13} cy={2.6} r={1} fill="#FFDE00" />
      <Star cx={15.4} cy={5} r={1} fill="#FFDE00" />
      <Star cx={15} cy={8} r={1} fill="#FFDE00" />
      <Star cx={12.6} cy={9.6} r={1} fill="#FFDE00" />
    </FlagFrame>
  ),
  'zh-HK': (
    <FlagFrame>
      <rect width="30" height="20" fill="#DE2910" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <path
          key={deg}
          d="M15 10 C15 6.5 16.8 4.8 15 2 C13.2 4.8 15 6.5 15 10Z"
          fill="#fff"
          transform={`rotate(${deg} 15 10)`}
        />
      ))}
    </FlagFrame>
  ),
}

interface FlagProps {
  code: LocaleCode
  className?: string
}

export function Flag({ code, className }: FlagProps) {
  return <span className={className}>{flags[code]}</span>
}
