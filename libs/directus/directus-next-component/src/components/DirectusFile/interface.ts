import type { TFiles } from '@okam/directus-next'
import type { TDefaultComponent } from '@okam/stack-ui'

export interface TDirectusFileProps extends TFiles, TDefaultComponent {
  /**
   * Serves to fall back to different parts of the URLs. Some properties have default values:
   * - hostname: `NEXT_PUBLIC_IMG_DOMAIN`
   * - port: `NEXT_PUBLIC_IMG_PORT`
   * - protocol: `NEXT_PUBLIC_IMG_PROTOCOL`
   */
  baseUrl?: URL
  /**
   * Additional search params appended to the asset URL, in Directus transform
   * format. Loaders (e.g. `imgixImageLoader`) read these back off the `src` URL
   * and map them to their own format.
   */
  searchParams?: URLSearchParams
}
