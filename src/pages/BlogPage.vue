<script setup>
import { computed, ref, watch } from 'vue'
import { feedbackImageUrl, sliderImageUrl } from '../assets'
import { useSiteContent } from '../shared/site-content'
import AppLink from '../components/AppLink.vue'
import { useI18n } from '../i18n'

const siteData = useSiteContent()
const activeCategory = ref('All')
const searchQuery = ref('')
const { locale, currentLocale } = useI18n()

watch(locale, () => {
  activeCategory.value = locale.value === 'vi' ? 'Tat ca' : 'All'
})

const filteredPosts = computed(() => {
  if (!siteData.value) return []
  const query = searchQuery.value.trim().toLowerCase()
  return siteData.value.blogPage.posts.filter((post) => {
    const matchesCategory = activeCategory.value === siteData.value.blogPage.categories[0] || post.category === activeCategory.value
    const matchesQuery = !query || `${post.title} ${post.excerpt}`.toLowerCase().includes(query)
    return matchesCategory && matchesQuery
  })
})

function postImage(post, index) {
  if (index === 0) return sliderImageUrl
  if (index === 5) return feedbackImageUrl
  return null
}
</script>

<template>
  <div v-if="siteData" class="blog-page">
    <section class="blog-hero">
      <div class="container blog-hero-grid">
        <div class="blog-hero-copy">
          <span class="eyebrow">{{ siteData.blogPage.eyebrow }}</span>
          <h1>{{ siteData.blogPage.title }}</h1>
          <p>{{ siteData.blogPage.description }}</p>
          <label class="blog-search">
            <span aria-hidden="true">⌕</span>
            <input v-model="searchQuery" type="search" :placeholder="siteData.blogPage.searchPlaceholder" />
          </label>
        </div>
        <div class="blog-hero-visual">
          <img :src="sliderImageUrl" alt="AscTechSoft AI product dashboard" decoding="async" />
        </div>
      </div>
    </section>

    <section class="blog-content-section content-section">
      <div class="container blog-layout">
        <main>
          <div class="blog-category-tabs" aria-label="Blog categories">
            <button
              v-for="category in siteData.blogPage.categories"
              :key="category"
              type="button"
              :class="{ 'blog-category-active': activeCategory === category }"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
          <div class="blog-post-list">
            <article v-for="(post, index) in filteredPosts" :key="post.title" class="card blog-post-card">
              <div class="blog-post-thumb" :class="`accent-${post.accent}`">
                <img v-if="postImage(post, index)" :src="postImage(post, index)" :alt="post.title" loading="lazy" decoding="async" />
                <span v-else class="blog-thumb-mark">{{ post.category.slice(0, 2).toUpperCase() }}</span>
              </div>
              <div class="blog-post-copy">
                <div class="blog-post-meta"><span>{{ post.category }}</span><time>{{ post.date }}</time></div>
                <h2>{{ post.title }}</h2>
                <p>{{ post.excerpt }}</p>
                <AppLink to="/contact" class="text-link">{{ siteData.blogPage.readMore }} &rarr;</AppLink>
              </div>
            </article>
            <p v-if="!filteredPosts.length" class="blog-empty">{{ currentLocale.ui.noArticles }}</p>
          </div>
        </main>

        <aside class="blog-sidebar">
          <section class="card blog-sidebar-card">
            <h2>{{ siteData.blogPage.categoriesTitle }}</h2>
            <button v-for="category in siteData.blogPage.categories" :key="category" type="button" @click="activeCategory = category">
              <span>{{ category }}</span><strong>{{ category === siteData.blogPage.categories[0] ? siteData.blogPage.posts.length : siteData.blogPage.posts.filter((post) => post.category === category).length }}</strong>
            </button>
          </section>
          <section class="card blog-sidebar-card">
            <h2>{{ siteData.blogPage.featuredTitle }}</h2>
            <AppLink v-for="post in siteData.blogPage.posts.slice(0, 3)" :key="post.title" to="/contact" class="featured-post">
              <span class="featured-post-mark">{{ post.category.slice(0, 2).toUpperCase() }}</span>
              <span><strong>{{ post.title }}</strong><small>{{ post.date }}</small></span>
            </AppLink>
          </section>
          <section class="card blog-subscribe-card">
            <h2>{{ siteData.blogPage.subscribeTitle }}</h2>
            <p>{{ siteData.blogPage.subscribeDescription }}</p>
            <input type="email" :placeholder="currentLocale.ui.emailPlaceholder" :aria-label="currentLocale.ui.emailPlaceholder" />
            <button type="button" class="btn btn-primary">{{ siteData.blogPage.subscribeButton }}</button>
          </section>
          <section class="blog-sidebar-cta">
            <h2>{{ siteData.blogPage.ctaTitle }}</h2>
            <p>{{ siteData.blogPage.ctaDescription }}</p>
            <AppLink to="/contact" class="btn btn-white">{{ siteData.blogPage.ctaButton }} <span>&rarr;</span></AppLink>
          </section>
        </aside>
      </div>
    </section>
  </div>
</template>
