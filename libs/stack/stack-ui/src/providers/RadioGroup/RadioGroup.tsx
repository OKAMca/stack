'use client'

import type { RadioGroupState } from 'react-stately'
import type { TRadioGroupContext } from './RadioGroup.interface'
import { createContext, use } from 'react'

const RadioGroupContext = createContext<RadioGroupState | null>(null)

function RadioGroupProvider(props: TRadioGroupContext) {
  const { children, state } = props

  return <RadioGroupContext value={state}>{children}</RadioGroupContext>
}

function useRadioGroupCtx() {
  const context = use(RadioGroupContext)

  if (context !== null) {
    return context
  }

  return null
}

export { RadioGroupProvider, useRadioGroupCtx }
