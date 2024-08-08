import type { TAnchorProps } from '@okam/stack-ui'
import type { TDirectusLinkProps, TDirectusLinkPropsConfig } from '../components/DirectusLink/interface'
import useDirectusFile from './directus-file'

const defaultPropsConfig: TDirectusLinkPropsConfig = {
  collection: ({ collection, target }) => ({
    href: collection?.translations?.[0]?.path ?? undefined,
    target: target ?? undefined,
  }),
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'external-link': ({ external_link: externalLink, target }) => ({
    href: externalLink ?? undefined,
    target: target ?? undefined,
  }),
  file: ({ file }) => {
    const { filename_download: filenameDownload } = file ?? {}
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const href = useDirectusFile(file)

    return {
      href: href?.toString() ?? undefined,
      download: filenameDownload ?? true,
    }
  },
  anchor: ({ anchor }) => ({ href: anchor ?? undefined }),
}

export default function useDirectusLink(props: TDirectusLinkProps): TAnchorProps {
  const { type, label, prefetch, replace, scroll, tokens, themeName, customTheme, propsConfig } = props

  if (!type) return {}

  const finalConfig = { ...defaultPropsConfig, ...(propsConfig ?? {}) }

  const { href, ...rest } = finalConfig[type](props)

  if (!href) return {}

  return {
    themeName,
    tokens,
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
