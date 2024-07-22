'use client'

import { useThemeContext } from '@okam/stack-ui'
import Link from 'next/link'
import type { TCollectionProps } from '../interface'

const Collection = (props: TCollectionProps) => {
  const { collection, label, themeName, tokens, customTheme, variant, prefetch, scroll, replace, target, ...rest } =
    props

  const theme = useThemeContext(themeName, { ...tokens, ...(variant ? { type: variant } : {}) }, customTheme)

  const { path } = collection?.translations?.[0] ?? {}

  if (!label || !path) return null

  return (
    <Link
      className={theme}
      href={path}
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

export default Collection
