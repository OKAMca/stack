import type { TToken } from '@okam/stack-ui'
import type { TAdminBarProps } from './interface'
import { Box } from '@okam/stack-ui'
import { draftMode } from 'next/headers'

async function AdminBar<T extends TToken>({
  children,
  themeName = 'adminBar',
  tokens,
  customTheme,
}: TAdminBarProps<T>) {
  const { isEnabled } = await draftMode()
  return (
    isEnabled && (
      <Box themeName={`${themeName}.container`} tokens={tokens} customTheme={customTheme}>
        <Box themeName={`${themeName}.content`} tokens={tokens}>
          {children}
        </Box>
      </Box>
    )
  )
}

export default AdminBar
