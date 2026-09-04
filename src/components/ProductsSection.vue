<script setup>
import SectionTitle from './SectionTitle.vue'
import ProductCard from './ProductCard.vue'
import AppLink from './AppLink.vue'
import { useSiteContent } from '../shared/site-content'

defineProps({ products: { type: Array, required: true } })
const siteData = useSiteContent()
</script>

<template>
  <section class="content-section" id="products">
    <div class="container">
      <div class="section-heading-row">
        <SectionTitle :title="siteData.homePage.productsTitle" :subtitle="siteData.homePage.productsSubtitle" />
        <AppLink class="text-link section-action" to="/products">{{ siteData.homePage.viewAllProducts }} &rarr;</AppLink>
      </div>
      <div class="product-grid">
        <ProductCard v-for="product in products" :key="product.name" :product="product" />
      </div>
    </div>
  </section>
</template>
