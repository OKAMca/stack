import type { TDraftModeServerProviderProps } from './interface'
import { draftMode } from 'next/headers'
import { DraftModeContextProvider } from '.'

async function DraftModeServerContextProvider(props: TDraftModeServerProviderProps) {
  const { children, ...rest } = props
  const { isEnabled } = await draftMode()

  return (
    <DraftModeContextProvider isEnabled={isEnabled} {...rest}>
      {children}
    </DraftModeContextProvider>
  )
}

export default DraftModeServerContextProvider
