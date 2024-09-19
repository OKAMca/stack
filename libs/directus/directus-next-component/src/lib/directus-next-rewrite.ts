import { directusRouteRouter as originalDirectusRouteRouter } from '@okam/directus-next/server'
import type { NextRequest, NextResponse } from 'next/server'

export function directusRouteRouter(
  request: NextRequest,
  config: Parameters<typeof originalDirectusRouteRouter>[1],
  NextResponse: Parameters<typeof originalDirectusRouteRouter>[2]
) {
  return originalDirectusRouteRouter(request, config, NextResponse)
}
