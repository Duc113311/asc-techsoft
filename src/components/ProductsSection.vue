<script setup>
import AppLink from './AppLink.vue'
import { img1Url, img3Url, img4Url } from '../assets'
import { useSiteContent } from '../shared/site-content'
import { useI18n } from '../i18n'

defineProps({ products: { type: Array, required: true } })
const siteData = useSiteContent()
const { currentLocale } = useI18n()

const projectImgs = [img1Url, img3Url, img4Url]
const projectTags = [
  ['Flutter', 'Node.js', 'AWS'],
  ['Next.js', 'PostgreSQL', 'Docker'],
  ['React Native', 'Firebase', 'Maps API'],
]
</script>

<template>
  <section class="projects-section" id="products">
    <div class="container projects-grid">
      <div class="projects-copy">
        <span class="section-eyebrow">{{ currentLocale.ui.projectsEyebrow }}</span>
        <h2 class="projects-title">SẢN PHẨM THỰC TẾ.<br>KẾT QUẢ THẬT.</h2>
        <p class="projects-desc">{{ siteData.homePage.productsSubtitle }}</p>
        <AppLink class="btn-dark" to="/products">{{ siteData.homePage.viewAllProducts }} &rarr;</AppLink>
      </div>
      <div class="projects-cards">
        <AppLink
          v-for="(p, i) in currentLocale.ui.featuredProjects"
          :key="p.title"
          to="/products"
          class="project-card"
        >
          <div class="project-card-img">
            <img :src="projectImgs[i]" :alt="p.title" loading="lazy" decoding="async" />
          </div>
          <div class="project-card-body">
            <div class="project-card-meta">
              <div>
                <strong class="project-card-title">{{ p.title }}</strong>
                <p class="project-card-desc">{{ p.desc }}</p>
                <div class="project-tags">
                  <span v-for="tag in projectTags[i]" :key="tag" class="project-tag">{{ tag }}</span>
                </div>
              </div>
              <span class="project-card-arrow">&rarr;</span>
            </div>
          </div>
        </AppLink>
      </div>
    </div>
  </section>
</template>
