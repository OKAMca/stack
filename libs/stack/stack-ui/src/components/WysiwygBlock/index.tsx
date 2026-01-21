'use client'

import type { TToken } from '../../providers/Theme/interface'
import type TWysiwygBlockProps from './interface'
import sanitizeHtml from 'sanitize-html'
import { Typography } from '../Typography'
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

function WysiwygBlock<Tags extends string = string, T extends TToken = TToken>({
  content,
  themeName = 'wysiwyg',
  useSanitizerDefaultAllowedTags = true,
  useSanitizerDefaultAllowedAttributes = true,
  allowedTags = defaultAllowedTags as Tags[],
  allowedAttributes = defaultAllowedAttributes as Partial<Record<Tags, string[]>>,
  ...rest
}: TWysiwygBlockProps<Tags, T>) {
  const sanitizedContent = sanitizeHtml(content, {
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

  return (
    <Typography
      {...rest}
      themeName={themeName}
      dangerouslySetInnerHTML={{
        __html: sanitizedContent,
      }}
    />
  )
}

export default WysiwygBlock
