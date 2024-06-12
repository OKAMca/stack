import blockWysiwygConfig from '../../blocks/BlockWysiwyg/config'
import type { TBlockSerializerConfig } from '../BlockSerializer/interface'

const baseConfig: TBlockSerializerConfig = {
  components: {
    ...blockWysiwygConfig,
  },
}

export default baseConfig
