import type { NextRequest, NextResponse as NextResponseType } from 'next/server'
import type { TPageSettingsTranslation } from '../types'
import type { TDirectusRouteConfig } from '../types/directusRouteConfig'
import { NextResponse as NextResponseClass } from 'next/server'
import { isEmpty } from 'radashi'
import { log } from '../logger'
import { handleRedirect } from '../redirect/utils/handleRedirect'
import { fetchPageSettingsTranslation } from './utils/fetchPageSettingsTranslation'
import { splitLocaleFromPathname } from './utils/locale'

function getValidTranslation(translations: TPageSettingsTranslation[], locale: string | undefined) {
  const translation = translations[0]
  if (locale == null || locale === '') {
    log('No locale provided, using first translation as default:', { translation })
    return translation
  }

  return translations?.find(t => t.languages_code?.code?.startsWith(locale)) ?? translation
}

/**
 * Handles incoming proxy requests and rewrites the path to the new format according to fetched page settings.
 * @param request - The NextRequest object
 * @param config - The TDirectusRouteConfig object
 * @deprecated Use `directusRouteRouter(request, config)` instead. NextResponse is now directly imported in this file.
 * @param NextResponse - The NextResponse object
 * @returns NextResponse
 *
 * @example
 * ```typescript
 * // proxy.ts (Next.js 16+) or middleware.ts (legacy)
 * export const directusConfig: TDirectusRouteConfig = {
 *  localeMap: {
 *    'fr-CA': 'fr',
 *    'en-CA': 'en',
 *  },
 *  collectionSettings: {
 *    default: {
 *      idField: 'id',
 *    },
 *  },
 * }
 *
 * export async function proxy(request: NextRequest) {
 *   return directusRouteRouter(request, directusConfig)
 * }
 * ```
 */
export async function directusRouteRouter(
  request: NextRequest,
  config: TDirectusRouteConfig,
  /**
   * @deprecated Use `directusRouteRouter(request, config)` instead. NextResponse is now directly imported in this file.
   */
  NextResponse = NextResponseClass,
): Promise<NextResponseType> {
  const { pathname: localizedPathname } = request.nextUrl
  const { locale, pathname } = splitLocaleFromPathname(localizedPathname, config)
  log('Processing request for pathname:', { locale, pathname })

  const redirect = await handleRedirect(request, config.modules?.redirects)
  if (redirect != null) {
    return redirect
  }

  const translations = await fetchPageSettingsTranslation(pathname)

  if (isEmpty(translations)) {
    log('No translation found for path:', pathname)
    return NextResponse.next()
  }

  const translation = getValidTranslation(translations, locale)
  log('Using translation:', translation)

  if (translation == null || translation.languages_code == null || translation.page_settings_id == null) {
    log(`Invalid translation data for path: ${pathname}`, { pathname }, 'warn')
    return NextResponse.next()
  }

  const directusLocale = translation.languages_code.code
  const collection = translation.page_settings_id.belongs_to_collection
  const id = translation.page_settings_id.belongs_to_key

  if (collection == null || collection === '') {
    log(`PageSettings with id ${id} was found but is not associated with any collection.`, { id }, 'warn')
    return NextResponse.next()
  }

  if (directusLocale == null || directusLocale === '') {
    log(`PageSettings with id ${id} was found but is not associated with any locale.`, { id }, 'warn')
    return NextResponse.next()
  }

  // eslint-disable-next-line ts/prefer-nullish-coalescing, ts/strict-boolean-expressions -- empty string locale mapping should use original locale
  const mappedLocale = config.localeMap?.[directusLocale] || directusLocale
  // eslint-disable-next-line ts/prefer-nullish-coalescing, ts/strict-boolean-expressions -- empty string idField should use default
  const idField = config.collectionSettings[collection]?.idField || config.collectionSettings.default.idField

  log('Directus locale:', directusLocale)
  log('Mapped locale:', mappedLocale)
  log('Collection:', collection)
  log('ID Field:', idField)
  log('ID:', id)

  const newPath = `/${mappedLocale}/${collection}/${id}`
  log(`Rewriting path: ${pathname} -> ${newPath}`)

  const url = request.nextUrl.clone()
  url.pathname = newPath

  log('Rewriting to URL:', url.toString())
  return NextResponse.rewrite(url)
}
