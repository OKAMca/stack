import type React from 'react'
import type { AriaCheckboxGroupItemProps } from 'react-aria'
import type { CheckboxGroupProps } from 'react-stately'
import type { TDefaultComponent } from '../../../types/components'
import type { TCheckboxProps } from '../Checkbox/Checkbox.interface'

export interface TCheckboxGroupProps extends TDefaultComponent, CheckboxGroupProps {
  children: React.ReactNode
  isError?: boolean
  isDisabled?: boolean
  errorMessage?: string
  label?: string
}

export type TCheckboxGroupItemProps = TDefaultComponent &
  Omit<AriaCheckboxGroupItemProps, 'children'> &
  Omit<TCheckboxProps, 'children'>
