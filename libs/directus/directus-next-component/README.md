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

## DirectusLink component

The role of the directus link component is to wrap `next/link` and provide the appropriate props from dispatching the different types of links to different components.

By default, the following are included:

- Collection: Render a link using a `page_settings` relation
- Anchor: Render a link pointing to an element's id on the page (always starts with `#`)
- ExternalLink: Render a link with an external URL (e.g.: https://google.com)
- File: Render a link for a downloadable file

The mentionned configuration can be overwritten by passing a `config` prop to the directus link component

```jsx
const overrideConfig = {
  ExternalLink: (props) => <CustomExternalLinkComponent {...props} />
}

const BrandLink = (props) => {
  return <DirectusLink config={overrideConfig} {...props} />
}
```

## useNavigationItems

The `useNavigationItems` hook allows to build recursively a navigation structure using the `DirectusLink` component. 

### Props

- `link`: A rendered react node of the `DirectusLink` component
- `linkProps`: The props that were passed to the link
- `children`: The navigation items containing link, linkProps, children
- `parent`: A single navigation item containing link, linkProps, parent
- `depth`: The current depth of the recursion. For each level of parent, the depth will go down by one. For each level of children, the depth will go up by one. The depth starts at zero

### Example usage

```tsx
// Any styling could go here
const depthMap: Record<number, object> = {
  0: { backgroundColor: 'red' },
  1: { backgroundColor: 'blue' },
  2: { backgroundColor: 'green' },
}

// Loop recursively through navigation items and assign style based on depth
function renderTree(tree: Nullable<TNavigationItemsTree>): React.ReactNode {
  if (!tree) return null
  const { children, link, depth } = tree
  const style = depthMap[depth]

  if (!link && !children) return null
  if (!children) {
    return (
      <li style={style} key={link.id}>
        {link}
      </li>
    )
  }
  return (
    <ul key={link.id}>
      <li style={style}>{link}</li>
      {children.map((child) => renderTree(child))}
    </ul>
  )
}

const NavigationComponent = (props) => {
  const navigation = useNavigationItems(props.navigationItems)

  return (
    <nav>
      {navigation.map((item) => renderTree(item))}
    </nav>
  )
}
```
