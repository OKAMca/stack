import type { Nullable } from '@okam/stack-ui'
import type { TDirectusLinkProps } from '../components/DirectusLink/interface'
import type { TLinks } from './links'

export type TNavigationItems = {
  id: string
  link?: TLinks | null
  children?: Array<TNavigationItems | null> | null
  parent?: TNavigationItems | null
}

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
