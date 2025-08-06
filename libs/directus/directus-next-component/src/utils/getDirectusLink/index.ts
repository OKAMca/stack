import type { TAnchorProps } from '@okam/stack-ui'
import Link from 'next/link'
import type { DirectusLinkPropsConfig, GetDirectusLink } from '../../components/DirectusLink/interface'
import { getDirectusFile } from '../getDirectusFile'

function getFile(props: GetDirectusLink) {
  const { file } = props

  const { filename_download: filenameDownload } = file ?? {}
  const { src } = getDirectusFile(file) ?? {}

  return {
    href: src,
    download: filenameDownload ?? true,
  }
}

function getCollection(props: GetDirectusLink) {
  const { collection, target } = props

  return {
    href: collection?.translations?.[0]?.path ?? undefined,
    target: target ?? undefined,
  }
}

function getExternalLink(props: GetDirectusLink) {
  const { external_link: externalLink, target } = props

  return {
    href: externalLink ?? undefined,
    target: target ?? undefined,
  }
}

function getAnchor(props: GetDirectusLink) {
  const { anchor } = props

  return { href: anchor ?? undefined }
}

const defaultPropsConfig: DirectusLinkPropsConfig = {
  collection: getCollection,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'external-link': getExternalLink,
  file: getFile,
  anchor: getAnchor,
}

export function getDirectusLink(props: GetDirectusLink): TAnchorProps {
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
    ...rest
  } = props

  if (!type) return {}

  const finalConfig = { ...defaultPropsConfig, ...(propsConfig ?? {}) }

  const linkProps = finalConfig[type]?.(props) ?? {}

  const { href, ...restOfLinkProps } = linkProps

  if (!href) return {}

  return {
    ...rest,
    as,
    ...(themeName ? { themeName } : {}),
    ...(customTheme ? { customTheme } : {}),
    ...(tokens ? { tokens } : {}),
    nextLinkProps: {
      href,
      prefetch: prefetch ?? undefined,
      scroll: scroll ?? undefined,
      replace: replace ?? undefined,
    },
    href,
    children: label,
    ...restOfLinkProps,
  }
}

/**
 * @deprecated Use `getDirectusLink` instead
 */
export const useDirectusLink = getDirectusLink
