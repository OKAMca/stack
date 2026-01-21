/* eslint-disable prettier/prettier */
/* eslint-disable ts/no-explicit-any */

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

export const BlockSettingsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<BlockSettingsFragment, unknown>;
