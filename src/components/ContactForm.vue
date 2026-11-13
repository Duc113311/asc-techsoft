<script setup>
import { ref } from 'vue'
import { useI18n } from '../i18n'

// card: adds white card styling (used in the bottom CTA of the About page)
defineProps({
  card: { type: Boolean, default: false },
})

const { currentLocale } = useI18n()

const form = ref({ name: '', email: '', company: '', phone: '', inquiry: '', message: '' })
const charCount = ref(0)
const submitted = ref(false)

function onMessageInput(e) { charCount.value = e.target.value.length }
function submitForm() { submitted.value = true }
</script>

<template>
  <div :class="['contact-form-col', { 'contact-form-card': card }]">
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
</template>
