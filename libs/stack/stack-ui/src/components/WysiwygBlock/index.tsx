// No 'use client': this module renders as a Server Component so sanitize-html
// (and its postcss dependency) stays on the server. Only <Typography>, a client
// component, receives the already-sanitized HTML string.
import type { TToken } from '../../providers/Theme/interface'
import type TWysiwygBlockProps from './interface'
import { Typography } from '../Typography'
import { sanitizeWysiwygContent } from './sanitize'

function WysiwygBlock<Tags extends string = string, T extends TToken = TToken>({
  content,
  themeName = 'wysiwyg',
  useSanitizerDefaultAllowedTags,
  useSanitizerDefaultAllowedAttributes,
  allowedTags,
  allowedAttributes,
  ...rest
}: TWysiwygBlockProps<Tags, T>) {
  const sanitizedContent = sanitizeWysiwygContent(content, {
    useSanitizerDefaultAllowedTags,
    useSanitizerDefaultAllowedAttributes,
    allowedTags,
    allowedAttributes,
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
