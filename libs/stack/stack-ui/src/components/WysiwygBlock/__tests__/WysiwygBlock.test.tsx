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
    const html = sanitizeWysiwygContent('<a href="#" aria-label="label" aria-description="d" disabled>Link</a>')
    expect(html).toBe('<a href="#" aria-label="label" aria-description="d" disabled>Link</a>')
  })

  it('strips event handler attributes from img, a and p', () => {
    const html = sanitizeWysiwygContent(
      '<img src="/a.png" onerror="alert(1)" /><a href="#" onclick="alert(1)" onMouseOver="alert(1)">Link</a><p onfocus="alert(1)">Text</p>',
    )
    expect(html).toBe('<img src="/a.png" /><a href="#">Link</a><p>Text</p>')
  })

  it('strips srcdoc from iframes', () => {
    const html = sanitizeWysiwygContent(
      '<iframe src="https://example.com" srcdoc="&lt;script&gt;alert(1)&lt;/script&gt;"></iframe>',
    )
    expect(html).toBe('<iframe src="https://example.com"></iframe>')
  })

  it.each([
    ['tag lists', { allowedTags: ['img', 'iframe'], allowedAttributes: { img: ['src', 'onerror'], iframe: ['src', 'srcdoc'] } }],
    ['a * glob', { allowedTags: ['img', 'iframe'], allowedAttributes: { '*': ['*'] } }],
    [
      'the defaults off',
      {
        useSanitizerDefaultAllowedTags: false,
        useSanitizerDefaultAllowedAttributes: false,
        allowedTags: ['img', 'iframe'],
        allowedAttributes: { img: ['src', 'onerror', 'onClick'], iframe: ['src', 'srcdoc'] },
      },
    ],
  ])('strips executable attributes when the caller allows them with %s', (_description, options) => {
    const html = sanitizeWysiwygContent(
      '<img src="/a.png" onerror="alert(1)" onClick="alert(1)" /><iframe src="https://example.com" srcdoc="&lt;script&gt;alert(1)&lt;/script&gt;"></iframe>',
      options,
    )
    expect(html).not.toMatch(/\son[a-z]+=|srcdoc/i)
    expect(html).toContain('src="/a.png"')
  })

  it('keeps the other global attributes', () => {
    const html = sanitizeWysiwygContent('<p class="lead" id="intro" lang="fr" title="t" style="color:red">Texte</p>')
    expect(html).toBe('<p class="lead" id="intro" lang="fr" title="t" style="color:red">Texte</p>')
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
