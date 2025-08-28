import type { Nullable } from '@okam/stack-ui'
import DirectusLink from '../../components/DirectusLink'
import type { DirectusLinkProps } from '../../components/DirectusLink/interface'
import type {
  NavigationItems,
  NavigationItemsChildren,
  NavigationItemsParents,
  NavigationItemsTree,
} from '../../types/navigationItems'

function createLinkProps<Depth extends number, Link, Items>(
  item: Nullable<NavigationItems<Items, Link, Depth>>,
  onNavigationItem: (item: Nullable<NavigationItems<Items, Link, Depth>>) => Nullable<DirectusLinkProps>,
) {
  const { tokens, variant } = item ?? {}
  const link = onNavigationItem(item)

  const linkTokens = {
    ...tokens,
    ...link?.tokens,
    type: variant,
  }
  const linkProps = {
    ...link,
    tokens: linkTokens,
  }

  return linkProps
}

function createParentTree<Depth extends number, Link, Items>(
  item: Nullable<NavigationItems<Items, Link, Depth>>,
  onNavigationItem: (item: Nullable<NavigationItemsParents<Items, Link, Depth>>) => Nullable<DirectusLinkProps>,
  depth = -1,
): Nullable<NavigationItemsTree> {
  const { parent } = item ?? {}
  const linkProps = createLinkProps(item, onNavigationItem)
  const { id } = linkProps ?? {}

  if (!id) return null

  return {
    link: <DirectusLink {...linkProps} />,
    linkProps,
    parent: createParentTree(parent as typeof item, onNavigationItem, depth - 1),
    depth,
  }
}

function createChildrenTree<Depth extends number, Link, Items>(
  item: Nullable<NavigationItems<Items, Link, Depth>>,
  onNavigationItem: (item: Nullable<NavigationItemsChildren<Items, Link, Depth>>) => Nullable<DirectusLinkProps>,
  depth = 1,
): Nullable<NavigationItemsTree> {
  const { children } = item ?? {}
  const linkProps = createLinkProps(item, onNavigationItem)
  const { id } = linkProps ?? {}

  if (!id) return null

  return {
    link: <DirectusLink {...linkProps} />,
    linkProps,
    children: children?.map((child) => createChildrenTree(child as typeof item, onNavigationItem, depth + 1)),
    depth,
  }
}

/**
 *
 * @param navigationItems A tree of navigation items, with parents and children
 * @param onNavigationItem Called when a navigation item is about to be added to the tree
 * @returns A tree of navigation items with ready-to-use DirectusLink components
 */
export function getNavigationItems<
  Depth extends number,
  Link,
  Items extends NavigationItems<Items, Link, Depth> = NavigationItems<unknown, Link, Depth>,
>(
  items: Nullable<Nullable<NavigationItems<Items, Link, Depth>>[]>,
  onNavigationItem: (item: Nullable<NavigationItems<Items, Link, Depth>>) => Nullable<DirectusLinkProps>,
): Nullable<Nullable<NavigationItemsTree>[]> {
  const tree = items?.map((item) => {
    const { children, parent } = item ?? {}

    const linkProps = createLinkProps(item, onNavigationItem)

    const parentTree = createParentTree(parent as typeof item, onNavigationItem)
    const childrenTree = children?.map((child) => createChildrenTree(child as typeof item, onNavigationItem))

    return {
      depth: 0,
      parent: parentTree,
      children: childrenTree,
      link: <DirectusLink {...linkProps} />,
      linkProps,
    }
  })

  return tree
}

/**
 * @deprecated Use `getNavigationItems` instead
 */
export const useNavigationItems = getNavigationItems
