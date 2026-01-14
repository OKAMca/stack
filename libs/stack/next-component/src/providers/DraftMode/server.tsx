import 'server-only'

import type { TDraftModeProviderProps } from './interface'
import { getDraftMode } from './utils/getDraftMode'
import { DraftModeContextProvider } from '.'

const DraftModeServerContextProvider = async (props: TDraftModeProviderProps) => {
  const { children, defaultEnabled: propDefaultEnabled, cookieDuration: propCookieDuration, mutationOptions } = props
  const { isEnabled } = await getDraftMode()
  const defaultEnabled = propDefaultEnabled ?? isEnabled

  return (
    <DraftModeContextProvider
      defaultEnabled={defaultEnabled}
      cookieDuration={propCookieDuration}
      mutationOptions={mutationOptions}
    >
      {children}
    </DraftModeContextProvider>
  )
}

export default DraftModeServerContextProvider
