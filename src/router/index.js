import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomePage from '../pages/HomePage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage.vue'
import AquaMindPrivacyPage from '../pages/AquaMindPrivacyPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/en',
  },
  {
    path: '/:locale(en|vn)',
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
    ],
  },
  { path: '/privacy/policy-aquamind', component: AquaMindPrivacyPage, name: 'aquamind-privacy' },
  { path: '/products', redirect: '/en/products' },
  { path: '/about', redirect: '/en/about' },
  { path: '/contact', redirect: '/en/contact' },
  { path: '/privacy-policy', redirect: '/en/privacy-policy' },
]

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

export default router
