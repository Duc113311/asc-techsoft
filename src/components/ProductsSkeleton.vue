<template>
  <div class="skeleton-page" aria-busy="true" aria-label="Loading Products page">
    <header class="site-header">
      <div class="container header-inner">
        <span class="skeleton skeleton-logo"></span>
        <span class="skeleton skeleton-nav"></span>
        <span class="skeleton skeleton-button"></span>
      </div>
    </header>
    <main>
      <!-- Hero: 2-col same structure as page-hero-section -->
      <section class="skeleton-page-hero">
        <div class="container skeleton-hero-grid">
          <div>
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-h1 skeleton-h1-w1"></span>
            <span class="skeleton skeleton-h1 skeleton-h1-w2"></span>
            <span class="skeleton skeleton-h1 skeleton-h1-w3"></span>
            <span class="skeleton skeleton-desc skeleton-desc-full"></span>
            <span class="skeleton skeleton-desc skeleton-desc-short"></span>
            <div class="skeleton-actions">
              <span class="skeleton skeleton-cta-btn"></span>
              <span class="skeleton skeleton-ghost-btn"></span>
            </div>
          </div>
          <span class="skeleton skeleton-visual"></span>
        </div>
      </section>

      <!-- Catalog -->
      <section class="skeleton-section">
        <div class="container">
          <div class="skeleton-catalog-header">
            <div>
              <span class="skeleton skeleton-eyebrow"></span>
              <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
              <span class="skeleton skeleton-section-h2 skeleton-section-h2-w2"></span>
              <span class="skeleton skeleton-copy skeleton-copy-full"></span>
            </div>
            <span class="skeleton skeleton-section-btn"></span>
          </div>
          <div class="skeleton-filter-tabs">
            <span v-for="i in 5" :key="`tab-${i}`" class="skeleton skeleton-filter-tab"></span>
          </div>
          <div class="skeleton-catalog-grid">
            <div v-for="i in 6" :key="`prod-${i}`" class="skeleton-catalog-card">
              <span class="skeleton skeleton-catalog-card-img"></span>
              <div class="skeleton-catalog-card-body">
                <span class="skeleton skeleton-catalog-card-tag"></span>
                <span class="skeleton skeleton-catalog-card-title"></span>
                <span class="skeleton skeleton-copy skeleton-copy-short"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
