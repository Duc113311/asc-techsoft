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
        <AppLink :to="`mailto:${footer.contact.email}`" class="cta-info-item">
          <span class="cta-info-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </span>{{ footer.contact.email }}
        </AppLink>
        <AppLink :to="`tel:${footer.contact.phoneRaw}`" class="cta-info-item">
          <span class="cta-info-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </span>{{ footer.contact.phone }}
        </AppLink>
        <span class="cta-info-item">
          <span class="cta-info-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </span>{{ footer.contact.address }}
        </span>
      </div>
    </div>
    <div class="container footer-bottom"><span>{{ footer.copyright }}</span></div>
  </footer>
</template>
