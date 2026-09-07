import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Translations } from '@/i18n/types'
import {
  DEFAULT_LOCALE,
  DEFAULT_TRANSLATIONS,
  LOCALES,
  isLocaleCode,
  loadTranslations,
  matchBrowserLocale,
  type LocaleCode,
} from '@/i18n/locales'

const STORAGE_KEY = 'jsync-locale'

function getInitialLocale(): LocaleCode {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && isLocaleCode(stored)) return stored
  return matchBrowserLocale(navigator.languages ?? [navigator.language]) ?? DEFAULT_LOCALE
}

interface I18nContextValue {
  locale: LocaleCode
  setLocale: (code: LocaleCode) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue | null>(null)

// English ships in the main bundle; every other locale is fetched on first
// use and cached here so switching back and forth doesn't re-fetch.
const translationsCache = new Map<LocaleCode, Translations>([[DEFAULT_LOCALE, DEFAULT_TRANSLATIONS]])

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleCode>(getInitialLocale)
  const [translations, setTranslations] = useState<Translations>(
    () => translationsCache.get(locale) ?? DEFAULT_TRANSLATIONS,
  )

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale

    const cached = translationsCache.get(locale)
    if (cached) {
      setTranslations(cached)
      return
    }

    let cancelled = false
    loadTranslations(locale).then((loaded) => {
      if (cancelled) return
      translationsCache.set(locale, loaded)
      setTranslations(loaded)
    })
    return () => {
      cancelled = true
    }
  }, [locale])

  const value = useMemo<I18nContextValue>(() => ({ locale, setLocale, t: translations }), [locale, translations])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

/** Returns { locale, setLocale, t } — `t` is the full translation object for the active language. */
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}

export { LOCALES }
export type { LocaleCode }
