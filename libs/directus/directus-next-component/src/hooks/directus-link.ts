import type { Nullable, TAnchorProps } from '@okam/stack-ui'
import Link from 'next/link'
import type { TDirectusLinkPropsConfig, TUseDirectusLink } from '../components/DirectusLink/interface'
import type { SearchParams } from '../types/links'
import useDirectusFile from './directus-file'
import getDirectusSearchParams from './directus-search-params'

export function parseUrlOrHref(href: string) {
  if (URL.canParse(href)) {
    const url = new URL(href)
    // Only allow safe protocols for absolute URLs
    if (!['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol)) {
      throw new Error('Invalid protocol. An absolute URL must start with http or https.')
    }
    return url
  }
  if (!['/', '#', '?'].includes(href[0] ?? '')) {
    throw new Error('Invalid href. A relative URL must start with / or #.')
  }

  // Hack to use URL methods on relative URLs
  return new URL(href, 'http://localhost')
}

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

  const url = parseUrlOrHref(href)

  const completeUrl = withSearchParams(url, searchParams)

  if (type === 'relative') {
    const { origin } = completeUrl
    return completeUrl.href.replace(origin, '')
  }
  return completeUrl.href
}

function useFile(props: TUseDirectusLink) {
  const { file, params } = props

  const { filename_download: filenameDownload } = file ?? {}
  const { src } = useDirectusFile(file) ?? {}

  const href = getCompleteHref(src, params, 'absolute')

  return {
    href: href ?? undefined,
    download: filenameDownload ?? true,
  }
}

function useCollection(props: TUseDirectusLink) {
  const { collection, target, params } = props

  const href = getCompleteHref(collection?.translations?.[0]?.path, params, 'relative')

  return {
    href: href ?? undefined,
    target: target ?? undefined,
  }
}

function useExternalLink(props: TUseDirectusLink) {
  const { external_link: externalLink, target, params } = props

  const href = getCompleteHref(externalLink, params, 'absolute')

  return {
    href: href ?? undefined,
    target: target ?? undefined,
  }
}

function useAnchor(props: TUseDirectusLink) {
  const { anchor, params } = props

  const href = getCompleteHref(anchor, params, 'relative')

  return { href: href ?? undefined }
}

const defaultPropsConfig: TDirectusLinkPropsConfig = {
  collection: useCollection,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'external-link': useExternalLink,
  file: useFile,
  anchor: useAnchor,
}

export default function useDirectusLink(props: TUseDirectusLink): TAnchorProps {
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
