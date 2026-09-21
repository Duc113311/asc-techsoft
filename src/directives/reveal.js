const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target
        const delay = el._revealDelay || 0
        setTimeout(() => el.classList.add('revealed'), delay)
        observer.unobserve(el)
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
)

export const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    el._revealDelay = typeof binding.value === 'number' ? binding.value : 0
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
