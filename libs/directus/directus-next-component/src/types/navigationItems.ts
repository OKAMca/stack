import type { Nullable } from '@okam/stack-ui'
import type { DirectusLinkProps } from '../components/DirectusLink/interface'

export type TTNavigationItemsTree = {
  /**
   * Pre-rendered DirectusLink component for quick usage
   */
  link: Nullable<React.ReactElement>
  linkProps: Nullable<DirectusLinkProps>
  children?: Nullable<Nullable<TTNavigationItemsTree>[]>
  parent?: Nullable<TTNavigationItemsTree>
  /**
   * Starts at 0.
   * For each level of parent, goes down by 1
   * For each level of children, goes up by 1
   */
  depth: number
}

type DepthLimit = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export type TTNavigationItemsBase<Link> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tokens?: any | null
  variant?: string | null
} & Link

export type TTNavigationItemsParents<TNavigationItems, Link, Depth extends number> = Depth extends never
  ? TTNavigationItemsBase<Link>
  : {
      parent?: Nullable<TTNavigationItemsParents<TNavigationItems, Link, Depth>>
    } & TTNavigationItemsBase<Link>

export type TTNavigationItemsChildren<TNavigationItems, Link, Depth extends number> = Depth extends never
  ? TTNavigationItemsBase<Link>
  : {
      children?: Nullable<Nullable<TTNavigationItemsChildren<TNavigationItems, Link, DepthLimit[Depth]>>[]>
    } & TTNavigationItemsBase<Link>

export type TNavigationItems<Items, Link, Depth extends number> = TTNavigationItemsChildren<Items, Link, Depth> &
  TTNavigationItemsParents<Items, Link, Depth>
