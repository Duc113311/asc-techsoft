<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { appCatalog, slugOf } from '../data/products'
import { siteData } from '../data/site'

// Shared legal page (same layout as the Muvik privacy page) for apps without a dedicated page.
// Only the app name, icon, and contact email change. Shared wording stays the same.
const props = defineProps({
  type: { type: String, required: true }, // 'privacy' | 'terms' | 'support'
  slug: { type: String, required: true },
})

const LAST_UPDATED = 'October 27, 2026'
const EMAIL = siteData.footer.contact.email
const TITLES = { privacy: 'Privacy Policy', terms: 'Terms of Service', support: 'Support' }

const app = computed(() => appCatalog.find((a) => slugOf(a.name) === props.slug) ?? null)
const name = computed(() => app.value?.name ?? '')
const title = computed(() => TITLES[props.type] ?? '')

// Each section: heading, paragraphs, optional bullet list.
const PAGES = {
  privacy: (n) => [
    { h: null, p: [`${n} ("we", "our", or "the app") is published by AscTechSoft. This Privacy Policy explains how information is collected, used, and handled when you use ${n}.`, 'By using the app, you acknowledge the practices described in this Privacy Policy.'] },
    { h: 'Information We Collect', p: [`${n} collects only the information needed to provide its features. Where possible, information stays on your device.`] },
    { h: 'How We Use Information', p: ['We use information to operate and improve the app, respond to your requests, keep the service secure, and comply with the law.'] },
    { h: 'Third-Party Services', p: ['The app may use third-party services that automatically process limited device, diagnostic, or usage information. These providers process information under their own privacy policies.'], ul: ['Google Play Services', 'Firebase Crashlytics, for crash reports so we can fix bugs', 'Firebase Analytics, for aggregated usage information'] },
    { h: 'Permissions', p: ['The app requests permissions only when they are needed for the features you use. You can review or revoke them at any time in Android Settings → Apps → ' + n + ' → Permissions.'] },
    { h: 'Service Providers', p: ['We do not sell your personal information and we do not share it for third-party advertising. Service providers may process information only as needed to provide their services.'] },
    { h: 'Data Retention', p: [`Data stored on your device remains there until you delete it in the app, clear the app's storage, or uninstall ${n}.`] },
    { h: 'How to Delete Your Data', p: [`Android Settings → Apps → ${n} → Storage → Clear storage, or uninstall the app. This cannot be undone.`, `For requests about data processed by our service providers, contact us at ${EMAIL}.`] },
    { h: 'Security', p: ['We take reasonable administrative and technical measures to protect information. No electronic storage or transmission method can be guaranteed to be completely secure.'] },
    { h: "Children's Privacy", p: [`${n} is not directed toward children under the minimum age required to consent to data processing in their jurisdiction. If you believe a child has provided personal information, please contact us so we can take action.`] },
    { h: 'Changes to This Privacy Policy', p: ['We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised Last updated date.'] },
    { h: 'Contact Us', p: ['If you have questions or requests about this Privacy Policy, please contact:', `AscTechSoft, ${EMAIL}`] },
  ],
  terms: (n) => [
    { h: null, p: [`These Terms of Service ("Terms") govern your use of ${n}, published by AscTechSoft. By using the app, you agree to these Terms. If you do not agree, please do not use the app.`] },
    { h: 'Use of the App', p: [`${n} is provided for your personal, non-commercial use. You agree not to misuse the app, interfere with its operation, or use it for unlawful purposes.`] },
    { h: 'Accounts', p: ['You are responsible for keeping your login details safe and for all activity that happens under your account.'] },
    { h: 'Intellectual Property', p: [`${n}, including its design, text, graphics, and software, belongs to AscTechSoft and is protected by law. These Terms do not give you any ownership of it.`] },
    { h: 'Disclaimer', p: [`${n} is provided "as is" without warranties of any kind. To the extent permitted by law, we are not liable for indirect or consequential damages arising from your use of the app.`] },
    { h: 'Changes to These Terms', p: ['We may update these Terms from time to time. Continued use of the app after the updated Terms are posted means you accept them.'] },
    { h: 'Contact Us', p: ['If you have questions about these Terms, please contact:', `AscTechSoft, ${EMAIL}`] },
  ],
  support: (n) => [
    { h: null, p: [`Need help with ${n}? We are here to help. Find answers below, or contact our support team.`] },
    { h: 'Common Questions', p: [`If ${n} does not open or sync correctly, update the app to the latest version and restart your device. If the problem continues, send us your device model and app version.`] },
    { h: 'Contact Support', p: ['Email us and we will reply as soon as possible:', EMAIL] },
    { h: 'Feedback', p: ['We welcome your suggestions for new features and improvements.'] },
  ],
}

const sections = computed(() => (app.value ? PAGES[props.type](name.value) : []))
</script>

<template>
  <div class="pp-page">
    <template v-if="app">
      <div class="pp-hero">
        <div class="pp-container pp-hero-inner">
          <div class="pp-hero-text">
            <span class="pp-eyebrow">Legal</span>
            <h1>{{ title }}<br /><span>{{ name }}</span></h1>
            <p class="pp-updated">Last updated: {{ LAST_UPDATED }}</p>
          </div>
          <div class="pp-logo">
            <img v-if="app.icon" :src="app.icon" :alt="`${name} app icon`" width="128" height="128" />
          </div>
        </div>
      </div>

      <div class="pp-body">
        <div class="pp-container pp-content">
          <template v-for="(s, i) in sections" :key="i">
            <h2 v-if="s.h">{{ s.h }}</h2>
            <p v-for="(para, j) in s.p" :key="j">{{ para }}</p>
            <ul v-if="s.ul">
              <li v-for="item in s.ul" :key="item">{{ item }}</li>
            </ul>
          </template>

          <p v-if="type === 'support'" class="pp-actions">
            <RouterLink class="pp-link" to="/en/contact">Contact us &rarr;</RouterLink>
          </p>
        </div>
      </div>
    </template>

    <div v-else class="pp-hero">
      <div class="pp-container">
        <h1>Page not found</h1>
        <p class="pp-updated"><RouterLink class="pp-link" to="/en/products">Back to products &rarr;</RouterLink></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pp-page {
  min-height: 100vh;
  background: #f6f4fd;
  font-family: system-ui, -apple-system, sans-serif;
}
.pp-hero {
  background: linear-gradient(135deg, #7c5cf4, #4a2fc2);
  padding: 64px 24px 48px;
  color: #fff;
}
.pp-container { max-width: 820px; margin: 0 auto; }
.pp-hero-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.pp-logo {
  flex-shrink: 0;
  width: 128px;
  height: 128px;
  border-radius: 30px;
  overflow: hidden;
  background: rgba(255,255,255,0.12);
  border: 1px dashed rgba(255,255,255,0.35);
  box-shadow: 0 18px 40px rgba(20, 10, 70, 0.35);
}
.pp-logo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.pp-eyebrow {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.pp-hero h1 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 12px;
  letter-spacing: -0.03em;
}
.pp-hero h1 span { opacity: 0.75; }
.pp-updated { color: rgba(255,255,255,0.7); font-size: 0.85rem; margin: 0; }
.pp-body { padding: 48px 24px 80px; }
.pp-content {
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 22px 60px rgba(74,47,194,0.10);
  padding: 48px 52px;
}
.pp-content h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1538;
  margin: 36px 0 12px;
  padding-left: 14px;
  border-left: 3px solid #7c5cf4;
}
.pp-content p { font-size: 1.2rem; line-height: 1.8; color: #5f5b7a; margin: 0 0 14px; }
.pp-content ul { margin: 0 0 16px 0; padding-left: 20px; }
.pp-content li { font-size: 1.2rem; line-height: 1.8; color: #5f5b7a; margin-bottom: 8px; }
.pp-content a, .pp-link { color: #6a49e8; text-decoration: none; font-weight: 700; }
.pp-content a:hover, .pp-link:hover { text-decoration: underline; }
.pp-actions { margin-top: 28px; }
@media (max-width: 640px) {
  .pp-logo { width: 72px; height: 72px; border-radius: 18px; }
  .pp-content { padding: 28px 20px; }
}
</style>
