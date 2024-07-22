'use client'

import { useThemeContext } from '@okam/stack-ui'
import Link from 'next/link'
import type { TExternalLinkProps } from '../interface'

const ExternalLink = (props: TExternalLinkProps) => {
  const {
    external_link: externalLink,
    label,
    themeName,
    tokens,
    customTheme,
    variant,
    prefetch,
    scroll,
    replace,
    target,
    ...rest
  } = props

  const theme = useThemeContext(themeName, { ...tokens, ...(variant ? { type: variant } : {}) }, customTheme)

  if (!label || !externalLink) return null

  return (
    <Link
      className={theme}
      href={externalLink}
      replace={replace ?? undefined}
      prefetch={prefetch ?? undefined}
      scroll={scroll ?? undefined}
      target={target ?? undefined}
      {...rest}
    >
      {label}
    </Link>
  )
}

export default ExternalLink
