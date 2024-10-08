/* eslint-disable @typescript-eslint/naming-convention */
import type { AccordionItemAriaProps } from '@react-aria/accordion'
import type { ComponentType, ReactElement } from 'react'
import type { ItemProps, TreeProps } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'

type TAccordionDefaultComponent<T = TToken> = Omit<TDefaultComponent<T>, 'children'>

export interface AccordionProps extends TreeProps<TAccordionItemProps> {
  children: ReactElement<TAccordionItemProps> | ReactElement<TAccordionItemProps>[]
}

export interface TAccordionProps<T = TToken> extends TAccordionDefaultComponent<T>, AccordionProps {
  id: string
  TransitionAnimation?: ComponentType<TTransition>
}

export interface TAccordionItemProps extends ItemProps<TAccordionItemProps>, TAccordionDefaultComponent {
  icon?: React.ReactNode
  onOpenChange?: (isOpen: boolean) => void
  defaultOpen?: boolean
  isOpen?: boolean
}

export type TAriaAccordionItemProps = TAccordionDefaultComponent &
  Omit<AccordionItemAriaProps<TAccordionItemProps>, 'item'> & {
    item: Omit<AccordionItemAriaProps<TAccordionItemProps>['item'], 'props'> & {
      props?: TAccordionItemProps
    }
  }
