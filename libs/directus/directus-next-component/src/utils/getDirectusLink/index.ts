import type { Nullable, TAnchorProps } from '@okam/stack-ui'
import Link from 'next/link'
import { z } from 'zod'
import type { TDirectusLinkPropsConfig, TGetDirectusLink } from '../../components/DirectusLink/interface'
import type { SearchParams } from '../../types/links'
import { getDirectusFile } from '../getDirectusFile'
import { getDirectusSearchParams } from '../getDirectusSearchParams'

const absoluteUrlSchema = z.url({ protocol: /^(https?|mailto|tel)$/ })
const relativeUrlSchema = z.string().regex(/^[/#?]/, {
  error: (error) => `Invalid href ${error.input}. Must be a valid absolute URL or start with /, # or ?`,
})

const hrefSchema = z.union([absoluteUrlSchema, relativeUrlSchema]).transform((value) => {
  try {
    return new URL(value)
  } catch (error) {
    return new URL(value, 'http://localhost')
  }
})

function withSearchParams(url: URL, searchParams: URLSearchParams) {
  searchParams.forEach((value, name) => {
    url.searchParams.append(name, value)
  })
  return url
}

function getCompleteHref(
  href: Nullable<string>,
  params: Nullable<Nullable<SearchParams>[]>,
  type: 'relative' | 'absolute',
) {
  if (!href) return null

  const searchParams = getDirectusSearchParams(params)

  const url = hrefSchema.parse(href)

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
  collection: getCollection,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'external-link': getExternalLink,
  file: getFile,
  anchor: getAnchor,
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
