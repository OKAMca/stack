import type { TDirectusImgProps } from './interface'
import { Img } from '@okam/next-component'
import { createPngDataUri } from 'unlazy/thumbhash'
import { getDirectusFile } from '../../utils/getDirectusFile'

/**
 * On error, will try to load the image directly from the `src` prop by setting `unoptimized` to `true`, bypassing any image loaders.
 */
function DirectusImg(props: TDirectusImgProps) {
  const { fit = 'cover', baseUrl, thumbhash, tokens } = props

  const searchParams = ([['fit', fit]] as const).flatMap(([key, value]) => (value != null ? [[key, value.toString()]] : []))
  const fileProps = getDirectusFile(props, baseUrl, new URLSearchParams(searchParams))
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
