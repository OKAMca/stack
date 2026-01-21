'use client'

import { I18nProvider } from 'react-aria'

function Providers(props: { children: React.ReactNode, locale: string }) {
  const { children, locale } = props
  return <I18nProvider locale={locale}>{children}</I18nProvider>
}

export default Providers
