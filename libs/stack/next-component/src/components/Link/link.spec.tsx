// @vitest-environment jsdom
import type { ComponentProps } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Link from '.'

// Stands in for next/link: records the props Link hands to it and renders a plain anchor.
const received: Record<string, unknown>[] = []

function SpyNextLink({ prefetch, ref, ...props }: ComponentProps<'a'> & { prefetch?: unknown }) {
  received.push({ prefetch })
  const { legacyBehavior, passHref, replace, shallow, scroll, onNavigate, ...anchorProps } = props as Record<string, unknown>
  return <a ref={ref} {...anchorProps} />
}

function lastPrefetch() {
  return received.at(-1)?.prefetch
}

afterEach(() => {
  received.length = 0
})

describe('link prefetch', () => {
  it('hands prefetch={false} to next/link until the user shows intent', () => {
    render(<Link as={SpyNextLink} href="/about" locale={false} prefetch="intent">About</Link>)
    expect(lastPrefetch()).toBe(false)
  })

  it.each([
    ['pointerEnter', fireEvent.pointerEnter],
    ['focus', fireEvent.focus],
    ['touchStart', fireEvent.touchStart],
  ] as const)('hands prefetch={null} to next/link after %s', (_, fire) => {
    render(<Link as={SpyNextLink} href="/about" locale={false} prefetch="intent">About</Link>)
    fire(screen.getByRole('link'))
    expect(lastPrefetch()).toBeNull()
  })

  it('calls the user-supplied intent handlers', () => {
    const onPointerEnter = vi.fn()
    const onFocus = vi.fn()
    const onTouchStart = vi.fn()
    render(
      <Link
        as={SpyNextLink}
        href="/about"
        locale={false}
        prefetch="intent"
        onPointerEnter={onPointerEnter}
        onFocus={onFocus}
        onTouchStart={onTouchStart}
      >
        About
      </Link>,
    )
    const link = screen.getByRole('link')
    fireEvent.pointerEnter(link)
    fireEvent.focus(link)
    fireEvent.touchStart(link)

    expect(onPointerEnter).toHaveBeenCalledOnce()
    expect(onFocus).toHaveBeenCalledOnce()
    expect(onTouchStart).toHaveBeenCalledOnce()
  })

  it.each([true, false, null, 'auto'] as const)('hands prefetch=%s to next/link unchanged', (prefetch) => {
    render(<Link as={SpyNextLink} href="/about" locale={false} prefetch={prefetch}>About</Link>)
    fireEvent.pointerEnter(screen.getByRole('link'))
    expect(lastPrefetch()).toBe(prefetch)
  })
})
