import { log } from '../logger'

const defaultInternalUrl = 'http://localhost:3000'

export function getRedirectSecretDefault(): string {
  return process.env.NEXT_API_REDIRECT_SECRET || ''
}

export function getApiRouteUrlDefault() {
  const url = process.env.NEXT_MIDDLEWARE_REDIRECT_URL ?? process.env.NEXT_SERVER_GRAPHQL_URL ?? defaultInternalUrl
  if (URL.canParse(url)) return url
  log(`Invalid URL ${url}. Falling back to default`, { url }, 'warn')
  return defaultInternalUrl
}
