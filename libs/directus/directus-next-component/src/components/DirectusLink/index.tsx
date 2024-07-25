import { Anchor } from '@okam/stack-ui'
import Link from 'next/link'
import useDirectusLink from '../../hooks/directus-link'
import type { TDirectusLinkProps } from './interface'

const DirectusLink = (props: TDirectusLinkProps) => {
  const { type, variant, componentsConfig, themeName, tokens, customTheme, ...rest } = props

  const linkProps = useDirectusLink(props)

  if (!type || !linkProps.href) return null

  const LinkComponent = componentsConfig?.[type]

  if (!LinkComponent)
    return <Anchor as={Link} themeName={themeName} tokens={tokens} customTheme={customTheme} {...linkProps} />
  return <LinkComponent {...rest} />
}

export default DirectusLink
