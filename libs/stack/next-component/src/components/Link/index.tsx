'use client'

import { Anchor } from '@okam/stack-ui'
import NextLink from 'next/link'
import { useLink } from '../../hooks/useLink'
import type { TLinkProps } from './interface'

const Link = (props: TLinkProps) => {
  const { themeName = 'button', as = NextLink, href, children, scroll, ...rest } = props

  const linkProps = useLink(props)

  return (
    <Anchor as={as} themeName={themeName} nextLinkProps={{ ...rest, ...linkProps }}>
      {children}
    </Anchor>
  )
}

export default Link
