import type { CollectionChildren, CollectionElement } from '@react-types/shared'
import type { Key, ReactElement, ReactHTMLElement } from 'react'
import type React from 'react'
import type { RefCallBack } from 'react-hook-form'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'
import type { TSelectItemProps } from '../SelectItem/SelectItem.interface'

export type TFieldReactHookForm = TReactHookForm & Omit<TDefaultComponent, 'children'>
export interface TSelectProps extends TFieldReactHookForm {
  id: string
  icon?: string | React.ReactNode
  label?: string
  name: string
  required?: boolean
  disabled?: boolean
  isError?: boolean
  errorMessage?: string
  children: ReactElement<TSelectItemProps>[]
  fieldRef?: RefCallBack
  placeholderLabel: string
  hookFormRef?: RefCallBack
  onSelectionChange?: (value: Key) => void
  defaultValue?: string
  value?: string
  popoverMatchesWidth?: boolean
}
