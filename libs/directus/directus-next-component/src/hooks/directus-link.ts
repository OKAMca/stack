import type { Nullable, TAnchorProps } from '@okam/stack-ui'
import Link from 'next/link'
import type { TDirectusLinkPropsConfig, TUseDirectusLink } from '../components/DirectusLink/interface'
import { logger } from '../logger'
import type { SearchParams } from '../types/links'
import useDirectusFile from './directus-file'
import getDirectusSearchParams from './directus-search-params'

export function parseUrlOrHref(href: string) {
  if (URL.canParse(href)) {
    const url = new URL(href)
    // Only allow http(s) for absolute URLs
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return null
    }
    return url
  }
  if (!href.startsWith('/') && !href.startsWith('#')) {
    return null
  }

  // Hack to use URL methods on relative URLs
  return new URL(href, 'http://localhost')
}

function getCompleteUrl(href: Nullable<string>, params: Nullable<Nullable<SearchParams>[]>) {
  if (!href) return null
  const searchParams = getDirectusSearchParams(params)

  const url = parseUrlOrHref(href)

  if (!url) {
    logger.log('Invalid href', 'error', { href })
    return null
  }

  searchParams.forEach((value, name) => {
    url.searchParams.append(name, value)
  })

  return url
}

function useFile(props: TUseDirectusLink) {
  const { file, params } = props

  const { filename_download: filenameDownload } = file ?? {}
  const { src } = useDirectusFile(file) ?? {}

  const { href } = getCompleteUrl(src, params) ?? {}

  if (src && URL.canParse(src)) {
    return {
      href: src,
      download: filenameDownload ?? true,
    }
  }

  const relativeHref = href && origin ? href.replace(origin, '') : undefined

  return {
    href: relativeHref,
    download: filenameDownload ?? true,
  }
}

function useCollection(props: TUseDirectusLink) {
  const { collection, target, params } = props

  const { href, origin } = getCompleteUrl(collection?.translations?.[0]?.path, params) ?? {}
  const relativeHref = href && origin ? href.replace(origin, '') : undefined

  return {
    href: relativeHref,
    target: target ?? undefined,
  }
}

function useExternalLink(props: TUseDirectusLink) {
  const { external_link: externalLink, target, params } = props

  const { href } = getCompleteUrl(externalLink, params) ?? {}

  return {
    href,
    target: target ?? undefined,
  }
}

function useAnchor(props: TUseDirectusLink) {
  const { anchor, params } = props

  const { href, origin } = getCompleteUrl(anchor, params) ?? {}
  const relativeHref = href && origin ? href.replace(origin, '') : undefined

  return { href: relativeHref }
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
