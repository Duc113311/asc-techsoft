<template>
  <div class="skeleton-page" aria-busy="true" aria-label="Loading website">
    <header class="site-header">
      <div class="container header-inner">
        <span class="skeleton skeleton-logo"></span>
        <span class="skeleton skeleton-nav"></span>
        <span class="skeleton skeleton-button"></span>
      </div>
    </header>
    <main>
      <section class="skeleton-hero">
        <div class="container skeleton-hero-grid">
          <div>
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-title"></span>
            <span class="skeleton skeleton-title skeleton-title-short"></span>
            <span class="skeleton skeleton-copy"></span>
            <span class="skeleton skeleton-copy skeleton-copy-short"></span>
            <div class="skeleton-actions">
              <span class="skeleton skeleton-button skeleton-button-wide"></span>
              <span class="skeleton skeleton-button skeleton-button-wide"></span>
            </div>
          </div>
          <span class="skeleton skeleton-visual"></span>
        </div>
      </section>
      <section class="content-section">
        <div class="container">
          <span class="skeleton skeleton-section-title"></span>
          <span class="skeleton skeleton-section-subtitle"></span>
          <div class="skeleton-grid services-skeleton-grid">
            <span v-for="item in 4" :key="`service-${item}`" class="skeleton skeleton-card"></span>
          </div>
          <span class="skeleton skeleton-section-title product-skeleton-title"></span>
          <div class="skeleton-grid">
            <span v-for="item in 5" :key="`product-${item}`" class="skeleton skeleton-card product-skeleton-card"></span>
          </div>
        </div>
      </section>
      <section class="spacer-section">
        <div class="container">
          <span class="skeleton skeleton-cta"></span>
        </div>
      </section>
    </main>
  </div>
</template>
