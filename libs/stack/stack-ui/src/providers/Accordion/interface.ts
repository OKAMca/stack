import type { ReactNode } from 'react'
import type { TreeState } from 'react-stately'
import type { TAccordionItemProps, TAccordionProps } from '../../components/Accordion/interface'

type TAccordion = NonNullable<Pick<TAccordionProps, 'TransitionAnimation'>>

export interface TAccordionProviderProps extends TAccordion {
  children: ReactNode
  state: TreeState<TAccordionItemProps>
}

export type TAccordionContext = TAccordion & {
  state: TreeState<TAccordionItemProps>
}
