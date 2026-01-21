'use client'

import type { CheckboxGroupState } from 'react-stately'
import type { TCheckboxGroupContext } from './interface'
import { createContext, use } from 'react'

const CheckboxGroupContext = createContext<CheckboxGroupState | null>(null)

function CheckboxGroupProvider(props: TCheckboxGroupContext) {
  const { children, state } = props

  return <CheckboxGroupContext value={state}>{children}</CheckboxGroupContext>
}

function useCheckboxGroupCtx() {
  const context = use(CheckboxGroupContext)

  if (context == null)
    return null
  return context
}

export { CheckboxGroupProvider, useCheckboxGroupCtx }
