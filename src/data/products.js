// Applications shown on the Products page and in the detail dialog.
// platforms: 'android' | 'ios' | 'web'
// icon: optional image URL. Leave null to show an empty tile.
// details: dialog content. Empty values are hidden in the dialog.
//   stores.android / stores.ios / stores.web: store or web URLs (button shown only if set)
//   privacy: internal route of the privacy policy page (link shown only if set)
//   screenshots: image URLs for the carousel (empty = blank panel)

import imgAquaMindLogo from '../assets/images/img_AquaMind.png'
import imgBizGoLogo from '../assets/images/img_BizGo.png'
import imgFinanceProLogo from '../assets/images/img_FinancePro.png'
import imgGiftFlowAiLogo from '../assets/images/img_GiftFlowAI.png'
import imgHappyKidsLogo from '../assets/images/img_HappyKids.png'
import imgMuvikLogo from '../assets/images/img_Muvik.png'
import imgSkyWeatherLogo from '../assets/images/img_SkyWeather.png'
import imgStepTrackerLogo from '../assets/images/img_StepTracker.png'
import imgWorkDayLogo from '../assets/images/img_WorkDay.png'

// Placeholder legal links per app, e.g. /privacy/policy-skyweather. Pages are added later.
export const slugOf = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '')

const blankDetails = (name, extra = {}) => ({
  version: '',
  updated: '',
  size: '',
  stores: { android: '', ios: '', web: '' },
  privacy: `/privacy/policy-${slugOf(name)}`,
  terms: `/terms/${slugOf(name)}`,
  support: `/support/${slugOf(name)}`,
  screenshots: [],
  ...extra,
})

export const appCatalog = [
  {
    name: 'AquaMind',
    category: 'Health & Hydration',
    description: 'Drink water reminder, track hydration, streaks, and healthy habits.',
    platforms: ['android', 'ios', 'web'],
    icon: imgAquaMindLogo,
    link: '/contact',
    details: blankDetails('AquaMind', {
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
    icon: imgSkyWeatherLogo,
    link: '/contact',
    details: blankDetails('SkyWeather'),
  },
  {
    name: 'Muvik',
    category: 'Offline Music Player',
    description: 'Listen to music offline, manage your library, lyrics, and listening statistics.',
    platforms: ['android', 'ios'],
    icon: imgMuvikLogo,
    link: '/contact',
    details: blankDetails('Muvik', { privacy: '/privacy/policy-muvik' }),
  },
  {
    name: 'StepTracker',
    category: 'Running & Fitness',
    description: 'Count steps, track running routes, and analyze your daily activity.',
    platforms: ['android', 'ios'],
    icon: imgStepTrackerLogo,
    link: '/contact',
    details: blankDetails('StepTracker'),
  },
  {
    name: 'HappyKids',
    category: 'Preschool Management',
    description: 'Comprehensive management for preschools: students, attendance, meals, and parent communication.',
    platforms: ['android', 'ios', 'web'],
    icon: imgHappyKidsLogo,
    link: '/contact',
    details: blankDetails('HappyKids'),
  },
  {
    name: 'GiftFlow AI',
    category: 'Wedding & Gift Management',
    description: 'Record gift envelopes by voice with AI, manage events, statistics, and export Excel.',
    platforms: ['android', 'web'],
    icon: imgGiftFlowAiLogo,
    link: '/contact',
    details: blankDetails('GiftFlow AI'),
  },
  {
    name: 'MEO TCG',
    category: 'Pokémon TCG Market',
    description: 'Buy, sell, and check prices for Pokémon TCG cards with a trusted community.',
    platforms: ['android', 'web'],
    icon: null,
    link: '/contact',
    details: blankDetails('MEO TCG'),
  },
  {
    name: 'FinancePro',
    category: 'Personal Finance',
    description: 'Manage income, expenses, budgets, and personal financial reports easily.',
    platforms: ['android', 'ios', 'web'],
    icon: imgFinanceProLogo,
    link: '/contact',
    details: blankDetails('FinancePro'),
  },
  {
    name: 'MeetNear',
    category: 'Dating & Social',
    description: 'Find people nearby, match, and chat securely and privately.',
    platforms: ['android', 'ios'],
    icon: null,
    link: '/contact',
    details: blankDetails('MeetNear'),
  },
  {
    name: 'PrayerOnline',
    category: 'Online Worship',
    description: 'Daily prayers, online ceremonies, and spiritual community connection.',
    platforms: ['web'],
    icon: null,
    link: '/contact',
    details: blankDetails('PrayerOnline'),
  },
  {
    name: 'BizGo',
    category: 'Business Operations',
    description: 'A comprehensive platform for business management, operations, and teamwork.',
    platforms: ['android', 'web'],
    icon: imgBizGoLogo,
    link: '/contact',
    details: blankDetails('BizGo'),
  },
  {
    name: 'WorkDay',
    category: 'Work & Team Management',
    description: 'Manage tasks, schedules, and team collaboration efficiently.',
    platforms: ['android', 'ios', 'web'],
    icon: imgWorkDayLogo,
    link: '/contact',
    details: blankDetails('WorkDay', { privacy: '/privacy/policy-workday' }),
  },
]
