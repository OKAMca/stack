import type { TLinkProps } from '@okam/next-component'
import { Link } from '@okam/next-component'
import { Box, Typography } from '@okam/stack-ui'

const ProductsLinks = (
  props: Parameters<typeof Page>[0] & {
    title: string
    description: string
    scroll: TLinkProps['scroll']
  },
) => {
  const { title, description, scroll, ...rest } = props
  const { id } = rest.params
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

export default async function Page(props: { params: { id: string; locale: string } }) {
  return (
    <Box customTheme="p-8">
      <ProductsLinks
        {...props}
        title="True"
        description="Default next.js behavior. Try to restore scroll position if the page has already been navigated to."
        scroll
      />
      <ProductsLinks {...props} title="False" description="Disable scrolling." scroll={false} />
      <ProductsLinks {...props} title="Top" description="Scroll to top on click." scroll="top" />
    </Box>
  )
}
