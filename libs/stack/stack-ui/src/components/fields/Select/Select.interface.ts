import type { Key } from 'react'
import type React from 'react'
import type { RefCallBack } from 'react-hook-form'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm<T = TToken> = TReactHookForm & Omit<TDefaultComponent<T>, 'children'>
export interface TSelectProps<T = TToken> extends TFieldReactHookForm<T> {
  id: string
  icon?: string | React.ReactNode
  label?: string
  name: string
  required?: boolean
  disabled?: boolean
  isError?: boolean
  errorMessage?: string
  fieldRef?: RefCallBack
  placeholderLabel: string
  hookFormRef?: RefCallBack
  onSelectionChange?: (value: Key) => void
  defaultValue?: string
  value?: string
  popoverMatchesWidth?: boolean
  options?: { key: string; value: string }[]
}
