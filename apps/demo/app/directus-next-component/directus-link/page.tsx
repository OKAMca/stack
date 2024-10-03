import type { TDirectusLinkProps, TLinks, TNavigationItemsTree } from '@okam/directus-next-component'
import { useDirectusLink, useNavigationItems } from '@okam/directus-next-component/server'
import { Anchor, type Nullable } from '@okam/stack-ui'

/* eslint-disable */
const navigationItems = [
  {
    "id": "f9e5baee-22e3-4770-936c-a3a9614cdaf4",
    "tokens": {
      "size": "large",
      "shape": "circular"
    },
    "variant": "menu",
    "link": {
      "anchor": "#parent-1",
      "external_link": null,
      "id": "1d96b8a1-022f-407f-a80d-187db5b2ff86",
      "label": "Parent 1",
      "prefetch": null,
      "replace": false,
      "scroll": true,
      "target": "_self",
      "type": "anchor",
      "collection": null,
      "file": null
    },
    "parent": null,
    "children": [
      {
        "id": "7b2bb1fb-7810-4dc1-9106-44d836846ff5",
        "link": {
          "anchor": "#",
          "external_link": "https://google.com",
          "id": "3851c650-b9e8-4910-9130-28d1bd5508a5",
          "label": "Enfant 1 (external)",
          "prefetch": null,
          "replace": false,
          "scroll": true,
          "target": "_self",
          "type": "external-link",
          "collection": null,
          "file": null
        },
        "children": []
      },
      {
        "id": "8f3a2eae-f2d9-47bc-9e8c-5453d62729e7",
        "tokens": null,
        "variant": null,
        "link": {
          "anchor": "#",
          "external_link": null,
          "id": "df7a3e71-b081-4e2b-bb41-b51d6b1958ec",
          "label": "Enfant 2 (internal)",
          "prefetch": null,
          "replace": false,
          "scroll": true,
          "target": "_self",
          "type": "collection",
          "collection": {
            "id": "1e9d25bb-a3d9-43c4-97ab-e2174e30a30a",
            "belongs_to_collection": null,
            "translations": [
              {
                "slug": "enfant-2",
                "title": null,
                "path": "/enfant-2",
                "languages_code": {
                  "code": "fr-CA"
                }
              }
            ],
            "route": null
          },
          "file": null
        },
        "children": []
      },
      {
        "id": "c3184e0b-f526-47ef-9c5f-6185206946f6",
        "tokens": null,
        "variant": null,
        "link": {
          "anchor": "#",
          "external_link": null,
          "id": "8adae6ab-7bf1-4a41-b8d9-49892f17942d",
          "label": "Enfant 3 (file)",
          "prefetch": null,
          "replace": false,
          "scroll": true,
          "target": "_self",
          "type": "file",
          "collection": null,
          "file": {
            "id": "e33f4e3b-5707-47ae-a8d4-7ff8e75ebc16",
            "filename_disk": "e33f4e3b-5707-47ae-a8d4-7ff8e75ebc16.jpeg",
            "filename_download": "qc.REDACTED.ca",
            "title": "qc.REDACTED.ca Logo",
            "type": "image/jpeg",
            "width": 1500,
            "height": 1500,
            "duration": null,
            "embed": null,
            "description": null,
            "focal_point_x": null,
            "focal_point_y": null
          }
        },
        "children": [
          {
            "id": "cafd18e7-b933-44bc-91a3-ebefed3b7765",
            "tokens": null,
            "variant": null,
            "link": {
              "anchor": "#",
              "external_link": "https://facebook.com",
              "id": "f135ba57-a7f2-41c3-93b7-94b500ff6ed0",
              "label": "Petit enfant 1",
              "prefetch": null,
              "replace": false,
              "scroll": true,
              "target": "_self",
              "type": "external-link",
              "collection": null,
              "file": null
            },
            "children": []
          }
        ]
      }
    ]
  }
]
/* eslint-enable */

const depthMap: Record<number, object> = {
  0: { padding: '4px', backgroundColor: 'red' },
  1: { padding: '4px', backgroundColor: 'blue' },
  2: { padding: '4px', backgroundColor: 'green' },
}

const BrandDirectusLink = (props: TDirectusLinkProps) => {
  const linkProps = useDirectusLink(props)

  return <Anchor {...linkProps} tokens={{ buttonStyle: 'outline', ...linkProps.tokens }} />
}

function renderTree(tree: Nullable<TNavigationItemsTree>): React.ReactNode {
  if (!tree) return null
  const { children, link, depth, linkProps } = tree
  const style = depthMap[depth]

  if (!link || !linkProps) return null
  if (!children) {
    return (
      <li style={style} key={linkProps?.id}>
        {/* You can render your own component with linkProps */}
        <BrandDirectusLink {...linkProps} />
        {/* Or use the pre-rendered version */}
        <div>{link}</div>
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
    <ul>
      <li style={style} key={linkProps?.id}>
        <div>
          <BrandDirectusLink {...linkProps} />
        </div>
        <div>{link}</div>
        <div>
          <strong>Depth: {depth}</strong>
        </div>
        <div>
          <strong>Type: {linkProps?.type}</strong>
        </div>
      </li>
      {children.map((child) => renderTree(child))}
    </ul>
  )
}

export default async function Index() {
  const navigationTree = useNavigationItems<3, { link?: Nullable<TLinks> }>(navigationItems, (item) => {
    const { link } = item ?? {}
    return { ...link, collection: link?.collection, file: link?.file }
  })

  return navigationTree?.map((child) => renderTree(child))
}
