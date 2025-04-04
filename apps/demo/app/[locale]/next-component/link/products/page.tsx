import { Link } from '@okam/next-component'
import { Box, Typography } from '@okam/stack-ui'

export default async function Page(props: { params: { locale: string } }) {
  const { params } = props
  const { locale } = params

  return (
    <Box>
      <Box customTheme="h-48 bg-gray-300 justify-center items-center flex">
        <Typography tokens={{ size: 'h1' }}>Products home page</Typography>
      </Box>
      <Link href={`/${locale}/next-component/link/products/1`}>Products 1</Link>
    </Box>
  )
}
