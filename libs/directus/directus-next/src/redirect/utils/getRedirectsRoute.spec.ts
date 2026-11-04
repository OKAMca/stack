import { NextRequest } from 'next/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getRedirectsRoute } from './getRedirectsRoute'
import { handleRedirect } from './handleRedirect'

vi.mock('../../logger', () => ({ log: vi.fn() }))

const options = { getApiRouteUrl: () => 'http://localhost', getRedirectSecret: () => 'test-secret' }
const data = { redirects: [{ source: '/old/:slug*', destination: '/new/:slug*', permanent: true }], rewrites: [] }
const request = (signal?: AbortSignal) => new NextRequest('http://localhost/old/a/b', { signal })

beforeEach(() => {
  vi.useFakeTimers()
})
afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('redirect lookup deadline', () => {
  it('aborts a stalled route lookup at the deadline and matches again on the next request', async () => {
    const transport = vi.fn<typeof fetch>()
      .mockImplementationOnce(async () => new Promise(() => {}))
      .mockResolvedValueOnce(Response.json(data))
    vi.stubGlobal('fetch', transport)
    const result = handleRedirect(request(), { ...options, timeoutMs: 3000 })
    await vi.advanceTimersByTimeAsync(2999)
    expect(transport.mock.calls[0][1]?.signal?.aborted).toBe(false)
    await vi.advanceTimersByTimeAsync(1)
    expect(await result).toBeNull()
    expect(transport.mock.calls[0][1]?.signal?.aborted).toBe(true)
    const recovered = await handleRedirect(request(), { ...options, timeoutMs: 3000 })
    expect(recovered?.status).toBe(308)
    expect(recovered?.headers.get('location')).toBe('http://localhost/new/a/b')
    expect(transport).toHaveBeenCalledTimes(2)
    expect(transport.mock.calls[0][1]?.cache).toBeUndefined()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('bounds and cancels a stalled response body', async () => {
    const cancel = vi.fn()
    const transport = vi.fn<typeof fetch>().mockResolvedValue(new Response(new ReadableStream({ cancel })))
    vi.stubGlobal('fetch', transport)
    const result = handleRedirect(request(), { ...options, timeoutMs: 100 })
    await vi.runAllTimersAsync()
    expect(await result).toBeNull()
    expect(cancel).toHaveBeenCalledOnce()
    expect(transport.mock.calls[0][1]?.signal?.aborted).toBe(true)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('fails open on 503 without retaining the failure or retrying', async () => {
    const transport = vi.fn<typeof fetch>()
      .mockResolvedValueOnce(new Response('Unavailable', { status: 503, headers: { 'Cache-Control': 'no-store' } }))
      .mockResolvedValueOnce(Response.json(data))
    vi.stubGlobal('fetch', transport)
    expect(await handleRedirect(request(), options)).toBeNull()
    expect(transport).toHaveBeenCalledTimes(1)
    expect((await handleRedirect(request(), options))?.headers.get('location')).toBe('http://localhost/new/a/b')
    expect(transport).toHaveBeenCalledTimes(2)
  })

  it.each(['request', 'option'])('combines the %s abort signal with the lookup deadline', async (source) => {
    const caller = new AbortController()
    const transport = vi.fn<typeof fetch>().mockImplementation(async () => new Promise(() => {}))
    vi.stubGlobal('fetch', transport)
    const result = handleRedirect(request(source === 'request' ? caller.signal : undefined), {
      ...options,
      timeoutMs: 3000,
      signal: source === 'option' ? caller.signal : undefined,
    })
    caller.abort()
    expect(await result).toBeNull()
    expect(transport.mock.calls[0][1]?.signal?.aborted).toBe(true)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('does not fetch when the caller is already aborted', async () => {
    const caller = new AbortController()
    caller.abort()
    const transport = vi.fn<typeof fetch>()
    vi.stubGlobal('fetch', transport)
    expect(await getRedirectsRoute({ ...options, signal: caller.signal })).toEqual({ redirects: [], rewrites: [] })
    expect(transport).not.toHaveBeenCalled()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('keeps the existing no-deadline default when timeoutMs is omitted', async () => {
    const caller = new AbortController()
    const transport = vi.fn<typeof fetch>().mockImplementation(async () => new Promise(() => {}))
    vi.stubGlobal('fetch', transport)
    const result = getRedirectsRoute({ ...options, signal: caller.signal })
    await vi.advanceTimersByTimeAsync(60000)
    expect(transport.mock.calls[0][1]?.signal?.aborted).toBe(false)
    expect(vi.getTimerCount()).toBe(0)
    caller.abort()
    expect(await result).toEqual({ redirects: [], rewrites: [] })
  })

  it.each([0, -1, Number.NaN, Infinity, 0.5, 2147483648])('fails open for invalid timeout %s', async (timeoutMs) => {
    const transport = vi.fn<typeof fetch>()
    vi.stubGlobal('fetch', transport)
    expect(await getRedirectsRoute({ ...options, timeoutMs })).toEqual({ redirects: [], rewrites: [] })
    expect(transport).not.toHaveBeenCalled()
  })

  it('preserves the configured route and secret', async () => {
    const transport = vi.fn<typeof fetch>().mockResolvedValue(Response.json(data))
    vi.stubGlobal('fetch', transport)
    expect(await getRedirectsRoute({ ...options, apiRoute: '/api/redirect?bypass=test' })).toEqual(data)
    expect(String(transport.mock.calls[0][0])).toBe('http://localhost/api/redirect?bypass=test&secret=test-secret')
  })
})
