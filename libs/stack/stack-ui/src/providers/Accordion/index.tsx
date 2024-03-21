'use client'

import { createCtxNullable } from '@okam/core-lib'
import { useMemo } from 'react'
import type { TAccordionContext, TAccordionProviderProps } from './interface'

export const [useAccordionCtx, AccordionProvider] = createCtxNullable<TAccordionContext>()

export function AccordionContextProvider(props: TAccordionProviderProps) {
  const { state, children, TransitionAnimation } = props

  const value = useMemo<TAccordionContext>(() => ({ state, TransitionAnimation }), [state, TransitionAnimation])

  return <AccordionProvider value={value}>{children}</AccordionProvider>
}
