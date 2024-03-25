import type { TDefaultComponent } from 'libs/stack/stack-ui/src/types/components'
import type { ImageProps, StaticImageData } from 'next/image'

type TImgProps = TDefaultComponent &
  Omit<ImageProps, 'src'> & {
    src: string | StaticImageData
  }

export default TImgProps
