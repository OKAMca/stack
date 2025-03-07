import { DraftModeServerContextProvider } from '@okam/stack-ui/server'
import AdminBarProviders from './providers'

export default async function AdminBarDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminBarProviders>
      <DraftModeServerContextProvider defaultEnabled cookieDuration={12}>
        {children}
      </DraftModeServerContextProvider>
    </AdminBarProviders>
  )
}
