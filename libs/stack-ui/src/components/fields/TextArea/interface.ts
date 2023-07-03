/* eslint-disable no-unused-vars */
import type { RefCallBack } from 'react-hook-form'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm = TReactHookForm & TDefaultComponent

export interface TTextAreaProps extends TFieldReactHookForm {
  id: string
  label?: string
  name: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  errorMessage?: string
  isError?: boolean
  ariaLabel?: string
  value?: string
  fieldRef?: RefCallBack
  type?: string
}
