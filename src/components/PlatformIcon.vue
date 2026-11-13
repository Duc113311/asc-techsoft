<script setup>
defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <svg
    v-if="name === 'android'"
    class="platform-icon platform-android"
    viewBox="0 0 24 24"
    aria-label="Android"
    role="img"
  >
    <path d="M6.6 9a5.4 5.4 0 0 1 10.8 0z" fill="currentColor" />
    <path d="M6 9.6h12V18a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18z" fill="currentColor" />
    <rect x="3.4" y="10" width="2.2" height="6.4" rx="1.1" fill="currentColor" />
    <rect x="18.4" y="10" width="2.2" height="6.4" rx="1.1" fill="currentColor" />
    <circle cx="9.7" cy="6.8" r=".9" fill="#fff" />
    <circle cx="14.3" cy="6.8" r=".9" fill="#fff" />
    <path d="M8.5 3.2l1.2 1.7M15.5 3.2l-1.2 1.7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none" />
  </svg>
  <svg
    v-else-if="name === 'ios'"
    class="platform-icon platform-ios"
    viewBox="0 0 24 24"
    aria-label="iOS"
    role="img"
  >
    <path
      d="M16.4 12.6c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.2 9.1.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.3-2.6 1.3-2.7 0 0-2.7-1-2.7-4.1z"
      fill="currentColor"
    />
    <path d="M14.4 4.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.4-.6.7-1 1.7-.9 2.7 1 .1 2-.5 2.6-1.2z" fill="currentColor" />
  </svg>
  <svg
    v-else-if="name === 'web'"
    class="platform-icon platform-web"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    aria-label="Web"
    role="img"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
</template>
