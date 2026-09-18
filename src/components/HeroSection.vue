<script setup>
import { img2Url } from '../assets'
import AppLink from './AppLink.vue'
import { useI18n } from '../i18n'

defineProps({
  brand: { type: Object, required: true },
  hero: { type: Object, required: true },
})

const { currentLocale } = useI18n()
</script>

<template>
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="hero-eyebrow">{{ brand.tagline }}</span>
        <h1 class="hero-headline">
          <span>{{ currentLocale.ui.heroLine1 }}</span>
          <span>{{ currentLocale.ui.heroLine2 }}</span>
          <span>{{ currentLocale.ui.heroLine3pre ? currentLocale.ui.heroLine3pre + ' ' : '' }}<em class="hero-accent">{{ currentLocale.ui.heroLine3accent }}</em></span>
        </h1>
        <p class="hero-desc">{{ hero.description }}</p>
        <div class="hero-actions">
          <AppLink class="btn-green" :to="hero.primaryCtaTarget">{{ hero.primaryCta }} &rarr;</AppLink>
          <AppLink class="btn-ghost" :to="hero.secondaryCtaTarget">
            <span class="btn-ghost-play">&#9654;</span>
            {{ hero.secondaryCta }}
          </AppLink>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-globe-wrap">
          <img class="hero-globe" :src="img2Url" alt="Digital platform globe" fetchpriority="high" decoding="async" />
          <div class="hero-badge hero-badge-marketing">
            <strong>MARKETING</strong>
            <span class="badge-platforms">&#9835; &nbsp; &infin; &nbsp; &#65;</span>
          </div>
          <div class="hero-badge hero-badge-growth">
            <strong>GROWTH</strong>
            <span class="growth-bar"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
