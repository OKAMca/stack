'use client'

/**
 * @okam/react-utils
 *
 * React-specific utilities and hooks extracted from @okam/core-lib.
 * This package contains React context utilities and custom hooks.
 */

// Hooks
export { useDeepCompareMemoize } from './hooks/use-deep-compare-memoize'
export { usePromise } from './hooks/use-promise'
export type {
  AsyncFn,
  AsyncFnParams,
  AsyncFnWithoutParams,
  AsyncFnWithParams,
  UsePromiseOptions,
} from './hooks/use-promise'

// Context utilities
export { default as createCtx } from './utils/createContext'
export { createCtxNullable } from './utils/createContext'
