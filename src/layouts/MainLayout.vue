<script setup>
import { computed, onBeforeUnmount, onMounted, provide, readonly, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { getSiteData } from '../api/site.api'
import AppHeader from '../components/AppHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteSkeleton from '../components/SiteSkeleton.vue'
import AboutSkeleton from '../components/AboutSkeleton.vue'
import ProductsSkeleton from '../components/ProductsSkeleton.vue'
import ContactSkeleton from '../components/ContactSkeleton.vue'
import BlogSkeleton from '../components/BlogSkeleton.vue'
import { getLocaleSite, mergeSiteData, useI18n } from '../i18n'
import { siteContentKey } from '../shared/site-content'
import { bgSlideUrl } from '../assets'
import FloatingActions from '../components/FloatingActions.vue'

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
    if (routeLocale) {
      if (routeLocale === 'vn') setLocale('vi')
      else setLocale(routeLocale)
    }
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

const skeletonMap = {
  home: SiteSkeleton,
  about: AboutSkeleton,
  products: ProductsSkeleton,
  contact: ContactSkeleton,
  blog: BlogSkeleton,
}
const currentSkeleton = computed(() => skeletonMap[route.name] ?? SiteSkeleton)

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
  <!-- skeleton disabled temporarily -->
  <!-- <component :is="currentSkeleton" v-if="!siteData && !loadError" /> -->
  <!-- <component :is="currentSkeleton" v-else-if="isRouteLoading" /> -->
  <div v-if="siteData" class="page-shell">
    <div v-if="hasSkyHero" class="hero-bg" :style="heroShellStyle"></div>
    <AppHeader :brand="localizedSiteData.brand" :navigation="localizedSiteData.navigation" />
    <main>
      <RouterView />
    </main>
    <SiteFooter :brand="localizedSiteData.brand" :footer="localizedSiteData.footer" />
    <FloatingActions />
  </div>
  <div v-else-if="!siteData && loadError" class="app-state">
    <p>Unable to load website data: {{ loadError }}</p>
  </div>
</template>
