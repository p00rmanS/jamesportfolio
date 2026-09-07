import type { LocaleCode } from '@/i18n/locales'

// Flags from lipis/flag-icons (MIT): https://github.com/lipis/flag-icons
const FLAG_COUNTRY_CODE: Record<LocaleCode, string> = {
  en: 'us',
  es: 'es',
  fr: 'fr',
  de: 'de',
  nl: 'nl',
  ja: 'jp',
  ko: 'kr',
  vi: 'vn',
  'zh-CN': 'cn',
  'zh-HK': 'hk',
}

interface FlagProps {
  code: LocaleCode
  className?: string
}

export function Flag({ code, className }: FlagProps) {
  return (
    <img
      src={`/icons/flags/${FLAG_COUNTRY_CODE[code]}.svg`}
      alt=""
      className={className ?? 'h-full w-full object-cover'}
    />
  )
}
