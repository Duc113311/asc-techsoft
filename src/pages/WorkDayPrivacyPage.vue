<template>
  <div class="pp-page">
    <div class="pp-hero">
      <div class="pp-container">
        <span class="pp-eyebrow">Legal</span>
        <h1>Privacy Policy<br /><span>WorkDay</span></h1>
        <p class="pp-updated">Last updated: September 21, 2026</p>
      </div>
    </div>

    <div class="pp-body">
      <div class="pp-container pp-content">

        <p>WorkDay is an attendance-tracking and payroll app built for small businesses. This policy explains, in plain terms, what information WorkDay collects, where it actually lives, and how you can control or delete it.</p>

        <div class="pp-card pp-quickfacts">
          <h3>Quick facts</h3>
          <ul>
            <li>Stored in the cloud (Firebase), synced to your account — <strong>not</strong> local-only.</li>
            <li>Reminders are local only — no push notifications from a server.</li>
            <li>No ads, no analytics or tracking SDKs of any kind.</li>
            <li>You can delete your login, or ask us to erase your business data.</li>
          </ul>
        </div>

        <h2>1. Information we collect</h2>
        <p>WorkDay collects only what it needs to run daily attendance and payroll for one business:</p>
        <ul>
          <li><strong>Account information.</strong> When a business owner creates a WorkDay account, Firebase Authentication stores an email address and a securely hashed password (we never see or store it as plain text), plus a display name and the time of your last sign-in.</li>
          <li><strong>Business and employee records, entered by the account holder.</strong> Organisation name; employee profiles (name, phone number, daily wage, overtime rate, active/inactive status); daily attendance records (status, work units, overtime minutes); payroll settings (currency, pay-period start day, holiday dates, holiday pay multiplier, standard work hours per day).</li>
          <li><strong>App preferences.</strong> Your chosen daily reminder time, quick-entry overtime presets, and whether "remember login" is turned on for a device.</li>
          <li><strong>Feedback.</strong> A star rating and optional comment, only if you choose to rate the app.</li>
        </ul>
        <p>Employees do not create their own WorkDay accounts or sign in — this information is entered and controlled entirely by the business owner, who is responsible for informing employees that it is recorded.</p>

        <h2>2. Where your data is stored</h2>
        <p>All business, employee, and attendance data is stored in Google's <strong>Cloud Firestore</strong>, tied to your account, and encrypted in transit. WorkDay is <strong>not</strong> a local-only app: it is designed to keep your data synced so it's available if you ever sign in from another device.</p>
        <p>The app also keeps a temporary offline copy on your phone (Firestore's built-in offline cache) so you can keep taking attendance without a signal — it syncs automatically once you're back online. Uninstalling the app or clearing its storage removes that temporary copy only; it does not delete anything from the cloud.</p>

        <h2>3. Who can access your data</h2>
        <p>Your business's records are isolated from every other business on WorkDay by Firebase security rules tied to your account — no other customer can read or write them. AscTechSoft keeps one internal, <strong>read-only</strong> support account that can view aggregated reports (attendance totals and payroll summaries) across businesses, used only to help customers and diagnose issues; it cannot edit or delete your records.</p>

        <h2>4. Third-party services</h2>
        <p>WorkDay is built on Google Firebase. The following Firebase services process data on our behalf, under Google's own privacy policy:</p>
        <div class="pp-card">
          <ul>
            <li><strong>Firebase Authentication</strong> — manages sign-in and password security.</li>
            <li><strong>Cloud Firestore</strong> — stores and syncs your business, employee, attendance, and payroll data.</li>
            <li><strong>Firebase Remote Config</strong> — lets us turn optional features on or off without an app update; it only downloads small configuration values, never your business data.</li>
          </ul>
        </div>
        <p>These services may process basic technical metadata needed to operate, such as your device's IP address. <strong>WorkDay does not use</strong> Firebase Analytics, Firebase Crashlytics, Firebase Cloud Messaging, advertising SDKs, or any other analytics or tracking service.</p>

        <h2>5. Notifications</h2>
        <p>WorkDay can remind you, at a time you choose, if some employees haven't been marked present by the end of the day. This reminder is scheduled on your own device using Android's WorkManager and shown as a <strong>local notification</strong> — it is not a push message sent from our servers, and no attendance data passes through a WorkDay server to deliver it. Turn it off any time in <em>Settings → General</em>, or disable notification permission for WorkDay in Android's system settings.</p>

        <h2>6. Permissions</h2>
        <p>WorkDay requests exactly one Android permission: <strong>Notifications</strong> (<code>POST_NOTIFICATIONS</code>), to show the daily reminder above. It does not request exact-alarm scheduling, camera, location, contacts, microphone, or storage access — exporting a payroll report to Excel uses temporary app-private storage that doesn't need a storage permission, and is shared onward only through the share sheet you choose (for example Zalo or Google Drive).</p>

        <h2>7. Data retention</h2>
        <p>Business, employee, and attendance records are kept for as long as your account exists, so payroll history stays available across months and years — WorkDay never deletes it automatically. Reviews you submit are stored indefinitely along with the app version you used. Technical metadata handled by Firebase infrastructure follows Google's own retention schedule.</p>

        <h2>8. Deleting your data</h2>
        <p>WorkDay separates these two actions on purpose, so a login mistake never destroys months of payroll history:</p>
        <div class="pp-card">
          <ul>
            <li><strong>Delete your login only.</strong> In the app, go to <em>Settings → Account → Delete account</em> and confirm with your password. Your sign-in is permanently removed and cannot be recovered — you won't be able to sign back in. Your business's attendance and payroll records are kept, in case you need them restored.</li>
            <li><strong>Delete your business data too.</strong> Contact us (below) and we will permanently erase your business's records from Cloud Firestore.</li>
          </ul>
        </div>

        <h2>9. Security</h2>
        <p>Data moving to and from Firebase is encrypted (HTTPS/TLS), and access to your business's records is restricted to your account by Firebase security rules. Passwords are stored in a form that neither we nor Google can read back. No method of transmission or storage can be guaranteed to be completely secure.</p>

        <h2>10. Children's privacy</h2>
        <p>WorkDay is a business tool intended for use by business owners to manage employees, and it is not directed at children. We do not knowingly collect personal information from children. If you believe a child's information has been entered into WorkDay, contact us and we will remove it.</p>

        <h2>11. Links to other websites</h2>
        <p>WorkDay's Play Store listing and support channels may link to third-party sites we do not operate. We are not responsible for their content or privacy practices, and recommend reviewing the privacy policy of any external site you visit.</p>

        <h2>12. Changes to this policy</h2>
        <p>We may update this policy to reflect changes in the app, applicable law, or the third-party services listed above. Updates are posted on this page with a revised "Last updated" date, and take effect when published unless a longer notice period is required by law.</p>

        <h2>13. Contact us</h2>
        <p>Questions, privacy concerns, or data-deletion requests can go to:<br />
        <strong>AscTechSoft</strong> — <a href="mailto:contact.support@asctechsoft.com">contact.support@asctechsoft.com</a></p>

      </div>
    </div>
  </div>
</template>

<style scoped>
.pp-page {
  min-height: 100vh;
  background: #f4f6fb;
  font-family: system-ui, -apple-system, sans-serif;
}
.pp-hero {
  background: linear-gradient(135deg, #2e5bff, #1637b9);
  padding: 64px 24px 48px;
  color: #fff;
}
.pp-container { max-width: 820px; margin: 0 auto; }
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
  box-shadow: 0 22px 60px rgba(28,57,152,0.10);
  padding: 48px 52px;
}
.pp-content h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #15203b;
  margin: 36px 0 12px;
  padding-left: 14px;
  border-left: 3px solid #2e5bff;
}
.pp-content h3 { font-size: 1rem; font-weight: 700; color: #15203b; margin: 16px 0 8px; }
.pp-content p { font-size: 1.2rem; line-height: 1.8; color: #5f6b8a; margin: 0 0 14px; }
.pp-content ul { margin: 0 0 16px 0; padding-left: 20px; }
.pp-content li { font-size: 1.2rem; line-height: 1.8; color: #5f6b8a; margin-bottom: 8px; }
.pp-content strong { color: #15203b; }
.pp-content em { color: #15203b; font-style: italic; }
.pp-content code { background: #f0f4ff; color: #2e5bff; padding: 1px 6px; border-radius: 4px; font-size: 0.95em; }
.pp-content a { color: #2e5bff; text-decoration: none; }
.pp-content a:hover { text-decoration: underline; }
.pp-card {
  background: #f4f6fb;
  border-radius: 16px;
  padding: 20px 24px;
  margin: 16px 0 24px;
  border: 1px solid rgba(33,62,160,0.10);
}
.pp-quickfacts h3 { margin-top: 0; }
@media (max-width: 640px) {
  .pp-content { padding: 28px 20px; }
}
</style>
