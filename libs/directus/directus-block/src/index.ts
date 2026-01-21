// Blocks
export { default as BlockWysiwyg } from './blocks/BlockWysiwyg'

// Configs
export { default as blockWysiwygConfig } from './blocks/BlockWysiwyg/config'

export { default as baseConfig } from './components/BlockDispatcher/config'
// Types
export type { TBlockDispatcherProps } from './components/BlockDispatcher/interface'
export type {
  TBlock,
  TBlockSerializerConfig,
  TBlockSerializerConfigComponent,
  TBlockSerializerProps,
} from './components/BlockSerializer/interface'

export type { BlockSettingsFragment } from './generated/graphql'

export type {
  TAdditionalProps,
  TBlockDocument,
  TBlockQuery,
  TBlockVariables,
  TCommonBlockFragment,
} from './types/block'
export * from './utils'
