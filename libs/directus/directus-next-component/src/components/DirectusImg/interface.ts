import type { ImageProps } from 'next/image'
import type { TDirectusFileProps } from '../DirectusFile/interface'

export interface TDirectusImgProps extends TDirectusFileProps, Omit<ImageProps, keyof TDirectusFileProps | 'src' | 'alt'> {
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
  /**
   * Target crop shape (e.g. `'16:9'`), separate from the asset's intrinsic `width`/`height`.
   * Only takes effect when `fit="cover"`: image loaders (e.g. `imgixImageLoader`) crop to this
   * ratio around the focal point instead of the asset's own (no-op) shape.
   */
  cropAspectRatio?: string
}
