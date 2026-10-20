import type { TFetchRedirectsResponse, TRedirectData } from '@okam/directus-node/edge'
import { NextRequest } from 'next/server'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getRedirectsRoute } from './getRedirectsRoute'
import { handleRedirect } from './handleRedirect'

vi.mock('./getRedirectsRoute', () => ({ getRedirectsRoute: vi.fn() }))

const ORIGIN = 'https://example.com'

function mockRedirects({ redirects = [], rewrites = [] }: Partial<TFetchRedirectsResponse>) {
  vi.mocked(getRedirectsRoute).mockResolvedValue({ redirects, rewrites })
}

function redirect(source: string, destination: string, permanent = false): TRedirectData {
  return { source, destination, permanent }
}

async function request(pathname: string) {
  return handleRedirect(new NextRequest(`${ORIGIN}${pathname}`))
}

function location(response: Response | null) {
  return response?.headers.get('location')
}

function rewriteLocation(response: Response | null) {
  return response?.headers.get('x-middleware-rewrite')
}

describe('handleRedirect', () => {
  beforeEach(() => {
    vi.mocked(getRedirectsRoute).mockReset()
  })

  it('redirects an exact source', async () => {
    mockRedirects({ redirects: [redirect('/old', '/new', true)] })
    const response = await request('/old')
    expect(response?.status).toBe(308)
    expect(location(response)).toBe(`${ORIGIN}/new`)
  })

  it('returns null when nothing matches', async () => {
    mockRedirects({ redirects: [redirect('/old', '/new'), redirect('/section/:slug*', '/other')] })
    expect(await request('/elsewhere')).toBeNull()
  })

  it.each([
    ['/events-calendar/:slug*', '/student-events', '/events-calendar/2024/spring', '/student-events'],
    ['/events-calendar/:slug*', '/student-events', '/events-calendar', '/student-events'],
    [
      '/conted/programs-and-courses/music-school/:slug*',
      '/conted/music-school/:slug*',
      '/conted/programs-and-courses/music-school/piano/intro',
      '/conted/music-school/piano/intro',
    ],
    [
      '/conted/programs-and-courses/music-school/:slug*',
      '/conted/music-school/:slug*',
      '/conted/programs-and-courses/music-school',
      '/conted/music-school',
    ],
    ['/news/:year/:slug', '/articles/:slug', '/news/2024/hello', '/articles/hello'],
  ])('redirects %s to %s for %s', async (source, destination, pathname, expected) => {
    mockRedirects({ redirects: [redirect(source, destination)] })
    const response = await request(pathname)
    expect(response?.status).toBe(307)
    expect(location(response)).toBe(`${ORIGIN}${expected}`)
  })

  it('keeps the destination query string', async () => {
    mockRedirects({ redirects: [redirect('/news/:slug', '/articles/:slug?from=news')] })
    expect(location(await request('/news/hello'))).toBe(`${ORIGIN}/articles/hello?from=news`)
  })

  it('fills params in an external destination', async () => {
    mockRedirects({ redirects: [redirect('/blog/:slug*', 'https://blog.example.org/posts/:slug*?ref=site')] })
    expect(location(await request('/blog/2024/hello'))).toBe('https://blog.example.org/posts/2024/hello?ref=site')
  })

  it('uses an external destination without params as is', async () => {
    mockRedirects({ redirects: [redirect('/blog/:slug*', 'https://blog.example.org')] })
    expect(location(await request('/blog/hello'))).toBe('https://blog.example.org/')
  })

  it('prefers an exact source over a pattern listed before it', async () => {
    mockRedirects({
      redirects: [redirect('/news/:slug', '/articles/:slug'), redirect('/news/featured', '/featured')],
    })
    expect(location(await request('/news/featured'))).toBe(`${ORIGIN}/featured`)
  })

  it('uses the first matching pattern in sort order', async () => {
    mockRedirects({
      redirects: [redirect('/news/:slug*', '/first'), redirect('/news/:year/:slug', '/second')],
    })
    expect(location(await request('/news/2024/hello'))).toBe(`${ORIGIN}/first`)
  })

  it('skips an invalid source pattern and keeps routing other paths', async () => {
    mockRedirects({
      redirects: [redirect('/broken/(', '/nowhere'), redirect('/old/*', '/nowhere'), redirect('/news/:slug', '/articles/:slug')],
    })
    expect(await request('/old/page')).toBeNull()
    expect(location(await request('/news/hello'))).toBe(`${ORIGIN}/articles/hello`)
  })

  it('skips a destination that uses a param missing from the source', async () => {
    mockRedirects({ redirects: [redirect('/news/:slug', '/articles/:id')] })
    expect(await request('/news/hello')).toBeNull()
  })

  it('rewrites a pattern source', async () => {
    mockRedirects({ rewrites: [redirect('/docs/:slug*', '/content/docs/:slug*')] })
    const response = await request('/docs/getting-started/install')
    expect(rewriteLocation(response)).toBe(`${ORIGIN}/content/docs/getting-started/install`)
  })

  it('prefers a redirect over a rewrite', async () => {
    mockRedirects({
      redirects: [redirect('/docs/:slug*', '/manual/:slug*')],
      rewrites: [redirect('/docs/:slug*', '/content/docs/:slug*')],
    })
    expect(location(await request('/docs/install'))).toBe(`${ORIGIN}/manual/install`)
  })
})
