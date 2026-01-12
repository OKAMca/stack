'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PartialNode } from '@react-stately/collections'
import type { ItemProps } from '@react-types/shared'
import type { ReactElement } from 'react'
import React from 'react'
import { log } from '../../../logger'
import type { TTagElement, TTagItemProps } from '../interface'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TagItem<T>(props: ItemProps<T>): ReactElement | null {
  return null
}

function hasChildItems<T>(props: ItemProps<T>) {
  if (props.hasChildItems != null) {
    return props.hasChildItems
  }

  if (props.childItems) {
    return true
  }

  if (props.title && React.Children.count(props.children) > 0) {
    return true
  }

  return false
}

TagItem.getCollectionNode = function* getCollectionNode<T extends object>(
  props: TTagItemProps<T>,
  context: any,
): Generator<PartialNode<T>> {
  const { childItems, title, children } = props

  const rendered = props.title || props.children
  const textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || ''

  if (!textValue && !context?.suppressTextValueWarning && process.env.NODE_ENV !== 'production') {
    log(
      '<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.',
      'warn',
    )
  }

  yield {
    type: 'item',
    props,
    rendered,
    textValue,
    'aria-label': props['aria-label'],
    hasChildNodes: hasChildItems(props),
    *childNodes() {
      if (childItems) {
        yield* Array.from(childItems).map((child) => ({
          type: 'item',
          value: child,
        }))
      } else if (title) {
        const items: PartialNode<T>[] = []
        React.Children.forEach(children, (child) => {
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
// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const _TagItem = TagItem as <T extends object>(props: TTagItemProps<T>) => React.JSX.Element
export { _TagItem as TagItem }
