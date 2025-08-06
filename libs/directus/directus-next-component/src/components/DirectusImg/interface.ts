import type { DirectusFileProps } from '../DirectusFile/interface'

export interface TDirectusImgProps extends DirectusFileProps {
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
}
