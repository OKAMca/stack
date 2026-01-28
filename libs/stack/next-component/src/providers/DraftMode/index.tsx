'use client'

import type { TDraftModeContext, TDraftModeProviderProps } from './interface'
import { createCtx } from '@okam/react-utils'
import { useMemo } from 'react'

const draftModeCtx = createCtx<TDraftModeContext>()
export const useDraftMode = draftModeCtx[0]
const DraftModeProvider = draftModeCtx[1]

export function DraftModeContextProvider(props: TDraftModeProviderProps) {
  const { children, isEnabled } = props

  const value = useMemo(() => ({ isEnabled }), [isEnabled])

  return <DraftModeProvider value={value}>{children}</DraftModeProvider>
}
