'use client'

import type { CheckboxGroupState } from '@react-stately/checkbox'
import { useCheckboxGroupState } from '@react-stately/checkbox'
import { createContext, useContext } from 'react'
import type { TCheckboxGroupContext } from './interface'

const CheckboxGroupContext = createContext<CheckboxGroupState | null>(null)

const CheckboxGroupProvider = (props: TCheckboxGroupContext) => {
  const { children } = props
  const state = useCheckboxGroupState(props)

  return <CheckboxGroupContext.Provider value={state}>{children}</CheckboxGroupContext.Provider>
}

function useCheckboxGroupCtx() {
  const context = useContext(CheckboxGroupContext)

  if (!context) return null
  return context
}

export { CheckboxGroupProvider, useCheckboxGroupCtx }
