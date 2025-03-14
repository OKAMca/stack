'use server'

import { draftMode } from 'next/headers'
import type { TToken } from '../../providers/Theme/interface'
import Box from '../Box'
import AdminBarError from './components/AdminBarError'
import DraftMode from './components/DraftMode'
import type { AdminBarProps } from './interface'

const AdminBar = async <T extends TToken>({
  children,
  themeName = 'adminBar',
  tokens,
  customTheme,
  draftModeButtonLabel,
}: AdminBarProps<T>) => {
  const { isEnabled } = draftMode()
  if (!isEnabled) return null
  return (
    <Box themeName={`${themeName}.container`} tokens={tokens} customTheme={customTheme}>
      <Box themeName={`${themeName}.content`} tokens={tokens} customTheme={customTheme}>
        <DraftMode themeName={themeName} tokens={tokens} customTheme={customTheme} buttonLabel={draftModeButtonLabel} />
        {children}
        <AdminBarError />
      </Box>
    </Box>
  )
}

export default AdminBar
