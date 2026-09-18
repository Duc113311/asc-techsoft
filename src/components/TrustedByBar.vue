<script setup>
const partners = [
  { name: 'Shopify', icon: '🛍' },
  { name: 'Google Cloud', icon: '☁' },
  { name: 'App Store', icon: '⬆' },
  { name: 'Meta', icon: '∞' },
  { name: 'TikTok', icon: '♪' },
  { name: 'AWS', icon: '⚡' },
]
</script>

<template>
  <div class="trusted-bar">
    <div class="container trusted-inner">
      <span class="trusted-label">ĐƯỢC TIN TƯỞNG BỞI</span>
      <div class="trusted-logos">
        <span v-for="p in partners" :key="p.name" class="trusted-logo-item">
          <span class="trusted-icon">{{ p.icon }}</span>
          <strong>{{ p.name }}</strong>
        </span>
      </div>
      <span class="trusted-more">VÀ NHIỀU<br>DOANH NGHIỆP KHÁC</span>
    </div>
  </div>
</template>
