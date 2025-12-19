import { NavigationItemsDocument, NavigationItemsFragmentDoc, useFragment } from '@demo/directus-data-query'
import type { TDirectusLinkProps, TLinks, TNavigationItems, TNavigationItemsTree } from '@okam/directus-next-component'
import { useDirectusLink, useNavigationItems } from '@okam/directus-next-component/server'
import { queryGql } from '@okam/directus-query'
import { Anchor, type Nullable } from '@okam/stack-ui'
import { isEmpty } from 'radashi'

const depthMap: Record<number, object> = {
  0: { padding: '4px', backgroundColor: 'red' },
  1: { padding: '4px', backgroundColor: 'blue' },
  2: { padding: '4px', backgroundColor: 'green' },
}

const BrandDirectusLink = (props: TDirectusLinkProps) => {
  const linkProps = useDirectusLink(props)

  return <Anchor {...linkProps} tokens={{ buttonStyle: 'outline', className: 'text-white', ...linkProps.tokens }} />
}

function renderTree(tree: Nullable<TNavigationItemsTree>): React.ReactNode {
  if (!tree) return null
  const { children, link, depth, linkProps } = tree
  const style = depthMap[depth]

  if (!link || !linkProps) return null
  if (isEmpty(children)) {
    return (
      <li style={style} key={linkProps?.id} className="mx-2 my-1 border border-gray-300 rounded-md list-none">
        <BrandDirectusLink {...linkProps} />
        <div>
          <strong>Depth: {depth}</strong>
        </div>
        <div>
          <strong>Type: {linkProps?.type}</strong>
        </div>
      </li>
    )
  }
  return (
    <ul className="list-none mb-4 mx-2">
      <li style={style} key={linkProps?.id} className="my-1 border border-gray-300 rounded-md">
        <div>
          <BrandDirectusLink {...linkProps} />
        </div>
        <div>
          <strong>Depth: {depth}</strong>
        </div>
        <div>
          <strong>Type: {linkProps?.type}</strong>
        </div>
        <ul className="list-none mb-4">{children.map((child) => renderTree(child))}</ul>
      </li>
    </ul>
  )
}

export default async function Index() {
  const { navigation_items: navigationItemsFragment } = await queryGql(NavigationItemsDocument, {
    locale: 'en-CA',
    filter: { parent: { id: { _null: true } } },
  })
  const navigationItems = useFragment(NavigationItemsFragmentDoc, navigationItemsFragment)
  const navigationTree = useNavigationItems<3, { link?: Nullable<TLinks> }>(
    navigationItems as Nullable<
      Nullable<
        TNavigationItems<TNavigationItems<unknown, { link?: Nullable<TLinks> }, 3>, { link?: Nullable<TLinks> }, 3>
      >[]
    >,
    (item) => {
      const { link } = item ?? {}
      return { ...link, collection: link?.collection, file: link?.file }
    },
  )

  return navigationTree?.map((child) => renderTree(child))
}
