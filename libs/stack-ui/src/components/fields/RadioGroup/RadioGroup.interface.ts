import type React from 'react'
import type { RefCallBack } from 'react-hook-form'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm = TReactHookForm & TDefaultComponent

export interface TRadioGroupProps extends TFieldReactHookForm {
  children: React.ReactNode
  isError?: boolean
  isDisabled?: boolean
  errorMessage?: string
  label?: string
  fieldRef?: RefCallBack
  required?: boolean
  name: string
}
