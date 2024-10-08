import type { TDefaultComponent } from '@okam/stack-ui'
import type { TDirectusFile } from '../DirectusFile/interface'

export interface TDirectusImgProps extends TDirectusFile, TDefaultComponent {
  /**
   * For [storage asset presets](https://docs.directus.io/user-guide/settings/project-settings.html#files-storage)
   */
  presetKey?: string
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
  quality?: number
  withoutEnlargement?: boolean
  /**
   * auto will try to format it in webp or avif if the browser supports it, otherwise it will fallback to jpg
   */
  format?: 'auto' | 'jpg' | 'png' | 'webp' | 'tiff'
}
