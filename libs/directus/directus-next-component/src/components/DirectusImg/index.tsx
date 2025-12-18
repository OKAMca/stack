import { Img } from '@okam/next-component'
import type { CSSProperties } from 'react'
import { createPngDataUri } from 'unlazy/thumbhash'
import { directusFile } from '../../utils/directusFile'
import type { TDirectusImgProps } from './interface'

const DirectusImg = (props: TDirectusImgProps) => {
  const { fit, baseUrl, focal_point_x: focalPointX, focal_point_y: focalPointY, thumbhash, width, height } = props

  const fileProps = directusFile(props, baseUrl, { fit })
  if (!fileProps) return null

  const hasFocalPoint = !!focalPointX && !!focalPointY && !!width && !!height

  const style: CSSProperties | undefined = hasFocalPoint
    ? {
        objectFit: 'cover',
        objectPosition: `${(focalPointX / width) * 100}% ${(focalPointY / height) * 100}%`,
      }
    : undefined

  if (!fileProps) return null

  return (
    <Img
      style={style}
      {...(thumbhash ? { blurDataURL: createPngDataUri(thumbhash), placeholder: 'blur' } : {})}
      {...fileProps}
    />
  )
}

export default DirectusImg
