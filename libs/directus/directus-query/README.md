# directus-query

This library was generated with [Nx](https://nx.dev).

# Usage with NextJS AppRouter

To create a new client, first create a new file with the following content:

```ts
import { initDirectusQuery } from '@okam/directus-query'

const queryClient = initDirectusQuery('https://example.com/api', {
  credentials: 'include',
  mode: 'cors',
  fetch,ù
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  },
})

export default queryClient
```

Then, you can use the client to query data from Directus:

```ts
const variables = {id: 1}
const data = await queryClient.queryGql(DOCUMENT, variables)
```

## Default Environment Variables
Those environment variables are used in graphqlRequestClient (queryGql, useSuspenseGqlQuery) and graphqlRequestAdmin (useSuspenseGqlQueryAdmin)

### Server/Client
```
NEXT_SERVER_GRAPHQL_URL=http://server.internal/graphql/ # server side only
NEXT_PUBLIC_GRAPHQL_URL=https://server.okam.one/graphql/ # server fallback and client side
NEXT_PUBLIC_API_TOKEN=abcdef
```
### Admin
```
NEXT_GRAPHQL_URL_ADMIN=http://server-admin.okam.one/graphql/ # server side only
# admin request use the same token NEXT_PUBLIC_API_TOKEN
```
