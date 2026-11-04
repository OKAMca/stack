// Compatibility entry: sanitizes raw strings in the environment of its caller.
import type { TToken } from '../../providers/Theme/interface'
import type TWysiwygBlockProps from './interface'
import { WysiwygBlock as SanitizedWysiwygBlock } from '../../wysiwyg'
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

  return <SanitizedWysiwygBlock {...rest} themeName={themeName} content={sanitizedContent} />
}

export default WysiwygBlock
