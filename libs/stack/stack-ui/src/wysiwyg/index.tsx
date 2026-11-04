import type { TTypographyProps } from '../components/Typography/interface'
import type { TToken } from '../providers/Theme/interface'
import type { SanitizedHtml } from './types'
import { Typography } from '../components/Typography'

export type { SanitizedHtml } from './types'

export interface WysiwygBlockProps<T = TToken> extends Omit<TTypographyProps<T>, 'children' | 'dangerouslySetInnerHTML'> {
  content: SanitizedHtml
}

/** Render HTML sanitized before caching or serialization, on either server or client. */
export function WysiwygBlock<T extends TToken = TToken>({ content, themeName = 'wysiwyg', ...rest }: WysiwygBlockProps<T>) {
  return <Typography {...rest} themeName={themeName} dangerouslySetInnerHTML={{ __html: content }} />
}
