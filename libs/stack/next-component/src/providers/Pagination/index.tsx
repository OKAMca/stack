import { createCtx } from '@okam/core-lib'
import type { DefaultError, QueryKey } from '@tanstack/react-query'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import type { ProviderProps } from 'react'
import { useMemo } from 'react'
import type { PaginationContext, PaginationProviderProps } from './interface'

const [usePaginationBase, PaginationProviderBase] = createCtx<PaginationContext<unknown, unknown, unknown>>()
export const usePagination = usePaginationBase as unknown as <
  Data,
  PageParam = unknown,
  E = DefaultError,
>() => PaginationContext<Data, PageParam, E>
const PaginationProvider = PaginationProviderBase as unknown as <Data, PageParam = unknown, E = DefaultError>(
  props: ProviderProps<PaginationContext<Data, PageParam, E>>,
) => JSX.Element

const PaginationContextProvider = <
  Data = unknown,
  E = DefaultError,
  Key extends QueryKey = QueryKey,
  PageParam = unknown,
>(
  props: PaginationProviderProps<Data, E, Key, PageParam>,
) => {
  const { children, getItemKey, ...rest } = props
  const result = useSuspenseInfiniteQuery(rest)
  const value = useMemo(() => {
    return {
      ...result,
      getItemKey,
    }
  }, [result, getItemKey])

  return <PaginationProvider value={value}>{children}</PaginationProvider>
}

export default PaginationContextProvider
