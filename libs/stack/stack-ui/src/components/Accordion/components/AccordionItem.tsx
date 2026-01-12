/* eslint-disable react/jsx-pascal-case */
import type { PartialNode } from '@react-stately/collections'
import type { ReactElement, ReactNode } from 'react'
import React from 'react'
import type { TAccordionItemProps } from '../interface'

//  https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Item.ts

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AccordionItem = (props: TAccordionItemProps): ReactNode => {
  return null
}

AccordionItem.getCollectionNode = function* getCollectionNode(
  props: TAccordionItemProps,
): Generator<PartialNode<TAccordionItemProps>> {
  const { children, childItems, title } = props
  const textValue = props.textValue || (typeof children === 'string' ? children : '') || props['aria-label'] || ''
  yield {
    type: 'item',
    props,
    rendered: children,
    textValue,
    'aria-label': props['aria-label'],
    hasChildNodes: false,
    *childNodes() {
      if (childItems) {
        // eslint-disable-next-line no-restricted-syntax
        for (const child of childItems) {
          yield {
            type: 'item',
            value: child,
          }
        }
      } else if (title) {
        const items: PartialNode<TAccordionItemProps>[] = []
        React.Children.forEach(children, (child) => {
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

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const _AccordionItem = AccordionItem as (props: TAccordionItemProps) => React.JSX.Element

export default _AccordionItem
