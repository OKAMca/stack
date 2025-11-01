import type { DirectusRouteConfig } from '../../types'

export function getValidLocale(maybeLocale: string | null | undefined, config: DirectusRouteConfig) {
  const locale = Object.values(config.localeMap ?? {}).find((l) => l === maybeLocale)
  return locale
}

export function splitLocaleFromPathname(pathname: string, config: DirectusRouteConfig) {
  const [, maybeLocale, ...parts] = pathname.split('/')
  const locale = getValidLocale(maybeLocale, config)
  const rest = `/${parts.join('/')}`
  const newPathname = locale ? rest : `/${maybeLocale}${rest}`

  return { locale, pathname: newPathname }
}
