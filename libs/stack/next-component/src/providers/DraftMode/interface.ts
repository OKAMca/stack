import type { UseMutationResult } from '@tanstack/react-query'
import type { ReactNode } from 'react'

export interface TDraftModeProviderProps {
  children: ReactNode
  defaultEnabled?: boolean
  cookieDuration?: number // Duration in days
}

export type TDraftModeStatus = {
  isEnabled: boolean
  cookieDuration?: number // Duration in days
}

type TDraftModeQueryResult = UseMutationResult<TDraftModeStatus, Error, TDraftModeStatus, unknown>

export type TDraftModeContext = {
  setEnabled: (enable: boolean) => void
  setCookieDuration: (duration: number) => void
  cookieDuration?: number
} & TDraftModeStatus & {
    [Key in keyof TDraftModeQueryResult]: TDraftModeQueryResult[Key]
  }
