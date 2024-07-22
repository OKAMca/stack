import type { Nullable } from '@okam/stack-ui'
import DirectusLink from '../components/DirectusLink'
import type { TNavigationItems, TNavigationItemsTree } from '../types/navigation-items'

function createParentTree(item: Nullable<TNavigationItems>, depth = -1): Nullable<TNavigationItemsTree> {
  const { parent, link, id } = item ?? {}

  if (!id) return null
  return {
    link: <DirectusLink {...link} />,
    linkProps: link,
    parent: createParentTree(parent, depth - 1),
    depth,
  }
}

function createChildrenTree(item: Nullable<TNavigationItems>, depth = 1): Nullable<TNavigationItemsTree> {
  const { children, id, link } = item ?? {}

  if (!id) return null
  return {
    link: <DirectusLink {...link} />,
    linkProps: link,
    children: children?.map((child) => createChildrenTree(child, depth + 1)),
    depth,
  }
}

/**
 *
 * @param navigationItems A tree of navigation items, with parents and children
 * @returns A tree of navigation items with ready-to-use DirectusLink components
 */
export default function useNavigationItems(
  items: TNavigationItems['children'],
): Nullable<Nullable<TNavigationItemsTree>[]> {
  const tree = items?.map((item) => {
    const { link, children } = item ?? {}
    const parentTree = createParentTree(item)
    const childrenTree = children?.map((child) => createChildrenTree(child))

    return {
      depth: 0,
      parent: parentTree,
      children: childrenTree,
      link: <DirectusLink {...link} />,
      linkProps: link,
    }
  })

  return tree
}
