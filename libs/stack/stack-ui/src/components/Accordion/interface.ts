/* eslint-disable @typescript-eslint/naming-convention */
import type { AriaAccordionProps, AccordionItemAriaProps } from '@react-aria/accordion'
import type { ComponentType, ReactElement } from 'react'
import type { ItemProps } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'

export interface TAccordionProps
  extends Omit<TDefaultComponent<TAccordionTokens>, 'children'>,
    Omit<AriaAccordionProps<TAccordionProps>, 'children'> {
  id: string
  children: ReactElement<TAccordionItemProps> | ReactElement<TAccordionItemProps>[]
  onClick?: (isOpen: boolean) => void
  TransitionAnimation?: ComponentType<TTransition>
}

export interface TAccordionItemProps
  extends ItemProps<TAccordionItemProps>,
    Omit<TDefaultComponent<TAccordionTokens>, 'children'> {
  icon?: React.ReactNode
  onClick?: (isOpen: boolean) => void
  defaultIsOpen?: boolean
}

export type TAriaAccordionItemProps = Omit<TDefaultComponent<TAccordionTokens>, 'children'> &
  Omit<AccordionItemAriaProps<TAccordionItemProps>, 'item'> & {
    item: Omit<AccordionItemAriaProps<TAccordionItemProps>['item'], 'props'> & {
      props?: TAccordionItemProps
    }
  }

interface TAccordionTokens extends TToken {
  titleBold: boolean
  textAlign: 'center' | 'left'
}
