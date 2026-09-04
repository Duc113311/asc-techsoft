<script setup>
import SectionTitle from './SectionTitle.vue'
import ServiceCard from './ServiceCard.vue'
import { useSiteContent } from '../shared/site-content'

defineProps({ services: { type: Array, required: true } })
const siteData = useSiteContent()
</script>

<template>
  <section class="content-section" id="services">
    <div class="container">
      <SectionTitle :title="siteData.homePage.servicesTitle" :subtitle="siteData.homePage.servicesSubtitle" />
      <div class="service-grid">
        <ServiceCard v-for="service in services" :key="service.title" :service="service" />
      </div>
    </div>
  </section>
</template>
