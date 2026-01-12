import type { DirectusRouteConfig } from '../../types'

/**
 * Validates if a given string is a valid locale from the directus route configuration.
 * @param maybeLocale The string to validate as a locale
 * @param config The Directus route configuration containing the locale map
 * @returns The validated locale string, or undefined if invalid
 */
export function getValidLocale(maybeLocale: string | null | undefined, config: DirectusRouteConfig) {
  const locale = Object.values(config.localeMap ?? {}).find((l) => l === maybeLocale)
  return locale
}

/**
 * Splits the locale from the pathname and returns the locale and the pathname without the locale.
 * @param pathname The pathname to split the locale from
 * @param config The Directus route configuration containing the locale map
 * @returns The locale and the pathname without the locale
 */
export function splitLocaleFromPathname(pathname: string, config: DirectusRouteConfig) {
  const [, maybeLocale, ...parts] = pathname.split('/')
  const locale = getValidLocale(maybeLocale, config)
  if (locale) {
    const newPathname = parts.length > 0 ? `/${parts.join('/')}` : '/'
    return { locale, pathname: newPathname }
  }

  return { locale: undefined, pathname }
}
