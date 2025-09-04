import type { DefaultError, InfiniteData, UseSuspenseInfiniteQueryResult } from '@tanstack/react-query'
import type { ReactNode } from 'react'

export type PaginationData<Data, PageParam = unknown> = InfiniteData<Data, PageParam>

export interface PaginationResult<Data, PageParam = unknown, E = DefaultError>
  extends UseSuspenseInfiniteQueryResult<InfiniteData<Data, PageParam>, E> {}

export interface PaginationProviderProps<Data, E = DefaultError, PageParam = unknown>
  extends PaginationResult<Data, PageParam, E> {
  getItemKey: (item: Data, index: number) => string
  children: ReactNode
}

export interface PaginationContext<Data, PageParam = unknown, E = DefaultError>
  extends PaginationResult<Data, PageParam, E> {
  getItemKey: (item: Data, index: number) => string
}
