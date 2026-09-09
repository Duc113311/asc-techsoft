<script setup>
import { ref, watch } from 'vue'
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
const languageOptions = [
  { value: 'en', label: 'EN' },
  { value: 'vi', label: 'VI' },
]

function changeLanguage(nextLocale) {
  setLocale(nextLocale)
  const nextPrefix = nextLocale === 'vi' ? 'vn' : 'en'
  router.replace({ name: route.name, params: { ...route.params, locale: nextPrefix } })
}

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)

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
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <AppLink class="brand" to="/" :aria-label="brand.name">
        <img class="brand-logo" :src="logoUrl" :alt="brand.name" decoding="async" />
      </AppLink>
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
        <label class="language-switcher language-switcher-desktop">
          <span class="sr-only">{{ currentLocale.ui.selectLanguage }}</span>
          <select :value="locale" :aria-label="currentLocale.ui.selectLanguage" @change="changeLanguage($event.target.value)">
            <option v-for="option in languageOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
        </label>
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
        <label class="language-switcher language-switcher-mobile">
          <span class="sr-only">{{ currentLocale.ui.selectLanguage }}</span>
          <select :value="locale" :aria-label="currentLocale.ui.selectLanguage" @change="changeLanguage($event.target.value)">
            <option v-for="option in languageOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
        </label>
      </div>
    </nav>
  </header>
</template>
