import type { ReactNode } from 'react'
import type { CheckboxGroupProps, CheckboxGroupState } from 'react-stately'

export interface TCheckboxGroupContext extends CheckboxGroupProps {
  children: ReactNode
  state: CheckboxGroupState
}
