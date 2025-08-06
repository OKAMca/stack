import { Box, WysiwygBlock } from '@okam/stack-ui'
import React from 'react'
import type { TBlockSerializerProps } from '../../components/BlockSerializer/interface'
import { getBlock } from '../../utils'
import type { BlockWysiwygFragment } from './interface'

const BlockWysiwyg = async (props: TBlockSerializerProps<BlockWysiwygFragment>) => {
  const key = 'block_wysiwyg_by_id'
  const { themeName = 'wysiwyg', tokens } = props
  const { content, title, level, cmsTokens } = await getBlock<BlockWysiwygFragment>(props, key)

  if (!content && !(title && level)) return null

  return (
    <>
      {title && level && (
        <Box as="span" themeName={themeName} tokens={{ ...tokens, ...cmsTokens }}>
          {React.createElement(level, {}, title)}
        </Box>
      )}
      {content && <WysiwygBlock themeName={themeName} tokens={{ ...tokens, ...cmsTokens }} content={content} />}
    </>
  )
}

export default BlockWysiwyg
