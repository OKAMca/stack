'use client'

import { useThemeContext } from '@okam/stack-ui'
import Link from 'next/link'
import useDirectusFile from '../../../hooks/directus-file'
import type { TFileProps } from '../interface'

const File = (props: TFileProps) => {
  const { file, label, themeName, tokens, customTheme, variant, prefetch, scroll, replace, ...rest } = props

  const { filename_download: filenameDownload } = file ?? {}

  const theme = useThemeContext(themeName, { ...tokens, ...(variant ? { type: variant } : {}) }, customTheme)

  const url = useDirectusFile(file)

  if (!label || !url) return null

  return (
    <Link
      className={theme}
      href={url}
      replace={replace ?? undefined}
      prefetch={prefetch ?? undefined}
      scroll={scroll ?? undefined}
      download={filenameDownload ?? true}
      {...rest}
    >
      {label}
    </Link>
  )
}

export default File
