export const appConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  useApi: import.meta.env.VITE_USE_API === 'true',
}
