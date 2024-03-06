'use client'

import { useAccordion } from '@react-aria/accordion'
import { useRef } from 'react'
import type { Node } from 'react-stately'
import { useTreeState } from 'react-stately'
import { AccordionContextProvider } from '../../providers/Accordion'
import { BoxWithForwardRef } from '../Box'
import AriaAccordionItem from './components/AriaAccordionItem'
import type { TAccordionItemProps, TAccordionProps } from './interface'

const Accordion = (props: TAccordionProps) => {
  const { themeName = 'accordion', tokens, customTheme, onClick, TransitionAnimation, ...rest } = props

  const accordionRef = useRef(null)
  const state = useTreeState({ ...props, selectionMode: 'single' })
  const { accordionProps } = useAccordion(rest, state, accordionRef)

  return (
    <AccordionContextProvider state={state} TransitionAnimation={TransitionAnimation}>
      <BoxWithForwardRef
        themeName={`${themeName}.wrapper`}
        tokens={tokens}
        customTheme={customTheme}
        ref={accordionRef}
        {...accordionProps}
      >
        {[...state.collection].map((item: Node<TAccordionItemProps>) => {
          const { props: itemProps } = item
          return (
            <AriaAccordionItem
              key={item.key}
              item={{
                ...item,
                props: {
                  ...itemProps,
                  onClick: (isOpen) => {
                    itemProps?.onClick?.(isOpen)
                    onClick?.(isOpen)
                  },
                },
              }}
              themeName={themeName}
              tokens={tokens}
            />
          )
        })}
      </BoxWithForwardRef>
    </AccordionContextProvider>
  )
}

export default Accordion
