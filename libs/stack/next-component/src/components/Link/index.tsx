'use client'

import type { Ref } from 'react'
import type { TLinkProps } from './interface'
import { Anchor } from '@okam/stack-ui'
import NextLink from 'next/link'
import { useLink } from '../../hooks/useLink'

function Link({ ref, ...props }: TLinkProps & { ref?: Ref<HTMLElement> }) {
  const {
    themeName = 'link',
    tokens,
    customTheme,
    as = NextLink,
    children,
    locale,
    scroll,
    behavior,
    urlDecorator: urlDecoratorProp,
    href: hrefProp,
    trailingSlash,
    // Resolved by useLink: left in `rest`, they would override `nextLinkProps` in Anchor
    prefetch,
    onPointerEnter,
    onFocus,
    onTouchStart,
    ...rest
  } = props

  const linkProps = useLink(props)

  return (
    <Anchor
      ref={ref}
      {...rest}
      nextLinkProps={linkProps}
      as={as}
      themeName={themeName}
      tokens={tokens}
      customTheme={customTheme}
    >
      {children}
    </Anchor>
  )
}

Link.displayName = 'Link'

export default Link
