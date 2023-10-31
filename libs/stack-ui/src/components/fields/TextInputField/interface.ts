import type { AriaTextFieldProps } from 'react-aria'
import type { RefCallBack } from 'react-hook-form'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm = TReactHookForm & TDefaultComponent

export interface TTextInputProps extends TFieldReactHookForm, Omit<AriaTextFieldProps, 'onBlur' | 'onChange'> {
  name: string
  required?: boolean
  disabled?: boolean
  errorMessage?: string
  isError?: boolean
  ariaLabel?: string
  fieldRef?: RefCallBack
}

export interface TTextInputStyle extends TDefaultComponent {
  isError?: boolean
  errorMessage?: string
}
