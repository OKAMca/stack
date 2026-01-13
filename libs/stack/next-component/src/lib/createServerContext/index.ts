import { cache } from 'react'

/**
 * Copy of the [`server-only-context` package](https://github.com/manvalls/server-only-context)
 *
 * Uses React's `cache` to store the value in a ref.
 */
export function createServerContext<T>(defaultValue: T) {
  const getRef = cache(() => ({ current: defaultValue }))

  const getValue = (): T => getRef().current

  const setValue = (value: T) => {
    getRef().current = value
  }

  return [getValue, setValue] as const
}
