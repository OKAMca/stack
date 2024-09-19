# ADR 001: Directus Dynamic Routing Integration

 ## Status
 Proposed

 ## Context
 Our shared "stack" project, used across multiple Okam projects, includes a `directusRouteMiddleware` function for
 handling dynamic routing with Directus integration. We need to refactor this function to meet the requirements of
 projects using our stack, addressing challenges with NextJS caching, i18n routing, and differing locale handling
 strategies between Directus and NextJS.

 ## Decision
 We will refactor the `directusRouteMiddleware` function, renaming it to `directusRouteRouter`, and modify its
 approach to routing. The new implementation will:

 1. Directly query Directus for page settings translations based on the requested path.
 2. Infer the language from the matched translation.
 3. Allow for custom mapping between Directus locales and NextJS locales, with a fallback to the Directus locale.
 4. Rewrite the path to the format `/[mappedLocale]/[collectionName]/[id]`.
 5. Provide verbose logging in development mode for easier debugging.
 6. Remove the `config` export, allowing projects to define their own matcher in their `middleware.ts` file.

 ## Changes
 1. Rename `directusRouteMiddleware` to `directusRouteRouter`.
 2. Modify the GraphQL query to search for translations directly based on the path.
 3. Extract locale information from the matched translation.
 4. Implement a configuration object that includes an optional locale mapping.
 5. Use the locale mapping to convert Directus locales to desired NextJS locales, falling back to the Directus local
 if no mapping is provided or found.
 6. Implement path rewriting to the new format: `/[mappedLocale]/[collectionName]/[id]`.
 7. Add error handling for not found (404) and server error (500) cases.
 8. Implement verbose logging in development mode.
 9. Remove the `config` export, allowing for more flexibility in project-specific configurations.

 ## Consequences

 ### Positive
 1. More flexible routing that adapts to the actual content structure in Directus.
 2. Eliminates the need for separate i18n middleware.
 3. Simplifies locale handling by inferring it from the content.
 4. Provides a consistent routing structure across projects using the stack.
 5. Allows for custom locale mapping, accommodating different locale strategies between Directus and NextJS.
 6. Improves debugging experience with verbose logging in development mode.
 7. Increases flexibility by allowing projects to define their own matcher configuration.

 ### Negative
 1. Slightly increased complexity in the initial GraphQL query.
 2. May require updates to existing projects using the stack.
 3. Requires additional configuration in each project's `middleware.ts` file.

 ## Implementation Details
 1. Update the GraphQL query in `fetchPageSettingsTranslation` to search translations directly based on the path.
 2. Modify `directusRouteRouter` to use the new query and extract necessary information.
 3. Implement a `DirectusRouteConfig` interface that includes an optional `localeMap`.
 4. Use the `localeMap` to convert Directus locales to NextJS locales when rewriting paths, falling back to the
 Directus locale if necessary.
 5. Implement path rewriting based on the extracted and mapped information.
 6. Add error handling for 404 and 500 cases.
 7. Implement verbose logging for development environments.
 8. Remove the `config` export from the `directusRouteRouter` file.

 ## Example Usage
 ```typescript
 // In the project's middleware.ts file
 import { NextRequest } from 'next/server';
 import { directusRouteRouter } from '@okam/directus-next-component/server';

 const config = {
   localeMap: {
     'en-US': 'en',
     'fr-CA': 'fr',
     'es-ES': 'es',
   }
 };

 export function middleware(request: NextRequest) {
   return directusRouteRouter(request, config);
 }

 export const config = {
   matcher: [
     '/((?!api|_next/static|_next/image|favicon.ico).*)',
   ],
 }
```

## Notes

 • This change prepares the ground for future caching implementations, which will be addressed in a separate ADR.
 • Projects using this stack will need to update their middleware.ts files to include the necessary configuration and
   matcher.
 • Verbose logging is only active in development mode to aid in debugging without affecting production performance.


## Next Steps

 1 Implement and test the changes in the stack project.
 2 Update documentation for projects using the stack, including guidance on how to configure the middleware, use the
   new locale mapping feature, and interpret development logs.
 3 Consider caching strategies to optimize performance (to be addressed in a future ADR).
 4 Gather feedback from projects using the stack to ensure the new implementation meets their needs.
 5 Provide examples and best practices for configuring the middleware in different project scenarios.
 6 Investigate and plan for the implementation of a "reverse" routing feature.


## Future Considerations

### Reverse Routing Feature

We should consider implementing a "reverse" routing feature as an enhancement to our current routing system. This
feature would work as follows:

 1 When a user accesses a URL in the format /[locale]/[collection]/[id] directly, the system would: a. Recognize this
   format. b. Query the Directus API to find the corresponding page_settings for this entity. c. If a user-friendly
   path is found in the page_settings, perform a redirect to that path.

### Potential Implementation:

```typescript
 async function reverseRouting(request: NextRequest, config: DirectusRouteConfig) {
   const { pathname } = request.nextUrl
   const match = pathname.match(/^\/([^\/]+)\/([^\/]+)\/([^\/]+)$/)

   if (match) {
     const [, locale, collection, id] = match

     // Query Directus for the user-friendly path
     const userFriendlyPath = await fetchUserFriendlyPath(collection, id, locale, config)

     if (userFriendlyPath) {
       // Perform redirect
       return NextResponse.redirect(new URL(userFriendlyPath, request.url))
     }
   }

   // If no match or no user-friendly path found, continue with normal routing
   return directusRouteRouter(request, config)
 }
 ```

### Benefits:

 1 Improved user experience with more readable URLs.
 2 Consistency in URL structure across the application.
 3 Better SEO as search engines would only index the user-friendly URLs.

### Challenges:

 1 Additional database query for each reverse routing check, which could impact performance.
 2 Need to ensure proper handling of locale variations and mappings.
 3 Potential for redirect loops if not implemented carefully.

### Next Steps for Reverse Routing:

 1 Conduct a detailed design review for the reverse routing feature.
 2 Assess the performance implications and consider caching strategies.
 3 Implement a prototype and test with various scenarios.
 4 Update the directusRouteRouter function to incorporate reverse routing logic.
 5 Provide documentation and examples for using the reverse routing feature.
 6 Consider making this an optional feature that can be enabled/disabled via configuration.

By implementing this reverse routing feature, we would create a more robust and user-friendly routing system that
handles both directions of URL resolution, further enhancing the flexibility and power of our Directus integration.
