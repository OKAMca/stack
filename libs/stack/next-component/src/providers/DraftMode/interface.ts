import type { ReactNode } from 'react'

export interface TDraftModeProviderProps {
  children: ReactNode
  isEnabled: boolean
}

export interface TDraftModeServerProviderProps {
  children: ReactNode
}

export type TDraftModeContext = {
  isEnabled: boolean
}
