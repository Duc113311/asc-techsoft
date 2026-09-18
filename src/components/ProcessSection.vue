<script setup>
import { ref } from 'vue'
import { useI18n } from '../i18n'

const { currentLocale } = useI18n()
const active = ref(0)
</script>

<template>
  <section class="process-section" id="process">
    <div class="container process-grid">
      <div class="process-copy">
        <span class="section-eyebrow">{{ currentLocale.ui.processEyebrow }}</span>
        <h2 class="process-title">{{ currentLocale.ui.processTitle1 }}<br>{{ currentLocale.ui.processTitle2 }}</h2>
        <p class="process-desc">{{ currentLocale.ui.processDesc }}</p>
      </div>

      <div class="process-steps">
        <div class="steps-rail">
          <button
            v-for="(step, i) in currentLocale.ui.processSteps"
            :key="step.num"
            class="step-circle"
            :class="{ active: active === i }"
            @click="active = i"
          >{{ step.num }}</button>
        </div>

        <div class="steps-body">
          <button
            v-for="(step, i) in currentLocale.ui.processSteps"
            :key="step.num"
            class="step-item"
            :class="{ active: active === i }"
            @click="active = i"
          >
            <span class="step-icon">{{ step.icon }}</span>
            <strong class="step-title">{{ step.title }}</strong>
            <p class="step-desc">{{ step.desc }}</p>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
