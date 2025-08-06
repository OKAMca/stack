import type { Nullable } from '@okam/stack-ui'
import type { DirectusLinkProps } from '../components/DirectusLink/interface'

export type NavigationItemsTree = {
  /**
   * Pre-rendered DirectusLink component for quick usage
   */
  link: Nullable<React.ReactElement>
  linkProps: Nullable<DirectusLinkProps>
  children?: Nullable<Nullable<NavigationItemsTree>[]>
  parent?: Nullable<NavigationItemsTree>
  /**
   * Starts at 0.
   * For each level of parent, goes down by 1
   * For each level of children, goes up by 1
   */
  depth: number
}

type DepthLimit = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export type NavigationItemsBase<Link> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tokens?: any | null
  variant?: string | null
} & Link

export type NavigationItemsParents<NavigationItems, Link, Depth extends number> = Depth extends never
  ? NavigationItemsBase<Link>
  : {
      parent?: Nullable<NavigationItemsParents<NavigationItems, Link, Depth>>
    } & NavigationItemsBase<Link>

export type NavigationItemsChildren<NavigationItems, Link, Depth extends number> = Depth extends never
  ? NavigationItemsBase<Link>
  : {
      children?: Nullable<Nullable<NavigationItemsChildren<NavigationItems, Link, DepthLimit[Depth]>>[]>
    } & NavigationItemsBase<Link>

export type NavigationItems<Items, Link, Depth extends number> = NavigationItemsChildren<Items, Link, Depth> &
  NavigationItemsParents<Items, Link, Depth>
