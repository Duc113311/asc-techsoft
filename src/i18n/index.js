import { computed, ref } from 'vue'
import en from './locales/en'
import vi from './locales/vi'
import ko from './locales/ko'
import ja from './locales/ja'
import zh from './locales/zh'
import fr from './locales/fr'
import it from './locales/it'
import id from './locales/id'
import es from './locales/es'
import pt from './locales/pt'
import ar from './locales/ar'

const locales = { en, vi, ko, ja, zh, fr, it, id, es, pt, ar }
const storedLocale = typeof window !== 'undefined' ? localStorage.getItem('asc-language') : null
const locale = ref(locales[storedLocale] ? storedLocale : 'en')

export function getLocaleSite(code) {
  return locales[code]?.site || {}
}

export function useI18n() {
  function setLocale(nextLocale) {
    if (!locales[nextLocale]) return
    locale.value = nextLocale
    if (typeof window !== 'undefined') {
      localStorage.setItem('asc-language', nextLocale)
      document.documentElement.lang = nextLocale
    }
  }

  return {
    locale,
    availableLocales: Object.values(locales),
    currentLocale: computed(() => locales[locale.value]),
    setLocale,
  }
}

export function mergeSiteData(base, overrides) {
  if (overrides === undefined) return base
  if (Array.isArray(base) && Array.isArray(overrides)) {
    return overrides.map((item, index) => mergeSiteData(base[index], item))
  }
  if (Array.isArray(base)) return overrides
  if (typeof base !== 'object' || base === null) return overrides

  const keys = new Set([...Object.keys(base), ...Object.keys(overrides)])
  return Object.fromEntries(
    [...keys].map((key) => [key, mergeSiteData(base[key], overrides[key])]),
  )
}
