import type { RadioGroupProps } from '@react-types/radio'
import type { ReactNode } from 'react'
import type { RadioGroupState } from 'react-stately'

export interface TRadioGroupContext extends RadioGroupProps {
  children: ReactNode
  state: RadioGroupState
}
