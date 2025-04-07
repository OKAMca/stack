import Providers from './Providers'

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  return <Providers locale={params.locale}>{children}</Providers>
}
