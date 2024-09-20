import type { Nullable } from '@okam/stack-ui'
import DirectusLink from '../components/DirectusLink'
import type { TDirectusLinkProps } from '../components/DirectusLink/interface'
import type {
  TNavigationItems,
  TNavigationItemsChildren,
  TNavigationItemsParents,
  TNavigationItemsTree,
} from '../types/navigation-items'

function createLinkProps<Depth extends number, Link, NavigationItems>(
  item: Nullable<TNavigationItems<NavigationItems, Link, Depth>>,
  onNavigationItem: (item: Nullable<TNavigationItems<NavigationItems, Link, Depth>>) => Nullable<TDirectusLinkProps>,
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

function createParentTree<Depth extends number, Link, NavigationItems>(
  item: Nullable<TNavigationItems<NavigationItems, Link, Depth>>,
  onNavigationItem: (
    item: Nullable<TNavigationItemsParents<NavigationItems, Link, Depth>>,
  ) => Nullable<TDirectusLinkProps>,
  depth = -1,
): Nullable<TNavigationItemsTree> {
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

function createChildrenTree<Depth extends number, Link, NavigationItems>(
  item: Nullable<TNavigationItems<NavigationItems, Link, Depth>>,
  onNavigationItem: (
    item: Nullable<TNavigationItemsChildren<NavigationItems, Link, Depth>>,
  ) => Nullable<TDirectusLinkProps>,
  depth = 1,
): Nullable<TNavigationItemsTree> {
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
export default function useNavigationItems<
  Depth extends number,
  Link,
  NavigationItems extends TNavigationItems<NavigationItems, Link, Depth> = TNavigationItems<unknown, Link, Depth>,
>(
  items: Nullable<Nullable<TNavigationItems<NavigationItems, Link, Depth>>[]>,
  onNavigationItem: (item: Nullable<TNavigationItems<NavigationItems, Link, Depth>>) => Nullable<TDirectusLinkProps>,
): Nullable<Nullable<TNavigationItemsTree>[]> {
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
