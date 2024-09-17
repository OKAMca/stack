import type { TDefaultComponent } from '@okam/stack-ui'
import type { TFiles } from '../../types/files'
import type { TDirectusImgProps } from '../DirectusImg/interface'
import type { TDirectusVideoProps } from '../DirectusVideo/interface'

export interface TDirectusFile extends TFiles {
  /**
   * Serves to fall back to different parts of the URLs. Some properties have default values:
   * - hostname: `NEXT_PUBLIC_IMG_DOMAIN`
   * - port: `NEXT_PUBLIC_IMG_PORT`
   * - protocol: `NEXT_PUBLIC_IMG_PROTOCOL`
   */
  baseUrl?: URL
}

export type TDirectusFileProps = TFiles & TDefaultComponent & TDirectusImgProps & TDirectusVideoProps
