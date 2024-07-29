import type { TDefaultComponent } from '@okam/stack-ui'
import type { ImageProps, StaticImageData } from 'next/image'

type TImgProps = TDefaultComponent &
  Omit<ImageProps, 'src'> & {
    src: string | StaticImageData
  }

export default TImgProps
