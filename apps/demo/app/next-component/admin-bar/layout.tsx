import { DraftModeServerContextProvider } from '@okam/next-component/server'
import AdminBarProviders from './providers'

export default async function AdminBarDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminBarProviders>
      <DraftModeServerContextProvider>{children}</DraftModeServerContextProvider>
    </AdminBarProviders>
  )
}
