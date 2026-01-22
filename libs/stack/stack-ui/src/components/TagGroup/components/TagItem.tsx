'use client'

/**
 * TagItem - react-stately collection Item component
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
import type { TTagElement, TTagItemProps } from '../interface'
import { Children } from 'react'
import { log } from '../../../logger'

type CollectionContext = Parameters<CollectionBuilder<object>['build']>[1]

function shouldSuppressTextValueWarning(context: CollectionContext): boolean {
  if (typeof context !== 'object' || context === null)
    return false

  return 'suppressTextValueWarning' in context && Boolean((context as { suppressTextValueWarning?: boolean }).suppressTextValueWarning)
}

function TagItem<T>(_props: ItemProps<T>): ReactElement | null {
  return null
}

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

TagItem.getCollectionNode = function* getCollectionNode<T extends object>(
  props: TTagItemProps<T>,
  context: CollectionContext,
): Generator<PartialNode<T>> {
  const { childItems, title, children } = props

  // eslint-disable-next-line ts/prefer-nullish-coalescing -- intentional falsy check: prefer title over children for rendering
  const rendered = props.title || props.children
  // eslint-disable-next-line ts/prefer-nullish-coalescing -- intentionally fallback on empty strings for accessibility text
  const textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || ''

  if (!textValue && !shouldSuppressTextValueWarning(context) && process.env.NODE_ENV !== 'production') {
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
      if (childItems) {
        yield* Array.from(childItems).map(child => ({
          type: 'item',
          value: child,
        }))
      }
      else if (title) {
        const items: PartialNode<T>[] = []
        Children.forEach(children, (child) => {
          items.push({
            type: 'item',
            element: child as TTagElement<T>,
          })
        })

        yield* items
      }
    },
  }
}

// We don't want getCollectionNode to show up in the type definition

const _TagItem = TagItem as <T extends object>(_props: TTagItemProps<T>) => JSX.Element
export { _TagItem as TagItem }
