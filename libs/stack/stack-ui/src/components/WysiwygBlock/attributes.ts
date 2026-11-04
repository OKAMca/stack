import type sanitizeHtml from 'sanitize-html'

export const booleanAttributes = ['disabled', 'checked', 'selected', 'required']

export const defaultAllowedTags = ['iframe', 'img']
export const defaultAllowedAttributes = {
  iframe: [
    'src',
    'allow',
    'allowfullscreen',
    'frameborder',
    'scrolling',
    'target',
    'title',
    'height',
    'width',
    'referrerpolicy',
  ],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
}

// `nonBooleanAttributes` lists every non-boolean HTML attribute, not the safe ones: it includes the
// `on*` event handlers, and `srcdoc`, whose HTML runs in the embedding page's origin. Neither may
// reach the page from CMS content. `removeExecutableAttributes` below guarantees it; the predicate
// also keeps these attributes out of the allowlist.
const executableAttribute = /^(?:on.*|srcdoc)$/i
export const isExecutableAttribute = (name: string): boolean => executableAttribute.test(name)

// Runs on every tag before the allowlist, so no `allowedAttributes` a caller passes, glob or not,
// can let an executable attribute back in.
export const removeExecutableAttributes: sanitizeHtml.Transformer = (tagName, attribs) => ({
  tagName,
  attribs: Object.fromEntries(Object.entries(attribs).filter(([name]) => !isExecutableAttribute(name))),
})
