import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { renderToStaticMarkup } from 'react-dom/server'
import WysiwygBlock from '..'
import { sanitizeWysiwygContent } from '../sanitize'

describe('sanitizeWysiwygContent', () => {
  it('strips disallowed tags such as script', () => {
    const html = sanitizeWysiwygContent('<p>Hi</p><script>alert(1)</script>')
    expect(html).toBe('<p>Hi</p>')
  })

  it('allows iframe and img with their default attributes', () => {
    const html = sanitizeWysiwygContent(
      '<iframe src="https://example.com" title="t" allowfullscreen data-x="1"></iframe><img src="/a.png" alt="a" loading="lazy" />',
    )
    expect(html).toBe(
      '<iframe src="https://example.com" title="t" allowfullscreen></iframe><img src="/a.png" alt="a" loading="lazy" />',
    )
  })

  it('allows aria and boolean attributes on every tag', () => {
    const html = sanitizeWysiwygContent('<a href="#" aria-label="label" disabled>Link</a>')
    expect(html).toBe('<a href="#" aria-label="label" disabled>Link</a>')
  })

  it('extends the defaults with custom tags and attributes', () => {
    const html = sanitizeWysiwygContent('<video controls width="320"><source src="/v.mp4" type="video/mp4"></video>', {
      allowedTags: ['video', 'source'],
      allowedAttributes: { video: ['controls', 'width'], source: ['src', 'type'] },
    })
    expect(html).toBe('<video controls width="320"><source src="/v.mp4" type="video/mp4"></source></video>')
  })

  it('replaces the defaults when the default flags are off', () => {
    const html = sanitizeWysiwygContent('<p class="a">Kept</p><div>Dropped</div><iframe src="https://example.com"></iframe>', {
      useSanitizerDefaultAllowedTags: false,
      useSanitizerDefaultAllowedAttributes: false,
      allowedTags: ['p'],
      allowedAttributes: { p: ['class'] },
    })
    expect(html).toBe('<p class="a">Kept</p>Dropped')
  })
})

describe('wysiwygBlock', () => {
  it('renders the sanitized content inside Typography', () => {
    const markup = renderToStaticMarkup(<WysiwygBlock content="<p>Hello</p><script>alert(1)</script>" />)
    expect(markup).toContain('<p>Hello</p>')
    expect(markup).not.toContain('<script')
  })

  // The sanitizer (sanitize-html + postcss) must stay on the server. A 'use client'
  // directive here would ship it to the browser for every page with rich text.
  it('is not a client module', () => {
    const source = readFileSync(join(__dirname, '..', 'index.tsx'), 'utf8')
    const sanitizer = readFileSync(join(__dirname, '..', 'sanitize.ts'), 'utf8')
    expect(source).not.toMatch(/^\s*['"]use client['"]/m)
    expect(sanitizer).not.toMatch(/^\s*['"]use client['"]/m)
  })
})
