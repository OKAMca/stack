import type * as React from 'react'
import type { CheckboxGroupProps, CheckboxGroupState } from 'react-stately'

export interface TCheckboxGroupContext extends CheckboxGroupProps {
  children: React.ReactNode
  state: CheckboxGroupState
}
