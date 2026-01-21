import { handleDraftRoute } from '@okam/directus-next'

export async function GET(request: Request) {
  return handleDraftRoute({
    url: request.url,
    // default language to show
    getDirectusLanguage: () => 'en-CA',
  })
}
