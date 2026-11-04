import type { Nullable, TAnchorProps } from '@okam/stack-ui'
import type { TDirectusLinkPropsConfig, TGetDirectusLink } from '../../components/DirectusLink/interface'
import type { TSearchParams } from '../../types/links'
import Link from 'next/link'
import { getDirectusFile } from '../getDirectusFile'
import { getDirectusSearchParams } from '../getDirectusSearchParams'

const ABSOLUTE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])
const RELATIVE_HREF = /^[/#?]/

/**
 * Parses an href that is either an absolute http(s), mailto or tel URL, or relative (starting with `/`, `#` or `?`).
 */
function parseHref(href: string): URL {
  if (RELATIVE_HREF.test(href))
    return new URL(href, 'http://localhost')
  const url = URL.canParse(href) ? new URL(href) : null
  if (url == null || !ABSOLUTE_PROTOCOLS.has(url.protocol))
    throw new TypeError(`Invalid href ${href}. Must be a valid absolute URL or start with /, # or ?`)
  return url
}

function withSearchParams(url: URL, searchParams: URLSearchParams) {
  searchParams.forEach((value, name) => {
    url.searchParams.append(name, value)
  })
  return url
}

function getCompleteHref(
  href: Nullable<string>,
  params: Nullable<Nullable<TSearchParams>[]>,
  type: 'relative' | 'absolute',
) {
  if (href == null || href === '')
    return null

  const searchParams = getDirectusSearchParams(params)

  const url = parseHref(href)

  const completeUrl = withSearchParams(url, searchParams)

  if (type === 'relative') {
    const { origin } = completeUrl
    if (href.startsWith('#')) {
      return completeUrl.href.replace(origin, '').substring(1) // Remove leading /
    }
    return completeUrl.href.replace(origin, '')
  }
  return completeUrl.href
}

function getFile(props: TGetDirectusLink) {
  const { file, params } = props

  const { filename_download: filenameDownload } = file ?? {}
  const { src } = getDirectusFile(file) ?? {}

  const href = getCompleteHref(src, params, 'absolute')

  return {
    href: href ?? undefined,
    download: filenameDownload ?? true,
  }
}

function getCollection(props: TGetDirectusLink) {
  const { collection, target, params } = props

  const href = getCompleteHref(collection?.translations?.[0]?.path, params, 'relative')

  return {
    href: href ?? undefined,
    target: target ?? undefined,
  }
}

function getExternalLink(props: TGetDirectusLink) {
  const { external_link: externalLink, target, params } = props

  const href = getCompleteHref(externalLink, params, 'absolute')

  return {
    href: href ?? undefined,
    target: target ?? undefined,
  }
}

function getAnchor(props: TGetDirectusLink) {
  const { anchor, params } = props

  const href = getCompleteHref(anchor, params, 'relative')

  return { href: href ?? undefined }
}

const defaultPropsConfig: TDirectusLinkPropsConfig = {
  'collection': getCollection,

  'external-link': getExternalLink,
  'file': getFile,
  'anchor': getAnchor,
}

export function getDirectusLink(props: TGetDirectusLink): TAnchorProps {
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

  if (type == null || type === '')
    return {}

  const finalConfig = { ...defaultPropsConfig, ...(propsConfig ?? {}) }

  const linkProps = finalConfig[type]?.(props) ?? {}

  const { href, ...restOfLinkProps } = linkProps

  if (href == null || href === '')
    return {}

  return {
    ...rest,
    as,
    ...(themeName != null ? { themeName } : {}),
    ...(customTheme != null ? { customTheme } : {}),
    ...(tokens != null ? { tokens } : {}),
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
