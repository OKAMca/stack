'use client'

import { createContext, use } from 'react'

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
function createCtx<A extends object | null>() {
  const ctx = createContext<A | undefined>(undefined)
  function useCtx() {
    const c = use(ctx)

    if (c === undefined) {
      throw new Error('useCtx must be inside a Provider')
    }

    return c
  }
  return [useCtx, ctx.Provider] as const // 'as const' makes TypeScript infer a tuple
}

export function createCtxNullable<A extends object | null>() {
  const ctx = createContext<A | undefined>(undefined)
  function useCtx() {
    const c = use(ctx)

    if (c === undefined) {
      return {} as A
    }

    return c
  }
  return [useCtx, ctx.Provider] as const // 'as const' makes TypeScript infer a tuple
}

/**
 * A helper to create a Context and Provider with no upfront default value.
 * Returns `null` when used outside of a Provider, allowing consumers to check
 * for context availability without throwing an error.
 */
export function createCtxNullableStrict<A extends object | null>() {
  const ctx = createContext<A | undefined>(undefined)
  function useCtx() {
    const c = use(ctx)

    if (c === undefined) {
      return null
    }

    return c
  }
  return [useCtx, ctx.Provider] as const // 'as const' makes TypeScript infer a tuple
}

export default createCtx
