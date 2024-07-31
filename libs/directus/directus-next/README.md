# directus-next

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build directus-next` to build the library.

## Running unit tests

Run `nx test directus-next` to execute the unit tests via [Jest](https://jestjs.io).

## Draft

### Installation
In your next folder app/api/ directory:
* Create directory draft/
* Create file draft/route.ts
* In route.ts, import handleDraftRoute,
* Define GET function.

### Example
```
import { handleDraftRoute } from '@okam/directus-next'

// eslint-disable-next-line @typescript-eslint/naming-convention
export async function GET(request: Request) {
   return handleDraftRoute({
     url: request.url,
     getDirectusLanguage: () => 'en-CA' // default language to show
   })
}
```

### Environment
Set the secret in your .env and your directus application (preview_secret field).

.env
```
NEXT_API_DRAFT_SECRET=123
```

