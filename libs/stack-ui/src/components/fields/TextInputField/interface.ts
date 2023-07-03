/* eslint-disable no-unused-vars */
import type React from 'react'
import type { RefCallBack } from 'react-hook-form'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm = TReactHookForm & TDefaultComponent

export interface TTextInputProps extends TFieldReactHookForm {
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
  children?: React.ReactNode
}

export interface TTextInputStyle extends TDefaultComponent {
  isError?: boolean
  errorMessage?: string
}
