export { default as Img } from './components/Img'
export { default as Link } from './components/Link'
export { default as Pagination } from './components/Pagination'
export { default as PaginationRenderer } from './components/Pagination/components/Renderer'
export { default as PaginationButton } from './components/Pagination/components/Button'

export { default as PaginationContextProvider } from './providers/Pagination'

export { useLink } from './hooks/useLink'
export { useHash } from './hooks/useHash'
export { usePagination } from './providers/Pagination'

export type { default as TImgProps } from './components/Img/interface'
export type { TLinkProps } from './components/Link/interface'
export type { TLink } from './hooks/useLink/interface'
export type {
  PaginationRendererProps,
  PaginationButtonProps,
  PaginationItemProps,
  PaginationProps,
} from './components/Pagination/interface'
