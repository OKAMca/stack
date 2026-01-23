# core-lib

This library was generated with [Nx](https://nx.dev).

## Migration Notice

### React Context Utilities (`createCtx`, `createCtxNullable`)

**Deprecated:** The React context utilities `createCtx` and `createCtxNullable` have been moved to `@okam/react-utils`.

The exports from `@okam/core-lib` are now deprecated and will be removed in a future major version.

**Before (deprecated):**
```typescript
import { createCtx, createCtxNullable } from '@okam/core-lib'
```

**After (recommended):**
```typescript
import { createCtx, createCtxNullable } from '@okam/react-utils'
```

### Server-Safe Usage

For Node.js/server environments that don't have React available, use the `react-server` export condition which excludes React-dependent utilities:

```json
{
  "exports": {
    ".": {
      "react-server": "./server.mjs"
    }
  }
}
```

This export is automatically used by bundlers that support the `react-server` condition (like Next.js).

## Running unit tests

Run `nx test core-lib` to execute the unit tests via [Vitest](https://vitest.dev/).
