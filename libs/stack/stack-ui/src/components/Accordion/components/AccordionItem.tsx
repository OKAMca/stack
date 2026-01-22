/**
 * AccordionItem - react-stately collection Item component
 *
 * Uses React.Children API (Children.forEach) as required by react-stately's
 * collection pattern. This is the same pattern used by Adobe's react-spectrum.
 *
 * @see https://github.com/adobe/react-spectrum/blob/main/packages/@react-stately/collections/src/Item.ts
 * @see https://react-spectrum.adobe.com/react-stately/collections.html
 * @see docs/ADR/005_react-stately-eslint-exceptions.md
 */

import type { PartialNode } from '@react-stately/collections'
import type { JSX, ReactElement, ReactNode } from 'react'
import type { TAccordionItemProps } from '../interface'
import { Children } from 'react'

function AccordionItem(_props: TAccordionItemProps): ReactNode {
  return null
}

AccordionItem.getCollectionNode = function* getCollectionNode(
  props: TAccordionItemProps,
): Generator<PartialNode<TAccordionItemProps>> {
  const { children, childItems, title } = props
  // eslint-disable-next-line ts/prefer-nullish-coalescing, ts/strict-boolean-expressions -- intentionally fallback on empty strings for accessibility text
  const textValue = props.textValue || (typeof children === 'string' ? children : '') || props['aria-label'] || ''
  yield {
    'type': 'item',
    props,
    'rendered': children,
    textValue,
    'aria-label': props['aria-label'],
    'hasChildNodes': false,
    * childNodes() {
      if (childItems != null) {
        for (const child of childItems) {
          yield {
            type: 'item',
            value: child,
          }
        }
      }
      else if (title != null) {
        const items: PartialNode<TAccordionItemProps>[] = []
        Children.forEach(children, (child) => {
          items.push({
            type: 'item',
            element: child as ReactElement<TAccordionItemProps>,
          })
        })

        yield* items
      }
    },
  }
}

const _AccordionItem = AccordionItem as (_props: TAccordionItemProps) => JSX.Element

export default _AccordionItem
