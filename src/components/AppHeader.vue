<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { logoUrl } from '../assets'
import AppLink from './AppLink.vue'
import { useI18n } from '../i18n'

defineProps({
  brand: { type: Object, required: true },
  navigation: { type: Array, required: true },
})

const route = useRoute()
const router = useRouter()
const isMenuOpen = ref(false)
const { locale, currentLocale, setLocale } = useI18n()

const FLAG_EN = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="%23B22234"/><rect y="3.08" width="60" height="3.08" fill="white"/><rect y="9.23" width="60" height="3.08" fill="white"/><rect y="15.38" width="60" height="3.08" fill="white"/><rect y="21.54" width="60" height="3.08" fill="white"/><rect y="27.69" width="60" height="3.08" fill="white"/><rect y="33.85" width="60" height="3.08" fill="white"/><rect width="24" height="21.54" fill="%233C3B6E"/></svg>`
const FLAG_VI = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><rect width="3" height="2" fill="%23DA251D"/><polygon points="1.5,0.35 1.653,0.79 2.118,0.799 1.747,1.08 1.882,1.526 1.5,1.26 1.118,1.526 1.253,1.08 0.882,0.799 1.347,0.79" fill="%23FFFF00"/></svg>`
const FLAG_KO = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="20" fill="white"/><circle cx="15" cy="10" r="6" fill="%23CD2E3A"/><path d="M15,4a6,6,0,0,1,0,12 3,3,0,0,1,0,-6 3,3,0,0,0,0,-6z" fill="%230047A0"/></svg>`
const FLAG_JA = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="20" fill="white"/><circle cx="15" cy="10" r="6" fill="%23BC002D"/></svg>`
const FLAG_ZH = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="20" fill="%23DE2910"/><polygon points="5,2 6.2,5.6 3,3.4 7,3.4 3.8,5.6" fill="%23FFDE00"/><circle cx="10" cy="2" r="0.7" fill="%23FFDE00"/><circle cx="12" cy="4" r="0.7" fill="%23FFDE00"/><circle cx="12" cy="7" r="0.7" fill="%23FFDE00"/><circle cx="10" cy="9" r="0.7" fill="%23FFDE00"/></svg>`
const FLAG_FR = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="10" height="20" fill="%23002654"/><rect x="10" width="10" height="20" fill="white"/><rect x="20" width="10" height="20" fill="%23ED2939"/></svg>`
const FLAG_ES = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="5" fill="%23AA151B"/><rect y="5" width="30" height="10" fill="%23F1BF00"/><rect y="15" width="30" height="5" fill="%23AA151B"/><circle cx="8" cy="10" r="2.2" fill="%23AA151B"/></svg>`
const FLAG_IT = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="10" height="20" fill="%23009246"/><rect x="10" width="10" height="20" fill="white"/><rect x="20" width="10" height="20" fill="%23CE2B37"/></svg>`
const FLAG_PT = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="12" height="20" fill="%23006600"/><rect x="12" width="18" height="20" fill="%23FF0000"/><circle cx="12" cy="10" r="4.5" fill="%23FFFF00"/><circle cx="12" cy="10" r="2.8" fill="%23FFFFFF"/><rect x="10.8" y="8.8" width="2.4" height="2.4" fill="%230000FF"/></svg>`
const FLAG_ID = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="10" fill="%23E70011"/><rect y="10" width="30" height="10" fill="white"/></svg>`
const FLAG_AR = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="6.67" fill="%2300732F"/><rect y="6.67" width="30" height="6.67" fill="white"/><rect y="13.34" width="30" height="6.66" fill="black"/><rect width="9" height="20" fill="%23FF0000"/></svg>`

const languageOptions = [
  { value: 'en', code: 'EN', label: 'English', flag: FLAG_EN },
  { value: 'vi', code: 'VI', label: 'Tiếng Việt', flag: FLAG_VI },
  { value: 'zh', code: 'ZH', label: '中文', flag: FLAG_ZH },
  { value: 'ja', code: 'JA', label: '日本語', flag: FLAG_JA },
  { value: 'ko', code: 'KO', label: '한국어', flag: FLAG_KO },
  { value: 'fr', code: 'FR', label: 'Français', flag: FLAG_FR },
  { value: 'es', code: 'ES', label: 'Español', flag: FLAG_ES },
  { value: 'it', code: 'IT', label: 'Italiano', flag: FLAG_IT },
  { value: 'pt', code: 'PT', label: 'Português', flag: FLAG_PT },
  { value: 'id', code: 'ID', label: 'Bahasa Indonesia', flag: FLAG_ID },
  { value: 'ar', code: 'AR', label: 'العربية', flag: FLAG_AR },
]

const currentLang = computed(() => languageOptions.find(l => l.value === locale.value) ?? languageOptions[0])

const langOpen = ref(false)
const langRef = ref(null)
const mobileLangOpen = ref(false)
const mobileLangRef = ref(null)

function changeLanguage(nextLocale) {
  setLocale(nextLocale)
  const nextPrefix = nextLocale === 'vi' ? 'vn' : nextLocale
  router.replace({ name: route.name, params: { ...route.params, locale: nextPrefix } })
}

function selectLang(opt) {
  langOpen.value = false
  mobileLangOpen.value = false
  if (opt.value !== locale.value) changeLanguage(opt.value)
}

function onDocClick(e) {
  if (langRef.value && !langRef.value.contains(e.target)) langOpen.value = false
  if (mobileLangRef.value && !mobileLangRef.value.contains(e.target)) mobileLangOpen.value = false
}

watch(() => route.fullPath, () => { isMenuOpen.value = false })

const isScrolled = ref(false)
function onScroll() { isScrolled.value = window.scrollY > 20 }
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onDocClick)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocClick)
})

function isActive(item) {
  if (typeof item.to === 'string') {
    const localePrefix = route.params.locale ? `/${route.params.locale}` : ''
    return route.path === `${localePrefix}${item.to === '/' ? '' : item.to}`
  }
  if (item.to?.path) {
    return route.path === item.to.path && (!item.to.hash || route.hash === item.to.hash)
  }
  return false
}

function handleLogoClick(e) {
  e.preventDefault()
  const prefix = locale.value === 'vi' ? 'vn' : locale.value
  const homePath = `/${prefix}`
  if (route.path === homePath || route.path === homePath + '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push(homePath)
  }
}
</script>

<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <a class="brand" href="/" :aria-label="brand.name" @click="handleLogoClick">
        <img class="brand-logo" :src="logoUrl" :alt="brand.name" decoding="async" />
      </a>
      <nav class="desktop-nav" aria-label="Primary">
        <AppLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.to"
          class="nav-link"
          :class="{ 'nav-link-active': isActive(item) }"
        >
          {{ item.label }}
        </AppLink>
      </nav>
      <div class="header-actions">
        <!-- Desktop language switcher -->
        <div ref="langRef" class="lang-switcher" :class="{ open: langOpen }">
          <button class="lang-trigger" type="button" @click.stop="langOpen = !langOpen">
            <img class="lang-flag" :src="currentLang.flag" :alt="currentLang.code" />
            <span class="lang-code">{{ currentLang.code }}</span>
            <svg class="lang-chevron" viewBox="0 0 10 6" width="10" height="6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="lang-dropdown">
            <button
              v-for="opt in languageOptions"
              :key="opt.value"
              class="lang-option"
              :class="{ active: opt.value === locale }"
              type="button"
              @click="selectLang(opt)"
            >
              <img class="lang-opt-flag" :src="opt.flag" :alt="opt.code" />
              <span class="lang-opt-text">
                <strong>{{ opt.code }}</strong>
                <span>{{ opt.label }}</span>
              </span>
              <svg v-if="opt.value === locale" class="lang-check" viewBox="0 0 12 10" width="14" height="12" fill="none">
                <path d="M1 5l3.5 3.5L11 1" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button
        class="mobile-menu-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav v-if="isMenuOpen" id="mobile-navigation" class="mobile-nav" aria-label="Mobile primary">
      <div class="container mobile-nav-inner">
        <AppLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.to"
          class="mobile-nav-link"
          :class="{ 'nav-link-active': isActive(item) }"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </AppLink>
        <!-- Mobile language switcher -->
        <div ref="mobileLangRef" class="lang-switcher lang-switcher-mobile-wrap" :class="{ open: mobileLangOpen }">
          <button class="lang-trigger" type="button" @click.stop="mobileLangOpen = !mobileLangOpen">
            <img class="lang-flag" :src="currentLang.flag" :alt="currentLang.code" />
            <span class="lang-code">{{ currentLang.code }}</span>
            <svg class="lang-chevron" viewBox="0 0 10 6" width="10" height="6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="lang-dropdown lang-dropdown-up">
            <button
              v-for="opt in languageOptions"
              :key="opt.value"
              class="lang-option"
              :class="{ active: opt.value === locale }"
              type="button"
              @click="selectLang(opt)"
            >
              <img class="lang-opt-flag" :src="opt.flag" :alt="opt.code" />
              <span class="lang-opt-text">
                <strong>{{ opt.code }}</strong>
                <span>{{ opt.label }}</span>
              </span>
              <svg v-if="opt.value === locale" class="lang-check" viewBox="0 0 12 10" width="14" height="12" fill="none">
                <path d="M1 5l3.5 3.5L11 1" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
