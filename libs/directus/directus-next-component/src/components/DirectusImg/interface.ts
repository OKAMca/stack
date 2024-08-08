import type { TDirectusFileProps } from '../DirectusFile/interface'

export interface TDirectusImgProps extends TDirectusFileProps {
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
}
