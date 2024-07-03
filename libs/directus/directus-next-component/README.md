# directus-next-component

This library was generated with [Nx](https://nx.dev).

## directusRouteMiddleware usage

Create a middleware.ts file in the project, in the `/src/app` directory of the next application, and add the following code to it.

```jsx
// middleware.ts

import {
  directusRouteMiddleware,
  config as directusRouteMiddlewareConfig,
} from '@okam/directus-next-component/src/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { locale } = request.nextUrl
  return directusRouteMiddleware(request, [locale])
}

export const config = {
  ...directusRouteMiddlewareConfig,
}

```

After, modify the `next.config.js` file to add `withDirectus` in the plugins.
