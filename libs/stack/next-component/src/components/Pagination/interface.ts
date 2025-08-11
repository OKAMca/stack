import type { TButtonProps, TDefaultComponent, TToken } from '@okam/stack-ui'
import type { DefaultError, QueryKey } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import type { PaginationContext, PaginationData, PaginationOptions } from '../../providers/Pagination/interface'

export interface PaginationRendererProps<T = TToken, Data = unknown, PageParam = unknown>
  extends PaginationData<Data, PageParam>,
    Omit<TDefaultComponent<T>, 'children'> {
  children: (page: Data) => ReactNode
  getItemKey: (page: Data, index: number) => string
}

export interface PaginationProps<
  T = TToken,
  Data = unknown,
  Error = DefaultError,
  Key extends QueryKey = QueryKey,
  PageParam = unknown,
> extends Omit<TDefaultComponent<T>, 'children'>,
    PaginationOptions<Data, Error, Key, PageParam> {
  children: (page: Data) => ReactNode
}

export type PaginationItemProps<T = TToken> = TDefaultComponent<T>

export interface PaginationButtonProps<T = TToken, Data = unknown, PageParam = unknown, E = DefaultError>
  extends TButtonProps<T> {
  /**
   * Determines what action to do when the `PaginationButton` component is pressed. `handlePageChange` will always be called alongisde `handlePress` original `Button` prop.
   * @param pagination - The current `PaginationContext` instance.
   */
  handlePageChange: (pagination: PaginationContext<Data, PageParam, E>) => void
}
