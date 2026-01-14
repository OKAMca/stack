import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { AriaListBoxProps, AriaListBoxSectionProps } from 'react-aria'
import type { RegisterOptions } from 'react-hook-form'
import type { ListState } from 'react-stately'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'
import type { TDefaultNode, TDefaultNodeComponent } from '../../../types/react-stately'
import type { TAnchorProps } from '../../Button/interface'

export interface TListBoxProps<I extends object = object, T extends TToken = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    AriaListBoxProps<I & TDefaultNodeComponent<I, T>> {
  /**
   * @default Anchor
   */
  linkElementType?: ForwardRefExoticComponent<TAnchorProps & RefAttributes<HTMLAnchorElement & HTMLButtonElement>>
}

export interface TListBoxFormProps<I extends object = object, T extends TToken = TToken>
  extends Omit<TListBoxProps<I, T>, 'onBlur'>,
    TReactHookForm {}
export interface TControlledListBoxProps<I extends object = object, T extends TToken = TToken>
  extends Omit<TListBoxProps<I, T>, 'children'>,
    Partial<Pick<TListBoxProps<I, T>, 'children'>> {
  state: ListState<I>
}

export interface TControlledListBoxFormProps<I extends object = object, T extends TToken = TToken>
  extends TControlledListBoxProps<I, T>,
    Omit<TListBoxFormProps<I, T>, 'children' | 'onBlur'> {}

export interface TListBoxSectionProps<I extends object = object, T extends TToken = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    AriaListBoxSectionProps {
  section: TDefaultNode<I>
  state: ListState<I>
}

export interface TReactHookFormListBoxProps<I extends object = object, T extends TToken = TToken>
  extends Omit<TListBoxFormProps<I, T>, 'selectionMode'> {
  rules?: RegisterOptions
  name: string
  selectionMode?: Exclude<AriaListBoxProps<I>['selectionMode'], 'none'>
}

export interface TControlledReactHookFormListBoxProps<I extends object = object, T extends TToken = TToken>
  extends TReactHookFormListBoxProps<I, T>,
    Omit<TControlledListBoxFormProps<I, T>, 'children' | 'onBlur' | 'selectionMode'> {}
