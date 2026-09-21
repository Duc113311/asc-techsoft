<script setup>
const techs = [
  { name: 'Flutter', icon: '🎯' },
  { name: 'React', icon: '⚛' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Docker', icon: '🐳' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'Google Cloud', icon: '☁' },
  { name: 'AWS', icon: '⚡' },
]
</script>

<template>
  <div class="trusted-bar">
    <div class="container trusted-inner">
      <span class="trusted-label trusted-fade-in">CÔNG NGHỆ ÁP DỤNG</span>
      <div class="trusted-logos">
        <span
          v-for="(t, i) in techs"
          :key="t.name"
          class="trusted-logo-item trusted-fade-in"
          :style="{ animationDelay: `${i * 60}ms` }"
        >
          <span class="trusted-icon">{{ t.icon }}</span>
          <strong>{{ t.name }}</strong>
        </span>
      </div>
      <span class="trusted-more trusted-fade-in" :style="{ animationDelay: `${techs.length * 60}ms` }">VÀ NHIỀU<br>HƠN NỮA</span>
    </div>
  </div>
</template>
