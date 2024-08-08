import type { TDefaultComponent } from '@okam/stack-ui'
import type { TFiles } from '../../types/files'

export interface TDirectusFileProps extends TFiles, TDefaultComponent {
  /**
   * Serves to fall back to different parts of the URLs. Some properties have default values:
   * - hostname: `NEXT_PUBLIC_IMG_DOMAIN`
   * - port: `NEXT_PUBLIC_IMG_PORT`
   * - protocol: `NEXT_PUBLIC_IMG_PROTOCOL`
   */
  baseUrl?: URL
}
