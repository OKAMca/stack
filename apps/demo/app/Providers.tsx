import { ThemeContextProvider } from '@okam/stack-ui'

const Providers = (props: { children: React.ReactNode }) => {
  const { children } = props
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}

export default Providers
