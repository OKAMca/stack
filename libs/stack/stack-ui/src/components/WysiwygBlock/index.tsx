import sanitizeHtml from 'sanitize-html'
import type { TToken } from '../../providers/Theme/interface'
import Typography from '../Typography'
import { ariaAttributes, booleanAttributes } from './attributes'
import type TWysiwygBlockProps from './interface'

const WysiwygBlock = <T extends TToken>({ content, themeName = 'wysiwyg', ...rest }: TWysiwygBlockProps<T>) => {
  const sanitizedContent = sanitizeHtml(content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['iframe']),
    nonBooleanAttributes: [],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': [...sanitizeHtml.defaults.nonBooleanAttributes, ...ariaAttributes, ...booleanAttributes],
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
    },
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
