import type { TDirectusImgProps } from './interface'
import { Img } from '@okam/next-component'
import { isNullish, omit } from 'radashi'
import { createPngDataUri } from 'unlazy/thumbhash'
import { getDirectusFile } from '../../utils/getDirectusFile'

/**
 * On error, will try to load the image directly from the `src` prop by setting `unoptimized` to `true`, bypassing any image loaders.
 */
function DirectusImg({ baseUrl, fit = 'cover', thumbhash, tokens, ...rest }: TDirectusImgProps) {
  const fileProps = getDirectusFile(rest, baseUrl, new URLSearchParams([['fit', fit]]))
  if (isNullish(fileProps))
    return null

  if (fileProps == null)
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
