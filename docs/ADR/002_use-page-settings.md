# ADR 002: usePageSettings Hook for Directus Integration

## Status

Implemented

## Context

The `usePageSettings` hook is a crucial part of our Directus integration, allowing for efficient retrieval and caching of page settings. This hook needs to be flexible enough to handle various query structures while providing type safety and optimal performance.

## Decision

We will implement the `usePageSettings` hook with the following features:

1. Accept a GraphQL document, variables, and configuration as parameters.
2. Support both fragmented and non-fragmented queries.
3. Implement caching to reduce unnecessary API calls.
4. Provide type safety through TypeScript generics.
5. Allow for custom locale mapping.

## Changes

1. Implement the `usePageSettings` hook in the `directus-next` package.
2. Create necessary types and interfaces to support the hook's functionality.
3. Implement caching logic to store and retrieve page settings.
4. Add support for custom locale mapping.
5. Provide clear documentation and examples for usage.

## Implementation Details

1. The hook will accept a TypedDocumentNode, variables, and an optional configuration object.
2. It will use the `queryGql` function to fetch data from Directus.
3. Implement caching using a server-side context to store and retrieve page settings.
4. Use TypeScript generics to ensure type safety for different query structures.
5. Allow for custom locale mapping through the configuration object.

## Example Usage

```typescript
import { usePageSettings } from '@okam/directus-next/server'
import { PageByIdDocument } from 'apps/directus-data-query/src'
import { directusConfig } from '../../../../middleware'

export default async function Page(props: { params: { id: string; locale: string } }) {
  const data = await usePageSettings({
    document: PageByIdDocument,
    variables: props.params,
    config: directusConfig,
  })

  // If the query has no main fragment, the type parameters must be passed.
  const dataWithoutFragment = await usePageSettings<PageFragment, 'pages_by_id', typeof props.params>({
    document: PageByIdWithoutFragmentDocument,
    variables: props.params,
    config: directusConfig,
  })
  const { translations, page_settings } = dataWithoutFragment ?? {}

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
```

### Example Usage in a Deeply Nested Component

In this example, we demonstrate how `usePageSettings` can be used in a deeply nested component without passing any props. This will return the cached value instead of triggering a new query.

```typescript
import { usePageSettings } from '@okam/directus-next/server'

export function DeeplyNestedComponent() {
  // This will return the cached value from the nearest ancestor that called usePageSettings with props
  // You can pass a single type parameter corresponding to the fragment of the query to type the cached data
  const cachedData = usePageSettings<PageFragment>()

  return (
    <div>
      <h2>Cached Page Settings</h2>
      <pre>{JSON.stringify(cachedData, null, 2)}</pre>
    </div>
  )
}
```

In this scenario, `DeeplyNestedComponent` doesn't pass any props to `usePageSettings`. As a result, the hook will return the cached value that was set by the nearest ancestor component that called `usePageSettings` with props. This approach is useful for accessing page settings data throughout your component tree without triggering additional queries.

Note: When using `usePageSettings` without props in a deeply nested component, you can pass a single type parameter corresponding to the fragment of the query to type the cached data. However, be cautious when using this approach, as it can lead to a potential pitfall:

Pitfall: Using the first type parameter to type the cached data can result in getting data of the wrong type if the type doesn't match the actual cached data structure. Always ensure that the type parameter you pass accurately represents the structure of the cached data you expect to receive.

## Notes

- The `usePageSettings` hook is designed to work seamlessly with the Directus router implementation.
- Developers should be aware of the caching behavior to ensure they're working with the most up-to-date data when necessary.
- The hook's flexibility allows for future expansions, such as supporting more complex query structures or additional configuration options.

## Reference

### Types and Interfaces

```typescript
export type TPageSettings = {
  id: string
  belongs_to_collection?: string | null
  belongs_to_key?: string | null
  translations?: Array<TPageSettingsTranslation | null> | null
  route?: {
    translations?: Array<{ route?: string | null } | null> | null
  } | null
}

export type TPageSettingsItemQuery<Item extends TPageSettingsQueryItem, ItemKey extends string> = {
  __typename?: 'Query'
} & {
  [Key in ItemKey]?: MaybeArray<Item> | MaybeArray<Fragmentize<Item>>
}
```

These types define the structure of the page settings and the query item. Note that the query item must have a `page_settings` field to be compatible with the `usePageSettings` hook.

## Future Considerations

1. Implement a strategy for handling stale cache data, possibly through a time-based invalidation or manual cache busting.
2. Explore the possibility of integrating this hook with a global state management solution for more complex applications.
3. Investigate the potential for generating strongly-typed hooks based on the GraphQL schema to further improve developer experience.

By implementing the `usePageSettings` hook in this manner, we provide a powerful and flexible tool for interacting with Directus page settings, while maintaining type safety and performance optimizations.

## Example Query

Here's an example of a GraphQL query that can be used with the `usePageSettings` hook:

```graphql
fragment PageSettings on page_settings {
  id
  belongs_to_collection
  belongs_to_key
  translations(filter: { languages_code: { code: { _eq: $locale } } }) {
    languages_code {
      code
    }
    path
    title
    slug
  }
}

fragment Page on pages {
  translations(filter: { languages_code: { code: { _eq: $locale } } }) {
    name
  }
  page_settings(filter: { belongs_to_key: { _nnull: true } }) {
    ...PageSettings
  }
}

query PageById($id: ID!, $locale: String!) {
  pages_by_id(id: $id) {
    ...Page
  }
}
```

This query fetches page data along with its associated page settings, filtered by the provided locale. It demonstrates how to use fragments to structure the query and how to filter translations based on the locale.
