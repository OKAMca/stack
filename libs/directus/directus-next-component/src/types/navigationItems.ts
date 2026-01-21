import type { Nullable } from '@okam/stack-ui'
import type { TDirectusLinkProps } from '../components/DirectusLink/interface'

export interface TNavigationItemsTree {
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

/**
 * WHY `any` IS REQUIRED FOR tokens:
 *
 * The tokens field comes from Directus CMS and may contain null/undefined values.
 * However, the downstream TDirectusLinkProps expects TToken (Record<string, string | boolean>).
 *
 * The type mismatch occurs because:
 * 1. CMS data has nullable fields: variant?: string | null
 * 2. getNavigationItems spreads tokens and adds: type: variant
 * 3. TNavigationItemsTree.linkProps expects TToken without null/undefined
 *
 * Fixing this properly would require either:
 * - Runtime filtering of null/undefined values (behavior change)
 * - Changing TToken to allow null/undefined (cascading type changes across stack-ui)
 * - Creating separate CMS and component token types (significant refactor)
 *
 * The `any` type here acts as a type boundary between CMS data and UI components.
 * Type safety is enforced at the component level where tokens are actually consumed.
 */
export type TNavigationItemsBase<Link> = {
  // eslint-disable-next-line ts/no-explicit-any -- See JSDoc above: CMS tokens can have null/undefined values
  tokens?: any
  variant?: string | null
} & Link

export type TNavigationItemsParents<TNavigationItems, Link, Depth extends number> = Depth extends never
  ? TNavigationItemsBase<Link>
  : {
    parent?: Nullable<TNavigationItemsParents<TNavigationItems, Link, Depth>>
  } & TNavigationItemsBase<Link>

export type TNavigationItemsChildren<TNavigationItems, Link, Depth extends number> = Depth extends never
  ? TNavigationItemsBase<Link>
  : {
    children?: Nullable<Nullable<TNavigationItemsChildren<TNavigationItems, Link, DepthLimit[Depth]>>[]>
  } & TNavigationItemsBase<Link>

export type TNavigationItems<Items, Link, Depth extends number> = TNavigationItemsChildren<Items, Link, Depth>
  & TNavigationItemsParents<Items, Link, Depth>
