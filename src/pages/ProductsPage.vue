<script setup>
import { computed, ref } from 'vue'
import { sliderImageUrl } from '../assets'
import ProductCard from '../components/ProductCard.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { useSiteContent } from '../shared/site-content'

const siteData = useSiteContent()
const activeCategory = ref('All')
const categoryValues = ['All', 'Apps', 'Platforms', 'SaaS', 'Tools']

const productPage = computed(() => siteData.value?.productPage ?? null)
const catalog = computed(() => siteData.value?.productCatalog ?? [])
const filteredProducts = computed(() => {
  if (activeCategory.value === 'All') {
    return catalog.value
  }

  return catalog.value.filter((product) => product.group === activeCategory.value)
})
</script>

<template>
  <div v-if="siteData && productPage" class="products-page">
    <section class="products-hero">
      <div class="container products-hero-grid">
        <div class="products-hero-copy">
          <span class="eyebrow">{{ productPage.eyebrow }}</span>
          <h1>{{ productPage.title }}</h1>
          <p>{{ productPage.description }}</p>
          <div class="product-filters" aria-label="Product categories">
            <button
              v-for="(category, index) in productPage.categories"
              :key="category"
              type="button"
              class="filter-chip"
              :class="{ 'filter-chip-active': categoryValues[index] === activeCategory }"
              @click="activeCategory = categoryValues[index]"
            >
              {{ category }}
            </button>
          </div>
        </div>
        <div class="products-hero-visual">
          <img
            class="products-hero-image"
            :src="sliderImageUrl"
            alt="AscTechSoft product dashboard across devices"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <section class="content-section products-catalog-section">
      <div class="container">
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

    <section class="spacer-section products-cta-wrap">
      <div class="container">
        <CtaBanner :cta="siteData.cta" />
      </div>
    </section>
  </div>
</template>
