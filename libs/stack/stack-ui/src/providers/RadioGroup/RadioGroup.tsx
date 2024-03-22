'use client'

import type { RadioGroupState } from '@react-stately/radio'
import { createContext, useContext } from 'react'
import type { TRadioGroupContext } from './RadioGroup.interface'

const RadioGroupContext = createContext<RadioGroupState | null>(null)

const RadioGroupProvider = (props: TRadioGroupContext) => {
  const { children, state } = props

  return <RadioGroupContext.Provider value={state}>{children}</RadioGroupContext.Provider>
}

function useRadioGroupCtx() {
  const context = useContext(RadioGroupContext)

  if (context !== null) {
    return context
  }

  return null
}

export { RadioGroupProvider, useRadioGroupCtx }
