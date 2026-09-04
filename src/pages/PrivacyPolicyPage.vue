<script setup>
import { useSiteContent } from '../shared/site-content'
import AppLink from '../components/AppLink.vue'
import { useI18n } from '../i18n'

const siteData = useSiteContent()
const { currentLocale } = useI18n()
</script>

<template>
  <div v-if="siteData" class="legal-page">
    <section class="inner-page-hero">
      <div class="container narrow-content">
        <span class="eyebrow">{{ siteData.privacyPage.eyebrow }}</span>
        <h1>{{ siteData.privacyPage.title }}</h1>
        <p>{{ siteData.privacyPage.updated }}</p>
      </div>
    </section>
    <main class="legal-content content-section">
      <div class="container legal-content-inner">
        <p class="legal-intro">{{ siteData.privacyPage.intro }}</p>
        <section v-for="section in siteData.privacyPage.sections" :key="section.title" class="legal-section">
          <h2>{{ section.title }}</h2>
          <p>{{ section.body }}</p>
        </section>
        <AppLink class="text-link" to="/contact">{{ currentLocale.ui.privacyContact }} &rarr;</AppLink>
      </div>
    </main>
  </div>
</template>
