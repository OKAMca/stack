import type { TBlockSerializerConfigComponent } from '../../components/BlockSerializer/interface'
import BlockWysiwyg from '.'

const blockWysiwygConfig: TBlockSerializerConfigComponent = {
  block_wysiwyg: {
    default: (props) => <BlockWysiwyg {...props} />,
  },
}

export default blockWysiwygConfig
