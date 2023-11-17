import type { ImageProps as NextImageProps, StaticImageData } from 'next/image'
import type { Nullable, TDefaultComponent } from '../../types/components'

export type TImgProps = DirectusImageProps &
  Omit<NextImageProps, 'src' | 'id' | 'alt' | 'width' | 'height'> &
  TDefaultComponent

type DirectusImageUrl = { id?: string; filenameDownload?: string } | { src: string | StaticImageData }

type DirectusImageProps = DirectusImageUrl & {
  description?: Nullable<string>
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
  caption?: Nullable<string>
  thumbhash?: Nullable<string>
  width?: Nullable<number>
  height?: Nullable<number>
}
