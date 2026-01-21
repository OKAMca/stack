import { handleRedirectsRoute } from '@okam/directus-next'

export async function GET(request: Request) {
  return handleRedirectsRoute({
    url: request.url,
  })
}
