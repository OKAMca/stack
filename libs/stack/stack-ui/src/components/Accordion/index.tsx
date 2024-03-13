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
  const { themeName = 'accordion', tokens, customTheme, TransitionAnimation, selectionMode = 'single', ...rest } = props

  const accordionRef = useRef(null)
  const state = useTreeState({ selectionMode, ...rest })
  const { accordionProps } = useAccordion(props, state, accordionRef)

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
          return <AriaAccordionItem key={item.key} item={item} themeName={themeName} tokens={tokens} />
        })}
      </BoxWithForwardRef>
    </AccordionContextProvider>
  )
}

export default Accordion
