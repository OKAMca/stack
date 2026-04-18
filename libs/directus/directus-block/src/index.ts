export { default as BlockWysiwyg } from './blocks/BlockWysiwyg'
export { default as blockWysiwygConfig } from './blocks/BlockWysiwyg/config'
export { default as BlockDispatcher } from './components/BlockDispatcher'
export { default as baseConfig } from './components/BlockDispatcher/config'
export type { TBlockDispatcherProps } from './components/BlockDispatcher/interface'

export { default as BlockSerializer } from './components/BlockSerializer'
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
