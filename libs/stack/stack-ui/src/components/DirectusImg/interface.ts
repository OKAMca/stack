import type { Nullable } from '../../types/components'
import type TImgProps from '../Img/interface'

type TDirectusImageProps = Omit<TImgProps, 'src' | 'id' | 'width' | 'height' | 'alt'> & {
  description?: Nullable<string>
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
  caption?: Nullable<string>
  thumbhash?: Nullable<string>
  width: Nullable<number>
  height: Nullable<number>
  id: Nullable<string>
  filenameDownload: Nullable<string>
}

export default TDirectusImageProps
