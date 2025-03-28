import type { TDraftModeProviderProps } from './interface'
import { getDraftMode } from './utils/getDraftMode'
import { DraftModeContextProvider } from '.'

const DraftModeServerContextProvider = async (props: TDraftModeProviderProps) => {
  const { children, defaultEnabled: propDefaultEnabled, cookieDuration: propCookieDuration } = props
  const { isEnabled } = getDraftMode()
  const defaultEnabled = propDefaultEnabled ?? isEnabled

  return (
    <DraftModeContextProvider defaultEnabled={defaultEnabled} cookieDuration={propCookieDuration}>
      {children}
    </DraftModeContextProvider>
  )
}

export default DraftModeServerContextProvider
