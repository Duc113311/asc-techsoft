import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomePage from '../pages/HomePage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage.vue'
import TermsOfServicePage from '../pages/TermsOfServicePage.vue'
import AquaMindPrivacyPage from '../pages/AquaMindPrivacyPage.vue'
import WorkDayPrivacyPage from '../pages/WorkDayPrivacyPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/en',
  },
  {
    path: '/:locale(en|vn|ko|ja|zh|fr|it|id|es|pt|ar)',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
      {
        path: 'products',
        name: 'products',
        component: ProductsPage,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutPage,
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactPage,
      },
      {
        path: 'privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicyPage,
      },
      {
        path: 'terms',
        name: 'terms',
        component: TermsOfServicePage,
      },
    ],
  },
  { path: '/privacy/policy-aquamind', component: AquaMindPrivacyPage, name: 'aquamind-privacy' },
  { path: '/privacy/policy-workday', component: WorkDayPrivacyPage, name: 'workday-privacy' },
  { path: '/products', redirect: '/en/products' },
  { path: '/about', redirect: '/en/about' },
  { path: '/contact', redirect: '/en/contact' },
  { path: '/privacy-policy', redirect: '/en/privacy-policy' },
  { path: '/terms', redirect: '/en/terms' },
]

const pageTitles = {
  'home': 'AscTechSoft - Digital Product Development & Software Solutions',
  'products': 'Products & Services | AscTechSoft',
  'about': 'About Us | AscTechSoft - Software Development Company',
  'contact': 'Contact Us | AscTechSoft',
  'privacy-policy': 'Privacy Policy | AscTechSoft',
  'terms': 'Terms of Service | AscTechSoft',
  'aquamind-privacy': 'AquaMind Privacy Policy',
  'workday-privacy': 'WorkDay Privacy Policy',
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 96,
      }
    }

    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const title = pageTitles[to.name] || 'AscTechSoft'
  document.title = title
})

export default router
