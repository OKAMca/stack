import type { TLinkProps } from '@okam/next-component'
import { Link } from '@okam/next-component'
import { Box, Typography } from '@okam/stack-ui'

const ProductsLinks = (props: {
  params: { id: string; locale: string }
  title: string
  description: string
  scroll: TLinkProps['scroll']
}) => {
  const { title, description, scroll, params } = props
  const { id } = params
  const route = `/next-component/link/products`
  const nextId = Number.isNaN(parseInt(id, 10)) ? 1 : parseInt(id, 10) + 1
  const href = `${route}/${nextId}`

  return (
    <Box customTheme="flex flex-col gap-4">
      <Typography tokens={{ size: 'h2' }}>{title}</Typography>
      <Typography tokens={{ size: 'p' }}>{description}</Typography>
      <Link scroll={scroll} href={route}>
        Home page
      </Link>
      <Link scroll={scroll} href={href}>
        Next product
      </Link>
    </Box>
  )
}

export default async function Page(props: { params: Promise<{ id: string; locale: string }> }) {
  const params = await props.params
  return (
    <Box customTheme="p-8">
      <ProductsLinks
        params={params}
        title="True"
        description="Default next.js behavior. Try to restore scroll position if the page has already been navigated to."
        scroll
      />
      <ProductsLinks params={params} title="False" description="Disable scrolling." scroll={false} />
      <ProductsLinks params={params} title="Top" description="Scroll to top on click." scroll="top" />
    </Box>
  )
}
