import blockWysiwygConfig from '../../blocks/BlockWysiwyg/config'
import type { TBlockSerializerConfig } from '../BlockSerializer/interface'

export const baseConfig: TBlockSerializerConfig = {
  components: {
    ...blockWysiwygConfig,
  },
}
