import type { TAnchorProps } from '@okam/stack-ui'
import Link from 'next/link'
import type { TDirectusLinkPropsConfig, TUseDirectusLink } from '../components/DirectusLink/interface'
import useDirectusFile from './directus-file'

function useFile(props: TUseDirectusLink) {
  const { file } = props

  const { filename_download: filenameDownload } = file ?? {}
  const href = useDirectusFile(file)

  return {
    href: href?.toString() ?? undefined,
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
    variant,
    tokens,
    themeName,
    customTheme,
    propsConfig,
    as = Link,
  } = props

  if (!type) return {}

  const finalConfig = { ...defaultPropsConfig, ...(propsConfig ?? {}) }

  const linkProps = finalConfig[type]?.(props) ?? {}

  const { href, ...rest } = linkProps

  if (!href) return {}

  return {
    as,
    themeName,
    tokens: { ...tokens, ...(variant ? { type: variant } : {}) },
    customTheme,
    nextLinkProps: {
      href,
      prefetch: prefetch ?? undefined,
      scroll: scroll ?? undefined,
      replace: replace ?? undefined,
    },
    href,
    children: label,
    ...rest,
  }
}
