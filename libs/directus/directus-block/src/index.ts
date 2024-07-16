// Types
export type { TBlockDispatcherProps } from './components/BlockDispatcher/interface'
export type {
  TBlockSerializerConfig,
  TBlockSerializerProps,
  TBlock,
  TBlockSerializerConfigComponent,
} from './components/BlockSerializer/interface'
export type {
  TAdditionalProps,
  TCommonBlockFragment,
  TBlockQuery,
  TBlockDocument,
  TBlockVariables,
} from './types/block'

// Blocks
export { default as BlockWysiwyg } from './blocks/BlockWysiwyg'

// Configs
export { default as blockWysiwygConfig } from './blocks/BlockWysiwyg/config'
export { default as baseConfig } from './components/BlockDispatcher/config'
