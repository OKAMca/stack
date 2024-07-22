'use client'

import { useThemeContext } from '@okam/stack-ui'
import Link from 'next/link'
import type { TAnchorProps } from '../interface'

const Anchor = (props: TAnchorProps) => {
  const { anchor, label, themeName, tokens, customTheme, variant, prefetch, scroll, replace, ...rest } = props

  const theme = useThemeContext(themeName, { ...tokens, ...(variant ? { type: variant } : {}) }, customTheme)

  if (!label || !anchor) return null

  return (
    <Link
      className={theme}
      href={anchor}
      replace={replace ?? undefined}
      prefetch={prefetch ?? undefined}
      scroll={scroll ?? undefined}
      {...rest}
    >
      {label}
    </Link>
  )
}

export default Anchor
