import DOMPurify from 'isomorphic-dompurify'
import Typography from '../Typography'
import type TWysiwygBlockProps from './interface'

/*
 * hotfix from main (2025-11-13)
 * main now use sanitizeHtml ('sanitize-html')
 * const defaultAllowedTags = ['iframe', 'img']
 */
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
/*  img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'], */
}

const WysiwygBlock = ({ content, themeName = 'wysiwyg', ...rest }: TWysiwygBlockProps) => {
  return (
    <Typography
      {...rest}
      themeName={themeName}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content, {
          ADD_TAGS: ['iframe'],
          /* issue #577 - youtube need referrerpolicy="strict-origin-when-cross-origin"
          overwrite custom headers Referrer-Policy: same-origin in next.config.js */
          ADD_ATTR: defaultAllowedAttributes.iframe,
        }),
      }}
    />
  )
}

export default WysiwygBlock
