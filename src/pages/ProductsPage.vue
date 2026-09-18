<script setup>
import { computed, ref } from 'vue'
import { imgSlideProductUrl } from '../assets'
import AppLink from '../components/AppLink.vue'
import ProductCard from '../components/ProductCard.vue'
import { useSiteContent } from '../shared/site-content'
import { useI18n } from '../i18n'

const siteData = useSiteContent()
const { currentLocale } = useI18n()
const activeCategory = ref('All')
const categoryValues = ['All', 'Apps', 'Platforms', 'SaaS', 'Tools']

const productPage = computed(() => siteData.value?.productPage ?? null)
const catalog = computed(() => siteData.value?.productCatalog ?? [])
const filteredProducts = computed(() => {
  if (activeCategory.value === 'All') return catalog.value
  return catalog.value.filter((product) => product.group === activeCategory.value)
})
</script>

<template>
  <div v-if="siteData && productPage" class="products-page">

    <!-- Hero — same sky bg as home, different content -->
    <section class="page-hero-section">
      <div class="container page-hero-grid">
        <div class="page-hero-copy">
          <span class="hero-eyebrow">{{ currentLocale.ui.productsEyebrow }}</span>
          <h1 class="page-hero-headline">
            <span>{{ currentLocale.ui.productsH1line1 }}</span>
            <span>{{ currentLocale.ui.productsH1line2 }}</span>
            <span><em class="hero-accent">{{ currentLocale.ui.productsH1line3 }}</em></span>
          </h1>
          <p class="page-hero-desc">{{ currentLocale.ui.productsHeroDesc }}</p>
          <div class="hero-actions">
            <AppLink class="btn-green" to="/contact">{{ currentLocale.ui.productsExploreCta }} &rarr;</AppLink>
            <button class="btn-ghost" type="button">
              <span class="btn-ghost-play">&#9654;</span>
              {{ currentLocale.ui.watchVideo }}
            </button>
          </div>
        </div>
        <div class="page-hero-visual">
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
    <!-- Products catalog -->
    <section class="content-section products-catalog-section">
      <div class="container">
        <div class="products-catalog-header">
          <div>
            <span class="section-eyebrow">{{ currentLocale.ui.catalogEyebrow }}</span>
            <h2 class="catalog-title">{{ currentLocale.ui.catalogH2line1 }}<br>{{ currentLocale.ui.catalogH2line2 }}</h2>
            <p class="catalog-desc">{{ currentLocale.ui.catalogDesc }}</p>
          </div>
          <AppLink class="btn-dark" to="/products">{{ currentLocale.ui.viewAllProducts }} &rarr;</AppLink>
        </div>
        <div class="products-catalog-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.name"
            :product="product"
            mode="catalog"
          />
        </div>
      </div>
    </section>

    </div><!-- /page-content-wrap -->
  </div>
</template>
