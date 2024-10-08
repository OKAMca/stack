import type { TAnchorProps } from '@okam/stack-ui'
import Link from 'next/link'
import type { TDirectusLinkPropsConfig, TUseDirectusLink } from '../components/DirectusLink/interface'
import useDirectusFile from './directus-file'

function useFile(props: TUseDirectusLink) {
  const { file } = props

  const { filename_download: filenameDownload } = file ?? {}
  const { src } = useDirectusFile(file) ?? {}

  return {
    href: src,
    download: filenameDownload ?? true,
  }
}

function useCollection(props: TUseDirectusLink) {
  const { collection, target } = props

  return {
    href: collection?.translations?.[0]?.path ?? undefined,
    target: target ?? undefined,
  }
}

function useExternalLink(props: TUseDirectusLink) {
  const { external_link: externalLink, target } = props

  return {
    href: externalLink ?? undefined,
    target: target ?? undefined,
  }
}

function useAnchor(props: TUseDirectusLink) {
  const { anchor } = props

  return { href: anchor ?? undefined }
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
