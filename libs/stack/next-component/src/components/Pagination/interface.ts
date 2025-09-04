import type { TButtonProps, TDefaultComponent, TToken } from '@okam/stack-ui'
import type { DefaultError } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import type { PaginationContext, PaginationData } from '../../providers/Pagination/interface'

export interface PaginationItemProps<Data = unknown, PageParam = unknown, T = TToken> extends TDefaultComponent<T> {
  page: Data
  pageParam: PageParam
}

export interface PaginationRendererProps<Data = unknown, PageParam = unknown, T = TToken>
  extends PaginationData<Data, PageParam>,
    Omit<TDefaultComponent<T>, 'children'> {
  children: (props: PaginationItemProps<Data, PageParam, T>) => ReactNode
  getItemKey: (page: Data, index: number) => string
}

export interface PaginationProps<Data = unknown, PageParam = unknown, T = TToken>
  extends Omit<TDefaultComponent<T>, 'children'> {
  children: (props: PaginationItemProps<Data, PageParam, T>) => ReactNode
}

export interface PaginationButtonProps<Data = unknown, PageParam = unknown, E = DefaultError, T extends TToken = TToken>
  extends TButtonProps<T> {
  /**
   * Determines what action to do when the `PaginationButton` component is pressed. `handlePageChange` will always be called alongisde `handlePress` original `Button` prop.
   * @param pagination - The current `PaginationContext` instance.
   */
  handlePageChange: (pagination: PaginationContext<Data, PageParam, E>) => void
}
