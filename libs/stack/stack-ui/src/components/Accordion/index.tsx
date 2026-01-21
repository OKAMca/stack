'use client'

import type { Node } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TAccordionItemProps, TAccordionProps } from './interface'
import { useSelectableList } from '@react-aria/selection'
import { useRef } from 'react'
import { AccordionContextProvider } from '../../providers/Accordion'
import { BoxWithForwardRef } from '../Box'
import AriaAccordionItem from './components/AriaAccordionItem'
import useAccordionState from './hooks/useAccordionState'

function Accordion<T extends TToken>(props: TAccordionProps<T>) {
  const { id, themeName = 'accordion', tokens, customTheme, TransitionAnimation } = props

  const accordionRef = useRef<HTMLDivElement | null>(null)

  const state = useAccordionState(props)

  const { listProps } = useSelectableList({
    collection: state.collection,
    disabledKeys: state.disabledKeys,
    selectionManager: state.selectionManager,
    allowsTabNavigation: true,
    disallowTypeAhead: true,
    ref: accordionRef,
  })
  const accordionProps = { ...listProps, tabIndex: undefined }

  return (
    <AccordionContextProvider state={state} TransitionAnimation={TransitionAnimation}>
      <BoxWithForwardRef
        themeName={`${themeName}.wrapper`}
        tokens={tokens}
        customTheme={customTheme}
        ref={accordionRef}
        id={id}
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
