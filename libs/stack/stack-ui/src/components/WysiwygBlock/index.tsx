import sanitizeHtml from 'sanitize-html'
import Typography from '../Typography'
import { ariaAttributes, booleanAttributes, globalSvgAttributes, specificSvgAttributes } from './attributes'
import type TWysiwygBlockProps from './interface'

const WysiwygBlock = ({ content, themeName = 'wysiwyg', ...rest }: TWysiwygBlockProps) => {
  const sanitizedContent = sanitizeHtml(content, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'iframe', ...Object.keys(specificSvgAttributes)],
    nonBooleanAttributes: [],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      ...specificSvgAttributes,
      '*': [
        ...sanitizeHtml.defaults.nonBooleanAttributes,
        ...ariaAttributes,
        ...booleanAttributes,
        ...globalSvgAttributes,
      ],
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
