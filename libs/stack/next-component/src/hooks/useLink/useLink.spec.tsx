// @vitest-environment jsdom
import type { FocusEvent, PointerEvent, TouchEvent } from 'react'
import type { TLink } from './interface'
import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useLink } from '.'

const pointerEvent = {} as PointerEvent<HTMLAnchorElement>
const focusEvent = {} as FocusEvent<HTMLAnchorElement>
const touchEvent = {} as TouchEvent<HTMLAnchorElement>

function renderUseLink(props: Partial<TLink> = {}) {
  return renderHook(() => useLink({ href: '/about', locale: false, ...props }))
}

describe('useLink prefetch', () => {
  it.each([
    true,
    false,
    null,
    'auto',
    undefined,
  ] as const)('passes prefetch=%s through unchanged', (prefetch) => {
    const { result } = renderUseLink({ prefetch })
    expect(result.current.prefetch).toBe(prefetch)
  })

  it.each([
    ['onPointerEnter', pointerEvent],
    ['onFocus', focusEvent],
    ['onTouchStart', touchEvent],
  ] as const)('leaves prefetch untouched on %s when not in intent mode', (handler, event) => {
    const { result } = renderUseLink({ prefetch: false })
    act(() => {
      // @ts-expect-error each handler receives its own event type
      result.current[handler]?.(event)
    })
    expect(result.current.prefetch).toBe(false)
  })

  describe('intent', () => {
    it('disables prefetching until the user shows intent', () => {
      const { result } = renderUseLink({ prefetch: 'intent' })
      expect(result.current.prefetch).toBe(false)
    })

    it.each([
      ['onPointerEnter', pointerEvent],
      ['onFocus', focusEvent],
      ['onTouchStart', touchEvent],
    ] as const)('restores the Next default prefetch on %s', (handler, event) => {
      const { result } = renderUseLink({ prefetch: 'intent' })
      act(() => {
        // @ts-expect-error each handler receives its own event type
        result.current[handler]?.(event)
      })
      expect(result.current.prefetch).toBeNull()
    })

    it('keeps the Next default prefetch once intent was shown', () => {
      const { result } = renderUseLink({ prefetch: 'intent' })
      act(() => result.current.onPointerEnter?.(pointerEvent))
      act(() => result.current.onFocus?.(focusEvent))
      expect(result.current.prefetch).toBeNull()
    })

    it('still calls the user-supplied handlers', () => {
      const onPointerEnter = vi.fn()
      const onFocus = vi.fn()
      const onTouchStart = vi.fn()
      const { result } = renderUseLink({ prefetch: 'intent', onPointerEnter, onFocus, onTouchStart })

      act(() => result.current.onPointerEnter?.(pointerEvent))
      act(() => result.current.onFocus?.(focusEvent))
      act(() => result.current.onTouchStart?.(touchEvent))

      expect(onPointerEnter).toHaveBeenCalledWith(pointerEvent)
      expect(onFocus).toHaveBeenCalledWith(focusEvent)
      expect(onTouchStart).toHaveBeenCalledWith(touchEvent)
    })
  })

  it('calls the user-supplied handlers outside intent mode', () => {
    const onPointerEnter = vi.fn()
    const onFocus = vi.fn()
    const { result } = renderUseLink({ onPointerEnter, onFocus })

    act(() => result.current.onPointerEnter?.(pointerEvent))
    act(() => result.current.onFocus?.(focusEvent))

    expect(onPointerEnter).toHaveBeenCalledWith(pointerEvent)
    expect(onFocus).toHaveBeenCalledWith(focusEvent)
  })
})
