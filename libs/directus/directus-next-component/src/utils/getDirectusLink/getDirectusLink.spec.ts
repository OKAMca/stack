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
    ['/', '/'],
    ['/a/b/', '/a/b/'],
    ['/a?b=1#c', '/a?b=1#c'],
    [' /a', '/a'],
    [' /a ', '/a'],
  ])('keeps the site path %s relative', (href, expected) => {
    expect(externalHref(href)).toBe(expected)
  })

  it.each([
    ['//example.com/x', 'http://example.com/x'],
    ['/\\example.com/x', 'http://example.com/x'],
    ['#anchor', 'http://localhost/#anchor'],
    ['?q=1', 'http://localhost/?q=1'],
  ])('resolves %s to an absolute URL', (href, expected) => {
    expect(externalHref(href)).toBe(expected)
  })

  it('merges site-path params with the existing search and preserves the hash', () => {
    const link = getDirectusLink({
      type: 'external-link',
      external_link: ' /a?b=1#c ',
      params: [{ name: 'b', value: '2' }, { name: 'd', value: '3' }],
    })
    expect(link.href).toBe('/a?b=1&b=2&d=3#c')
    expect(link.nextLinkProps?.href).toBe(link.href)
  })

  it('keeps collection paths relative with existing search, hash and merged params', () => {
    const link = getDirectusLink({
      type: 'collection',
      collection: { id: 'page', translations: [{ path: '/fr/page?a=1#section' }] },
      params: [{ name: 'a', value: '2' }, { name: 'b', value: '3' }],
    })
    expect(link.href).toBe('/fr/page?a=1&a=2&b=3#section')
    expect(link.nextLinkProps?.href).toBe(link.href)
  })

  it.each([
    ['guide.pdf', 'guide.pdf'],
    [null, true],
  ])('keeps file asset hrefs absolute with merged params and download %s', (filename, download) => {
    const file = {
      id: 'file-id',
      filename_download: filename,
      baseUrl: new URL('https://example.com'),
      searchParams: new URLSearchParams('a=1'),
    }
    const link = getDirectusLink({
      type: 'file',
      file,
      params: [{ name: 'a', value: '2' }, { name: 'b', value: '3' }],
    })
    expect(link.href).toBe(`https://example.com/assets/file-id/${filename ?? ''}?a=1&a=2&b=3`)
    expect(link.nextLinkProps?.href).toBe(link.href)
    expect(link.download).toBe(download)
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
    '\\\\example.com',
  ])('rejects %s', (href) => {
    expect(() => externalHref(href)).toThrow('Invalid href')
  })

  it('returns no link for an empty href', () => {
    expect(externalHref('')).toBeUndefined()
  })
})
