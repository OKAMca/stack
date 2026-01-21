import type { LinkProps as NextLinkProps } from 'next/link'
import type { ReadonlyURLSearchParams } from 'next/navigation'

export interface TLink extends Omit<NextLinkProps, 'scroll' | 'as'> {
  /**
   * @default true
   * - `true`: Scrolls to the top of the clicked anchor (default Next.js behavior)
   * - `false`: Prevents any automatic scrolling
   * - `'top'`: Always scrolls to the top of the page, regardless of anchor
   */
  scroll?: 'top' | boolean
  urlDecorator?: NextLinkProps['as']
  /**
   * Used for the automatic scroll when `scroll = 'top'`
   * @default instant
   */
  behavior?: ScrollBehavior
  onPathnameChange?: (_pathname: string) => void
  onSearchParamsChange?: (_searchParams: ReadonlyURLSearchParams) => void
  onHashChange?: (_hash: string) => void
}

export interface TUseLinkReturn extends Omit<NextLinkProps, 'href'> {
  href: string
}
