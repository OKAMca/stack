import { Anchor } from '@okam/stack-ui'
import { getDirectusLink } from '../../utils/getDirectusLink'
import type { TDirectusLinkProps } from './interface'

const DirectusLink = (props: TDirectusLinkProps) => {
  const { type, componentsConfig } = props

  const linkProps = getDirectusLink(props)

  if (!type) return null

  const LinkComponent = componentsConfig?.[type]

  if (LinkComponent) return <LinkComponent {...props} />

  if (!linkProps.href) return null

  return <Anchor {...linkProps} />
}

export default DirectusLink
