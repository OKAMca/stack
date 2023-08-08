import { ThemeProvider } from '@okam/stack-ui'

const Providers = (props: { children: React.ReactNode }) => {
  const { children } = props
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
