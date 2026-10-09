import type { ComponentType, ReactElement } from 'react'
import type { AriaDisclosureProps } from 'react-aria'
import type { DisclosureGroupState, ItemProps, Node, TreeProps, TreeState } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'

type TAccordionDefaultComponent<T = TToken> = Omit<TDefaultComponent<T>, 'children'>

export interface AccordionProps extends TreeProps<TAccordionItemProps> {
  children: ReactElement<TAccordionItemProps> | ReactElement<TAccordionItemProps>[]
}

export type TAccordionHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface TAccordionItemBehaviorProps {
  /**
   * Keep closed panels in the DOM (and in the server-rendered HTML) instead of unmounting them.
   * Closed panels get `hidden="until-found"`, so browser find-in-page and `#:~:text=` links open the item.
   * The open/close animation is driven by CSS (see the `keepMounted` theme token); `TransitionAnimation` is ignored.
   * @default false
   */
  keepMounted?: boolean
  /**
   * Move keyboard focus to the first focusable element of a panel when it opens.
   * The WAI-ARIA disclosure pattern keeps focus on the header button, so `false` is recommended.
   * @default true (false when `keepMounted` is set)
   */
  autoFocusPanel?: boolean
  /**
   * Wrap each header button in a heading element (`h1`–`h6`), as the WAI-ARIA accordion pattern recommends.
   * No heading is rendered when omitted.
   */
  headingLevel?: TAccordionHeadingLevel
}

export interface TAccordionProps<T = TToken> extends TAccordionDefaultComponent<T>, AccordionProps, TAccordionItemBehaviorProps {
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
  & AriaDisclosureProps
  & TAccordionItemBehaviorProps & {
    item: Node<TAccordionItemProps>
  }
