// Components
export { default as BlockDispatcher } from './components/BlockDispatcher'
export { default as BlockSerializer } from './components/BlockSerializer'

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

// Utils
export { default as getBlockProps } from './utils/get-block-props'
export { default as mergeConfigs } from './utils/merge-configs'

// Configs
export { default as blockWysiwygConfig } from './blocks/BlockWysiwyg/config'
export { default as baseConfig } from './components/BlockDispatcher/config'
