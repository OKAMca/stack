import type { CSSProperties } from 'react'
import type { TDirectusImgProps } from './interface'
import { Img } from '@okam/next-component'
import { isNullish, omit } from 'radashi'
import { createPngDataUri } from 'unlazy/thumbhash'
import { getDirectusFile } from '../../utils/getDirectusFile'

function DirectusImg({ baseUrl, ...rest }: TDirectusImgProps) {
  const fileProps = getDirectusFile(rest, baseUrl, { fit: rest.fit })
  if (isNullish(fileProps))
    return null

  const { focal_point_x: focalPointX, focal_point_y: focalPointY, thumbhash, width, height } = fileProps

  const hasFocalPoint = focalPointX != null && focalPointX !== 0 && focalPointY != null && focalPointY !== 0 && width != null && width !== 0 && height != null && height !== 0

  const style: CSSProperties | undefined = hasFocalPoint
    ? {
        objectFit: 'cover',
        objectPosition: `${(focalPointX / width) * 100}% ${(focalPointY / height) * 100}%`,
      }
    : undefined

  return (
    <Img
      style={style}
      {...(thumbhash != null && thumbhash !== '' ? { blurDataURL: createPngDataUri(thumbhash), placeholder: 'blur' } : {})}
      {...omit(fileProps, ['filenameDownload', 'duration', 'caption', 'embed', 'filenameDownload', 'filename_disk', 'filename_download', 'focal_point_divider', 'focal_point_x', 'focal_point_y', 'location', 'storage', 'tags', 'thumbhash', 'type'])}
    />
  )
}

export default DirectusImg
