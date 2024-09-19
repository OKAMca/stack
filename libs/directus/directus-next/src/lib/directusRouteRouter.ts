/* eslint-disable no-console */
import type { NextRequest, NextResponse } from 'next/server'

export interface DirectusRouteConfig {
  localeMap?: Record<string, string>
  collectionSettings: {
    [collection: string]: {
      idField: string
    }
  } & {
    default: {
      idField: string
    }
  }
}

async function fetchPageSettingsTranslation(path: string): Promise<Array<any> | null> {
  const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL
  const graphqlApiKey = process.env.NEXT_PUBLIC_API_TOKEN

  if (!graphqlEndpoint || !graphqlApiKey) {
    throw new Error('Missing GraphQL configuration')
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
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        Authorization: `Bearer ${graphqlApiKey}`,
      },
      body: JSON.stringify({ query, variables }),
    })

    const { data } = await response.json()
    return data.page_settings_translations
  } catch (error) {
    console.error('GraphQL Error:', error)
    return null
  }
}

/**
 * Handles dynamic routing for Directus-based content.
 *
 * @param {NextRequest} request - The incoming request object from Next.js.
 * @param {DirectusRouteConfig} config - Configuration object for the router.
 * @param {{
 *   next: () => NextResponse,
 *   rewrite: (url: URL) => NextResponse
 * }} NextResponse - Next.js Response object with required methods.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response.
 *
 * @description
 * This function processes incoming requests, queries Directus for matching page settings,
 * and rewrites the URL path based on the retrieved information and provided configuration.
 * It supports locale mapping and collection-specific settings.
 */
export async function directusRouteRouter(
  request: NextRequest,
  config: DirectusRouteConfig,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NextResponse: {
    next: () => NextResponse
    rewrite: (url: URL) => NextResponse
  },
): Promise<NextResponse> {
  const { pathname } = request.nextUrl

  const translations = await fetchPageSettingsTranslation(pathname)

  if (!translations || translations.length === 0) {
    console.log(`No translation found for path: ${pathname}`)
    return NextResponse.next()
  }

  const translation = translations[0]

  if (!translation.languages_code || !translation.page_settings_id) {
    console.log(`Invalid translation data for path: ${pathname}`)
    return NextResponse.next()
  }

  const directusLocale = translation.languages_code.code
  const collection = translation.page_settings_id.belongs_to_collection
  const id = translation.page_settings_id.belongs_to_key

  const mappedLocale = config.localeMap?.[directusLocale] || directusLocale
  const idField = config.collectionSettings[collection]?.idField || config.collectionSettings.default.idField

  const newPath = `/${mappedLocale}/${collection}/${id}`

  if (process.env.NODE_ENV === 'development') {
    console.log(`Rewriting path: ${pathname} -> ${newPath}`)
    console.log(`Locale: ${directusLocale} -> ${mappedLocale}`)
    console.log(`Collection: ${collection}, ID Field: ${idField}, ID: ${id}`)
  }

  const url = request.nextUrl.clone()
  url.pathname = newPath

  return NextResponse.rewrite(url)
}
