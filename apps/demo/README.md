# demo nextjs app

## Configuration
At the root of the mono repository, add a .env file 

.env
```
NEXT_API_DRAFT_SECRET=123
```

## Starting

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
http://localhost:4200/api/draft?urls=[%22%2Fdirectus-block%22]&languages=[%22en-CA%22]&secret=123
```

You should see a redirect to the page directus-block, and a cookie named "__prerender_bypass".
