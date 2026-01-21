import type { TDirectusLinkProps } from './interface'
import { Anchor } from '@okam/stack-ui'
import { getDirectusLink } from '../../utils/getDirectusLink'

function DirectusLink(props: TDirectusLinkProps) {
  const { type, componentsConfig } = props

  const linkProps = getDirectusLink(props)

  if (type == null || type === '')
    return null

  const LinkComponent = componentsConfig?.[type]

  if (LinkComponent != null)
    return <LinkComponent {...props} />

  if (linkProps.href == null || linkProps.href === '')
    return null

  return <Anchor {...linkProps} />
}

export default DirectusLink
