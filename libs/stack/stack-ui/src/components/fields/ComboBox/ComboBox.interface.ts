import type { CollectionChildren } from '@react-types/shared'
import type { Key } from 'react'
import type React from 'react'
import type { RefCallBack } from 'react-hook-form'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent, TReactHookForm, Nullable } from '../../../types/components'

export type TFieldReactHookForm<T = TToken> = TReactHookForm & Omit<TDefaultComponent<T>, 'children'>

export interface ComboBoxOption {
  key: string
  value: string
  id?: string
  label?: string
}

export interface ComboBoxSection {
  title: string
  items: ComboBoxOption[]
}

export interface TComboBoxProps<T = TToken> extends TFieldReactHookForm<T> {
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
  placeholder?: string
  hookFormRef?: RefCallBack
  onSelectionChange?: (value: Key | null) => void
  onInputChange?: (value: string) => void
  defaultValue?: string
  value?: Nullable<string>
  inputValue?: string
  defaultInputValue?: string
  popoverMatchesWidth?: boolean
  options?: { key: string; value: string }[]
  items?: ComboBoxOption[]
  sections?: ComboBoxSection[]
  isInvalid?: boolean
  allowsCustomValue?: boolean
  menuTrigger?: 'focus' | 'input' | 'manual'
  shouldFocusWrap?: boolean
  defaultFilter?: (textValue: string, inputValue: string) => boolean
  loadingState?: 'loading' | 'idle' | 'error'
  isLoading?: boolean
  orientation?: 'left' | 'right'
}
