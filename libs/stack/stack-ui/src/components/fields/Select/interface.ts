import type { ItemProps } from '@react-types/shared'
import type React from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { AriaSelectOptions } from 'react-aria'
import type { RefCallBack } from 'react-hook-form'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm<T = TToken> = TReactHookForm & Omit<TDefaultComponent<T>, 'children'>

export interface TSelectItem extends ItemProps<never> {
  id: string
}

export interface TSelectItemProps<T = TToken> extends Omit<TDefaultComponent<T>, 'children'>, TSelectItem {
  /**
   * @deprecated Use `children` instead
   */
  value?: string
}

export interface TSelect<TItemProps extends TSelectItemProps<T> | TSelectItemProps, T = TToken>
  extends Omit<AriaSelectOptions<TItemProps>, 'errorMessage'> {
  name: string
  children?: ReactElement<TItemProps>[] | ((item: TItemProps) => ReactElement<TItemProps>)
  errorMessage?: ReactNode
}

export interface TSelectProps<T = TToken>
  extends TSelect<TSelectItemProps<T>, T>,
    Omit<TDefaultComponent<T>, 'children'> {
  /**
   * @deprecated Use `defaultSelectedKey` instead
   */
  defaultValue?: string
  icon?: string | React.ReactNode
  /**
   * @deprecated Use `isInvalid` instead
   */
  isError?: boolean
  /**
   * @deprecated Use `isDisabled` instead
   */
  disabled?: boolean
  /**
   * @deprecated Use `isRequired` instead
   */
  required?: boolean
  /**
   * @deprecated Use `placeholder` instead
   */
  placeholderLabel?: string
  /**
   * @deprecated Use `selectedKey` instead
   */
  value?: string
  /**
   * @deprecated Use `items` instead
   */
  options?: TSelectItemProps<T>[]
  /**
   * @deprecated Use the `--${themeName}-container-width` CSS variable instead
   */
  popoverMatchesWidth?: boolean
  hookFormRef?: RefCallBack
}
