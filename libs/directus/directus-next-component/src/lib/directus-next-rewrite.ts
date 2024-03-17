import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { get } from 'radash'

export async function fetchPageSettings(pathName: string, lang = 'fr=CA') {
  const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL
  const graphqlApiKey = process.env.NEXT_API_TOKEN_PUBLIC

  if (!graphqlEndpoint || !graphqlApiKey) {
    throw new Error('Missing graphql configuration: NEXT_PUBLIC_GRAPHQL_URL or NEXT_API_TOKEN_ADMIN')
  }

  const query = `
    query PageSettings($path: String = null, $lang: String = "fr-CA") {
      page_settings(
        filter: { translations: { path: { _eq: $path } } },
        limit: 1
      ) {
          route {
            translations(filter: { languages_code: { code: { _ends_with: $lang } } }) {
            route
          }
        }
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
    return get<string>(data, 'page_settings.0.route.translations.0.route')
  } catch (e) {
    console.error('GraphQL Error', (e as Error).message)
    return null
  }
}

function transformSlugs(input: string): string {
  return input.replace(/\{\{(.*?)\}\}/g, '[$1]')
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Fetch page settings based on the request path.
  const route = await fetchPageSettings(pathname)

  if (route === null) {
    return NextResponse.next()
  }

  const newPath = transformSlugs(route)

  // Perform a rewrite to the new path.
  const url = request.nextUrl.clone()
  url.pathname = newPath

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
