# Stack UI Next.js Demo
# demo nextjs app

## Configuration
Configure your .env (at the root of the monorepo) with at least theses variables:

.env
```
NEXT_PUBLIC_GRAPHQL_URL=https://website.com/graphql/
NEXT_PUBLIC_IMG_DOMAIN=website.com
NEXT_API_DRAFT_SECRET=123
```

## Starting or Running Dev Mode

Make sure to have at least node 20

```
# at the root of the mono repository
npm install
npm run dev # serve demo
```

Visit http://localhost:4200

## Testing

### Testing draft api
You can test the redirect with this url:

```
http://localhost:4200/api/draft?urls=%5B%22%2Fdirectus-block%22%5D&languages=%5B%22en-CA%22%5D&secret=123
```

You should see a redirect to the page directus-block, and a cookie named "__prerender_bypass".

## Running Build Mode

After a npm install, run the build command.
```
npm run build
```

If you have an error like "TypeError: Expected a non-empty string, at picomatch.makeRe", provide a domain in NEXT_PUBLIC_IMG_DOMAIN environment variable.

