'use client'

import type { TDirectusLinkProps } from '@okam/directus-next-component'
import { getDirectusLink } from '@okam/directus-next-component/server'
import { Anchor } from '@okam/stack-ui'

export function BrandDirectusLink(props: TDirectusLinkProps) {
  const linkProps = getDirectusLink(props)

  return <Anchor {...linkProps} tokens={{ buttonStyle: 'outline', className: 'text-white', ...linkProps.tokens }} />
}
