/* eslint-disable @typescript-eslint/naming-convention */
import type { AccordionItemAriaProps } from '@react-aria/accordion'
import type { ComponentType, ReactElement } from 'react'
import type { ItemProps, TreeProps } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'

type TAccordionDefaultComponent = Omit<TDefaultComponent<TAccordionTokens>, 'children'>

export interface TAccordionProps extends TAccordionDefaultComponent, TreeProps<TAccordionItemProps> {
  id: string
  children: ReactElement<TAccordionItemProps> | ReactElement<TAccordionItemProps>[]
  TransitionAnimation?: ComponentType<TTransition>
}

export interface TAccordionItemProps extends ItemProps<TAccordionItemProps>, TAccordionDefaultComponent {
  icon?: React.ReactNode
  onClick?: (isOpen: boolean) => void
  defaultIsOpen?: boolean
}

export type TAriaAccordionItemProps = TAccordionDefaultComponent &
  Omit<AccordionItemAriaProps<TAccordionItemProps>, 'item'> & {
    item: Omit<AccordionItemAriaProps<TAccordionItemProps>['item'], 'props'> & {
      props?: TAccordionItemProps
    }
  }

interface TAccordionTokens extends TToken {
  titleBold: boolean
  textAlign: 'center' | 'left'
}
