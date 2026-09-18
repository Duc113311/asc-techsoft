<script setup>
import AppLink from './AppLink.vue'
import { img1Url, img3Url, img4Url } from '../assets'
import { useSiteContent } from '../shared/site-content'
import { useI18n } from '../i18n'

defineProps({ services: { type: Array, required: true } })
const siteData = useSiteContent()
const { currentLocale } = useI18n()

const pillarImgs = [img1Url, img3Url, img4Url]
const pillarTitles = ['BUILD', 'LAUNCH', 'GROW']
</script>

<template>
  <section class="solutions-section" id="services">
    <div class="container solutions-grid">
      <div class="solutions-copy">
        <span class="section-eyebrow">{{ currentLocale.ui.solutionsEyebrow }}</span>
        <h2 class="solutions-title">BA SỨC MẠNH.<br>MỘT HỆ SINH THÁI SỐ.</h2>
        <p class="solutions-desc">
          Chúng tôi kết hợp Công nghệ, Thiết kế và Marketing để giúp doanh nghiệp biến ý tưởng thành sản phẩm thực tế, tiếp cận đúng khách hàng và tăng trưởng mạnh mẽ.
        </p>
        <AppLink class="btn-dark" to="/contact">Khám phá dịch vụ &rarr;</AppLink>
      </div>
      <div class="solutions-pillars">
        <div
          v-for="(pillar, i) in currentLocale.ui.solutionsPillars"
          :key="i"
          class="pillar-card"
        >
          <img :src="pillarImgs[i]" :alt="pillarTitles[i]" class="pillar-img" loading="lazy" decoding="async" />
          <div class="pillar-info">
            <span class="pillar-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <strong class="pillar-title">{{ pillarTitles[i] }}</strong>
              <span class="pillar-sub">{{ pillar.sub }}</span>
              <p class="pillar-desc">{{ pillar.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
