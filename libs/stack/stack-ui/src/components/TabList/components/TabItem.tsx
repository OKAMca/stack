'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PartialNode } from '@react-stately/collections'
import type { ItemProps } from '@react-types/shared'
import type { JSX, ReactElement } from 'react'
import React from 'react'
import { log } from '../../../logger'
import type { TTabElement, TTabItemProps } from '../interface'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TabItem<T>(props: ItemProps<T>): ReactElement | null {
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

TabItem.getCollectionNode = function* getCollectionNode<T extends object>(
  props: TTabItemProps<T>,
  context: any,
): Generator<PartialNode<T>> {
  const { childItems, title, children } = props

  const rendered = props.title || props.children
  const textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || ''

  if (!textValue && !context?.suppressTextValueWarning) {
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
            element: child as TTabElement<T>,
          })
        })

        yield* items
      }
    },
  }
}

// We don't want getCollectionNode to show up in the type definition
// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const _TabItem = TabItem as <T extends object>(props: TTabItemProps<T>) => JSX.Element
export { _TabItem as TabItem }
