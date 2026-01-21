import type { ComponentType, ReactElement } from 'react'
import type { AriaDisclosureProps } from 'react-aria'
import type { DisclosureGroupState, ItemProps, Node, TreeProps, TreeState } from 'react-stately'
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
  onOpenChange?: (_isOpen: boolean) => void
  defaultOpen?: boolean
  isOpen?: boolean
}

export type TAccordionState = Pick<TreeState<TAccordionItemProps>, 'collection' | 'disabledKeys' | 'selectionManager'>
  & Pick<
    DisclosureGroupState,
    'expandedKeys' | 'toggleKey' | 'setExpandedKeys' | 'allowsMultipleExpanded' | 'isDisabled'
  >

export type TAriaAccordionItemProps = TAccordionDefaultComponent
  & AriaDisclosureProps & {
    item: Node<TAccordionItemProps>
  }
