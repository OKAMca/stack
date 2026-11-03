import type { TGetDirectusLink } from '../../components/DirectusLink/interface'
import { describe, expect, it } from 'vitest'
import { getDirectusLink } from './index'

function getExternalHref(externalLink: string, params?: TGetDirectusLink['params']) {
  return getDirectusLink({ type: 'external-link', external_link: externalLink, params }).href
}

function getCollectionHref(path: string, params?: TGetDirectusLink['params']) {
  return getDirectusLink({ type: 'collection', collection: { id: 'page', translations: [{ path }] }, params }).href
}

describe('getDirectusLink external-link', () => {
  it.each(['/foo/bar/', '/', '/foo/?a=1#top'])('keeps the site-relative path %s relative', (path) => {
    expect(getExternalHref(path)).toBe(path)
  })

  it('appends params to a site-relative path like a collection link does', () => {
    const params = [{ name: 'b', value: '2' }]
    const href = getExternalHref('/foo/?a=1#top', params)

    expect(href).toBe('/foo/?a=1&b=2#top')
    expect(href).toBe(getCollectionHref('/foo/?a=1#top', params))
  })

  it.each([
    ['https://example.com/x', 'https://example.com/x'],
    ['mailto:hello@example.com', 'mailto:hello@example.com'],
    ['tel:+15145550000', 'tel:+15145550000'],
    ['//example.com/x', 'http://example.com/x'],
  ])('keeps %s absolute', (externalLink, expected) => {
    expect(getExternalHref(externalLink)).toBe(expected)
  })
})
