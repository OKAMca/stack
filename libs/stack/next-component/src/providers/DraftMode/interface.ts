import type { UseMutationOptions, UseMutationResult, UseQueryOptions } from '@tanstack/react-query'
import type { ReactNode } from 'react'

export interface TDraftModeProviderProps {
  children: ReactNode
  defaultEnabled?: boolean
  /**
   * The duration of the draft mode cookie in days
   */
  cookieDuration?: number
  queryOptions?: UseQueryOptions<TDraftModeStatus, Error, TDraftModeStatus, [boolean, number]>
  mutationOptions?: UseMutationOptions<TDraftModeStatus, Error, TDraftModeStatus, unknown>
}

export type TDraftModeStatus = {
  isEnabled: boolean
  /**
   * The duration of the draft mode cookie in days
   */
  cookieDuration?: number
}

type TDraftModeQueryResult = UseMutationResult<TDraftModeStatus, Error, TDraftModeStatus, unknown>

export type TDraftModeContext = {
  setEnabled: (enable: boolean) => void
  setCookieDuration: (duration: number) => void
  cookieDuration?: number
} & TDraftModeStatus & {
    [Key in keyof TDraftModeQueryResult]: TDraftModeQueryResult[Key]
  }
