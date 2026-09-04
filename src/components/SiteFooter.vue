<script setup>
import { logoUrl } from '../assets'
import AppLink from './AppLink.vue'
import { useI18n } from '../i18n'

defineProps({
  brand: { type: Object, required: true },
  footer: { type: Object, required: true },
})

const { currentLocale } = useI18n()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <AppLink class="brand" to="/" :aria-label="brand.name">
          <img class="brand-logo" :src="logoUrl" :alt="brand.name" loading="lazy" decoding="async" />
        </AppLink>
        <p>{{ brand.description }}</p>
      </div>
      <div v-for="column in footer.columns" :key="column.title" class="footer-column">
        <h3>{{ column.title }}</h3>
        <AppLink v-for="link in column.links" :key="link.label" :to="link.to">{{ link.label }}</AppLink>
      </div>
      <div class="footer-column">
        <h3>{{ footer.contactTitle || currentLocale.ui.contact }}</h3>
        <AppLink :to="`tel:${footer.contact.phoneRaw}`">{{ footer.contact.phone }}</AppLink>
        <AppLink :to="`mailto:${footer.contact.email}`">{{ footer.contact.email }}</AppLink>
        <span>{{ footer.contact.address }}</span>
      </div>
    </div>
    <div class="container footer-bottom"><span>{{ footer.copyright }}</span></div>
  </footer>
</template>
