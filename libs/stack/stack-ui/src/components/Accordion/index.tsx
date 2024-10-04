'use client'

import { useAccordion } from '@react-aria/accordion'
import { useRef } from 'react'
import type { Node } from 'react-stately'
import { AccordionContextProvider } from '../../providers/Accordion'
import type { TToken } from '../../providers/Theme/interface'
import { BoxWithForwardRef } from '../Box'
import AriaAccordionItem from './components/AriaAccordionItem'
import useAccordionState from './hooks/useAccordionState'
import type { TAccordionItemProps, TAccordionProps } from './interface'

const Accordion = <T extends TToken>(props: TAccordionProps<T>) => {
  const { themeName = 'accordion', tokens, customTheme, TransitionAnimation } = props

  const accordionRef = useRef(null)

  const state = useAccordionState(props)

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
