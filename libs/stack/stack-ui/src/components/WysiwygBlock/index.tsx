import DOMPurify from 'isomorphic-dompurify'
import Typography from '../Typography'
import type TWysiwygBlockProps from './interface'

const WysiwygBlock = ({ content, themeName = 'wysiwyg', ...rest }: TWysiwygBlockProps) => {
  return (
    <Typography
      {...rest}
      themeName={themeName}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content, {
          ADD_TAGS: ['iframe'],
          ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'target'],
        }),
      }}
    />
  )
}

export default WysiwygBlock
