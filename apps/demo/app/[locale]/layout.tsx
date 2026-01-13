import Providers from './Providers'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <Providers locale={locale}>{children}</Providers>
}
