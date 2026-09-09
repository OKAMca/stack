'use client'

import type { TLinkExample } from './interface'
import { Link, useLink } from '@okam/next-component'
import { useCallback, useState } from 'react'

interface TRenderedAnchor {
  href: string
  /**
   * Props that leaked onto the anchor as HTML attributes instead of being
   * consumed by `Link`.
   */
  leakedAttributes: string[]
}

/**
 * Renders the example's props the way they would be written as JSX, so the
 * input is visible next to what it produced.
 */
function formatProps(props: TLinkExample['linkProps']): string {
  return Object.entries(props)
    .map(([key, value]) => (typeof value === 'string' ? `${key}="${value}"` : `${key}={${String(value)}}`))
    .join(' ')
}

export function LinkExample(props: TLinkExample) {
  const { linkProps, expected, before } = props
  const { href } = useLink(linkProps)

  const [rendered, setRendered] = useState<TRenderedAnchor>()

  const captureAnchor = useCallback((anchor: HTMLElement | null) => {
    if (anchor == null)
      return

    setRendered({
      href: anchor.getAttribute('href') ?? '(none)',
      leakedAttributes: anchor.getAttributeNames().filter(name => name.toLowerCase() === 'trailingslash'),
    })
  }, [])

  const isPass = href === expected

  return (
    <tr className="border-b border-gray-200 align-top">
      <td className="p-3 font-mono text-xs whitespace-pre-wrap">{formatProps(linkProps)}</td>
      <td className="p-3">
        <Link ref={captureAnchor} {...linkProps} customTheme="text-blue-600 underline">
          {linkProps.href}
        </Link>
      </td>
      <td className="p-3 font-mono text-xs whitespace-pre-wrap">{href}</td>
      <td className="p-3 font-mono text-xs whitespace-pre-wrap text-gray-600">{rendered?.href ?? '…'}</td>
      <td className="p-3 font-mono text-xs whitespace-pre-wrap">
        {expected}
        {before != null && <span className="block mt-1 text-gray-400 line-through">{before}</span>}
      </td>
      <td className="p-3 text-xs whitespace-nowrap">
        <span className={isPass ? 'text-green-700' : 'text-red-700 font-bold'}>{isPass ? '✓ pass' : '✗ fail'}</span>
        {rendered != null && rendered.leakedAttributes.length > 0 && (
          <span className="block mt-1 text-red-700 font-bold">
            ✗ leaked
            {' '}
            {rendered.leakedAttributes.join(', ')}
          </span>
        )}
      </td>
    </tr>
  )
}
