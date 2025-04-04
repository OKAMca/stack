'use client'

import type { LinkProps as NextLinkProps } from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { useHash } from '../useHash'
import type { TLinkOptions } from './interface'

function scrollToTop(behavior: ScrollBehavior) {
  window?.scrollTo?.({ top: 0, behavior })
}

export function useLink(props: TLinkOptions): NextLinkProps {
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
    locale,
    prefetch,
    shallow,
    passHref,
    legacyBehavior,
    behavior = 'instant',
  } = props

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
    href,
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
