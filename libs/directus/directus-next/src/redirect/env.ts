import { log } from '../logger'

const defaultInternalUrl = 'http://localhost:3000'

export function getRedirectSecretDefault(): string {
  return process.env.NEXT_API_REDIRECT_SECRET || ''
}

function getVercelUrl() {
  const url = process.env.VERCEL_URL
  if (!url) return null
  return `https://${url}`
}

export function getApiRouteUrlDefault() {
  const url = process.env.NEXT_MIDDLEWARE_REDIRECT_URL ?? getVercelUrl() ?? defaultInternalUrl
  if (URL.canParse(url)) return url
  log(`Invalid URL ${url}. Falling back to default`, { url }, 'warn')
  return defaultInternalUrl
}
