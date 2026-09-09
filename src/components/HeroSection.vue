<script setup>
import { sliderImageUrl } from '../assets'
import AppLink from './AppLink.vue'

defineProps({
  brand: { type: Object, required: true },
  hero: { type: Object, required: true },
})
</script>

<template>
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">{{ brand.tagline }}</span>
        <h1>{{ hero.headline }}</h1>
        <p>{{ hero.description }}</p>
        <div class="hero-actions">
          <AppLink class="btn btn-primary" :to="hero.primaryCtaTarget">{{ hero.primaryCta }}</AppLink>
          <AppLink class="btn btn-secondary" :to="hero.secondaryCtaTarget">{{ hero.secondaryCta }}</AppLink>
        </div>
        <div class="feature-badges">
          <span v-for="badge in hero.featureBadges" :key="badge" class="badge">{{ badge }}</span>
        </div>
      </div>
      <div class="hero-visual">
        <img class="hero-image" :src="sliderImageUrl" alt="AscTechSoft digital platform on a laptop and smartphone" fetchpriority="high" decoding="async" />
      </div>
    </div>
  </section>
</template>
