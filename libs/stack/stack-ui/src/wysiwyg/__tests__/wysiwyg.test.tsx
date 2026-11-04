import type { WysiwygSanitizeOptions } from '../server'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import { WysiwygBlock } from '../index'
import { sanitizeWysiwygContent } from '../server'

vi.mock('server-only', () => ({}))

describe('server-sanitized WysiwygBlock', () => {
  it('renders the sanitized content with the requested element', () => {
    const content = sanitizeWysiwygContent('<p>Hello</p>')
    expect(renderToStaticMarkup(<WysiwygBlock as="div" content={content} />)).toBe('<div><p>Hello</p></div>')
  })

  it('preserves approved typography and frame hosts', () => {
    const content = '<p style="color:red" aria-description="Intro">Hello</p><iframe src="//example.com/video"></iframe>'
    const html = sanitizeWysiwygContent(content, {
      allowedStyles: { '*': { color: [/^red$/] } },
      allowedIframeHostnames: ['example.com'],
    })
    expect(html).toBe('<p style="color:red" aria-description="Intro">Hello</p><iframe src="https://example.com/video"></iframe>')
    expect(sanitizeWysiwygContent(html)).toBe('<p aria-description="Intro">Hello</p>')
  })

  it('applies attribute restrictions even with custom options', () => {
    const html = sanitizeWysiwygContent('<p onclick="x" aria-label="Intro">Hello</p>', { allowedAttributes: { '*': ['*', 'onclick', 'aria-*'] } })
    expect(html).toBe('<p aria-label="Intro">Hello</p>')
  })

  it('honors the caller iframe attribute policy', () => {
    const content = '<iframe src="https://example.com/video" title="Video" width="640" data-caption="Example"></iframe>'
    expect(sanitizeWysiwygContent(content, {
      allowedIframeHostnames: ['example.com'],
      allowedAttributes: { iframe: ['src', 'data-caption'] },
    })).toBe('<iframe src="https://example.com/video" data-caption="Example"></iframe>')
  })

  it('excludes links when the caller requests plain content', () => {
    expect(sanitizeWysiwygContent('<p><a href="https://example.com">Hello</a></p>', { excludedTags: ['a'] })).toBe('<p>Hello</p>')
  })

  it.each<NonNullable<WysiwygSanitizeOptions['allowedStyles']>>([{}, { p: { color: [/^red$/] } }])('removes styles without a matching policy', (allowedStyles) => {
    expect(sanitizeWysiwygContent('<div style="color:red">Hello</div>', { allowedStyles })).toBe('<div>Hello</div>')
  })

  it.each(['/video', 'http://example.com/video', 'https://other.example/video'])('omits frames outside the configured origins: %s', (src) => {
    expect(sanitizeWysiwygContent(`<iframe src="${src}"></iframe>`, { allowedIframeHostnames: ['example.com'] })).toBe('')
  })

  it('preserves safe links and images while applying URL restrictions', () => {
    expect(sanitizeWysiwygContent('<a href="javascript:void(0)">Link</a><img src="/image.png" alt="Example">')).toBe('<a>Link</a><img src="/image.png" alt="Example" />')
  })

  it('is idempotent and preserves serialized content', () => {
    const html = sanitizeWysiwygContent('<p aria-label="Intro">Hello &amp; goodbye</p>')
    expect(sanitizeWysiwygContent(html)).toBe(html)
    expect(JSON.parse(JSON.stringify({ html }))).toEqual({ html })
  })
})
