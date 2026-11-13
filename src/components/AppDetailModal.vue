<script setup>
import { computed, ref, watch, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import PlatformIcon from './PlatformIcon.vue'

const props = defineProps({
  app: { type: Object, default: null },
})
const emit = defineEmits(['close'])

const PLATFORM_LABEL = { android: 'Android', ios: 'iOS', web: 'Web' }
const PLACEHOLDER_SLIDES = 4
const shotIndex = ref(0)

const details = computed(() => props.app?.details ?? {})
const shots = computed(() => details.value.screenshots ?? [])
const slideCount = computed(() => shots.value.length || PLACEHOLDER_SLIDES)

// Store buttons are always shown to match the layout; a button without a URL is not clickable.
const storeButtons = computed(() => {
  const s = details.value.stores ?? {}
  return [
    { key: 'android', label: 'Get it on Google Play', href: s.android },
    { key: 'ios', label: 'Download on App Store', href: s.ios },
    { key: 'web', label: 'Open Web App', href: s.web },
  ]
})

const metaItems = computed(() => {
  const d = details.value
  return [
    d.version && { label: 'Version', value: d.version },
    d.updated && { label: 'Last Update', value: d.updated },
    d.size && { label: 'Size', value: d.size },
  ].filter(Boolean)
})

function prevShot() {
  if (shots.value.length) shotIndex.value = (shotIndex.value - 1 + shots.value.length) % shots.value.length
}
function nextShot() {
  if (shots.value.length) shotIndex.value = (shotIndex.value + 1) % shots.value.length
}

function onKey(e) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.app,
  (app) => {
    shotIndex.value = 0
    document.body.style.overflow = app ? 'hidden' : ''
    if (app) window.addEventListener('keydown', onKey)
    else window.removeEventListener('keydown', onKey)
  },
)

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="app" class="app-modal-overlay" @click.self="emit('close')">
      <div class="app-modal" role="dialog" aria-modal="true" :aria-label="app.name">
        <button class="app-modal-x" type="button" aria-label="Close" @click="emit('close')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <div class="app-modal-body">
          <!-- Left: info -->
          <div class="app-modal-info">
            <div class="app-modal-head">
              <div class="app-modal-icon">
                <img v-if="app.icon" :src="app.icon" :alt="app.name" decoding="async" />
              </div>
              <div>
                <h3 class="app-modal-name">
                  {{ app.name }}
                  <svg class="app-verified" viewBox="0 0 24 24" aria-label="Verified">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <p class="app-modal-cat">{{ app.category }}</p>
              </div>
            </div>

            <p class="app-modal-desc">{{ app.description }}</p>

            <div class="app-modal-chips">
              <span v-for="p in app.platforms" :key="p" class="app-modal-chip">
                <PlatformIcon :name="p" class="app-modal-chip-icon" />
                {{ PLATFORM_LABEL[p] }}
              </span>
            </div>

            <div class="app-modal-stores">
              <component
                :is="b.href ? 'a' : 'span'"
                v-for="b in storeButtons"
                :key="b.key"
                class="app-modal-store"
                :class="{ 'app-modal-store-primary': b.key === 'android', 'is-empty': !b.href }"
                v-bind="b.href ? { href: b.href, target: '_blank', rel: 'noopener' } : {}"
              >
                <span class="app-modal-store-left">
                  <svg v-if="b.key === 'android'" class="app-modal-store-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 2.8l10.2 9.2L4 21.2c-.4-.2-.6-.6-.6-1.1V3.9c0-.5.2-.9.6-1.1z" fill="#2fd1f3" />
                    <path d="M4 2.8l13.3 7.5-3.1 2.8z" fill="#33d26b" />
                    <path d="M4 21.2l10.2-9.2 3.1 2.8L4 21.2z" fill="#ff4a57" />
                    <path d="M17.3 10.3l2.8 1.6c.8.5.8 1.7 0 2.2l-2.8 1.6-3.1-2.7z" fill="#ffc91f" />
                  </svg>
                  <PlatformIcon v-else-if="b.key === 'ios'" name="ios" class="app-modal-store-icon" />
                  <PlatformIcon v-else name="web" class="app-modal-store-icon" />
                  <span>{{ b.label }}</span>
                </span>
                <svg v-if="b.href" class="app-modal-ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
                </svg>
              </component>
            </div>

            <ul class="app-modal-legal">
              <li v-if="details.privacy">
                <span class="app-modal-legal-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
                  <RouterLink :to="details.privacy">Privacy Policy</RouterLink>
                </span>
                <svg class="app-modal-ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
              </li>
              <li>
                <span class="app-modal-legal-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h8l4 4v14H6z" /><path d="M9 12h6M9 16h6" stroke-linecap="round" /></svg>
                  <RouterLink :to="details.terms">Terms of Service</RouterLink>
                </span>
                <svg class="app-modal-ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
              </li>
              <li>
                <span class="app-modal-legal-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.7" stroke-linecap="round" /><circle cx="12" cy="17" r=".6" fill="currentColor" /></svg>
                  <RouterLink :to="details.support">Support</RouterLink>
                </span>
                <svg class="app-modal-ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
              </li>
            </ul>
          </div>

          <!-- Right: slider. Shows blank frame until screenshots are added. -->
          <div class="app-modal-shots">
            <div class="app-modal-shot-frame">
              <img v-if="shots.length" :src="shots[shotIndex]" :alt="`${app.name} screenshot ${shotIndex + 1}`" decoding="async" />
              <button class="app-modal-nav app-modal-nav-prev" type="button" aria-label="Previous screenshot" @click="prevShot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button class="app-modal-nav app-modal-nav-next" type="button" aria-label="Next screenshot" @click="nextShot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div class="app-modal-dots">
              <span v-for="i in slideCount" :key="i" :class="{ active: i - 1 === shotIndex }"></span>
            </div>
          </div>
        </div>

        <div class="app-modal-foot">
          <div v-if="metaItems.length" class="app-modal-meta">
            <div v-for="m in metaItems" :key="m.label" class="app-modal-meta-item">
              <span class="app-modal-meta-label">{{ m.label }}</span>
              <span class="app-modal-meta-value">{{ m.value }}</span>
            </div>
          </div>
          <button class="app-modal-close-btn" type="button" @click="emit('close')">Close</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
