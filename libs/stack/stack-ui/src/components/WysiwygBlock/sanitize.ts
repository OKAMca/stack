import type TWysiwygBlockProps from './interface'
import sanitizeHtml from 'sanitize-html'
import { booleanAttributes } from './attributes'

const defaultAllowedTags = ['iframe', 'img']
const defaultAllowedAttributes = {
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
// reach the page from CMS content. `removeExecutableAttributes` below is what guarantees it; this
// list leaves them out so that the allowlist doesn't name them either.
const eventHandlerAttribute = /^on/i
const isExecutableAttribute = (name: string) => eventHandlerAttribute.test(name) || name === 'srcdoc'
const globalAllowedAttributes = [
  ...sanitizeHtml.defaults.nonBooleanAttributes.filter(name => !isExecutableAttribute(name)),
  'aria-*',
  ...booleanAttributes,
]

// Runs on every tag before the allowlist, so no `allowedAttributes` a caller passes, glob or not,
// can let an executable attribute back in.
const removeExecutableAttributes: sanitizeHtml.Transformer = (tagName, attribs) => ({
  tagName,
  attribs: Object.fromEntries(Object.entries(attribs).filter(([name]) => !isExecutableAttribute(name))),
})

export type TWysiwygSanitizeOptions<Tags extends string = string> = Pick<
  TWysiwygBlockProps<Tags>,
  'useSanitizerDefaultAllowedTags' | 'useSanitizerDefaultAllowedAttributes' | 'allowedTags' | 'allowedAttributes'
>

export function sanitizeWysiwygContent<Tags extends string = string>(
  content: string,
  {
    useSanitizerDefaultAllowedTags = true,
    useSanitizerDefaultAllowedAttributes = true,
    allowedTags = defaultAllowedTags as Tags[],
    allowedAttributes = defaultAllowedAttributes,
  }: TWysiwygSanitizeOptions<Tags> = {},
): string {
  return sanitizeHtml(content, {
    allowedTags: useSanitizerDefaultAllowedTags ? sanitizeHtml.defaults.allowedTags.concat(allowedTags) : allowedTags,
    nonBooleanAttributes: [],
    transformTags: { '*': removeExecutableAttributes },
    allowedAttributes: useSanitizerDefaultAllowedAttributes
      ? {
          ...sanitizeHtml.defaults.allowedAttributes,
          '*': globalAllowedAttributes,
          ...allowedAttributes,
        }
      : (allowedAttributes as Record<string, string[]>),
  })
}
