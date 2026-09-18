<script setup>
import { useSiteContent } from '../shared/site-content'
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TrustedByBar from '../components/TrustedByBar.vue'
import ProductsSection from '../components/ProductsSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import CtaBanner from '../components/CtaBanner.vue'

const siteData = useSiteContent()
</script>

<template>
  <div v-if="siteData">
    <HeroSection :hero="siteData.hero" :brand="siteData.brand" />
    <ServicesSection :services="siteData.services" />
    <TrustedByBar />
    <ProductsSection :products="siteData.products" />
    <ProcessSection />
    <CtaBanner :cta="siteData.cta" />
  </div>
</template>
