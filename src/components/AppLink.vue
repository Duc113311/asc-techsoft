<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '../i18n'

const props = defineProps({
  to: { type: [String, Object], required: true },
})
const { locale } = useI18n()

const isExternal = computed(() => typeof props.to === 'string' && /^(https?:|mailto:|tel:)/.test(props.to))
const isAnchor = computed(() => typeof props.to === 'string' && props.to.startsWith('#'))
const isRouterTarget = computed(() => !isExternal.value && !isAnchor.value)
const localizedTo = computed(() => {
  const prefix = locale.value === 'vi' ? '/vn' : '/en'

  if (typeof props.to === 'string') {
    if (props.to === '/en' || props.to === '/vn' || props.to.startsWith('/en/') || props.to.startsWith('/vn/')) return props.to
    return `${prefix}${props.to === '/' ? '' : props.to}`
  }

  if (props.to && typeof props.to === 'object' && props.to.path) {
    const path = props.to.path
    if (path.startsWith('/en') || path.startsWith('/vn')) return props.to
    return { ...props.to, path: `${prefix}${path === '/' ? '' : path}` }
  }

  return props.to
})
</script>

<template>
  <RouterLink v-if="isRouterTarget" :to="localizedTo">
    <slot />
  </RouterLink>
  <a v-else :href="to">
    <slot />
  </a>
</template>
