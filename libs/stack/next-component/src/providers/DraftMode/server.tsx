import { draftMode } from 'next/headers'
import type { TDraftModeServerProviderProps } from './interface'
import { DraftModeContextProvider } from '.'

const DraftModeServerContextProvider = async (props: TDraftModeServerProviderProps) => {
  const { children, ...rest } = props
  const { isEnabled } = await draftMode()

  return (
    <DraftModeContextProvider isEnabled={isEnabled} {...rest}>
      {children}
    </DraftModeContextProvider>
  )
}

export default DraftModeServerContextProvider
