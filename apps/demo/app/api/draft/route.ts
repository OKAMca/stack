import { handleDraftRoute } from '@okam/directus-next'

// eslint-disable-next-line @typescript-eslint/naming-convention
export async function GET(request: Request) {
  return handleDraftRoute({
    url: request.url,
    // default language to show
    getDirectusLanguage: () => 'en-CA',
  })
}
