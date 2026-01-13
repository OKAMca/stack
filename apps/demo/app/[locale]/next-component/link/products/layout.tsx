import { Box, Typography } from '@okam/stack-ui'

export default async function Layout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <Box>
      <Box customTheme="h-48 bg-gray-300 justify-center items-center flex">
        <Typography tokens={{ size: 'h1' }}>Top of the page</Typography>
      </Box>
      <Box customTheme="h-screen bg-gray-100 justify-center items-center flex">
        <Typography tokens={{ size: 'h1' }}>Very long content</Typography>
      </Box>
      {children}
      <Box customTheme="h-48 bg-black text-white justify-center items-center flex">
        <Typography tokens={{ size: 'h3' }}>Products footer</Typography>
      </Box>
    </Box>
  )
}
