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


## Redirects

Redirects and rewrites managed in Directus are applied by `handleRedirect`, which `directusRouteRouter` calls on every proxied request.

### Source patterns
A source is either an exact path or a pattern using the same syntax as Next.js [`redirects()`](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects#path-matching). Params captured by the source are filled into the destination.

| Source | Destination | Request | Result |
|---|---|---|---|
| `/events-calendar/:slug*` | `/student-events` | `/events-calendar/2024/spring` | `/student-events` |
| `/music-school/:slug*` | `/conted/music-school/:slug*` | `/music-school/piano/intro` | `/conted/music-school/piano/intro` |
| `/news/:year/:slug` | `/articles/:slug` | `/news/2024/hello` | `/articles/hello` |

* `:param` matches one segment, `:param*` zero or more (including the bare prefix), `:param+` one or more, `:param?` zero or one.
* In a destination, `?` always starts the query string, so the `:param?` modifier only works in sources. Use `:param*` for an optional destination segment.
* An exact source wins over a pattern. Among patterns, the first match in the Directus sort order wins.
* Exact sources are case-sensitive. Patterns are not, as in Next.js.
* A redirect wins over a rewrite.
* Params are filled in the destination path and query values (`/search?q=:slug`). A destination without params, external or not, is used as is.
* An invalid source, or a destination using a param the source does not capture, is skipped and the next matching rule is used.

### Lookup timeout and cancellation

`handleRedirect(request, options)` and `getRedirectsRoute(options)` accept an optional `timeoutMs` and `signal`. `timeoutMs` is a positive integer in milliseconds, up to 2147483647, covering the app route fetch and its response body. The default remains no timeout. An invalid timeout fails open without fetching. `handleRedirect` also forwards the incoming request's signal and combines it with an explicitly supplied signal.

```ts
const response = await handleRedirect(request, { timeoutMs: 3000 })
```

With `directusRouteRouter`, set it under `modules.redirects`:

```ts
directusRouteRouter(request, { modules: { redirects: { timeoutMs: 3000 } } })
```

Timeout, cancellation, non-OK responses and invalid response data produce no redirect or rewrite for that lookup, so middleware can continue normal page routing. The fetch keeps its default cache policy, and a failed lookup is not retried; the next request fetches again. Timeout and cancellation abort the fetch and cancel an active body reader. There are no automatic retries. Source matching and destination substitution are unchanged.
