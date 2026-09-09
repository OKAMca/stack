import { describe, expect, it } from 'vitest'
import { localizeHref } from '.'

describe('localizeHref', () => {
  describe('internal hrefs', () => {
    it.each([
      ['/about', '/fr/about/'],
      ['/about/', '/fr/about/'],
      ['/a?b=1#c', '/fr/a/?b=1#c'],
      ['#section', '#section'],
    ])('localizes and slashes %s', (href, expected) => {
      expect(localizeHref(href, 'fr')).toBe(expected)
    })

    it.each([
      ['/about', '/fr/about'],
      ['/about/', '/fr/about/'],
      ['/a?b=1#c', '/fr/a?b=1#c'],
      ['#section', '#section'],
    ])('leaves %s unslashed when trailingSlash is false', (href, expected) => {
      expect(localizeHref(href, 'fr', false)).toBe(expected)
    })

    it('skips the locale prefix when there is no locale', () => {
      expect(localizeHref('/about', false)).toBe('/about/')
    })
  })

  describe('external hrefs', () => {
    it.each([
      'https://example.com/page',
      'https://example.com/report.pdf',
      'https://example.com/a?b=1#c',
      'https://EXAMPLE.com/Path',
      '//cdn.example.com/a.js',
      'mailto:hello@okam.ca',
      'tel:+15145551234',
      'sms:+15145551234',
    ])('renders %s verbatim', (href) => {
      expect(localizeHref(href, 'fr')).toBe(href)
      expect(localizeHref(href, 'fr', false)).toBe(href)
    })
  })
})
