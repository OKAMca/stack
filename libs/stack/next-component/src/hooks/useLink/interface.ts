import type { LinkProps as NextLinkProps } from 'next/link'
import type { ReadonlyURLSearchParams } from 'next/navigation'

export type TScrollProp =
  | NextLinkProps['scroll']
  /**
   * Scroll to the top of the page when the link is clicked.
   */
  | 'top'

export interface TLink extends Omit<NextLinkProps, 'scroll' | 'as'> {
  /**
   * @default true
   */
  scroll?: TScrollProp | undefined
  urlDecorator?: NextLinkProps['as']
  /**
   * Used for the automatic scroll when `scroll = 'top'`
   * @default 'instant'
   */
  behavior?: ScrollBehavior
}

export interface TLinkOptions extends TLink {
  onPathnameChange?: (pathname: string) => void
  onSearchParamsChange?: (searchParams: ReadonlyURLSearchParams) => void
  onHashChange?: (hash: string) => void
}
