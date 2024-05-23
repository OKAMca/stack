/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }

export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: any; output: any; }
  /** BigInt value */
  GraphQLBigInt: { input: any; output: any; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: any; output: any; }
  /** Hashed string values */
  Hash: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type BlockSettingsFragment = { __typename?: 'block_settings'; tokens?: any | null; variant?: string | null } & {
  ' $fragmentName'?: 'BlockSettingsFragment'
}

export type BlockWysiwygFragment = {
  __typename?: 'block_wysiwyg'
  title?: string | null
  content?: string | null
  level?: string | null
  variant?: string | null
  settings?:
    | ({ __typename?: 'block_settings' } & { ' $fragmentRefs'?: { BlockSettingsFragment: BlockSettingsFragment } })
    | null
} & { ' $fragmentName'?: 'BlockWysiwygFragment' }

export type BlockWysiwygQuery = { __typename?: 'Query', block_wysiwyg_by_id?: (
  { __typename?: 'block_wysiwyg' }
  & { ' $fragmentRefs'?: { 'BlockWysiwygFragment': BlockWysiwygFragment } }
) | null };


export type BlockWysiwygQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export const BlockSettingsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<BlockSettingsFragment, unknown>;
export const BlockWysiwygDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlockWysiwyg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_wysiwyg_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockWysiwyg"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockWysiwyg"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_wysiwyg"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockSettings"}}]}}]}}]} as unknown as DocumentNode<BlockWysiwygQuery, BlockWysiwygQueryVariables>;
