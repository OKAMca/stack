import type { ImageProps, StaticImageData } from 'next/image'
import type { TDefaultComponent } from '../../types/components'

type TImgProps = TDefaultComponent &
  Omit<ImageProps, 'src'> & {
    src: string | StaticImageData
  }

export default TImgProps
