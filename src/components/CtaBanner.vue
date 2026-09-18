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
        <p class="cta-contact-desc">
          Dù bạn chỉ có ý tưởng hay đã có kế hoạch rõ ràng, chúng tôi luôn sẵn sàng lắng nghe và đồng hành.
        </p>
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
        <h3 class="cta-form-title">NHẬN TƯ VẤN DỰ ÁN</h3>
        <div v-if="submitted" class="form-success-msg">
          Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm.
        </div>
        <form v-else class="cta-form" @submit.prevent="submitForm">
          <div class="form-row">
            <label class="form-field">
              <span>Họ và tên <em>*</em></span>
              <input v-model="form.name" type="text" placeholder="Nguyễn Văn A" required />
            </label>
            <label class="form-field">
              <span>Email <em>*</em></span>
              <input v-model="form.email" type="email" placeholder="you@example.com" required />
            </label>
          </div>
          <div class="form-row">
            <label class="form-field">
              <span>Loại sản phẩm</span>
              <select v-model="form.type">
                <option value="">Chọn loại sản phẩm</option>
                <option>Mobile App</option>
                <option>Web App</option>
                <option>SaaS</option>
                <option>Marketing</option>
                <option>Khác</option>
              </select>
            </label>
            <label class="form-field">
              <span>Ngân sách dự kiến</span>
              <select v-model="form.budget">
                <option value="">Chọn ngân sách</option>
                <option>Dưới 50 triệu</option>
                <option>50 - 200 triệu</option>
                <option>200 - 500 triệu</option>
                <option>Trên 500 triệu</option>
              </select>
            </label>
          </div>
          <div class="form-row">
            <label class="form-field">
              <span>Thời gian dự kiến</span>
              <select v-model="form.timeline">
                <option value="">Chọn thời gian</option>
                <option>1 - 3 tháng</option>
                <option>3 - 6 tháng</option>
                <option>6 - 12 tháng</option>
                <option>Trên 12 tháng</option>
              </select>
            </label>
            <label class="form-field">
              <span>Nội dung dự án</span>
              <textarea v-model="form.message" placeholder="Chia sẻ thêm về ý tưởng của bạn..." rows="3"></textarea>
            </label>
          </div>
          <button type="submit" class="btn-form-submit">Gửi yêu cầu &rarr;</button>
        </form>
      </div>
    </div>
  </section>
</template>
