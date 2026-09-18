<script setup>
import { ref } from 'vue'
import AppLink from '../components/AppLink.vue'
import { imgContactUrl, imgBgContactUrl, bgFooterUrl } from '../assets'
import { useSiteContent } from '../shared/site-content'
import { useI18n } from '../i18n'

const siteData = useSiteContent()
const { currentLocale } = useI18n()

const form = ref({ name: '', email: '', company: '', phone: '', inquiry: '', message: '' })
const charCount = ref(0)
const submitted = ref(false)

function onMessageInput(e) { charCount.value = e.target.value.length }
function submitForm() { submitted.value = true }

const openFaq = ref(null)
function toggleFaq(i) { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div v-if="siteData" class="contact-page">

    <!-- Hero — sky bg from page-shell -->
    <section class="page-hero-section">
      <div class="container page-hero-grid">
        <div class="page-hero-copy">
          <span class="hero-eyebrow">{{ currentLocale.ui.contactEyebrow }}</span>
          <h1 class="page-hero-headline">
            <span>{{ currentLocale.ui.contactH1line1 }}</span>
            <span>{{ currentLocale.ui.contactH1line2 }}</span>
            <span><em class="hero-accent">{{ currentLocale.ui.contactH1line3 }}</em></span>
          </h1>
          <p class="page-hero-desc">{{ currentLocale.ui.contactHeroDesc }}</p>
          <div class="hero-actions">
            <a class="btn-green" href="#contact-form">&#9993; {{ currentLocale.ui.sendMsgCta }} &rarr;</a>
            <a class="btn-ghost" href="#contact-form">&#128197; {{ currentLocale.ui.bookMeetingCta }}</a>
          </div>
        </div>
        <div class="page-hero-visual">
          <img class="page-hero-img" :src="imgContactUrl" alt="Let's Connect" fetchpriority="high" decoding="async" />
        </div>
      </div>
    </section>

    <!-- White bg content -->
    <div class="page-content-wrap">

      <!-- Form + Contact Info -->
      <section class="contact-main-section" id="contact-form">
        <div class="container contact-main-grid">

          <!-- Form -->
          <div class="contact-form-col">
            <span class="section-eyebrow">{{ currentLocale.ui.formSectionEyebrow }}</span>
            <h2 class="contact-section-title">{{ currentLocale.ui.formH2line1 }} <em class="hero-accent">{{ currentLocale.ui.formH2line2 }}</em></h2>
            <p class="contact-section-desc">{{ currentLocale.ui.formSectionDesc }}</p>
            <form class="contact-form-new" @submit.prevent="submitForm">
              <div class="form-row-2">
                <label class="form-label"><span>{{ currentLocale.ui.fieldName }} <span class="req">*</span></span><input v-model="form.name" required :placeholder="currentLocale.ui.fieldName" /></label>
                <label class="form-label"><span>{{ currentLocale.ui.fieldEmail }} <span class="req">*</span></span><input v-model="form.email" type="email" required placeholder="you@example.com" /></label>
              </div>
              <div class="form-row-2">
                <label class="form-label"><span>{{ currentLocale.ui.fieldCompany }} <span class="opt">(Optional)</span></span><input v-model="form.company" :placeholder="currentLocale.ui.fieldCompany" /></label>
                <label class="form-label"><span>{{ currentLocale.ui.fieldPhone }} <span class="opt">(Optional)</span></span><input v-model="form.phone" placeholder="+84 123 456 789" /></label>
              </div>
              <label class="form-label"><span>{{ currentLocale.ui.fieldInquiry }} <span class="req">*</span></span>
                <select v-model="form.inquiry" required>
                  <option value="" disabled selected>{{ currentLocale.ui.inquirySelectOpt }}</option>
                  <option v-for="opt in currentLocale.ui.inquiryOpts" :key="opt" :value="opt">{{ opt }}</option>
                </select>
              </label>
              <label class="form-label"><span>{{ currentLocale.ui.fieldMessage }} <span class="req">*</span></span>
                <textarea v-model="form.message" required :placeholder="currentLocale.ui.msgPlaceholder" rows="5" maxlength="1000" @input="onMessageInput"></textarea>
                <span class="char-count">{{ charCount }}/1000</span>
              </label>
              <button class="btn-send" type="submit">{{ currentLocale.ui.sendMsgBtn }} &rarr;</button>
              <p v-if="submitted" class="form-success">{{ currentLocale.ui.formSuccessMsg }}</p>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-col">
            <span class="section-eyebrow">{{ currentLocale.ui.contactInfoEyebrow }}</span>
            <h2 class="contact-section-title">{{ currentLocale.ui.contactInfoH2line1 }} <em class="hero-accent">{{ currentLocale.ui.contactInfoH2line2 }}</em></h2>
            <p class="contact-section-desc">{{ currentLocale.ui.contactInfoDesc }}</p>
            <div class="contact-info-grid">
              <div class="contact-info-card">
                <span class="info-icon">&#9993;</span>
                <strong>{{ currentLocale.ui.infoEmailTitle }}</strong>
                <AppLink :to="`mailto:${siteData.footer.contact.email}`">{{ siteData.footer.contact.email }}</AppLink>
                <span class="info-note">{{ currentLocale.ui.infoEmailNote }}</span>
              </div>
              <div class="contact-info-card">
                <span class="info-icon">&#128222;</span>
                <strong>{{ currentLocale.ui.infoCallTitle }}</strong>
                <AppLink :to="`tel:${siteData.footer.contact.phoneRaw ?? siteData.footer.contact.phone}`">{{ siteData.footer.contact.phone }}</AppLink>
                <span class="info-note">{{ currentLocale.ui.infoCallNote }}</span>
              </div>
              <div class="contact-info-card">
                <span class="info-icon">&#128205;</span>
                <strong>{{ currentLocale.ui.infoOfficeTitle }}</strong>
                <span>{{ siteData.footer.contact.address }}</span>
              </div>
              <div class="contact-info-card">
                <span class="info-icon">&#128101;</span>
                <strong>{{ currentLocale.ui.infoFollowTitle }}</strong>
                <div class="social-links">
                  <a href="#" aria-label="LinkedIn" class="social-linkedin">in</a>
                  <a href="#" aria-label="Facebook" class="social-facebook">f</a>
                  <a href="#" aria-label="YouTube" class="social-youtube">▶</a>
                  <a href="#" aria-label="GitHub" class="social-github">gh</a>
                </div>
                <span class="info-note">{{ currentLocale.ui.infoFollowNote }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map + FAQ -->
      <section class="contact-map-faq-section">
        <div class="container contact-map-faq-grid">
          <div class="contact-map-col">
            <span class="section-eyebrow">{{ currentLocale.ui.mapEyebrow }}</span>
            <h2 class="contact-section-title">{{ currentLocale.ui.mapH2line1 }} <em class="hero-accent">{{ currentLocale.ui.mapH2line2 }}</em></h2>
            <div class="contact-map-wrap">
              <iframe
                src="https://maps.google.com/maps?q=20.9629797,105.7461722&hl=vi&z=15&output=embed"
                style="width:100%;height:100%;border:0;"
                loading="lazy"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="contact-faq-col">
            <span class="section-eyebrow">{{ currentLocale.ui.faqEyebrow }}</span>
            <h2 class="contact-section-title">{{ currentLocale.ui.faqH2 }} <em class="hero-accent">{{ currentLocale.ui.faqH2accent }}</em></h2>
            <p class="contact-section-desc">{{ currentLocale.ui.faqDesc }}</p>
            <div class="faq-list">
              <div v-for="(faq, i) in currentLocale.ui.faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
                <button class="faq-question" type="button" @click="toggleFaq(i)">
                  <span>{{ faq.q }}</span>
                  <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
                </button>
                <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="about-cta-section" :style="{ backgroundImage: `url(${bgFooterUrl})` }">
        <div class="container about-cta-inner">
          <div class="about-cta-copy">
            <span class="section-eyebrow about-cta-eyebrow">{{ currentLocale.ui.ctaBrightEyebrow }}</span>
            <h2 class="about-cta-title">{{ currentLocale.ui.ctaBrightLine1 }}<br><em class="hero-accent">{{ currentLocale.ui.ctaBrightLine2 }}</em></h2>
            <p class="about-cta-desc">{{ currentLocale.ui.ctaBrightDesc }}</p>
            <div class="hero-actions">
              <AppLink class="btn-green" to="#contact-form">{{ currentLocale.ui.ctaBrightCta1 }} &rarr;</AppLink>
              <AppLink class="btn-ghost" to="#contact-form">{{ currentLocale.ui.ctaBrightCta2 }}</AppLink>
            </div>
          </div>
          <div class="about-cta-badge">
            <span>A BRIGHTER</span>
            <span>DIGITAL</span>
            <span>TOMORROW</span>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>
