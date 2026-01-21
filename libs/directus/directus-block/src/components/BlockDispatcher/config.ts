import type { TBlockSerializerConfig } from '../BlockSerializer/interface'
import blockWysiwygConfig from '../../blocks/BlockWysiwyg/config'

const baseConfig: TBlockSerializerConfig = {
  components: {
    ...blockWysiwygConfig,
  },
}

export default baseConfig
