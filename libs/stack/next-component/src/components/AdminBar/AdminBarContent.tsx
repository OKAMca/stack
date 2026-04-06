'use client'

import type { TToken } from '@okam/stack-ui'
import type { TAdminBarProps } from './interface'
import { Box } from '@okam/stack-ui'

export function AdminBarContent<T extends TToken>({
  children,
  themeName = 'adminBar',
  tokens,
  customTheme,
}: TAdminBarProps<T>) {
  return (
    <Box themeName={`${themeName}.container`} tokens={tokens} customTheme={customTheme}>
      <Box themeName={`${themeName}.content`} tokens={tokens}>
        {children}
      </Box>
    </Box>
  )
}
