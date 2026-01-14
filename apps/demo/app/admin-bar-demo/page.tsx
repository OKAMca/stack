import { AdminBar } from '@okam/next-component/server'
import { Typography, Button, Box } from '@okam/stack-ui'
import Link from 'next/link'
import DraftModeButton from './DraftModeButton'

export default async function AdminBarDemoPage() {
  return (
    <div className="p-8">
      <AdminBar tokens={{ position: 'top' }} draftModeButtonLabel="Exit Preview Mode">
        <Box>
          <Typography tokens={{ size: 'sm', weight: 'bold', color: 'primary' }}>MyStack CMS</Typography>
          <Typography tokens={{ size: 'xs' }}>Draft Mode Active</Typography>
        </Box>

        <div className="flex gap-2">
          <Button tokens={{ size: 'small', color: 'secondary' }}>Preview</Button>
          <Button tokens={{ size: 'small', color: 'primary' }}>Publish</Button>
          <Button tokens={{ size: 'small', color: 'secondary' }}>Settings</Button>
        </div>

        <Box themeName="flex" tokens={{ gap: 'small', align: 'center' }}>
          <Typography tokens={{ size: 'sm' }}>Admin User</Typography>
        </Box>
      </AdminBar>

      <div className="mt-16 space-y-6">
        <Typography tokens={{ size: 'xl', weight: 'bold' }}>AdminBar Demo</Typography>

        <Typography>
          This page demonstrates the AdminBar component with a realistic admin interface. The AdminBar is only visible
          when draft mode is enabled.
        </Typography>

        <div className="space-y-4">
          <Typography tokens={{ size: 'lg', weight: 'bold' }}>Instructions:</Typography>

          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <Typography>
                If you don't see the AdminBar at the top, click the "Enable Draft Mode" button below.
              </Typography>
            </li>
            <li>
              <Typography>
                Once draft mode is enabled, you'll see the realistic AdminBar at the top of the page.
              </Typography>
            </li>
            <li>
              <Typography>The AdminBar includes site information, page actions, and a user profile.</Typography>
            </li>
            <li>
              <Typography>
                You can disable draft mode by clicking the "Exit Preview Mode" button in the AdminBar.
              </Typography>
            </li>
          </ol>
        </div>

        <div className="flex gap-4">
          <Link href="/" passHref>
            <Button>Back to Home</Button>
          </Link>
          <DraftModeButton />
        </div>

        <div className="mt-8 p-4 bg-gray-100 rounded-md">
          <Typography tokens={{ size: 'lg', weight: 'bold' }}>API Implementation Details</Typography>

          <div>
            <Typography tokens={{ size: 'md', weight: 'bold' }}>Draft Mode Control API</Typography>
            <Typography tokens={{ size: 'sm' }}>
              <code className="bg-gray-200 px-1 rounded">POST /api/draft-mode</code> - Enables or disables draft mode
              using Next.js's draftMode API.
            </Typography>
            <pre className="bg-gray-900 p-2 mt-2 rounded text-xs overflow-auto">
              {`// apps/demo/app/api/draft-mode/route.ts
                import { draftMode } from 'next/headers'
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
                export async function POST(request: NextRequest) {
                    const { enable, cookieDuration } = await request.json()

                    // Return current state if enable param is invalid
                    if (enable === null || enable === undefined) {
                      return NextResponse.json({ isEnabled: draftMode().isEnabled }, { status: 200 })
                    }

                    const draft = draftMode()

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
                    })

                    return NextResponse.json({ isEnabled: true }, { status: 200 })
                }`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
