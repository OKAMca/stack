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

  describe('explicit locale prefixes', () => {
    it.each([
      ['/fr', '/fr/'],
      ['/fr/', '/fr/'],
      ['/fr/services', '/fr/services/'],
      ['/fr/services/', '/fr/services/'],
      ['/en/services', '/en/services/'],
      ['/en?x=1#details', '/en/?x=1#details'],
      ['/fr#details', '/fr/#details'],
      ['/fr/services?q=1#details', '/fr/services/?q=1#details'],
      ['/french', '/fr/french/'],
      ['/frx', '/fr/frx/'],
      ['/fr-ca', '/fr/fr-ca/'],
      ['/FR/services', '/fr/FR/services/'],
      ['/', '/fr/'],
    ])('matches exact configured segments in %s', (href, expected) => {
      expect(localizeHref(href, 'fr', true, ['en', 'fr'])).toBe(expected)
    })

    it.each(['/fr', '/fr/', '/en/services', '/fr/services/?q=1#details'])('keeps %s with trailingSlash=false', (href) => {
      expect(localizeHref(href, 'fr', false, ['en', 'fr'])).toBe(href)
    })

    it('recognizes a configured regional locale with its configured case', () => {
      expect(localizeHref('/fr-CA/services', 'en', true, ['en', 'fr-CA'])).toBe('/fr-CA/services/')
      expect(localizeHref('/fr-ca/services', 'en', true, ['en', 'fr-CA'])).toBe('/en/fr-ca/services/')
    })

    it('recognizes the selected locale when no list is supplied', () => {
      expect(localizeHref('/fr/services', 'fr')).toBe('/fr/services/')
    })

    it('still recognizes the selected locale when it is missing from the list', () => {
      expect(localizeHref('/fr/services', 'fr', true, ['en'])).toBe('/fr/services/')
      expect(localizeHref('/fr/services', 'fr', true, [])).toBe('/fr/services/')
    })

    it('keeps an anchor href', () => {
      expect(localizeHref('#x', 'fr')).toBe('#x')
      expect(localizeHref('#x', 'en', false, ['en', 'fr'])).toBe('#x')
    })

    it.each([
      ['?q=1', '/fr/?q=1'],
      ['?q=1#x', '/fr/?q=1#x'],
    ])('localizes query-only href %s as before', (href, expected) => {
      expect(localizeHref(href, 'fr')).toBe(expected)
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
