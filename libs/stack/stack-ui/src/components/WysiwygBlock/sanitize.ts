import type { SanitizedHtml } from '../../wysiwyg/types'
import type TWysiwygBlockProps from './interface'
import sanitizeHtml from 'sanitize-html'
import { booleanAttributes, defaultAllowedAttributes, defaultAllowedTags, isExecutableAttribute, removeExecutableAttributes } from './attributes'

const globalAllowedAttributes = [
  ...sanitizeHtml.defaults.nonBooleanAttributes.filter(name => !isExecutableAttribute(name)),
  'aria-*',
  ...booleanAttributes,
]

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
): SanitizedHtml {
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
  }) as SanitizedHtml
}
