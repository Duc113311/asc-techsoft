<template>
  <div class="skeleton-page" aria-busy="true" aria-label="Loading Contact page">
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

      <!-- Form + Contact Info -->
      <section class="skeleton-section">
        <div class="container skeleton-contact-main-grid">
          <div>
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
            <span class="skeleton skeleton-copy skeleton-copy-full"></span>
            <div class="skeleton-form-fields">
              <div class="skeleton-form-row">
                <span class="skeleton skeleton-form-field"></span>
                <span class="skeleton skeleton-form-field"></span>
              </div>
              <div class="skeleton-form-row">
                <span class="skeleton skeleton-form-field"></span>
                <span class="skeleton skeleton-form-field"></span>
              </div>
              <span class="skeleton skeleton-form-field"></span>
              <span class="skeleton skeleton-form-textarea"></span>
              <span class="skeleton skeleton-form-submit"></span>
            </div>
          </div>
          <div>
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
            <span class="skeleton skeleton-copy skeleton-copy-full"></span>
            <div class="skeleton-info-cards">
              <span v-for="i in 4" :key="`info-${i}`" class="skeleton skeleton-info-card"></span>
            </div>
          </div>
        </div>
      </section>

      <!-- Map + FAQ -->
      <section class="skeleton-section">
        <div class="container skeleton-map-faq-grid">
          <div>
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
            <span class="skeleton skeleton-map-block"></span>
          </div>
          <div>
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
            <span class="skeleton skeleton-copy skeleton-copy-full"></span>
            <div class="skeleton-faq-list">
              <span v-for="i in 5" :key="`faq-${i}`" class="skeleton skeleton-faq-item"></span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="skeleton-section">
        <div class="container">
          <span class="skeleton skeleton-cta"></span>
        </div>
      </section>
    </main>
  </div>
</template>
