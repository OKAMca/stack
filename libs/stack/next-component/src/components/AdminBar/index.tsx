import { Box, type TToken } from '@okam/stack-ui'
import { draftMode } from 'next/headers'
import type { TAdminBarProps } from './interface'

const AdminBar = async <T extends TToken>({
  children,
  themeName = 'adminBar',
  tokens,
  customTheme,
}: TAdminBarProps<T>) => {
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
