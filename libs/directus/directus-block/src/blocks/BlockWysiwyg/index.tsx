import type { TBlockSerializerProps } from '../../components/BlockSerializer/interface'
import type { BlockWysiwygFragment } from './interface'
import { Box, WysiwygBlock } from '@okam/stack-ui'
import { createElement } from 'react'
import { getBlock } from '../../utils'

async function BlockWysiwyg(props: TBlockSerializerProps<BlockWysiwygFragment>) {
  const key = 'block_wysiwygs_by_id'
  const { themeName = 'wysiwyg', tokens } = props
  const { content, title, level, cmsTokens } = await getBlock<BlockWysiwygFragment>(props, key)

  if ((content == null || content === '') && !((title != null && title !== '') && (level != null && level !== '')))
    return null

  return (
    <>
      {(title != null && title !== '') && (level != null && level !== '') && (
        <Box as="span" themeName={themeName} tokens={{ ...tokens, ...cmsTokens }}>
          {createElement(level, {}, title)}
        </Box>
      )}
      {(content != null && content !== '') && <WysiwygBlock themeName={themeName} tokens={{ ...tokens, ...cmsTokens }} content={content} />}
    </>
  )
}

export default BlockWysiwyg
