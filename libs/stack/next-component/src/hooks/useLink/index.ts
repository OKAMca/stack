'use client'

import type { LinkProps } from 'next/link'
import type { TLink, TUseLinkReturn } from './interface'
import { useCallback, useState } from 'react'
import { useLocale } from 'react-aria'
import { LocalePrefix } from './interface'

const ABSOLUTE_SCHEME_RE = /^[a-z][a-z0-9+.-]*:/i
const DUMMY_BASE = 'http://x'

function scrollToTop(behavior: ScrollBehavior) {
  window?.scrollTo?.({ top: 0, behavior })
}

/**
 * An href points outside the app when it carries its own scheme (`https:`,
 * `mailto:`, `tel:`, ...) or is protocol-relative (`//cdn.example.com/a.js`).
 */
function isExternalHref(hrefString: string): boolean {
  return ABSOLUTE_SCHEME_RE.test(hrefString) || hrefString.startsWith('//')
}

/**
 * Ensures the pathname portion of an app-internal href ends with a trailing
 * slash, preserving any search params and hash.
 */
function addTrailingSlashToPathname(hrefString: string): string {
  try {
    const url = new URL(hrefString, DUMMY_BASE)

    if (!url.pathname.endsWith('/'))
      url.pathname += '/'

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

export function localizeHref(
  href: LinkProps['href'],
  locale: LinkProps['locale'],
  trailingSlash: boolean = true,
): string {
  const hrefString = href.toString()

  const isAnchor = hrefString.startsWith('#')
  if (isAnchor)
    return hrefString

  // External hrefs are rendered verbatim: their canonical form belongs to a host
  // we don't control, and scheme-only hrefs such as `mailto:` or `tel:` have no
  // pathname to localize.
  if (isExternalHref(hrefString))
    return hrefString

  const withLocale = (locale != null && locale !== false)
    ? `/${locale}${hrefString}`
    : hrefString

  return trailingSlash ? addTrailingSlashToPathname(withLocale) : withLocale
}

/**
 * Resolves the `prefetch` handed to next/link. `'intent'` keeps prefetching off until
 * `markIntent` is called (pointerenter, touchstart or focus), then defers to Next's default.
 * Intent belongs to one destination: a new `href` waits for intent again.
 * Any other value is passed through unchanged.
 */
function useIntentPrefetch(prefetch: TLink['prefetch'], href: string) {
  const [intentHref, setIntentHref] = useState<string | null>(null)
  const isIntent = prefetch === 'intent'

  const markIntent = useCallback(() => {
    if (isIntent)
      setIntentHref(href)
  }, [isIntent, href])

  if (!isIntent)
    return { prefetch, markIntent }

  return { prefetch: intentHref === href ? null : false, markIntent }
}

/**
 * @params {props.locale} - The direct locale prop always gets priority. If no `locale` prop is provided, the prop will try to fall back to react-aria `useLocale` and then next/navigation `useParams`. If a locale is found, it will be automatically prepended to the href. Otherwise, href will be returned as is.
 */
export function useLink(props: TLink): TUseLinkReturn {
  const {
    scroll = true,
    onMouseEnter,
    onTouchStart,
    onPointerEnter,
    onFocus,
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
    trailingSlash = true,
  } = props

  const locale = useLinkLocale(props)
  const localizedHref = localizeHref(href, locale, trailingSlash)
  const { prefetch: nextPrefetch, markIntent } = useIntentPrefetch(prefetch, localizedHref)

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
    markIntent()
    handleScroll()
  }

  const handlePointerEnter: typeof onPointerEnter = (event) => {
    onPointerEnter?.(event)
    markIntent()
  }

  const handleFocus: typeof onFocus = (event) => {
    onFocus?.(event)
    markIntent()
  }

  return {
    href: localizedHref.toString(),
    as: urlDecorator,
    replace,
    prefetch: nextPrefetch,
    shallow,
    onClick: handleClick,
    onNavigate,
    onTouchStart: handleTouchStart,
    onMouseEnter,
    onPointerEnter: handlePointerEnter,
    onFocus: handleFocus,
    scroll: nextScroll,
    passHref,
    legacyBehavior,
  }
}
