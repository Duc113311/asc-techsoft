<script setup>
import { bgFooterUrl } from '../assets'
import { useSiteContent } from '../shared/site-content'
import { useI18n } from '../i18n'
import { ref } from 'vue'

defineProps({ cta: { type: Object, required: true } })

const siteData = useSiteContent()
const { currentLocale } = useI18n()
const form = ref({ name: '', email: '', type: '', budget: '', timeline: '', message: '' })
const submitted = ref(false)

function submitForm() {
  submitted.value = true
}
</script>

<template>
  <section class="cta-contact-section" id="contact">
    <div class="cta-contact-bg" :style="{ backgroundImage: `url(${bgFooterUrl})` }"></div>
    <div class="container cta-contact-grid">
      <div class="cta-contact-copy">
        <span class="section-eyebrow">{{ currentLocale.ui.ctaWorkEyebrow }}</span>
        <h2 class="cta-contact-title">
          {{ currentLocale.ui.ctaWorkLine1 }}<br>
          <em class="cta-gradient-text">{{ currentLocale.ui.ctaWorkLine2 }}</em>
        </h2>
        <p class="cta-contact-desc">{{ currentLocale.ui.ctaFormDesc }}</p>
        <div class="cta-contact-info">
          <a :href="'mailto:' + siteData.footer.contact.email" class="cta-info-item">
            <span class="cta-info-icon">✉</span>
            {{ siteData.footer.contact.email }}
          </a>
          <a :href="'tel:' + siteData.footer.contact.phoneRaw" class="cta-info-item">
            <span class="cta-info-icon">📞</span>
            {{ siteData.footer.contact.phone }}
          </a>
          <span class="cta-info-item">
            <span class="cta-info-icon">📍</span>
            {{ siteData.footer.contact.address }}
          </span>
        </div>
      </div>

      <div class="cta-form-card">
        <h3 class="cta-form-title">{{ currentLocale.ui.ctaFormTitle }}</h3>
        <div v-if="submitted" class="form-success-msg">
          {{ currentLocale.ui.ctaFormSuccess }}
        </div>
        <form v-else class="cta-form" @submit.prevent="submitForm">
          <div class="form-row">
            <label class="form-field">
              <span>{{ currentLocale.ui.ctaFormName }} <em>*</em></span>
              <input v-model="form.name" type="text" :placeholder="currentLocale.ui.ctaFormNamePlaceholder" required />
            </label>
            <label class="form-field">
              <span>{{ currentLocale.ui.ctaFormEmail }} <em>*</em></span>
              <input v-model="form.email" type="email" placeholder="you@example.com" required />
            </label>
          </div>
          <div class="form-row">
            <label class="form-field">
              <span>{{ currentLocale.ui.ctaFormType }}</span>
              <select v-model="form.type">
                <option value="">{{ currentLocale.ui.ctaFormTypeSelect }}</option>
                <option v-for="opt in currentLocale.ui.ctaFormTypeOpts" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </label>
            <label class="form-field">
              <span>{{ currentLocale.ui.ctaFormBudget }}</span>
              <select v-model="form.budget">
                <option value="">{{ currentLocale.ui.ctaFormBudgetSelect }}</option>
                <option v-for="opt in currentLocale.ui.ctaFormBudgetOpts" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </label>
          </div>
          <div class="form-row">
            <label class="form-field">
              <span>{{ currentLocale.ui.ctaFormTimeline }}</span>
              <select v-model="form.timeline">
                <option value="">{{ currentLocale.ui.ctaFormTimelineSelect }}</option>
                <option v-for="opt in currentLocale.ui.ctaFormTimelineOpts" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </label>
            <label class="form-field">
              <span>{{ currentLocale.ui.ctaFormMessage }}</span>
              <textarea v-model="form.message" :placeholder="currentLocale.ui.ctaFormMessagePlaceholder" rows="3"></textarea>
            </label>
          </div>
          <button type="submit" class="btn-form-submit">{{ currentLocale.ui.ctaFormSubmit }} &rarr;</button>
        </form>
      </div>
    </div>
  </section>
</template>
