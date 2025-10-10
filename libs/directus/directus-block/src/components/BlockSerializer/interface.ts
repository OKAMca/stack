import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Nullable, TDefaultComponent } from '@okam/stack-ui'
import type { Variables as GraphQLVariables } from 'graphql-request'
import type { FunctionComponent } from 'react'
import type {
  TCommonBlockFragment,
  TAdditionalProps,
  TBlockQuery,
  TBlockVariables,
  TBlockDocument,
} from '../../types/block'

/**
 * Base block data. See {@link TBlockSerializerProps} for actual props implementation.
 */
export interface TBlock<
  Fragment extends TCommonBlockFragment = TCommonBlockFragment,
  Variables extends GraphQLVariables = TBlockVariables,
> {
  collection?: Nullable<string>
  item?: Nullable<Fragment>
  variables?: TBlockVariables<Variables>
  document?: TypedDocumentNode<TBlockQuery<Fragment>, Variables>
}

/**
 * The props of individual block components.
 * @template Fragment - The GraphQL fragment type for the block data structure
 * @template Variables - The GraphQL variables type for querying the block
 * @template AdditionalProps - Additional props that can be passed to the block component
 */
export type TBlockSerializerProps<
  Fragment extends TCommonBlockFragment = TCommonBlockFragment,
  Variables extends GraphQLVariables = TBlockVariables,
  AdditionalProps extends TAdditionalProps = TAdditionalProps,
> = TBlock<Fragment, Variables> &
  TDefaultComponent & {
    config?: TBlockSerializerConfig
    defaultVariant?: string
    additionalProps?: AdditionalProps
  }

/**
 * Wrapper for {@link TBlockSerializerProps} to be used as a component type
 */
export type TBlockFunctionComponent<
  Fragment extends TCommonBlockFragment = TCommonBlockFragment,
  Variables extends GraphQLVariables = TBlockVariables,
  AdditionalProps extends TAdditionalProps = TAdditionalProps,
> = FunctionComponent<TBlockSerializerProps<Fragment, Variables, AdditionalProps>>

/**
 * A component that's a part of the block serializer configuration. Includes its own key.
 *
 * ### Basic usage
 * @example
 * ```tsx
 * const configComponent: TBlockSerializerConfigComponent = {
 *   block_wysiwygs: {
 *     default: (props) => <BlockWysiwygs {...props} />,
 *   },
 * }
 * const config = {
 *   components: {
 *     ...configComponent,
 *   },
 * }
 * ```
 *
 * ### Using variants with `variants`, `getVariant` and `defaultVariant`
 * @example
 * ```tsx
 * const configComponent: TBlockSerializerConfigComponent<BlockButtonsFragment> = {
 *   block_buttons: {
 *     // Default is always required even if `defaultVariant` is passed since it's the fallback component
 *     default: (props) => <BlockButtons {...props} />,
 *     defaultVariant: 'primary',
 *     // Some blocks may have a variant located elsewhere in the block data
 *     getVariant: (props) => props.item?.link?.variant,
 *     variants: {
 *       reversed: (props) => <BlockButtons theme="reversed" {...props} />,
 *       primary: (props) => <BlockButtons tokens={{ buttonStyle: 'primary' }} {...props} />,
 *     },
 *   },
 * }
 * ```
 */
export type TBlockSerializerConfigComponent<
  Fragment extends TCommonBlockFragment = TCommonBlockFragment,
  Variables extends GraphQLVariables = TBlockVariables,
  AdditionalProps extends TAdditionalProps = TAdditionalProps,
> = {
  [blockKey: string]: {
    default: TBlockFunctionComponent<Fragment, Variables, AdditionalProps>
    /**
     * The necessary GraphQL document for querying the data. This prop can either be passed directly to the block or in the config.
     */
    document?: TBlockDocument<Fragment, Variables>
    /**
     * @default 'default'
     */
    defaultVariant?: string
    /**
     * A callback to specify a different variant path from the one in the block's settings.
     */
    getVariant?: (props: TBlockSerializerProps<Fragment, Variables, AdditionalProps>) => Nullable<string>
    variants?: {
      [blockVariant: string]: TBlockFunctionComponent<Fragment, Variables, AdditionalProps>
    }
  }
}

/**
 * A configuration for the block serializer. Usually, it's a bad idea to define the config components directly in the main config since each config component needs its own type parameters.
 */
export interface TBlockSerializerConfig {
  components: TBlockSerializerConfigComponent
}
