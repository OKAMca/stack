import { describe, expect, it, vi } from 'vitest'
import { anySignal } from './getRedirectsRoute'

describe('anySignal without AbortSignal.any (edge runtime)', () => {
  it('aborts when any source aborts, with its reason', () => {
    vi.stubGlobal('AbortSignal', Object.assign(class {}, { ...AbortSignal, any: undefined }))
    const a = new AbortController()
    const b = new AbortController()
    const combined = anySignal([a.signal, b.signal])
    expect(combined.aborted).toBe(false)
    b.abort('stop')
    expect(combined.aborted).toBe(true)
    expect(combined.reason).toBe('stop')
    vi.unstubAllGlobals()
  })

  it('is already aborted when a source is', () => {
    vi.stubGlobal('AbortSignal', { any: undefined })
    const a = new AbortController()
    a.abort('early')
    expect(anySignal([a.signal, new AbortController().signal]).reason).toBe('early')
    vi.unstubAllGlobals()
  })
})
