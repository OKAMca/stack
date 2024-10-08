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

5. Define environments variables
```
NEXT_PUBLIC_GRAPHQL_URL=
NEXT_API_TOKEN_ADMIN=
```

6. Generate redirect/redirects.json and redirect/rewrites.json using fetch-redirect (or build project with nx)
```
npx env-cmd -f ../../.env.local node fetch-redirect.js
```

7. Update nextConfig in next.config.js with
```
const { rewrites, redirects } = require('./redirect/index')
```
```
const nextConfig = {
...
  async redirects() {
    const rest = await redirects()
    return [
       ...i18nReRouter({locale: false, permanent: true}, 'redirect'),
       ...rest,
    ]
    return rest
  },
  async rewrites() {
    const fallback = await rewrites()
    return {
      beforeFiles: [
        ...i18nReRouter({locale: false}, 'rewrite'),
      ],
      afterFiles: [
        ...i18nRewriter({...i18nConfigWithoutLocaleDetector, localeDetector: false}),
      ],
      fallback,
    }
  },
...
}
```
