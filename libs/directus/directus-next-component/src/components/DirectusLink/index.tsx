import { Anchor } from '@okam/stack-ui'
import Link from 'next/link'
import useDirectusLink from '../../hooks/directus-link'
import type { TDirectusLinkProps } from './interface'

const DirectusLink = (props: TDirectusLinkProps) => {
  const { type, componentsConfig, ...rest } = props

  const linkProps = useDirectusLink(props)

  if (!type || !linkProps.href) return null

  const LinkComponent = componentsConfig?.[type]

  const LinkComponentRender = (() => {
    if (!LinkComponent) return <Anchor as={Link} {...linkProps} />
    return <LinkComponent {...rest} />
  })()

  return LinkComponentRender
}

export default DirectusLink
