import type { Nullable } from '@okam/stack-ui'
import type { TDirectusLinkProps } from '../components/DirectusLink/interface'

export type TNavigationItemsTree = {
  /**
   * Pre-rendered DirectusLink component for quick usage
   */
  link: Nullable<React.ReactElement>
  linkProps: Nullable<TDirectusLinkProps>
  children?: Nullable<Nullable<TNavigationItemsTree>[]>
  parent?: Nullable<TNavigationItemsTree>
  /**
   * Starts at 0.
   * For each level of parent, goes down by 1
   * For each level of children, goes up by 1
   */
  depth: number
}

type DepthLimit = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export type TNavigationItemsParents<NavigationItems, Link, Depth extends number> = Depth extends never
  ? Link
  : {
      parent?: Nullable<TNavigationItemsParents<NavigationItems, Link, Depth>>
    } & Link

export type TNavigationItemsChildren<NavigationItems, Link, Depth extends number> = Depth extends never
  ? Link
  : {
      children?: Nullable<Nullable<TNavigationItemsChildren<NavigationItems, Link, DepthLimit[Depth]>>[]>
    } & Link

export type TNavigationItems<NavigationItems, Link, Depth extends number> = TNavigationItemsChildren<
  NavigationItems,
  Link,
  Depth
> &
  TNavigationItemsParents<NavigationItems, Link, Depth>
