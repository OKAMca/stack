import { getDirectusLink } from '.'

function externalHref(href: string) {
  return getDirectusLink({ type: 'external-link', external_link: href }).href
}

function anchorHref(href: string) {
  return getDirectusLink({ type: 'anchor', anchor: href }).href
}

describe('getDirectusLink href', () => {
  it.each([
    ['https://example.com/a?b=1#c', 'https://example.com/a?b=1#c'],
    ['http://example.com', 'http://example.com/'],
    ['HTTPS://EXAMPLE.com/A', 'https://example.com/A'],
    ['mailto:info@example.com', 'mailto:info@example.com'],
    ['tel:+15145550000', 'tel:+15145550000'],
  ])('keeps the absolute URL %s', (href, expected) => {
    expect(externalHref(href)).toBe(expected)
  })

  it.each([
    ['/fr/page', '/fr/page'],
    ['/fr/page?a=1#b', '/fr/page?a=1#b'],
    ['#top', '#top'],
    ['?a=1', '/?a=1'],
  ])('keeps the relative href %s', (href, expected) => {
    expect(anchorHref(href)).toBe(expected)
  })

  it.each([
    'ftp://example.com/file',
    'javascript:alert(1)',
    'data:text/html,<script>alert(1)</script>',
    'page',
    'example.com',
    'https://',
  ])('rejects %s', (href) => {
    expect(() => externalHref(href)).toThrow('Invalid href')
  })

  it.each([
    ['\u00A0https://example.com', 'https://example.com/'],
    ['https://example.com\u00A0', 'https://example.com/'],
    ['\uFEFFhttps://example.com', 'https://example.com/'],
    ['https://example.com/\u2028', 'https://example.com/'],
    ['\u00A0/fr/page\u00A0', '/fr/page'],
  ])('trims Unicode whitespace around %j', (href, expected) => {
    expect(externalHref(href)).toBe(expected)
  })

  it('returns no link for an empty href', () => {
    expect(externalHref('')).toBeUndefined()
  })
})
