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

## useDirectusLink hook

The role of the directus link hook is to dispatch different props according to the type of the directus link. The configuration for the dispatching is overridable using the `propsConfig` prop

## DirectusLink component

The role of the directus link component is to wrap `next/link` and dispatch the props to different components according to a configuration. The configuration for dispatching different components is overridable using the `componentsConfig` prop.

The directus link component uses the directus link hook, which means it can be passed both `componentsConfig` and `propsConfig` for both dispatching uses.

By default, the following are included:

- Collection: Render a link using a `page_settings` relation
- Anchor: Render a link pointing to an element's id on the page (always starts with `#`)
- ExternalLink: Render a link with an external URL (e.g.: https://google.com)
- File: Render a link for a downloadable file

The mentionned configuration can be overwritten by passing a `componentsConfig` prop to the directus link component

```jsx
const overrideConfig = {
  ExternalLink: (props) => <CustomExternalLinkComponent {...props} />
}

const BrandLink = (props) => {
  return <DirectusLink config={overrideConfig} {...props} />
}
```

## useNavigationItems hook

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
  /*
   * Here, `link` represents a rendered version of `DirectusLink` for quick use
   * Use `linkProps` for custom rendering needs
   */
  const { children, link, linkProps, depth } = tree
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
  // Depth and links type cannot be inferred directly, they must be passed
  const navigation = useNavigationItems<3, { link?: LinksFragment }>(
    props.navigationItems, 

    // Use `onNavigationItem` to parse the fragments
    (item) => {
      const { link } = item ?? {}
      const collection = getFragment(PageSettingsFragmentDoc, link?.collection)
      const file = getFragment(FilesFragmentDoc, link?.file)
      return {
        ...link,
        collection,
        file,
    }
  })

  return (
    <nav>
      {navigation.map((item) => renderTree(item))}
    </nav>
  )
}
```
