import type { CSSProperties } from 'react'
import type { TDirectusImgProps } from './interface'
import { Img } from '@okam/next-component'
import { createPngDataUri } from 'unlazy/thumbhash'
import { getDirectusFile } from '../../utils/getDirectusFile'

function DirectusImg(props: TDirectusImgProps) {
  const { fit, baseUrl, focal_point_x: focalPointX, focal_point_y: focalPointY, thumbhash, width, height } = props

  const fileProps = getDirectusFile(props, baseUrl, { fit })
  if (fileProps == null)
    return null

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
      {...fileProps}
    />
  )
}

export default DirectusImg
