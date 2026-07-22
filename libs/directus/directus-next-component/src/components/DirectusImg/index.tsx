import type { TDirectusImgProps } from './interface'
import { Img } from '@okam/next-component'
import { isNullish, omit } from 'radashi'
import { createPngDataUri } from 'unlazy/thumbhash'
import { getDirectusImg } from '../../utils/getDirectusImg'

/**
 * On error, will try to load the image directly from the `src` prop by setting `unoptimized` to `true`, bypassing any image loaders.
 */
function DirectusImg(props: TDirectusImgProps) {
  const { fit = 'cover', thumbhash, tokens } = props

  const fileProps = getDirectusImg(props)
  if (isNullish(fileProps))
    return null

  return (
    <Img
      {...(thumbhash != null && thumbhash !== '' ? { blurDataURL: createPngDataUri(thumbhash), placeholder: 'blur' } : {})}
      {...omit(fileProps, ['filenameDownload', 'duration', 'caption', 'embed', 'filenameDownload', 'filename_disk', 'filename_download', 'focal_point_divider', 'focal_point_x', 'focal_point_y', 'location', 'storage', 'tags', 'thumbhash', 'type'])}
      tokens={{ ...tokens, fit }}
    />
  )
}

export default DirectusImg
