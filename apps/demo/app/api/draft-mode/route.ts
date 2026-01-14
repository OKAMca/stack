import { draftMode, cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

/**
 * Draft Mode API Route
 *
 * This API route handles enabling and disabling draft mode by setting or removing
 * the necessary cookies. It's designed to work with the handleDraftMode utility
 * from the stack-ui library.
 *
 * Request format:
 * {
 *   enable: boolean,        // Whether to enable or disable draft mode
 *   cookieDuration?: number // Duration in days, if not provided, the cookie will have the expiration set to the session
 * }
 *
 * Response format:
 * {
 *   isEnabled: boolean      // The current state of draft mode after the operation
 * }
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export async function POST(request: NextRequest) {
  const { enable, cookieDuration } = await request.json()
  const draft = await draftMode()

  // Return current state if enable param is invalid
  if (enable === null || enable === undefined) {
    return NextResponse.json({ isEnabled: draft.isEnabled }, { status: 200 })
  }

  if (!enable) {
    draft.disable()
    return NextResponse.json({ isEnabled: false }, { status: 200 })
  }

  draft.enable()

  // Set cookie duration if specified
  if (!cookieDuration || cookieDuration <= 0) {
    return NextResponse.json({ isEnabled: true }, { status: 200 })
  }

  const cookieStore = await cookies()
  const draftModeCookie = cookieStore.get('__prerender_bypass')

  if (!draftModeCookie?.value) {
    return NextResponse.json({ isEnabled: true }, { status: 200 })
  }

  cookieStore.set('__prerender_bypass', draftModeCookie.value, {
    maxAge: cookieDuration * 24 * 60 * 60, // Convert days to seconds
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })

  return NextResponse.json({ isEnabled: true }, { status: 200 })
}
