<template>
  <div class="skeleton-page" aria-busy="true" aria-label="Loading About page">
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

      <!-- Story + Timeline -->
      <section class="skeleton-section">
        <div class="container skeleton-story-grid">
          <div class="skeleton-side-copy">
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w2"></span>
            <span class="skeleton skeleton-copy skeleton-copy-full"></span>
            <span class="skeleton skeleton-copy skeleton-copy-short"></span>
            <span class="skeleton skeleton-section-btn"></span>
          </div>
          <div class="skeleton-timeline">
            <div v-for="i in 4" :key="`tl-${i}`" class="skeleton-timeline-item">
              <span class="skeleton skeleton-timeline-dot"></span>
              <div>
                <span class="skeleton skeleton-timeline-year"></span>
                <span class="skeleton skeleton-timeline-title"></span>
                <span class="skeleton skeleton-copy skeleton-copy-short"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values -->
      <section class="skeleton-section">
        <div class="container">
          <span class="skeleton skeleton-eyebrow"></span>
          <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
          <span class="skeleton skeleton-copy skeleton-copy-full"></span>
          <div class="skeleton-values-grid">
            <div v-for="i in 4" :key="`val-${i}`" class="skeleton-value-card">
              <span class="skeleton skeleton-value-icon"></span>
              <span class="skeleton skeleton-step-title"></span>
              <span class="skeleton skeleton-copy skeleton-copy-full"></span>
              <span class="skeleton skeleton-copy skeleton-copy-short"></span>
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
