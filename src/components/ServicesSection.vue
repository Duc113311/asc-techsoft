<script setup>
import AppLink from './AppLink.vue'
import { img1Url, img3Url, img4Url } from '../assets'
import { useI18n } from '../i18n'

defineProps({ services: { type: Array, required: true } })
const { currentLocale } = useI18n()

const pillarImgs = [img1Url, img3Url, img4Url]
</script>

<template>
  <section class="solutions-section" id="services">
    <div class="container solutions-grid">
      <div class="solutions-copy">
        <span v-reveal="0" class="section-eyebrow">{{ currentLocale.ui.solutionsEyebrow }}</span>
        <h2 v-reveal="80" class="solutions-title">
          {{ currentLocale.ui.solutionsTitle }}<br>{{ currentLocale.ui.solutionsTitle2 }}
        </h2>
        <p v-reveal="160" class="solutions-desc">{{ currentLocale.ui.solutionsDesc }}</p>
        <AppLink v-reveal="240" class="btn-dark" to="/contact">{{ currentLocale.ui.solutionsCta }} &rarr;</AppLink>
      </div>
      <div class="solutions-pillars">
        <div
          v-for="(pillar, i) in currentLocale.ui.solutionsPillars"
          :key="i"
          v-reveal="i * 120"
          class="pillar-card"
        >
          <img :src="pillarImgs[i]" :alt="pillar.title" class="pillar-img" loading="lazy" decoding="async" />
          <div class="pillar-info">
            <span class="pillar-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <strong class="pillar-title">{{ pillar.title }}</strong>
              <span class="pillar-sub">{{ pillar.sub }}</span>
              <p class="pillar-desc">{{ pillar.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
