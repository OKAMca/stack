import { Anchor } from '@okam/stack-ui'
import Link from 'next/link'
import useDirectusLink from '../../hooks/directus-link'
import type { TDirectusLinkProps } from './interface'

const DirectusLink = (props: TDirectusLinkProps) => {
  const { type, componentsConfig } = props

  const linkProps = useDirectusLink(props)

  if (!type || !linkProps.href) return null

  const LinkComponent = componentsConfig?.[type]

  if (!LinkComponent) return <Anchor as={Link} {...linkProps} />
  return <LinkComponent {...props} />
}

export default DirectusLink
