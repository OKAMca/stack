import type {
  DefaultError,
  InfiniteData,
  QueryKey,
  UseSuspenseInfiniteQueryOptions,
  UseSuspenseInfiniteQueryResult,
} from '@tanstack/react-query'
import type { ReactNode } from 'react'

export type PaginationData<Data, PageParam = unknown> = InfiniteData<Data, PageParam>

export interface PaginationOptions<Data, E = DefaultError, Key extends QueryKey = QueryKey, PageParam = unknown>
  extends UseSuspenseInfiniteQueryOptions<Data, E, InfiniteData<Data, PageParam>, Data, Key, PageParam> {}

export interface PaginationResult<Data, PageParam = unknown, E = DefaultError>
  extends UseSuspenseInfiniteQueryResult<InfiniteData<Data, PageParam>, E> {}

export interface PaginationProviderProps<Data, E = DefaultError, Key extends QueryKey = QueryKey, PageParam = unknown>
  extends PaginationOptions<Data, E, Key, PageParam> {
  getItemKey: (item: Data, index: number) => string
  children: ReactNode
}

export interface PaginationContext<Data, PageParam = unknown, E = DefaultError>
  extends PaginationResult<Data, PageParam, E> {
  getItemKey: (item: Data, index: number) => string
}
