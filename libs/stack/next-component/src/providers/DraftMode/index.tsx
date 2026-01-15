'use client'

import { createCtx } from '@okam/core-lib'
import { useMemo } from 'react'
import type { TDraftModeContext, TDraftModeProviderProps } from './interface'

export const [useDraftMode, DraftModeProvider] = createCtx<TDraftModeContext>()

export function DraftModeContextProvider(props: TDraftModeProviderProps) {
  const { children, isEnabled } = props

  const value = useMemo(() => ({ isEnabled }), [isEnabled])

  return <DraftModeProvider value={value}>{children}</DraftModeProvider>
}
