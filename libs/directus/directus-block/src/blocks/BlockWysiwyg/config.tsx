import type { TBlockSerializerConfigComponent } from '../../components/BlockSerializer/interface'
import type { BlockWysiwygFragment } from './interface'
import BlockWysiwyg from '.'

const blockWysiwygConfig: TBlockSerializerConfigComponent<BlockWysiwygFragment> = {
  block_wysiwyg: {
    default: (props) => <BlockWysiwyg {...props} />,
  },
}

export default blockWysiwygConfig
