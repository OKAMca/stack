import { Box, WysiwygBlock } from '@okam/stack-ui'
import React from 'react'
import type { TBlockSerializerProps } from '../../components/BlockSerializer/interface'
import type { BlockWysiwygFragment } from '../../generated/graphql'
import { BlockWysiwygDocument } from '../../generated/graphql'
import { getBlockProps } from '../../utils'

const BlockWysiwyg = async (props: TBlockSerializerProps<BlockWysiwygFragment>) => {
  const { variables, themeName = 'wysiwyg', tokens, item } = props

  const propsWithFallback = await getBlockProps({
    item,
    blockKey: 'block_wysiwyg_by_id',
    document: BlockWysiwygDocument,
    variables,
  })

  if (!propsWithFallback) return null
  const { content, title, level } = propsWithFallback

  if (!content && !(title && level)) return null

  return (
    <Box>
      {title && level && (
        <Box as="span" themeName={themeName} tokens={tokens}>
          {React.createElement(level, {}, title)}
        </Box>
      )}
      {content && <WysiwygBlock themeName={themeName} tokens={tokens} content={content} />}
    </Box>
  )
}

export default BlockWysiwyg
