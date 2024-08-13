import sanitizeHtml from 'sanitize-html'
import Typography from '../Typography'
import type TWysiwygBlockProps from './interface'

const WysiwygBlock = ({ content, themeName = 'wysiwyg', ...rest }: TWysiwygBlockProps) => {
  const sanitizedContent = sanitizeHtml(content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
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
