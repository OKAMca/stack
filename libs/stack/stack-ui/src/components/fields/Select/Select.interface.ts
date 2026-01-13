import type { CollectionChildren } from '@react-types/shared'
import type { Key } from 'react'
import type React from 'react'
import type { RefCallBack } from 'react-hook-form'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent, TReactHookForm, Nullable } from '../../../types/components'

export type TFieldReactHookForm<T = TToken> = TReactHookForm & Omit<TDefaultComponent<T>, 'children'>
export interface TSelectProps<T = TToken> extends TFieldReactHookForm<T> {
  id: string
  icon?: string | React.ReactNode
  label?: string
  children?: CollectionChildren<object> | undefined
  name: string
  required?: boolean
  disabled?: boolean
  isError?: boolean
  errorMessage?: string
  fieldRef?: RefCallBack
  placeholderLabel: string
  hookFormRef?: RefCallBack
  onSelectionChange?: (value: Key | null) => void
  defaultValue?: string
  value?: Nullable<string>
  popoverMatchesWidth?: boolean
  options?: { key: string; value: string }[]
  isInvalid?: boolean
}
