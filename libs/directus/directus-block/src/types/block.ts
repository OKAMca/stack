/* eslint-disable @typescript-eslint/naming-convention */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core'
import type { Nullable } from '@okam/stack-ui'
import type { FragmentType } from '../generated/fragment-masking'
import type { BlockSettingsFragment } from '../generated/graphql'

export type TAdditionalProps = { [key: string]: unknown }

type BlockSettings = FragmentType<DocumentTypeDecoration<BlockSettingsFragment, unknown>>

export type TCommonBlockFragment = {
  id?: Nullable<string>
  settings?: Nullable<BlockSettings>
} & Record<string, unknown>
