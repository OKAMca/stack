import type React from 'react'
import type { Noop, RefCallBack } from 'react-hook-form'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm = TReactHookForm & TDefaultComponent

export interface TRadioProps extends TFieldReactHookForm {
  id: string
  label: string
  name: string
  required?: boolean
  isDisabled?: boolean
  isError?: boolean
  errorMessage?: string
  ariaLabel?: string
  value: string
  onChange?: (isSelected: boolean) => void
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
