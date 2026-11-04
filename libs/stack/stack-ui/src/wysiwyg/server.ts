import type { SanitizedHtml } from './types'
import sanitizeHtml from 'sanitize-html'
import { booleanAttributes, defaultAllowedAttributes, defaultAllowedTags, isExecutableAttribute, removeExecutableAttributes } from '../components/WysiwygBlock/attributes'
import 'server-only'

const unsafeAttribute = /^(?:action|formaction|xlink:href)$/i
const ariaAttributePattern = 'aria-*'
const isAriaAttribute = (name: string): boolean => name.toLowerCase().startsWith('aria-')
function isNonExecutableAttribute(name: string): boolean {
  return !isExecutableAttribute(name) && (!name.includes('*') || name.toLowerCase() === ariaAttributePattern)
}
function isSafeRichTextAttribute(name: string): boolean {
  return isNonExecutableAttribute(name) && !unsafeAttribute.test(name)
}
const unsafeTags = new Set(['script', 'style', 'object', 'embed', 'form', 'base', 'meta', 'link', 'template'])
const allowedSchemes = ['http', 'https', 'mailto', 'tel']
const allowedSchemesAppliedToAttributes = ['href', 'src', 'cite', 'background', 'poster']

export interface WysiwygSanitizeOptions {
  useSanitizerDefaultAllowedTags?: boolean
  useSanitizerDefaultAllowedAttributes?: boolean
  allowedTags?: string[]
  allowedAttributes?: Record<string, string[] | undefined>
  excludedTags?: string[]
  allowedIframeHostnames?: string[]
  allowedStyles?: Record<string, Record<string, RegExp[]>>
}

export function sanitizeWysiwygContent(
  content: string,
  {
    useSanitizerDefaultAllowedTags = true,
    useSanitizerDefaultAllowedAttributes = true,
    allowedTags = defaultAllowedTags,
    allowedAttributes: requestedAttributes = defaultAllowedAttributes,
    excludedTags = [],
    allowedIframeHostnames = [],
    allowedStyles = { '*': {} },
  }: WysiwygSanitizeOptions = {},
): SanitizedHtml {
  const allowedAttributes = Object.fromEntries(
    Object.entries(requestedAttributes).map(([tag, names]) => [tag, (names ?? []).filter(isSafeRichTextAttribute)]),
  )
  const attributes = useSanitizerDefaultAllowedAttributes
    ? {
        ...sanitizeHtml.defaults.allowedAttributes,
        '*': [...sanitizeHtml.defaults.nonBooleanAttributes, ...booleanAttributes].filter(isSafeRichTextAttribute),
        ...allowedAttributes,
      }
    : allowedAttributes
  return sanitizeHtml(content, {
    nonBooleanAttributes: [],
    allowedSchemes,
    allowedSchemesByTag: { iframe: ['https'] },
    allowedIframeHostnames,
    allowIframeRelativeUrls: false,
    allowedSchemesAppliedToAttributes,
    allowProtocolRelative: false,
    parseStyleAttributes: true,
    allowedStyles: { '*': {}, ...allowedStyles },
    allowedTags: (useSanitizerDefaultAllowedTags
      ? sanitizeHtml.defaults.allowedTags.concat(allowedTags)
      : allowedTags
    ).filter(tag => !unsafeTags.has(tag.toLowerCase()) && !excludedTags.includes(tag.toLowerCase())),
    allowedAttributes: { ...attributes, '*': [...(attributes['*'] ?? []), ariaAttributePattern] },
    exclusiveFilter: frame => frame.tag === 'iframe' && (frame.attribs.src ?? '') === '',
    transformTags: {
      '*': removeExecutableAttributes,
      'iframe': (tagName, iframeProps) => {
        const attribs = Object.fromEntries(
          Object.entries(iframeProps).filter(([key]) => (allowedAttributes.iframe ?? defaultAllowedAttributes.iframe).includes(key) || isAriaAttribute(key)),
        )
        if (attribs.src?.startsWith('//'))
          attribs.src = `https:${attribs.src}`
        return { tagName, attribs }
      },
    },
  }) as SanitizedHtml
}
