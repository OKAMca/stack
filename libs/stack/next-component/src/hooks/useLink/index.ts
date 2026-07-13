'use client'

import type { LinkProps } from 'next/link'
import type { TLink, TUseLinkReturn } from './interface'
import { useCallback } from 'react'
import { useLocale } from 'react-aria'
import { LocalePrefix } from './interface'

const EXTERNAL_URL_RE = /^[a-z]+:\/\//i
const DUMMY_BASE = 'http://x'

function scrollToTop(behavior: ScrollBehavior) {
  window?.scrollTo?.({ top: 0, behavior })
}

/**
 * Ensures the pathname portion of a URL ends with a trailing slash,
 * preserving any search params and hash.
 */
function addTrailingSlashToPathname(hrefString: string): string {
  const isProtocolRelative = hrefString.startsWith('//')
  const isExternal = EXTERNAL_URL_RE.test(hrefString)

  try {
    const url = new URL(
      isProtocolRelative ? `http:${hrefString}` : hrefString,
      DUMMY_BASE,
    )

    if (!url.pathname.endsWith('/'))
      url.pathname += '/'

    if (isExternal)
      return url.toString()

    if (isProtocolRelative)
      return `//${url.host}${url.pathname}${url.search}${url.hash}`

    return `${url.pathname}${url.search}${url.hash}`
  }
  catch {
    return hrefString.endsWith('/') ? hrefString : `${hrefString}/`
  }
}

/**
 * Tries to get the locale, in order of priority:
 * 1. The locale prop. Still has priority even when set to `false`
 * 2. The locale from react-aria `useLocale`
 * 3. The locale from next/navigation `useParams`
 * @returns The best matched locale
 */
export function useLinkLocale(props: TLink) {
  const { locale, i18n } = props
  const { defaultLocale, localePrefix = 'always' } = i18n ?? {}
  const { locale: ctxLocale } = useLocale()
  const finalLocale = locale ?? ctxLocale ?? false

  const shouldDisplayLocale = {
    [LocalePrefix.Always]: true,
    [LocalePrefix.AsNeeded]: finalLocale !== defaultLocale,
  }[localePrefix]

  const displayLocale = shouldDisplayLocale ? finalLocale : false

  return displayLocale
}

export function localizeHref(href: LinkProps['href'], locale: LinkProps['locale']): string {
  const hrefString = href.toString()

  const isAnchor = hrefString.startsWith('#')
  if (isAnchor)
    return hrefString

  const isExternal = EXTERNAL_URL_RE.test(hrefString) || hrefString.startsWith('//')

  const withLocale = (locale != null && locale !== false && !isExternal)
    ? `/${locale}${hrefString}`
    : hrefString

  return addTrailingSlashToPathname(withLocale)
}

/**
 * @params {props.locale} - The direct locale prop always gets priority. If no `locale` prop is provided, the prop will try to fall back to react-aria `useLocale` and then next/navigation `useParams`. If a locale is found, it will be automatically prepended to the href. Otherwise, href will be returned as is.
 */
export function useLink(props: TLink): TUseLinkReturn {
  const {
    scroll = true,
    onMouseEnter,
    onTouchStart,
    onClick,
    onNavigate,
    href,
    urlDecorator,
    replace,
    prefetch,
    shallow,
    passHref,
    legacyBehavior,
    behavior = 'instant',
  } = props

  const locale = useLinkLocale(props)
  const localizedHref = localizeHref(href, locale)

  const isNextScroll = typeof scroll === 'boolean'
  const nextScroll = isNextScroll ? scroll : false

  const handleScroll = useCallback(() => {
    if (isNextScroll)
      return

    scrollToTop(behavior)
  }, [behavior, isNextScroll])

  const handleClick: typeof onClick = (event) => {
    onClick?.(event)
    handleScroll()
  }

  const handleTouchStart: typeof onTouchStart = (event) => {
    onTouchStart?.(event)
    handleScroll()
  }

  return {
    href: localizedHref.toString(),
    as: urlDecorator,
    replace,
    prefetch,
    shallow,
    onClick: handleClick,
    onNavigate,
    onTouchStart: handleTouchStart,
    onMouseEnter,
    scroll: nextScroll,
    passHref,
    legacyBehavior,
  }
}
