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

// getDefaultConfig() will return an object with
// graphqlEndpoint: use environment variable NEXT_PUBLIC_GRAPHQL_URL
// graphqlApiKey: use environment variable NEXT_API_TOKEN_ADMIN
// redirectsFilename
// rewritesFilename
// limit: 2000  (number of redirect or rewrite rules fetched by graphql)
fetchRedirects(getDefaultConfig())
```

2. In project.json,
 1. In targets.build, add `"dependsOn": ["fetch-redirect"],`
 2. In targets:
```
    "fetch-redirect": {
      "executor": "nx:run-commands",
      "options": {
        "cwd": "{projectRoot}",
        "command": "node fetch-redirect"
      }
    },
```
 3. Don't forget to change the cwd path


3. Create directory redirect

4. Create file redirect/index.js
```
const redirects = require('./redirects.json')
const rewrites = require('./rewrites.json')

module.exports = {
  redirects: async () => redirects,
  rewrites: async () => rewrites,
}
```

4.1 or redirect/index.mjs
```
import redirectsData from './redirects.json' with { type: 'json' }
import rewritesData from './rewrites.json' with { type: 'json' }

export const redirects = async () => redirectsData
export const rewrites = async () => rewritesData
```

5. Define environments variables
```
NEXT_REDIRECT_GRAPHQL_URL=http://server.some.url/graphql
NEXT_PUBLIC_GRAPHQL_URL=https://server.external/graphql
NEXT_API_TOKEN_ADMIN=user_token_for_graphql
```

6. Generate redirect/redirects.json and redirect/rewrites.json using fetch-redirect (or build project with nx)
```
npx env-cmd -f ../../.env.local node fetch-redirect.js
```

7. Update nextConfig in next.config.js with
```
const { rewrites, redirects } = require('./redirect/index')
```

for next.config.mjs
```
import { redirects, rewrites } from './redirect/index.mjs'
```

and

```
const nextConfig = {
...
  async redirects() {
    const rest = await redirects()
    return [
      // optional i18nrouter should be before
       ...i18nReRouter({locale: false, permanent: true}, 'redirect'),
      // custom redirect should be here
       ...rest,
    ]
    return rest
  },
  async rewrites() {
    const fallback = await rewrites()
    return {
      beforeFiles: [
        // optional i18n router
        ...i18nReRouter({locale: false}, 'rewrite'),
      ],
      afterFiles: [
        // optional i18n router
        ...i18nRewriter({...i18nConfigWithoutLocaleDetector, localeDetector: false}),
      ],
      fallback,
    }
  },
...
}
```

## Warning
In production (build), you can't reload dynamically in next.config.(m?)js in rewrites()/redirects() because it was compiled in `.nx/route-manifest.json`. Updating the files in redirects/ won't work. In dev mode, both rewrites()/redirects() of next.config.(m?)js are runned on each server start.