# directus-next-component

This library was generated with [Nx](https://nx.dev).

## directusRouteMiddleware usage

Create a middleware.js file in your project and add the following code to it.

```jsx
// middleware.js

import  {directusRouteMiddleware, directusRouteMiddlewareConfig} from @okam/directus-next-component

export function middleware(request) {
  return directusRouteMiddleware(request);
}

export config = {
  ...directusRouteMiddlewareConfig
}
```
