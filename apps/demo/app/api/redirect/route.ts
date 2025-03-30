import { handleRedirectsRoute } from '@okam/directus-next'

// eslint-disable-next-line @typescript-eslint/naming-convention
export async function GET(request: Request) {
  return handleRedirectsRoute({
    url: request.url,
  })
}
