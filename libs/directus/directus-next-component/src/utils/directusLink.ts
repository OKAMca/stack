import type { TAnchorProps } from '@okam/stack-ui'
import Link from 'next/link'
import { logger } from '../logger'
import type { TDirectusLink, TDirectusLinkPropsConfig } from '../types/directus-link'
import { directusFile } from './directusFile'
import { directusSearchParams } from './directusSearchParams'

function createFile(props: TDirectusLink) {
  const { file } = props

  const { filename_download: filenameDownload } = file ?? {}
  const { src } = directusFile(file) ?? {}

  return {
    href: src,
    download: filenameDownload ?? true,
  }
}

function createCollection(props: TDirectusLink) {
  const { collection, target } = props

  return {
    href: collection?.translations?.[0]?.path ?? undefined,
    target: target ?? undefined,
  }
}

function createExternalLink(props: TDirectusLink) {
  const { external_link: externalLink, target } = props

  return {
    href: externalLink ?? undefined,
    target: target ?? undefined,
  }
}

function createAnchor(props: TDirectusLink) {
  const { anchor } = props

  return { href: anchor ?? undefined }
}

const defaultPropsConfig: TDirectusLinkPropsConfig = {
  collection: createCollection,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'external-link': createExternalLink,
  file: createFile,
  anchor: createAnchor,
}

/**
 * Generic formatter for a directus `Links` into usable stack-ui `Anchor` props
 */
export function directusLink(props: TDirectusLink): TAnchorProps {
  const {
    type,
    label,
    prefetch,
    replace,
    scroll,
    tokens,
    themeName,
    customTheme,
    propsConfig,
    as = Link,
    target,
    anchor,
    collection,
    external_link: externalLink,
    file,
    id,
    params,
    ...rest
  } = props

  const searchParams = directusSearchParams(params)

  if (!type) return {}

  const finalConfig = { ...defaultPropsConfig, ...(propsConfig ?? {}) }

  const linkProps = finalConfig[type]?.(props) ?? {}

  const { href, ...restOfLinkProps } = linkProps

  if (!href) return {}

  if (!URL.canParse(href)) {
    logger.log('Invalid href', 'error', { href })
    return {}
  }

  const hrefUrl = new URL(href)
  searchParams.forEach((value, name) => {
    hrefUrl.searchParams.append(name, value)
  })

  return {
    ...rest,
    as,
    ...(themeName ? { themeName } : {}),
    ...(customTheme ? { customTheme } : {}),
    ...(tokens ? { tokens } : {}),
    nextLinkProps: {
      href: hrefUrl.toString(),
      prefetch: prefetch ?? undefined,
      scroll: scroll ?? undefined,
      replace: replace ?? undefined,
    },
    href: hrefUrl.toString(),
    children: label,
    ...restOfLinkProps,
  }
}
