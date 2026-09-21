<template>
  <div class="skeleton-page" aria-busy="true" aria-label="Loading website">
    <!-- Header -->
    <header class="site-header">
      <div class="container header-inner">
        <span class="skeleton skeleton-logo"></span>
        <span class="skeleton skeleton-nav"></span>
        <span class="skeleton skeleton-button"></span>
      </div>
    </header>
    <main>
      <!-- Hero: 2-col copy + globe visual -->
      <section class="skeleton-hero">
        <div class="container skeleton-hero-grid">
          <div>
            <span class="skeleton skeleton-eyebrow"></span>
            <!-- h1: 3 lines WE BUILD / DIGITAL PRODUCTS / THAT GROW. -->
            <span class="skeleton skeleton-h1 skeleton-h1-w1"></span>
            <span class="skeleton skeleton-h1 skeleton-h1-w2"></span>
            <span class="skeleton skeleton-h1 skeleton-h1-w3"></span>
            <!-- description 2 lines -->
            <span class="skeleton skeleton-desc skeleton-desc-full"></span>
            <span class="skeleton skeleton-desc skeleton-desc-short"></span>
            <!-- CTA buttons -->
            <div class="skeleton-actions">
              <span class="skeleton skeleton-cta-btn"></span>
              <span class="skeleton skeleton-ghost-btn"></span>
            </div>
          </div>
          <span class="skeleton skeleton-visual"></span>
        </div>
      </section>

      <!-- Solutions: 2-col (copy left + 3 pillar cards right) -->
      <section class="skeleton-section">
        <div class="container skeleton-solutions-grid">
          <div class="skeleton-side-copy">
            <span class="skeleton skeleton-eyebrow"></span>
            <!-- h2: BA SỨC MẠNH. / MỘT HỆ SINH THÁI SỐ. -->
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w2"></span>
            <span class="skeleton skeleton-copy skeleton-copy-full"></span>
            <span class="skeleton skeleton-copy skeleton-copy-short"></span>
            <span class="skeleton skeleton-section-btn"></span>
          </div>
          <div class="skeleton-pillars">
            <!-- 3 pillar cards: image(120×100) + num circle + title + 2 desc lines -->
            <div v-for="i in 3" :key="`pillar-${i}`" class="skeleton-pillar-row">
              <span class="skeleton skeleton-pillar-img"></span>
              <div class="skeleton-pillar-info">
                <span class="skeleton skeleton-pillar-num"></span>
                <div>
                  <span class="skeleton skeleton-pillar-title"></span>
                  <span class="skeleton skeleton-copy skeleton-copy-full"></span>
                  <span class="skeleton skeleton-copy skeleton-copy-short"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TrustedByBar: label + 8 tech pills + end text -->
      <div class="skeleton-trusted-bar">
        <div class="container skeleton-trusted-inner">
          <span class="skeleton skeleton-trusted-label"></span>
          <span v-for="i in 8" :key="`tech-${i}`" class="skeleton skeleton-trusted-item"></span>
          <span class="skeleton skeleton-trusted-label"></span>
        </div>
      </div>

      <!-- Products: 2-col (copy left + 3 project cards right) -->
      <section class="skeleton-section">
        <div class="container skeleton-projects-grid">
          <div class="skeleton-side-copy">
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
            <span class="skeleton skeleton-copy skeleton-copy-full"></span>
            <span class="skeleton skeleton-copy skeleton-copy-short"></span>
            <span class="skeleton skeleton-section-btn"></span>
          </div>
          <!-- 3 project cards: img(160px) + body(title + desc + tags) -->
          <div class="skeleton-project-cards">
            <div v-for="i in 3" :key="`proj-${i}`" class="skeleton-project-card">
              <span class="skeleton skeleton-project-img"></span>
              <div class="skeleton-project-body">
                <span class="skeleton skeleton-project-title"></span>
                <span class="skeleton skeleton-copy skeleton-copy-short"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process: 2-col (copy left + 5 step items right) -->
      <section class="skeleton-section">
        <div class="container skeleton-process-grid">
          <div class="skeleton-side-copy">
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w1"></span>
            <span class="skeleton skeleton-section-h2 skeleton-section-h2-w2"></span>
            <span class="skeleton skeleton-copy skeleton-copy-full"></span>
          </div>
          <div class="skeleton-steps">
            <div v-for="i in 5" :key="`step-${i}`" class="skeleton-step-item">
              <span class="skeleton skeleton-step-circle"></span>
              <div class="skeleton-step-text">
                <span class="skeleton skeleton-step-title"></span>
                <span class="skeleton skeleton-step-desc"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA banner -->
      <section class="skeleton-section">
        <div class="container">
          <span class="skeleton skeleton-cta"></span>
        </div>
      </section>
    </main>
  </div>
</template>
