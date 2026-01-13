import type { UrlObject } from 'url'

export type NextLinkProps = {
  href: string | UrlObject
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  passHref?: boolean
  // Updated for Next.js 15: prefetch now supports 'auto' and 'unstable_forceStale' values
  prefetch?: 'auto' | 'unstable_forceStale' | boolean | null
  locale?: string | false
  legacyBehavior?: boolean
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  as?: string | UrlObject
}
