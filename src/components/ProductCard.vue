<script setup>
import AppLink from './AppLink.vue'
import { useI18n } from '../i18n'

const props = defineProps({
  product: { type: Object, required: true },
  mode: { type: String, default: 'default' },
})

const accentClass = `accent-${props.product.accent}`
const { currentLocale } = useI18n()
</script>

<template>
  <article :class="['card', 'product-card', { 'product-card-catalog': mode === 'catalog' }]">
    <div :class="['product-thumb', accentClass]"><div class="thumb-symbol"></div></div>
    <h3>{{ product.name }}</h3>
    <p class="product-category">{{ product.category }}</p>
    <p>{{ product.description }}</p>
    <AppLink :to="product.link || { path: '/', hash: '#contact' }" class="text-link">
      {{ currentLocale.ui.viewDetails }} &rarr;
    </AppLink>
  </article>
</template>
