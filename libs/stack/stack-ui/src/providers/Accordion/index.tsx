'use client'

import type { TAccordionContext, TAccordionProviderProps } from './interface'
import { createCtxNullable } from '@okam/react-utils'
import { useMemo } from 'react'

const accordionCtx = createCtxNullable<TAccordionContext>()
export const useAccordionCtx = accordionCtx[0]
const AccordionProvider = accordionCtx[1]

export function AccordionContextProvider(props: TAccordionProviderProps) {
  const { state, children, TransitionAnimation } = props

  const value = useMemo<TAccordionContext>(() => ({ state, TransitionAnimation }), [state, TransitionAnimation])

  return <AccordionProvider value={value}>{children}</AccordionProvider>
}
