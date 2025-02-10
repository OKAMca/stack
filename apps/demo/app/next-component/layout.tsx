import Providers from './Providers'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>
}
