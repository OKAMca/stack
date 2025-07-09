/* eslint-disable @typescript-eslint/naming-convention */
import type { NextRequest, NextResponse as NextResponseType } from 'next/server'
import { NextResponse as NextResponseClass } from 'next/server'
import { log } from '../logger'
import { handleRedirect } from '../redirect/utils/handleRedirect'
import type { DirectusRouteConfig } from '../types/directusRouteConfig'

interface PageSettingsTranslation {
  languages_code: {
    code: string
  }
  id: string
  page_settings_id: {
    belongs_to_collection: string
    belongs_to_key: string
  }
  title: string
  slug: string
  path: string
}

async function fetchPageSettingsTranslation(path: string): Promise<PageSettingsTranslation[] | null> {
  const graphqlEndpoint = process.env.NEXT_SERVER_GRAPHQL_URL || process.env.NEXT_PUBLIC_GRAPHQL_URL
  const graphqlApiKey = process.env.NEXT_PUBLIC_API_TOKEN

  if (!graphqlEndpoint) {
    throw new Error('Missing GraphQL configuration `graphqlEndpoint`')
  }

  if (!graphqlApiKey) {
    throw new Error('Missing GraphQL configuration `graphqlApiKey`')
  }

  const query = `
    query Languages_code($filter: page_settings_translations_filter) {
      page_settings_translations(filter: $filter) {
        languages_code {
          code
        }
        id
        page_settings_id {
          belongs_to_collection
          belongs_to_key
        }
        title
        slug
        path
      }
    }
  `

  const variables = {
    filter: {
      path: { _eq: path },
      _and: [{ page_settings_id: { belongs_to_key: { _nempty: true } } }],
    },
  }

  try {
    log('Executing GraphQL query:', query)
    log('Query variables:', variables)

    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${graphqlApiKey}`,
      },
      body: JSON.stringify({ query, variables }),
    })

    const { data } = await response.json()
    log('GraphQL response:', data)
    return data.page_settings_translations as PageSettingsTranslation[]
  } catch (error) {
    log('GraphQL Error:', error)
    return null
  }
}

function removeLocaleFromPathname(pathname: string, config: DirectusRouteConfig) {
  const currentLocale = Object.values(config.localeMap ?? {}).find((locale) => pathname.startsWith(`/${locale}/`))
  return { locale: currentLocale, pathname: currentLocale ? pathname.replace(`/${currentLocale}/`, '/') : pathname }
}

/**
 * Handles routing for Directus.
 *
 * @param {NextRequest} request - The incoming request object.
 * @param {DirectusRouteConfig} config - Configuration for routing.
 * @returns {Promise<NextResponse>} The response object.
 */
export async function directusRouteRouter(request: NextRequest, config: DirectusRouteConfig): Promise<NextResponseType>
/**
 * @deprecated Use `directusRouteRouter(request, config)` instead. NextResponse is now directly imported in this file.
 */
export async function directusRouteRouter(
  request: NextRequest,
  config: DirectusRouteConfig,
  NextResponse = NextResponseClass,
): Promise<NextResponseType> {
  const { pathname: localizedPathname } = request.nextUrl
  const { locale, pathname } = removeLocaleFromPathname(localizedPathname, config)
  log('Processing request for pathname:', { locale, pathname })

  const redirect = await handleRedirect(request, config.modules?.redirects)
  if (redirect) {
    return redirect
  }

  const translations = await fetchPageSettingsTranslation(pathname)

  if (!translations || translations.length === 0) {
    log('No translation found for path:', pathname)
    return NextResponse.next()
  }

  const translation = translations[0]
  log('Using translation:', translation)

  if (!translation.languages_code || !translation.page_settings_id) {
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
