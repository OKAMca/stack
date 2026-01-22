'use client'

/**
 * TabItem - react-stately collection Item component
 *
 * Uses React.Children API (Children.count, Children.forEach) as required by react-stately's
 * collection pattern. This is the same pattern used by Adobe's react-spectrum.
 *
 * @see https://github.com/adobe/react-spectrum/blob/main/packages/@react-stately/collections/src/Item.ts
 * @see https://react-spectrum.adobe.com/react-stately/collections.html
 * @see docs/ADR/005_react-stately-eslint-exceptions.md
 */

import type { CollectionBuilder, PartialNode } from '@react-stately/collections'
import type { JSX, ReactElement } from 'react'
import type { ItemProps } from 'react-stately'
import type { TTabElement, TTabItemProps } from '../interface'
import { Children } from 'react'
import { log } from '../../../logger'

type CollectionContext = Parameters<CollectionBuilder<object>['build']>[1]

function shouldSuppressTextValueWarning(context: CollectionContext): boolean {
  if (typeof context !== 'object' || context === null)
    return false

  return 'suppressTextValueWarning' in context && Boolean((context as { suppressTextValueWarning?: boolean }).suppressTextValueWarning)
}

function TabItem<T>(_props: ItemProps<T>): ReactElement | null {
  return null
}

function hasChildItems<T>(props: ItemProps<T>) {
  if (props.hasChildItems != null) {
    return props.hasChildItems
  }

  if (props.childItems != null) {
    return true
  }

  if (props.title != null && Children.count(props.children) > 0) {
    return true
  }

  return false
}

TabItem.getCollectionNode = function* getCollectionNode<T extends object>(
  props: TTabItemProps<T>,
  context: CollectionContext,
): Generator<PartialNode<T>> {
  const { childItems, title, children } = props

  const rendered = props.title ?? props.children
  const textValue = props.textValue ?? (typeof rendered === 'string' ? rendered : '') ?? props['aria-label'] ?? ''

  if (!textValue && !shouldSuppressTextValueWarning(context)) {
    log(
      '<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.',
      'warn',
    )
  }

  yield {
    'type': 'item',
    props,
    rendered,
    textValue,
    'aria-label': props['aria-label'],
    'hasChildNodes': hasChildItems(props),
    * childNodes() {
      if (childItems != null) {
        yield* Array.from(childItems).map(child => ({
          type: 'item',
          value: child,
        }))
      }
      else if (title != null) {
        const items: PartialNode<T>[] = []
        Children.forEach(children, (child) => {
          items.push({
            type: 'item',
            element: child as TTabElement<T>,
          })
        })

        yield* items
      }
    },
  }
}

// We don't want getCollectionNode to show up in the type definition

const _TabItem = TabItem as <T extends object>(_props: TTabItemProps<T>) => JSX.Element
export { _TabItem as TabItem }
