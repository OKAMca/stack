# react-utils

React utilities and hooks for the OKAM Stack.

## Installation

```bash
pnpm add @okam/react-utils
```

## Peer Dependencies

- `react` ^18.0.0 || ^19.0.0

## API

### Context Utilities

#### `createCtx<A>()`

Creates a React context with a required provider. Throws an error if the hook is used outside of the provider.

```typescript
import { createCtx } from '@okam/react-utils'

interface MyContextValue {
  count: number
  increment: () => void
}

const [useMyContext, MyContextProvider] = createCtx<MyContextValue>()

// In a component
function MyProvider({ children }) {
  const [count, setCount] = useState(0)
  const value = { count, increment: () => setCount(c => c + 1) }
  return <MyContextProvider value={value}>{children}</MyContextProvider>
}

// In a consumer
function Counter() {
  const { count, increment } = useMyContext() // Throws if not in provider
  return <button onClick={increment}>{count}</button>
}
```

#### `createCtxNullable<A>()`

Creates a React context with an optional provider. Returns an empty object if used outside of the provider.

```typescript
import { createCtxNullable } from '@okam/react-utils'

const [useOptionalContext, OptionalProvider] = createCtxNullable<MyContextValue>()

// In a consumer (won't throw if outside provider)
function Consumer() {
  const context = useOptionalContext() // Returns {} if not in provider
  return <div>{context.count ?? 'No context'}</div>
}
```

#### `createCtxNullableStrict<A>()`

Creates a React context with an optional provider. Returns `null` if used outside of the provider, allowing explicit null checks.

```typescript
import { createCtxNullableStrict } from '@okam/react-utils'

const [useOptionalContext, OptionalProvider] = createCtxNullableStrict<MyContextValue>()

// In a consumer (won't throw if outside provider)
function Consumer() {
  const context = useOptionalContext() // Returns null if not in provider
  if (context === null) {
    return <div>No context available</div>
  }
  return <div>{context.count}</div>
}
```

### Hooks

#### `useDeepCompareMemoize<T>(value: T): T`

Returns a memoized value that only changes when deep comparison detects a change. Useful for objects/arrays as dependencies.

```typescript
import { useDeepCompareMemoize } from '@okam/react-utils'

function Component({ config }) {
  const memoizedConfig = useDeepCompareMemoize(config)

  useEffect(() => {
    // Only runs when config deeply changes
  }, [memoizedConfig])
}
```

#### `usePromise<T>(asyncFn, options?)`

Hook for managing async operations with loading, error, and result states.

```typescript
import { usePromise } from '@okam/react-utils'

function DataComponent() {
  const { loading, error, result, execute } = usePromise(
    async () => fetch('/api/data').then(r => r.json()),
    { autoExecute: true }
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return <div>{JSON.stringify(result)}</div>
}
```

## Running unit tests

Run `nx test react-utils` to execute the unit tests via [Vitest](https://vitest.dev/).
