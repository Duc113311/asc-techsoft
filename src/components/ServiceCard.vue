<script setup>
import AppLink from './AppLink.vue'
import { useI18n } from '../i18n'
const props = defineProps({ service: { type: Object, required: true } })
const { currentLocale } = useI18n()

const iconMap = { code: '⌘', megaphone: '◉', cube: '◇', bag: '○' }
</script>

<template>
  <article class="card service-card">
    <div class="service-icon">{{ iconMap[props.service.icon] }}</div>
    <h3>{{ service.title }}</h3>
    <p>{{ service.description }}</p>
    <AppLink to="/contact" class="text-link">{{ currentLocale.ui.viewDetails }} &rarr;</AppLink>
  </article>
</template>
