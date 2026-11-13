// Applications shown on the Products page and in the detail dialog.
// platforms: 'android' | 'ios' | 'web'
// icon: optional image URL. Leave null to show an empty tile.
// details: dialog content. Empty values are hidden in the dialog.
//   stores.android / stores.ios / stores.web: store or web URLs (button shown only if set)
//   privacy: internal route of the privacy policy page (link shown only if set)
//   screenshots: image URLs for the carousel (empty = blank panel)

const blankDetails = (extra = {}) => ({
  version: '',
  updated: '',
  size: '',
  stores: { android: '', ios: '', web: '' },
  privacy: '',
  screenshots: [],
  ...extra,
})

export const appCatalog = [
  {
    name: 'AquaMind',
    category: 'Health & Hydration',
    description: 'Drink water reminder, track hydration, streaks, and healthy habits.',
    platforms: ['android', 'ios', 'web'],
    icon: null,
    link: '/contact',
    details: blankDetails({
      version: 'v1.4.2',
      updated: 'Oct 28, 2026',
      size: '28.4 MB',
      privacy: '/privacy/policy-aquamind',
    }),
  },
  {
    name: 'SkyWeather',
    category: 'Weather & Air Quality',
    description: 'Real-time weather forecast, AQI, and multi-day predictions worldwide.',
    platforms: ['android', 'web'],
    icon: null,
    link: '/contact',
    details: blankDetails(),
  },
  {
    name: 'Muvik',
    category: 'Offline Music Player',
    description: 'Listen to music offline, manage your library, lyrics, and listening statistics.',
    platforms: ['android', 'ios'],
    icon: null,
    link: '/contact',
    details: blankDetails({ privacy: '/privacy/policy-muvik' }),
  },
  {
    name: 'StepTracker',
    category: 'Running & Fitness',
    description: 'Count steps, track running routes, and analyze your daily activity.',
    platforms: ['android', 'ios'],
    icon: null,
    link: '/contact',
    details: blankDetails(),
  },
  {
    name: 'KidCare',
    category: 'Preschool Management',
    description: 'Comprehensive management for preschools: students, attendance, meals, and parent communication.',
    platforms: ['android', 'ios', 'web'],
    icon: null,
    link: '/contact',
    details: blankDetails(),
  },
  {
    name: 'GiftFlow AI',
    category: 'Wedding & Gift Management',
    description: 'Record gift envelopes by voice with AI, manage events, statistics, and export Excel.',
    platforms: ['android', 'web'],
    icon: null,
    link: '/contact',
    details: blankDetails(),
  },
  {
    name: 'MEO TCG',
    category: 'Pokémon TCG Market',
    description: 'Buy, sell, and check prices for Pokémon TCG cards with a trusted community.',
    platforms: ['android', 'web'],
    icon: null,
    link: '/contact',
    details: blankDetails(),
  },
  {
    name: 'FinancePro',
    category: 'Personal Finance',
    description: 'Manage income, expenses, budgets, and personal financial reports easily.',
    platforms: ['android', 'ios', 'web'],
    icon: null,
    link: '/contact',
    details: blankDetails(),
  },
  {
    name: 'MeetNear',
    category: 'Dating & Social',
    description: 'Find people nearby, match, and chat securely and privately.',
    platforms: ['android', 'ios'],
    icon: null,
    link: '/contact',
    details: blankDetails(),
  },
  {
    name: 'PrayerOnline',
    category: 'Online Worship',
    description: 'Daily prayers, online ceremonies, and spiritual community connection.',
    platforms: ['web'],
    icon: null,
    link: '/contact',
    details: blankDetails(),
  },
  {
    name: 'BizGo',
    category: 'Business Operations',
    description: 'A comprehensive platform for business management, operations, and teamwork.',
    platforms: ['android', 'web'],
    icon: null,
    link: '/contact',
    details: blankDetails(),
  },
  {
    name: 'WorkDay',
    category: 'Work & Team Management',
    description: 'Manage tasks, schedules, and team collaboration efficiently.',
    platforms: ['android', 'ios', 'web'],
    icon: null,
    link: '/contact',
    details: blankDetails({ privacy: '/privacy/policy-workday' }),
  },
]
