import type { ImageProps } from 'next/image'
import type { TDirectusFileProps } from '../DirectusFile/interface'

export interface TDirectusImgProps extends TDirectusFileProps, Omit<ImageProps, keyof TDirectusFileProps | 'src' | 'alt'> {
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
}
