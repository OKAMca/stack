'use client'

import type { LinkProps } from 'next/link'
import type { TLink, TUseLinkReturn } from './interface'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { useLocale } from 'react-aria'
import { useHash } from '../useHash'
import { LocalePrefix } from './interface'

// Define Params type locally to avoid Next.js internal import path changes
type Params = Record<string, string | string[] | undefined>

const EXTERNAL_URL_RE = /^[a-z]+:\/\//i

function scrollToTop(behavior: ScrollBehavior) {
  window?.scrollTo?.({ top: 0, behavior })
}

function getParamsLocale(params: Params | undefined): string | undefined {
  const { locale } = params ?? {}
  if (Array.isArray(locale))
    return locale[0]
  return locale
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
  const params = useParams()
  const paramsLocale = getParamsLocale(params)
  const { locale: ctxLocale } = useLocale()
  const finalLocale = locale ?? ctxLocale ?? paramsLocale ?? false

  const shouldDisplayLocale = {
    [LocalePrefix.Always]: true,
    [LocalePrefix.AsNeeded]: finalLocale !== defaultLocale,
  }[localePrefix]

  const displayLocale = shouldDisplayLocale ? finalLocale : false

  return displayLocale
}

export function localizeHref(href: LinkProps['href'], locale: LinkProps['locale']): string {
  const hrefString = href.toString()
  const hasTrailingSlash = hrefString.endsWith('/')

  const isAnchor = hrefString.startsWith('#')
  const isExternal = EXTERNAL_URL_RE.test(hrefString) || hrefString.startsWith('//')
  let finalHref: string
  if (locale != null && locale !== false && !isExternal && !isAnchor) {
    finalHref = `/${locale}${hrefString}`
  }
  else {
    finalHref = hrefString
  }

  return (hasTrailingSlash || isAnchor) ? finalHref : `${finalHref}/`
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
    onPathnameChange,
    onHashChange,
    onSearchParamsChange,
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
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hash = useHash()
  const hasWarnedOnPathnameChangeRef = useRef(false)

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

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' || onPathnameChange == null || hasWarnedOnPathnameChangeRef.current)
      return

    console.warn('[next-component/Link] `onPathnameChange` is deprecated and will be removed in the next major version. Use `onNavigate` from next/link instead.')
    hasWarnedOnPathnameChangeRef.current = true
  }, [onPathnameChange])

  useEffect(() => {
    onPathnameChange?.(pathname)
  }, [onPathnameChange, pathname])

  useEffect(() => {
    onSearchParamsChange?.(searchParams)
  }, [onSearchParamsChange, searchParams])

  useEffect(() => {
    onHashChange?.(hash)
  }, [onHashChange, hash])

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
