<script setup>
import { feedbackImageUrl } from '../assets'
import AppLink from './AppLink.vue'

defineProps({ cta: { type: Object, required: true } })
</script>

<template>
  <section class="cta-banner" id="contact">
    <div class="cta-copy">
      <h2>{{ cta.title }}</h2>
      <p>{{ cta.description }}</p>
      <AppLink class="btn btn-white" :to="cta.buttonTarget">{{ cta.button }}</AppLink>
    </div>
    <div class="cta-illustration">
      <img class="cta-image" :src="feedbackImageUrl" alt="The AscTechSoft team turning an idea into a real product" loading="lazy" decoding="async" />
    </div>
  </section>
</template>
