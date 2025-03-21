'use server'

import { draftMode } from 'next/headers'
import type { TDraftModeProviderProps } from './interface'
import { DraftModeContextProvider } from '.'

const DraftModeServerContextProvider = async (props: TDraftModeProviderProps) => {
  const { children, defaultEnabled: propDefaultEnabled, cookieDuration: propCookieDuration } = props
  const draft = draftMode()
  const defaultEnabled = propDefaultEnabled ?? draft.isEnabled

  return (
    <DraftModeContextProvider defaultEnabled={defaultEnabled} cookieDuration={propCookieDuration}>
      {children}
    </DraftModeContextProvider>
  )
}

export default DraftModeServerContextProvider
