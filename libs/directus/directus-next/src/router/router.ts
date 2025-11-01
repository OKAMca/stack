/* eslint-disable @typescript-eslint/naming-convention */
import type { NextRequest, NextResponse as NextResponseType } from 'next/server'
import { NextResponse as NextResponseClass } from 'next/server'
import { isEmpty } from 'radashi'
import { log } from '../logger'
import { handleRedirect } from '../redirect/utils/handleRedirect'
import type { PageSettingsTranslation } from '../types'
import type { DirectusRouteConfig } from '../types/directusRouteConfig'
import { fetchPageSettingsTranslation } from './utils/fetchPageSettingsTranslation'
import { splitLocaleFromPathname } from './utils/locale'

function getValidTranslation(translations: PageSettingsTranslation[], locale: string | undefined) {
  const translation = translations[0]
  if (!locale) {
    log('No locale provided, using first translation as default:', { translation })
    return translation
  }

  return translations?.find((t) => t.languages_code?.code?.startsWith(locale)) ?? translation
}

export async function directusRouteRouter(
  request: NextRequest,
  config: DirectusRouteConfig,
  /**
   * @deprecated Use `directusRouteRouter(request, config)` instead. NextResponse is now directly imported in this file.
   */
  NextResponse = NextResponseClass,
): Promise<NextResponseType> {
  const { pathname: localizedPathname } = request.nextUrl
  const { locale, pathname } = splitLocaleFromPathname(localizedPathname, config)
  log('Processing request for pathname:', { locale, pathname })

  const redirect = await handleRedirect(request, config.modules?.redirects)
  if (redirect) {
    return redirect
  }

  const translations = await fetchPageSettingsTranslation(pathname)

  if (isEmpty(translations)) {
    log('No translation found for path:', pathname)
    return NextResponse.next()
  }

  const translation = getValidTranslation(translations, locale)
  log('Using translation:', translation)

  if (!translation || !translation.languages_code || !translation.page_settings_id) {
    log(`Invalid translation data for path: ${pathname}`, { pathname }, 'warn')
    return NextResponse.next()
  }

  const directusLocale = translation.languages_code.code
  const collection = translation.page_settings_id.belongs_to_collection
  const id = translation.page_settings_id.belongs_to_key

  if (!collection) {
    log(`PageSettings with id ${id} was found but is not associated with any collection.`, { id }, 'warn')
    return NextResponse.next()
  }

  if (!directusLocale) {
    log(`PageSettings with id ${id} was found but is not associated with any locale.`, { id }, 'warn')
    return NextResponse.next()
  }

  const mappedLocale = config.localeMap?.[directusLocale] || directusLocale
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
