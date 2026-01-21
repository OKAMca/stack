import type { TDirectusRouteConfig } from '@okam/directus-next'
import type { NextRequest } from 'next/server'
import { directusRouteRouter } from '@okam/directus-next'

export const directusConfig: TDirectusRouteConfig = {
  localeMap: {
    'fr-CA': 'fr',
    'en-CA': 'en',
  },
  collectionSettings: {
    default: {
      idField: 'id',
    },
  },
}

export async function proxy(request: NextRequest) {
  return directusRouteRouter(request, directusConfig)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|blocks/|favicon.ico|react_devtools_backend_compact.js.map).*)'],
}
