import type React from 'react'
import type { ChangeHandler, RefCallBack } from 'react-hook-form'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm<T> = TReactHookForm & TDefaultComponent<T>

export interface TRadioProps<T = TToken> extends TFieldReactHookForm<T> {
  id: string
  label: string
  name: string
  required?: boolean
  isDisabled?: boolean
  isError?: boolean
  errorMessage?: string
  ariaLabel?: string
  value: string
  onChange?: ((isSelected: boolean) => void) | ChangeHandler
  inputRef?: RefCallBack
  icon?: React.ReactNode
}

export interface TRadioLabelStyles {
  isDisabled?: boolean
}

export interface TRadioStyles {
  isDisabled?: boolean
  isFocused?: boolean
  isError?: boolean
}
