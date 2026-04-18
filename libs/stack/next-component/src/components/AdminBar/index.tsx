import type { TToken } from '@okam/stack-ui'
import type { TAdminBarProps } from './interface'
import { draftMode } from 'next/headers'
import { AdminBarContent } from './AdminBarContent'

async function AdminBar<T extends TToken>({
  children,
  themeName = 'adminBar',
  tokens,
  customTheme,
}: TAdminBarProps<T>) {
  const { isEnabled } = await draftMode()
  return (
    isEnabled && (
      <AdminBarContent themeName={themeName} tokens={tokens} customTheme={customTheme}>
        {children}
      </AdminBarContent>
    )
  )
}

export default AdminBar
