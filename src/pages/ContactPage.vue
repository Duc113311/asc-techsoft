<script setup>
import { ref } from 'vue'
import { useSiteContent } from '../shared/site-content'
import AppLink from '../components/AppLink.vue'
import { useI18n } from '../i18n'

const siteData = useSiteContent()
const { currentLocale } = useI18n()
const submitted = ref(false)
const form = ref({ name: '', phone: '', email: '', subject: '', message: '' })

function submitForm() {
  submitted.value = true
}
</script>

<template>
  <div v-if="siteData" class="contact-page">
    <section class="contact-hero">
      <div class="container contact-hero-grid">
        <div class="contact-hero-copy">
          <span class="eyebrow">{{ currentLocale.ui.contactHeroEyebrow }}</span>
          <h1>{{ currentLocale.ui.contactHeroTitle }} <span>{{ currentLocale.ui.contactHeroTitleAccent }}</span></h1>
          <p>{{ currentLocale.ui.contactHeroDescription }}</p>
        </div>
        <div class="contact-hero-visual" aria-hidden="true">
          <div class="headset">
            <div class="headset-band"></div>
            <div class="headset-ear ear-left"></div>
            <div class="headset-ear ear-right"></div>
            <div class="headset-mic"></div>
          </div>
          <div class="contact-float contact-float-one"></div>
          <div class="contact-float contact-float-two"></div>
          <div class="contact-float contact-float-three"></div>
        </div>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="container contact-form-grid">
        <form class="card contact-form" @submit.prevent="submitForm">
          <h2>{{ currentLocale.ui.sendMessage }}</h2>
          <p class="form-note">{{ currentLocale.ui.formNote }}</p>
          <div class="form-fields-two">
            <label>{{ currentLocale.ui.fullName }} <input v-model="form.name" required :placeholder="currentLocale.ui.fullName" /></label>
            <label>{{ currentLocale.ui.phoneNumber }} <input v-model="form.phone" required :placeholder="currentLocale.ui.phoneNumber" /></label>
          </div>
          <label>{{ currentLocale.ui.email }} <input v-model="form.email" type="email" required :placeholder="currentLocale.ui.email" /></label>
          <label>{{ currentLocale.ui.subject }}
            <select v-model="form.subject" required>
              <option value="" disabled>{{ currentLocale.ui.selectSubject }}</option>
              <option>{{ currentLocale.ui.softwareDevelopment }}</option>
              <option>{{ currentLocale.ui.digitalProducts }}</option>
              <option>{{ currentLocale.ui.marketingGrowth }}</option>
              <option>{{ currentLocale.ui.generalConsultation }}</option>
            </select>
          </label>
          <label>{{ currentLocale.ui.message }} <textarea v-model="form.message" required :placeholder="currentLocale.ui.messagePlaceholder"></textarea></label>
          <button class="btn btn-primary form-submit" type="submit">{{ currentLocale.ui.send }} <span>&rarr;</span></button>
          <p v-if="submitted" class="form-success" role="status">{{ currentLocale.ui.submitSuccess }}</p>
          <small class="form-disclaimer">{{ currentLocale.ui.formDisclaimer }}</small>
        </form>

        <aside class="card contact-details contact-details-panel">
          <h2>{{ currentLocale.ui.contactInformation }}</h2>
          <div class="contact-detail-item"><strong>{{ currentLocale.ui.phoneNumber }}</strong><AppLink :to="`tel:${siteData.footer.contact.phoneRaw}`">{{ siteData.footer.contact.phone }}</AppLink></div>
          <div class="contact-detail-item"><strong>{{ currentLocale.ui.email }}</strong><AppLink :to="`mailto:${siteData.footer.contact.email}`">{{ siteData.footer.contact.email }}</AppLink></div>
          <div class="contact-detail-item"><strong>{{ currentLocale.ui.address }}</strong><span>{{ siteData.footer.contact.address }}</span></div>
          <div class="contact-detail-item"><strong>{{ currentLocale.ui.workingHours }}</strong><span>{{ currentLocale.ui.workingDays }}<br />08:00 - 17:30</span></div>
          <div class="contact-socials"><span>f</span><span>◉</span><span>in</span><span>▶</span></div>
        </aside>
      </div>
    </section>

    <section class="contact-map-section">
      <div class="container">
        <div class="contact-map" role="img" :aria-label="currentLocale.ui.mapLabel">
          <div class="map-roads map-road-one"></div>
          <div class="map-roads map-road-two"></div>
          <div class="map-roads map-road-three"></div>
          <div class="map-pin"><strong>AscTechSoft</strong><span>{{ siteData.footer.contact.address }}</span></div>
        </div>
      </div>
    </section>
  </div>
</template>
