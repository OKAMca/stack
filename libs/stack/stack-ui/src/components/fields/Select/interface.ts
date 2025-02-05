import type { CollectionChildren, CollectionElement, ItemElement, ItemProps } from '@react-types/shared'
import type React from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { AriaSelectOptions } from 'react-aria'
import type { RefCallBack } from 'react-hook-form'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm<T = TToken> = TReactHookForm & Omit<TDefaultComponent<T>, 'children'>

export interface TSelectItemProps<T = TToken>
  extends Omit<TDefaultComponent<T>, 'children'>,
    ItemProps<TSelectItemProps> {
  itemKey: string
  /**
   * @deprecated Use `children` instead
   */
  value?: string
}

type TSelectItemElement<T = TToken> = ReactElement<TSelectItemProps<T>>

export interface TSelectProps<T = TToken>
  extends Omit<AriaSelectOptions<TSelectItemProps<T>>, 'errorMessage'>,
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
  popoverMatchesWidth?: boolean
  hookFormRef?: RefCallBack
  name: string
  children?: TSelectItemElement<T>[] | ((item: TSelectItemProps<T>) => TSelectItemElement<T>)
  errorMessage?: ReactNode
}
