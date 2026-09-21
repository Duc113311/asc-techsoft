<template>
  <div class="skeleton-page" aria-busy="true" aria-label="Loading Blog page">
    <header class="site-header">
      <div class="container header-inner">
        <span class="skeleton skeleton-logo"></span>
        <span class="skeleton skeleton-nav"></span>
        <span class="skeleton skeleton-button"></span>
      </div>
    </header>
    <main>
      <!-- Blog hero: 2-col with search bar -->
      <section class="skeleton-blog-hero">
        <div class="container skeleton-blog-hero-grid">
          <div>
            <span class="skeleton skeleton-eyebrow"></span>
            <span class="skeleton skeleton-h1 skeleton-h1-w2"></span>
            <span class="skeleton skeleton-h1 skeleton-h1-w3"></span>
            <span class="skeleton skeleton-desc skeleton-desc-full"></span>
            <span class="skeleton skeleton-search-bar"></span>
          </div>
          <span class="skeleton skeleton-visual"></span>
        </div>
      </section>

      <!-- Blog content: main + sidebar -->
      <section class="skeleton-section">
        <div class="container skeleton-blog-layout">
          <div>
            <div class="skeleton-blog-tabs">
              <span v-for="i in 5" :key="`tab-${i}`" class="skeleton skeleton-blog-tab"></span>
            </div>
            <div class="skeleton-blog-posts">
              <div v-for="i in 5" :key="`post-${i}`" class="skeleton-blog-post-card">
                <span class="skeleton skeleton-blog-post-thumb"></span>
                <div class="skeleton-blog-post-body">
                  <span class="skeleton skeleton-step-desc"></span>
                  <span class="skeleton skeleton-project-title"></span>
                  <span class="skeleton skeleton-copy skeleton-copy-full"></span>
                  <span class="skeleton skeleton-copy skeleton-copy-short"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="skeleton-sidebar">
            <span v-for="i in 3" :key="`card-${i}`" class="skeleton skeleton-sidebar-card"></span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
