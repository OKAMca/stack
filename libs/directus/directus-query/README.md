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

