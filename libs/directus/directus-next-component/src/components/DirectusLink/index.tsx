import { pascal } from 'radash'
import directusLinkConfig from './config'
import type { TDirectusLinkProps } from './interface'

const DirectusLink = (props: TDirectusLinkProps) => {
  const { type, config, ...rest } = props

  if (!type) return null

  const finalConfig = { ...directusLinkConfig, ...(config ?? {}) }

  const LinkComponent = finalConfig[pascal(type)]

  if (!LinkComponent) return null

  return <LinkComponent {...rest} />
}

export default DirectusLink
