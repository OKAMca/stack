'use client'

import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import type { LinkProps } from 'next/link'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { useLocale } from 'react-aria'
import { useHash } from '../useHash'
import type { TLink, TUseLinkReturn } from './interface'

function scrollToTop(behavior: ScrollBehavior) {
  window?.scrollTo?.({ top: 0, behavior })
}

function getParamsLocale(params: Params): string | undefined {
  const { locale } = params
  if (Array.isArray(locale)) return locale[0]
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
  const { locale } = props
  const params = useParams()
  const paramsLocale = getParamsLocale(params)
  const { locale: ctxLocale } = useLocale()

  return locale ?? ctxLocale ?? paramsLocale ?? false
}

export function localizeHref(href: LinkProps['href'], locale: LinkProps['locale']): string {
  const hrefString = href.toString()

  const isExternal = /^[a-z]+:\/\//i.test(hrefString) || hrefString.startsWith('//')
  if (isExternal) return hrefString

  if (locale) {
    return `/${locale}${hrefString}`
  }

  return hrefString
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

  const isNextScroll = typeof scroll === 'boolean'
  const nextScroll = isNextScroll ? scroll : false

  const handleScroll = useCallback(() => {
    if (isNextScroll) return

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
    locale,
    prefetch,
    shallow,
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    onMouseEnter,
    scroll: nextScroll,
    passHref,
    legacyBehavior,
  }
}
