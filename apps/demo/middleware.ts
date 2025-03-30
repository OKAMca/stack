/* eslint-disable @typescript-eslint/naming-convention */
import { directusRouteRouter } from '@okam/directus-next'
import type { DirectusRouteConfig } from 'libs/directus/directus-next/src/types/directusRouteConfig'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const directusConfig: DirectusRouteConfig = {
  localeMap: {
    'fr-FR': 'fr',
    'en-US': 'en',
  },
  collectionSettings: {
    default: {
      idField: 'id',
    },
  },
}

export async function middleware(request: NextRequest) {
  // @ts-expect-error Will be fixed in another PR
  return directusRouteRouter(request, directusConfig, NextResponse)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|blocks/|favicon.ico|react_devtools_backend_compact.js.map).*)'],
}
