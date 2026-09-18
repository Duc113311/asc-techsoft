<script setup>
import { computed, onBeforeUnmount, onMounted, provide, readonly, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { getSiteData } from '../api/site.api'
import AppHeader from '../components/AppHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteSkeleton from '../components/SiteSkeleton.vue'
import { getLocaleSite, mergeSiteData, useI18n } from '../i18n'
import { siteContentKey } from '../shared/site-content'
import { bgSlideUrl } from '../assets'

const siteData = ref(null)
const loadError = ref('')
const isRouteLoading = ref(false)
const route = useRoute()
const { locale, setLocale } = useI18n()
let routeLoadingTimer

const localizedSiteData = ref(null)

watch(
  [siteData, locale],
  ([baseSiteData, currentLocale]) => {
    localizedSiteData.value = mergeSiteData(baseSiteData, getLocaleSite(currentLocale))
  },
  { immediate: true },
)

provide(siteContentKey, readonly(localizedSiteData))

watch(
  () => route.params.locale,
  (routeLocale) => {
    if (routeLocale) setLocale(routeLocale === 'vn' ? 'vi' : 'en')
  },
  { immediate: true },
)

watch(
  () => route.fullPath,
  () => {
    if (!siteData.value) return

    isRouteLoading.value = true
    clearTimeout(routeLoadingTimer)
    routeLoadingTimer = setTimeout(() => {
      isRouteLoading.value = false
    }, 420)
  },
)

onMounted(async () => {
  try {
    siteData.value = await getSiteData()
  } catch (error) {
    loadError.value = error.message
  }
})

onBeforeUnmount(() => clearTimeout(routeLoadingTimer))

const hasSkyHero = computed(() => ['home', 'products', 'about', 'contact'].includes(route.name))
const heroShellStyle = computed(() =>
  hasSkyHero.value
    ? {
        backgroundImage: `url(${bgSlideUrl})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }
    : {},
)
</script>

<template>
  <SiteSkeleton v-if="!siteData && !loadError" />
  <SiteSkeleton v-else-if="isRouteLoading" />
  <div v-else-if="siteData" class="page-shell" :style="heroShellStyle">
    <AppHeader :brand="localizedSiteData.brand" :navigation="localizedSiteData.navigation" />
    <main>
      <RouterView />
    </main>
    <SiteFooter :brand="localizedSiteData.brand" :footer="localizedSiteData.footer" />
  </div>
  <div v-else-if="loadError" class="app-state">
    <p>Unable to load website data: {{ loadError }}</p>
  </div>
</template>
