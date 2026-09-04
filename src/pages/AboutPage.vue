<script setup>
import { useSiteContent } from '../shared/site-content'
import { sliderImageUrl } from '../assets'
import AppLink from '../components/AppLink.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { useI18n } from '../i18n'

const siteData = useSiteContent()
const { currentLocale } = useI18n()

const iconMap = {
  lightbulb: '✦',
  shield: '◇',
  handshake: '◎',
  users: '♧',
  chart: '↗',
}
</script>

<template>
  <div v-if="siteData" class="about-page">
    <section class="about-hero">
      <div class="container about-hero-grid">
        <div class="about-hero-copy">
          <span class="eyebrow">{{ siteData.aboutPage.eyebrow }}</span>
          <h1>{{ siteData.aboutPage.title }}</h1>
          <p>{{ siteData.aboutPage.description }}</p>
          <AppLink class="btn btn-primary" to="/contact">{{ siteData.aboutPage.heroCta }} <span>&rarr;</span></AppLink>
        </div>
        <div class="about-hero-visual">
          <img :src="sliderImageUrl" alt="AscTechSoft digital product dashboard" decoding="async" />
        </div>
      </div>
    </section>

    <section class="about-stats" aria-label="AscTechSoft results">
      <div class="container about-stats-grid">
        <div v-for="stat in siteData.hero.stats" :key="stat.label" class="about-stat">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <section class="about-mission content-section">
      <div class="container about-mission-grid">
        <div class="about-mission-copy">
          <span class="section-kicker">{{ siteData.aboutPage.missionEyebrow }}</span>
          <h2>{{ siteData.aboutPage.missionTitle }}</h2>
          <p>{{ siteData.aboutPage.missionDescription }}</p>
          <ul>
            <li v-for="point in siteData.aboutPage.missionPoints" :key="point">{{ point }}</li>
          </ul>
        </div>
        <div class="about-mission-image">
          <img :src="sliderImageUrl" alt="AscTechSoft software platform" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <section class="about-values content-section">
      <div class="container">
        <div class="section-title">
          <span class="section-kicker">{{ currentLocale.ui.aboutGuides }}</span>
          <h2>{{ siteData.aboutPage.valuesTitle }}</h2>
          <p>{{ siteData.aboutPage.valuesDescription }}</p>
        </div>
        <div class="values-grid">
          <article v-for="value in siteData.aboutPage.values" :key="value.title" class="card value-card">
            <div class="value-icon">{{ iconMap[value.icon] }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="spacer-section about-cta-wrap">
      <div class="container"><CtaBanner :cta="siteData.cta" /></div>
    </section>
  </div>
</template>
