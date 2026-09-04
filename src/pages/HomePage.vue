<script setup>
import { useSiteContent } from '../shared/site-content'
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProductsSection from '../components/ProductsSection.vue'
import CtaBanner from '../components/CtaBanner.vue'

const siteData = useSiteContent()
</script>

<template>
  <div v-if="siteData">
    <HeroSection :hero="siteData.hero" :brand="siteData.brand" />
    <ServicesSection :services="siteData.services" />
    <ProductsSection :products="siteData.products" />
    <section class="spacer-section">
      <div class="container">
        <CtaBanner :cta="siteData.cta" />
      </div>
    </section>
  </div>
</template>
