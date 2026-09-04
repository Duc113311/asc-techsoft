import { appConfig } from '../config/app.config'
import { siteData } from '../data/site'
import { httpClient } from '../network/httpClient'

export async function getSiteData() {
  if (!appConfig.useApi) {
    // Keep the local demo close to a real network request so the skeleton is visible.
    await new Promise((resolve) => setTimeout(resolve, 650))
    return siteData
  }

  return httpClient.get('/site')
}
