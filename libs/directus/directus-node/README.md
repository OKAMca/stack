# directus-node

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build directus-node` to build the library.

## Running unit tests

Run `nx test directus-node` to execute the unit tests via [Jest](https://jestjs.io).


## Redirection

1. Create a fetch-redirect.js file in your next.js folder and require fetchRedirects
```
/**
 * Usage
 * In apps/contest-nextjs directory
 * npx env-cmd -f ../../.env.local node fetch-redirect.js
 */
const { fetchRedirects, getDefaultConfig } = require('@okam/directus-node')
fetchRedirects(getDefaultConfig())
```

2. In project.json targets.build, add "dependsOn": ["fetch-redirect"]

3. Create directory redirection

4. Create file redirection/index.js
```
const redirects = require('./redirects.json')
const rewrites = require('./rewrites.json')

module.exports = {
  redirects: async () => redirects,
  rewrites: async () => rewrites,
}

```

5. Define environments variables
```
NEXT_PUBLIC_GRAPHQL_URL=
NEXT_API_TOKEN_ADMIN=
```

6. Generate redirects.json and rewrites.json using fetch-redirect (or build project with nx)
```
npx env-cmd -f ../../.env.local node fetch-redirect.js
```
