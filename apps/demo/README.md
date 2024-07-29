# Stack UI Next.js Demo

## Environment variables

Configure your .env (at the root of the monorepo) with at least theses variables:
```
NEXT_PUBLIC_GRAPHQL_URL=https://website.com/graphql/
NEXT_PUBLIC_IMG_DOMAIN=website.com
NEXT_API_DRAFT_SECRET=123
```

## Running Dev Mode

After a npm install, run the dev command.

```
npm run dev
```

## Running Build Mode

After a npm install, run the build command.
```
npm run build
```

If you have an error like "TypeError: Expected a non-empty string, at picomatch.makeRe", provide a domain in NEXT_PUBLIC_IMG_DOMAIN environment variable.

