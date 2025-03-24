/* eslint-disable @typescript-eslint/naming-convention */
import { handleRedirect } from '@okam/directus-next'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const redirect = await handleRedirect(request)
  if (redirect) {
    return redirect
  }
  return NextResponse.next()
}
