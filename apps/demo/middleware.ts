/* eslint-disable @typescript-eslint/naming-convention */
import { directusRouteRouter, type DirectusRouteConfig } from '@okam/directus-next'
import type { NextRequest } from 'next/server'

export const directusConfig: DirectusRouteConfig = {
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

export async function middleware(request: NextRequest) {
  return directusRouteRouter(request, directusConfig)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|blocks/|favicon.ico|react_devtools_backend_compact.js.map).*)'],
}
