# core-lib

This library was generated with [Nx](https://nx.dev).

## Breaking Change: v2.0.0

### React Context Utilities Removed

The React context utilities `createCtx` and `createCtxNullable` have been **removed** from `@okam/core-lib`. These utilities are now only available in `@okam/react-utils`.

**Migration:**

```typescript
// Before (no longer works in v2.0.0)
import { createCtx, createCtxNullable } from '@okam/core-lib'

// After
import { createCtx, createCtxNullable } from '@okam/react-utils'
```

### Server-Safe by Default

`@okam/core-lib` is now fully server-safe and can be used in any environment without React dependencies. The `react-server` export condition has been removed since it is no longer needed - the default export is server-safe.

## Available Exports

- `ArrayUtils` - Array manipulation utilities
- `Asserts` - Assertion helpers
- `normalizePath` - Path normalization utility
- `getNestedObjectValueOfKey` - Deep object property access
- `checkObjectProperty` - Object property checking
- `capitalizeFirstLetter` - String capitalization
- `UnPromisify` - Type utility for unwrapping Promise types
- `typeguards` - TypeScript type guards

## Running unit tests

Run `nx test core-lib` to execute the unit tests via [Vitest](https://vitest.dev/).
