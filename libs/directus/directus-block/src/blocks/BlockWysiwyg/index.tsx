import { Box, WysiwygBlock } from '@okam/stack-ui'
import React from 'react'
import type { TBlockSerializerProps } from '../../components/BlockSerializer/interface'
import type { BlockWysiwygFragment, BlockWysiwygQueryVariables } from '../../generated/graphql'
import { BlockSettingsFragmentDoc, BlockWysiwygDocument } from '../../generated/graphql'
import { getBlockProps, getFragment } from '../../utils'

const BlockWysiwyg = async (props: TBlockSerializerProps<BlockWysiwygFragment, BlockWysiwygQueryVariables>) => {
  const { variables, themeName = 'wysiwyg', tokens, item } = props

  const propsWithFallback = await getBlockProps({
    item,
    blockKey: 'block_wysiwyg_by_id',
    document: BlockWysiwygDocument,
    variables,
  })

  if (!propsWithFallback) return null

  const { content, title, level, settings } = propsWithFallback

  const { tokens: cmsTokens } = getFragment(BlockSettingsFragmentDoc, settings) ?? {}

  if (!content && !(title && level)) return null

  return (
    <Box>
      {title && level && (
        <Box as="span" themeName={themeName} tokens={{ ...tokens, ...cmsTokens }}>
          {React.createElement(level, {}, title)}
        </Box>
      )}
      {content && <WysiwygBlock themeName={themeName} tokens={{ ...tokens, ...cmsTokens }} content={content} />}
    </Box>
  )
}

export default BlockWysiwyg
