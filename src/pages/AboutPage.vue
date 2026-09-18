<script setup>
import AppLink from '../components/AppLink.vue'
import { imgAboutUrl, bgFooterUrl } from '../assets'
import { useSiteContent } from '../shared/site-content'
import { useI18n } from '../i18n'

const siteData = useSiteContent()
const { currentLocale } = useI18n()
</script>

<template>
  <div v-if="siteData" class="about-page">

    <!-- Hero — sky bg from page-shell -->
    <section class="page-hero-section">
      <div class="container page-hero-grid">
        <div class="page-hero-copy">
          <span class="hero-eyebrow">{{ currentLocale.ui.aboutEyebrow }}</span>
          <h1 class="page-hero-headline">
            <span>{{ currentLocale.ui.aboutH1line1 }}</span>
            <span>{{ currentLocale.ui.aboutH1line2 }}</span>
            <span><em class="hero-accent">{{ currentLocale.ui.aboutH1line3 }}</em></span>
          </h1>
          <p class="page-hero-desc">{{ currentLocale.ui.aboutHeroDesc }}</p>
          <div class="hero-actions">
            <AppLink class="btn-green" to="#story">{{ currentLocale.ui.aboutStoryCta }} &rarr;</AppLink>
            <button class="btn-ghost" type="button">
              <span class="btn-ghost-play">&#9654;</span>
              {{ currentLocale.ui.watchVideo }}
            </button>
          </div>
        </div>
        <div class="page-hero-visual">
          <img class="page-hero-img" :src="imgAboutUrl" alt="ASC TechSoft office" fetchpriority="high" decoding="async" />
        </div>
      </div>
    </section>

    <!-- White bg wrapper for sections below hero -->
    <div class="page-content-wrap">

      <!-- Story + Timeline -->
      <section class="about-story-section" id="story">
        <div class="container about-story-grid">
          <div class="about-story-copy">
            <span class="section-eyebrow">{{ currentLocale.ui.storyEyebrow }}</span>
            <h2 class="about-story-title">
              {{ currentLocale.ui.storyH2line1 }}<br>
              {{ currentLocale.ui.storyH2line2 }} <em class="story-accent">{{ currentLocale.ui.storyH2accent }}</em>
            </h2>
            <p class="about-story-desc">{{ currentLocale.ui.storyDesc }}</p>
            <AppLink class="btn-outline" to="/contact">{{ currentLocale.ui.storyLearnMore }} &rarr;</AppLink>
          </div>
          <div class="about-timeline">
            <div v-for="item in currentLocale.ui.aboutTimeline" :key="item.year" class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <strong class="timeline-year">{{ item.year }}</strong>
                <span class="timeline-title">{{ item.title }}</span>
                <p class="timeline-desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>
          <div class="about-office-card">
            <div class="office-card-inner">
              <p class="office-quote">"Great People<br>Build<br>Great Products"</p>
              <div class="office-label">
                <span class="office-label-sub">OUR OFFICE</span>
                <span class="office-label-name">Ha Noi, Viet Nam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values -->
      <section class="about-values-section">
        <div class="container">
          <span class="section-eyebrow">{{ currentLocale.ui.valuesEyebrow }}</span>
          <h2 class="about-values-title">{{ currentLocale.ui.valuesH2 }}</h2>
          <p class="about-values-desc">{{ currentLocale.ui.valuesDesc }}</p>
          <div class="about-values-grid">
            <div v-for="v in currentLocale.ui.aboutValues" :key="v.title" class="about-value-card">
              <span class="value-card-icon">{{ v.icon }}</span>
              <strong class="value-card-title">{{ v.title }}</strong>
              <p class="value-card-desc">{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA bottom -->
      <section class="about-cta-section" :style="{ backgroundImage: `url(${bgFooterUrl})` }">
        <div class="container about-cta-inner">
          <div class="about-cta-copy">
            <span class="section-eyebrow about-cta-eyebrow">{{ currentLocale.ui.ctaBrightEyebrow }}</span>
            <h2 class="about-cta-title">{{ currentLocale.ui.ctaBrightLine1 }}<br><em class="hero-accent">{{ currentLocale.ui.ctaBrightLine2 }}</em></h2>
            <p class="about-cta-desc">{{ currentLocale.ui.ctaBrightDesc }}</p>
            <div class="hero-actions">
              <AppLink class="btn-green" to="/contact">{{ currentLocale.ui.ctaBrightCta1 }} &rarr;</AppLink>
              <AppLink class="btn-ghost" to="/contact">{{ currentLocale.ui.ctaBrightCta2 }}</AppLink>
            </div>
          </div>
          <div class="about-cta-badge">
            <span>A BRIGHTER</span>
            <span>DIGITAL</span>
            <span>TOMORROW</span>
          </div>
        </div>
      </section>

    </div><!-- /page-content-wrap -->
  </div>
</template>
