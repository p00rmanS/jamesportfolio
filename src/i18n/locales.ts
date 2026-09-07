import type { Translations } from '@/i18n/types'
import { en } from '@/i18n/translations/en'

export type LocaleCode = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'ja' | 'ko' | 'vi' | 'zh-CN' | 'zh-HK'

export interface LocaleMeta {
  code: LocaleCode
  /** Name shown in the switcher, in that language's own script. */
  nativeName: string
  /** English name, used for the accessible label. */
  englishName: string
}

export const LOCALES: LocaleMeta[] = [
  { code: 'en', nativeName: 'English', englishName: 'English' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish' },
  { code: 'fr', nativeName: 'Français', englishName: 'French' },
  { code: 'de', nativeName: 'Deutsch', englishName: 'German' },
  { code: 'nl', nativeName: 'Nederlands', englishName: 'Dutch' },
  { code: 'ja', nativeName: '日本語', englishName: 'Japanese' },
  { code: 'ko', nativeName: '한국어', englishName: 'Korean' },
  { code: 'vi', nativeName: 'Tiếng Việt', englishName: 'Vietnamese' },
  { code: 'zh-CN', nativeName: '简体中文', englishName: 'Chinese (Mandarin)' },
  { code: 'zh-HK', nativeName: '繁體中文', englishName: 'Chinese (Cantonese)' },
]

export const DEFAULT_LOCALE: LocaleCode = 'en'

/** English ships in the main bundle (it's the default); every other locale is code-split and fetched on demand. */
export const DEFAULT_TRANSLATIONS: Translations = en

const LOADERS: Record<LocaleCode, () => Promise<Translations>> = {
  en: () => Promise.resolve(en),
  es: () => import('@/i18n/translations/es').then((m) => m.es),
  fr: () => import('@/i18n/translations/fr').then((m) => m.fr),
  de: () => import('@/i18n/translations/de').then((m) => m.de),
  nl: () => import('@/i18n/translations/nl').then((m) => m.nl),
  ja: () => import('@/i18n/translations/ja').then((m) => m.ja),
  ko: () => import('@/i18n/translations/ko').then((m) => m.ko),
  vi: () => import('@/i18n/translations/vi').then((m) => m.vi),
  'zh-CN': () => import('@/i18n/translations/zh-CN').then((m) => m.zhCN),
  'zh-HK': () => import('@/i18n/translations/zh-HK').then((m) => m.zhHK),
}

export function loadTranslations(code: LocaleCode): Promise<Translations> {
  return LOADERS[code]()
}

export function isLocaleCode(value: string): value is LocaleCode {
  return LOCALES.some((locale) => locale.code === value)
}

/** Matches a browser language tag (e.g. "zh-HK", "zh", "pt-BR") to a supported locale, else null. */
export function matchBrowserLocale(languages: readonly string[]): LocaleCode | null {
  for (const lang of languages) {
    const exact = LOCALES.find((locale) => locale.code.toLowerCase() === lang.toLowerCase())
    if (exact) return exact.code

    const base = lang.split('-')[0].toLowerCase()
    if (base === 'zh') {
      // Mainland/Singapore browsers report "zh-CN"/"zh-SG" → Mandarin; everything else
      // reporting bare "zh" or "zh-TW"/"zh-HK"/"zh-MO" is treated as the Cantonese/Traditional set.
      return lang.toLowerCase().includes('cn') || lang.toLowerCase().includes('sg') ? 'zh-CN' : 'zh-HK'
    }
    const baseMatch = LOCALES.find((locale) => locale.code.toLowerCase() === base)
    if (baseMatch) return baseMatch.code
  }
  return null
}
