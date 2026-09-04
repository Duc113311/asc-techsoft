import { inject } from 'vue'

export const siteContentKey = Symbol('site-content')

export function useSiteContent() {
  const siteData = inject(siteContentKey, null)

  if (!siteData) {
    throw new Error('Site content is not available.')
  }

  return siteData
}
