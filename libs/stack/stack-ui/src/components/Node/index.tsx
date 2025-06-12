'use client'

/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type PartialNode } from '@react-stately/collections'
import type { ItemElement } from '@react-types/shared'
import { Children } from 'react'
import type { ItemProps } from 'react-stately'
import type { TDefaultItemComponent, TDefaultSectionComponent } from '../../types/react-stately'
import type { TNodeProps } from './interface'

function hasChildItems<T>(props: ItemProps<T>) {
  if (props.hasChildItems != null) {
    return props.hasChildItems
  }

  if (props.childItems) {
    return true
  }

  if (props.title && Children.count(props.children) > 0) {
    return true
  }

  return false
}

function isSection<T extends object = object>(props: TNodeProps<T>): props is TDefaultSectionComponent<T> {
  return 'items' in props
}

function isItem<T extends object = object>(props: TNodeProps<T>): props is TDefaultItemComponent<T> {
  return !('items' in props)
}

/**
 * Automatically dispatches collection children to a react-stately `Item` or `Section` component.
 * On components able to call both `Item` and `Section`, if using the collection with a `children` rendering function and the `items` prop, using the `Node` component is mandatory for type safety.
 *
 * Currently unsupported:
 * - Calling a `Section` within an other `Section`
 *
 * @example
 * ```tsx
 * <CollectionComponent
 *  items={[
 *    // Section start
 *    {
 *      key: 'fruits',
 *      title: 'Fruits',
 *      children: (item) => <Item key={item.key}>{item.children}</Item>,
 *      items: [
 *        // These items are nested within the `Section`
 *        { key: 'banana', children: 'Banana' },
 *        { key: 'apple', children: 'Apple' },
 *        { key: 'orange', children: 'Orange' },
 *      ],
 *    },
 *  ]}
 *  // Section end
 * >
 *  {({ key, children, ...item }) => (
 *    <Node key={key} {...item}>
 *      {children}
 *    </Node>
 *  )}
 * </CollectionComponent>
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Node = <T extends object = object>(props: TNodeProps<T>) => {
  return null
}

Node.getCollectionNode = function* getCollectionNode<T extends object = object>(
  props: TNodeProps<T>,
): Generator<PartialNode<T>> {
  if (isItem(props)) {
    const { childItems, title, children } = props
    const rendered = title || children
    const textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || ''
    yield {
      type: 'item',
      props,
      rendered,
      textValue,
      'aria-label': props['aria-label'],
      hasChildNodes: hasChildItems(props),
      *childNodes() {
        if (childItems) {
          for (const child of childItems) {
            yield {
              type: 'item',
              value: child,
            }
          }
        } else if (title) {
          const items: PartialNode<T>[] = []
          Children.forEach(children, (child) => {
            items.push({
              type: 'item',
              element: child as ItemElement<T>,
            })
          })

          yield* items
        }
      },
    }
  }

  if (isSection(props)) {
    const { items, children, title } = props
    yield {
      type: 'section',
      props,
      hasChildNodes: true,
      rendered: title,
      'aria-label': props['aria-label'],
      *childNodes() {
        if (typeof children === 'function') {
          if (!items) {
            throw new Error('props.children was a function but props.items is missing')
          }

          for (const item of items) {
            yield {
              type: 'item',
              value: item,
              renderer: children,
            }
          }
        } else {
          const staticItems: PartialNode<T>[] = []
          Children.forEach(children, (child) => {
            staticItems.push({
              type: 'item',
              element: child,
            })
          })

          yield* staticItems
        }
      },
    }
  }
}

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const _Node = Node as unknown as (props: TNodeProps<any>) => JSX.Element

export { _Node as Node }
