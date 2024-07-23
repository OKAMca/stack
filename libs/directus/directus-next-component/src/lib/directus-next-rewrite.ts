import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { get } from 'radash'

export async function fetchPageSettings(pathName: string, lang = 'fr-CA') {
  const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL
  const graphqlApiKey = process.env.NEXT_PUBLIC_API_TOKEN

  if (!graphqlEndpoint || !graphqlApiKey) {
    throw new Error('Missing graphql configuration: NEXT_PUBLIC_GRAPHQL_URL or NEXT_API_TOKEN_ADMIN')
  }

  let langCodeFilter = '_eq'

  if (lang.length === 2) {
    langCodeFilter = '_contains'
  }

  const query = `
    query PageSettings($path: String = null, $lang: String = "fr-CA") {
      page_settings(
        filter: { translations: { path: { _eq: $path }, languages_code: {code: {${langCodeFilter}: $lang}} }},
        limit: 1
      ) {
          belongs_to_key
          belongs_to_collection
      }
    }
  `

  const graphqlBody = {
    query,
    variables: {
      lang,
      path: pathName,
    },
  }

  try {
    // console.info(`Fetching redirects on ${graphqlEndpoint}`)
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        Authorization: `Bearer ${graphqlApiKey}`,
      },
      body: JSON.stringify(graphqlBody),
    })

    const { data } = await response.json()

    const key = get<string>(data, 'page_settings.0.belongs_to_key')
    const collection = get<string>(data, 'page_settings.0.belongs_to_collection')

    if (key == null || collection == null) {
      throw new Error('No page settings found')
    }

    return `/${collection}/${key}`
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('GraphQL Error', (e as Error).message)
    return null
  }
}

function removeLocaleFromPathName(pathName: string, locale: string) {
  if (pathName.includes(locale)) {
    return pathName.replace(`/${locale}`, '')
  }
  return pathName
}

export async function directusRouteMiddleware(request: NextRequest, locales: string[]) {
  const { pathname } = request.nextUrl

  const locale = locales.find((l) => pathname.startsWith(`/${l}`))

  const pathNameWithoutLocale = locale ? removeLocaleFromPathName(pathname, locale) : pathname

  // Fetch page settings based on the request path.
  const route = await fetchPageSettings(pathNameWithoutLocale, locale)

  if (route === null) {
    return NextResponse.next()
  }

  // Perform a rewrite to the new path.
  const url = request.nextUrl.clone()
  url.pathname = route

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
