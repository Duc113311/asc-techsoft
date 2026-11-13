<script setup>
import { computed, ref, watch } from 'vue'
import { imgSlideProductUrl } from '../assets'
import AppLink from '../components/AppLink.vue'
import PlatformIcon from '../components/PlatformIcon.vue'
import AppDetailModal from '../components/AppDetailModal.vue'
import { useSiteContent } from '../shared/site-content'
import { useI18n } from '../i18n'
import { appCatalog } from '../data/products'

const PAGE_SIZE = 12

const siteData = useSiteContent()
const { currentLocale } = useI18n()
const productPage = computed(() => siteData.value?.productPage ?? null)

const platformOptions = [
  { value: 'all', label: 'All Products' },
  { value: 'android', label: 'Android' },
  { value: 'ios', label: 'iOS' },
  { value: 'web', label: 'Web' },
]
const categoryOptions = [...new Set(appCatalog.map((app) => app.category))]

const platform = ref('all')
const category = ref('all')
const query = ref('')
const page = ref(1)
const selectedApp = ref(null)

const countFor = (value) =>
  value === 'all' ? appCatalog.length : appCatalog.filter((app) => app.platforms.includes(value)).length

const filteredApps = computed(() => {
  const q = query.value.trim().toLowerCase()
  return appCatalog.filter((app) => {
    if (platform.value !== 'all' && !app.platforms.includes(platform.value)) return false
    if (category.value !== 'all' && app.category !== category.value) return false
    if (q && !`${app.name} ${app.category} ${app.description}`.toLowerCase().includes(q)) return false
    return true
  })
})

const pageCount = computed(() => Math.max(1, Math.ceil(filteredApps.value.length / PAGE_SIZE)))
const pagedApps = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return filteredApps.value.slice(start, start + PAGE_SIZE)
})
const pageNumbers = computed(() => Array.from({ length: pageCount.value }, (_, i) => i + 1))

watch([platform, category, query], () => {
  page.value = 1
})

function goToPage(n) {
  if (n >= 1 && n <= pageCount.value) page.value = n
}
</script>

<template>
  <div v-if="siteData && productPage" class="products-page">

    <!-- Hero — same sky bg as home, different content -->
    <section class="page-hero-section">
      <div class="container page-hero-grid">
        <div class="page-hero-copy">
          <span v-reveal="0" class="hero-eyebrow">{{ currentLocale.ui.productsEyebrow }}</span>
          <h1 v-reveal="100" class="page-hero-headline">
            <span>{{ currentLocale.ui.productsH1line1 }}</span>
            <span>{{ currentLocale.ui.productsH1line2 }}</span>
            <span><em class="hero-accent">{{ currentLocale.ui.productsH1line3 }}</em></span>
          </h1>
          <p v-reveal="200" class="page-hero-desc">{{ currentLocale.ui.productsHeroDesc }}</p>
          <div v-reveal="300" class="hero-actions">
            <AppLink class="btn-green" to="/contact">{{ currentLocale.ui.productsExploreCta }} &rarr;</AppLink>
            <button class="btn-ghost" type="button">
              <span class="btn-ghost-play">&#9654;</span>
              {{ currentLocale.ui.watchVideo }}
            </button>
          </div>
        </div>
        <div v-reveal="200" class="page-hero-visual">
          <img
            class="page-hero-img"
            :src="imgSlideProductUrl"
            alt="AscTechSoft products across devices"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- sections below hero get white bg to cover page-shell sky -->
    <div class="page-content-wrap">
      <!-- Applications catalog -->
      <section class="app-catalog">
        <div class="container">

          <header class="app-catalog-head">
            <div class="app-catalog-eyebrow">
              <svg class="app-catalog-eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4z" />
                <path d="M3.5 7.4L12 12.3l8.5-4.9M12 12.3v9.2" />
              </svg>
              <span>OUR PRODUCTS</span>
              <i class="app-catalog-eyebrow-line" aria-hidden="true"></i>
            </div>
            <h2 class="app-catalog-title">APPLICATIONS <span>&amp; APPS</span></h2>
            <p class="app-catalog-desc">
              A collection of mobile applications and digital products developed by ASC TechSoft,
              delivering practical and innovative solutions for everyday life.
            </p>
          </header>

          <div class="app-catalog-controls">
            <label class="app-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input v-model="query" type="search" placeholder="Search applications..." aria-label="Search applications" />
            </label>

            <label class="app-select">
              <select v-model="platform" aria-label="Filter by platform">
                <option v-for="opt in platformOptions" :key="opt.value" :value="opt.value">
                  {{ opt.value === 'all' ? 'All Platforms' : opt.label }}
                </option>
              </select>
            </label>

            <label class="app-select">
              <select v-model="category" aria-label="Filter by category">
                <option value="all">All Categories</option>
                <option v-for="cat in categoryOptions" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </label>
          </div>

          <div class="app-catalog-pills">
            <button
              v-for="opt in platformOptions"
              :key="opt.value"
              type="button"
              :class="['app-pill', { active: platform === opt.value }]"
              @click="platform = opt.value"
            >
              <PlatformIcon v-if="opt.value !== 'all'" :name="opt.value" />
              <span>{{ opt.label }} ({{ countFor(opt.value) }})</span>
            </button>
          </div>

          <div class="app-grid">
            <article v-for="app in pagedApps" :key="app.name" class="app-card">
              <div class="app-card-top">
                <div class="app-icon">
                  <img v-if="app.icon" :src="app.icon" :alt="app.name" loading="lazy" decoding="async" />
                </div>
                <div class="app-card-title">
                  <h3 class="app-name">
                    {{ app.name }}
                    <svg class="app-verified" viewBox="0 0 24 24" aria-label="Verified">
                      <circle cx="12" cy="12" r="10" fill="currentColor" />
                      <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </h3>
                  <p class="app-cat">{{ app.category }}</p>
                </div>
              </div>

              <p class="app-desc">{{ app.description }}</p>

              <div class="app-card-foot">
                <div class="app-platforms">
                  <PlatformIcon v-for="p in app.platforms" :key="p" :name="p" />
                </div>
                <button type="button" class="app-details" @click="selectedApp = app">{{ currentLocale.ui.viewDetails }} &rarr;</button>
              </div>
            </article>
          </div>

          <p v-if="!pagedApps.length" class="app-empty">No applications match your filters.</p>

          <nav v-if="pageCount > 1" class="app-pager" aria-label="Pagination">
            <button type="button" :disabled="page === 1" @click="goToPage(page - 1)">&lsaquo; Prev</button>
            <button
              v-for="n in pageNumbers"
              :key="n"
              type="button"
              :class="{ active: n === page }"
              @click="goToPage(n)"
            >{{ n }}</button>
            <button type="button" :disabled="page === pageCount" @click="goToPage(page + 1)">Next &rsaquo;</button>
          </nav>

        </div>
      </section>
    </div><!-- /page-content-wrap -->

    <AppDetailModal :app="selectedApp" @close="selectedApp = null" />
  </div>
</template>
