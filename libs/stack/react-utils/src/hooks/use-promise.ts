'use client'

import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { useDeepCompareMemoize } from './use-deep-compare-memoize'

export type AsyncFnParams<TParams> = TParams

export type AsyncFnWithParams<TResult, TParams extends Record<string, unknown>> = (
  _variables: TParams,
) => Promise<TResult>
export type AsyncFnWithoutParams<TResult> = () => Promise<TResult>
export type AsyncFn<TResult, TParams extends Record<string, unknown> = Partial<Record<string, unknown>>>
  = | AsyncFnWithParams<TResult, TParams>
    | AsyncFnWithoutParams<TResult>

export interface UsePromiseOptions<TResult> {
  initialData?: TResult
}

const emptyParams = {}

export function usePromise<TResult, TVariables extends Record<string, unknown> = Partial<Record<string, unknown>>>(
  promise: AsyncFn<TResult, TVariables>,
  params: AsyncFnParams<TVariables>,
  options?: UsePromiseOptions<TResult>,
): {
  error: Error | null
  isLoading: boolean
  data: TResult | null
  reload: () => void
} {
  const immediate = true

  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<TResult | null>(options?.initialData ?? null)
  const [force, forceUpdate] = useReducer((x: number) => x + 1, 0)

  const mounted = useRef<boolean>(true)

  const memoizedParams = useDeepCompareMemoize(params ?? emptyParams)

  // Async data fetching pattern: setState calls in Promise handlers are intentional
  // The mounted.current check prevents setState on unmounted components
  const promiseFn = useCallback(async () => {
    if (mounted.current) {
      setIsLoading(true)
      setData(null)
      setError(null)
    }
    return promise(params)
      .then((response) => {
        if (mounted.current) {
          setData(response)
          setIsLoading(false)
        }
      })
      .catch((catchedError: Error) => {
        if (mounted.current) {
          // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect -- async fetch error handling
          setError(catchedError)
          // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect -- async fetch completion
          setIsLoading(false)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- params excluded: memoizedParams provides deep comparison; including raw params causes infinite loops
  }, [promise, memoizedParams])

  useEffect(() => {
    mounted.current = true
    if (immediate) {
      void promiseFn()
    }
    return () => {
      // Loading cannot be safely determined here
      // abort should be a no-op anyway
      // abortController.abort();
      mounted.current = false
    }
  }, [force, promiseFn, immediate])

  const reload = useCallback(() => {
    forceUpdate()
  }, [])

  return { data, isLoading, error, reload }
}
