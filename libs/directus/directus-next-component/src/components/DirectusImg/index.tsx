import type { TDirectusImgProps } from './interface'
import { Img } from '@okam/next-component'
import { createPngDataUri } from 'unlazy/thumbhash'
import { getDirectusImg } from '../../utils/getDirectusImg'

/**
 * On error, will try to load the image directly from the `src` prop by setting `unoptimized` to `true`, bypassing any image loaders.
 */
function DirectusImg(props: TDirectusImgProps) {
  const { fit = 'cover', thumbhash, tokens } = props

  const fileProps = getDirectusImg(props)
  if (fileProps == null)
    return null

  return (
    <Img
      {...(thumbhash != null && thumbhash !== '' ? { blurDataURL: createPngDataUri(thumbhash), placeholder: 'blur' } : {})}
      {...fileProps}
      tokens={{ ...tokens, fit }}
    />
  )
}

export default DirectusImg
