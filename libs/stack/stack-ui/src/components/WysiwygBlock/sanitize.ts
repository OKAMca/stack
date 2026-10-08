import type TWysiwygBlockProps from './interface'
import sanitizeHtml from 'sanitize-html'
import { ariaAttributes, booleanAttributes } from './attributes'

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
    allowedAttributes: useSanitizerDefaultAllowedAttributes
      ? {
          ...sanitizeHtml.defaults.allowedAttributes,
          '*': [...sanitizeHtml.defaults.nonBooleanAttributes, ...ariaAttributes, ...booleanAttributes],
          ...allowedAttributes,
        }
      : (allowedAttributes as Record<string, string[]>),
  })
}
