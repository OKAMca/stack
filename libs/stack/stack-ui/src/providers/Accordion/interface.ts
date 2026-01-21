import type { ReactNode } from 'react'
import type { TAccordionProps, TAccordionState } from '../../components/Accordion/interface'

type TAccordion = NonNullable<Pick<TAccordionProps, 'TransitionAnimation'>>

export interface TAccordionProviderProps extends TAccordion {
  children: ReactNode
  state: TAccordionState
}

export type TAccordionContext = TAccordion & {
  state: TAccordionState
}
