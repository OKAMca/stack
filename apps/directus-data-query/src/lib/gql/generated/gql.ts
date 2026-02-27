/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment BlockSettings on block_settings {\n  variant\n  tokens\n}": typeof types.BlockSettingsFragmentDoc,
    "fragment BlockWysiwygs on block_wysiwygs {\n  id\n  content\n  settings {\n    ...BlockSettings\n  }\n}\n\nquery BlockWysiwygs($id: ID!) {\n  block_wysiwygs_by_id(id: $id) {\n    ...BlockWysiwygs\n  }\n}": typeof types.BlockWysiwygsFragmentDoc,
    "fragment DirectusFiles on directus_files {\n  id\n  filename_disk\n  filename_download\n  title\n  type\n  width\n  height\n  duration\n  embed\n  description\n  focal_point_x\n  focal_point_y\n  thumbhash\n}": typeof types.DirectusFilesFragmentDoc,
    "fragment SearchParams on search_params {\n  id\n  name\n  value\n}\n\nfragment Links on links {\n  anchor\n  external_link\n  id\n  label\n  type\n  collection {\n    ...PageSettings\n  }\n  file {\n    id\n    filename_download\n    width\n    height\n  }\n  params {\n    ...SearchParams\n  }\n}\n\nquery LinkById($id: ID!, $locale: String) {\n  links_by_id(id: $id) {\n    ...Links\n  }\n}": typeof types.SearchParamsFragmentDoc,
    "fragment NavigationItemsBase on navigation_items {\n  link {\n    ...Links\n  }\n  variant\n  tokens\n}\n\nfragment NavigationItems on navigation_items {\n  link {\n    ...Links\n  }\n  variant\n  tokens\n  children {\n    ...NavigationItemsBase\n    children {\n      ...NavigationItemsBase\n    }\n  }\n  parent {\n    ...NavigationItemsBase\n    parent {\n      ...NavigationItemsBase\n    }\n  }\n}\n\nquery NavigationItems($locale: String, $filter: navigation_items_filter = {}) {\n  navigation_items(filter: $filter) {\n    ...NavigationItems\n  }\n}": typeof types.NavigationItemsBaseFragmentDoc,
    "fragment PageSettings on page_settings {\n  id\n  belongs_to_collection\n  belongs_to_key\n  translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n    languages_code {\n      code\n    }\n    path\n    title\n    slug\n  }\n}\n\nfragment Page on pages {\n  translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n    title\n  }\n  page_settings(filter: {belongs_to_key: {_nnull: true}}) {\n    ...PageSettings\n  }\n}\n\nquery PageById($id: ID!, $locale: String!) {\n  pages_by_id(id: $id) {\n    ...Page\n  }\n}\n\nquery PageByIdWithoutFragment($id: ID!, $locale: String!) {\n  pages_by_id(id: $id) {\n    translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n      title\n    }\n    page_settings(filter: {belongs_to_key: {_nnull: true}}) {\n      ...PageSettings\n    }\n  }\n}": typeof types.PageSettingsFragmentDoc,
};
const documents: Documents = {
    "fragment BlockSettings on block_settings {\n  variant\n  tokens\n}": types.BlockSettingsFragmentDoc,
    "fragment BlockWysiwygs on block_wysiwygs {\n  id\n  content\n  settings {\n    ...BlockSettings\n  }\n}\n\nquery BlockWysiwygs($id: ID!) {\n  block_wysiwygs_by_id(id: $id) {\n    ...BlockWysiwygs\n  }\n}": types.BlockWysiwygsFragmentDoc,
    "fragment DirectusFiles on directus_files {\n  id\n  filename_disk\n  filename_download\n  title\n  type\n  width\n  height\n  duration\n  embed\n  description\n  focal_point_x\n  focal_point_y\n  thumbhash\n}": types.DirectusFilesFragmentDoc,
    "fragment SearchParams on search_params {\n  id\n  name\n  value\n}\n\nfragment Links on links {\n  anchor\n  external_link\n  id\n  label\n  type\n  collection {\n    ...PageSettings\n  }\n  file {\n    id\n    filename_download\n    width\n    height\n  }\n  params {\n    ...SearchParams\n  }\n}\n\nquery LinkById($id: ID!, $locale: String) {\n  links_by_id(id: $id) {\n    ...Links\n  }\n}": types.SearchParamsFragmentDoc,
    "fragment NavigationItemsBase on navigation_items {\n  link {\n    ...Links\n  }\n  variant\n  tokens\n}\n\nfragment NavigationItems on navigation_items {\n  link {\n    ...Links\n  }\n  variant\n  tokens\n  children {\n    ...NavigationItemsBase\n    children {\n      ...NavigationItemsBase\n    }\n  }\n  parent {\n    ...NavigationItemsBase\n    parent {\n      ...NavigationItemsBase\n    }\n  }\n}\n\nquery NavigationItems($locale: String, $filter: navigation_items_filter = {}) {\n  navigation_items(filter: $filter) {\n    ...NavigationItems\n  }\n}": types.NavigationItemsBaseFragmentDoc,
    "fragment PageSettings on page_settings {\n  id\n  belongs_to_collection\n  belongs_to_key\n  translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n    languages_code {\n      code\n    }\n    path\n    title\n    slug\n  }\n}\n\nfragment Page on pages {\n  translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n    title\n  }\n  page_settings(filter: {belongs_to_key: {_nnull: true}}) {\n    ...PageSettings\n  }\n}\n\nquery PageById($id: ID!, $locale: String!) {\n  pages_by_id(id: $id) {\n    ...Page\n  }\n}\n\nquery PageByIdWithoutFragment($id: ID!, $locale: String!) {\n  pages_by_id(id: $id) {\n    translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n      title\n    }\n    page_settings(filter: {belongs_to_key: {_nnull: true}}) {\n      ...PageSettings\n    }\n  }\n}": types.PageSettingsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment BlockSettings on block_settings {\n  variant\n  tokens\n}"): (typeof documents)["fragment BlockSettings on block_settings {\n  variant\n  tokens\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment BlockWysiwygs on block_wysiwygs {\n  id\n  content\n  settings {\n    ...BlockSettings\n  }\n}\n\nquery BlockWysiwygs($id: ID!) {\n  block_wysiwygs_by_id(id: $id) {\n    ...BlockWysiwygs\n  }\n}"): (typeof documents)["fragment BlockWysiwygs on block_wysiwygs {\n  id\n  content\n  settings {\n    ...BlockSettings\n  }\n}\n\nquery BlockWysiwygs($id: ID!) {\n  block_wysiwygs_by_id(id: $id) {\n    ...BlockWysiwygs\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DirectusFiles on directus_files {\n  id\n  filename_disk\n  filename_download\n  title\n  type\n  width\n  height\n  duration\n  embed\n  description\n  focal_point_x\n  focal_point_y\n  thumbhash\n}"): (typeof documents)["fragment DirectusFiles on directus_files {\n  id\n  filename_disk\n  filename_download\n  title\n  type\n  width\n  height\n  duration\n  embed\n  description\n  focal_point_x\n  focal_point_y\n  thumbhash\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SearchParams on search_params {\n  id\n  name\n  value\n}\n\nfragment Links on links {\n  anchor\n  external_link\n  id\n  label\n  type\n  collection {\n    ...PageSettings\n  }\n  file {\n    id\n    filename_download\n    width\n    height\n  }\n  params {\n    ...SearchParams\n  }\n}\n\nquery LinkById($id: ID!, $locale: String) {\n  links_by_id(id: $id) {\n    ...Links\n  }\n}"): (typeof documents)["fragment SearchParams on search_params {\n  id\n  name\n  value\n}\n\nfragment Links on links {\n  anchor\n  external_link\n  id\n  label\n  type\n  collection {\n    ...PageSettings\n  }\n  file {\n    id\n    filename_download\n    width\n    height\n  }\n  params {\n    ...SearchParams\n  }\n}\n\nquery LinkById($id: ID!, $locale: String) {\n  links_by_id(id: $id) {\n    ...Links\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment NavigationItemsBase on navigation_items {\n  link {\n    ...Links\n  }\n  variant\n  tokens\n}\n\nfragment NavigationItems on navigation_items {\n  link {\n    ...Links\n  }\n  variant\n  tokens\n  children {\n    ...NavigationItemsBase\n    children {\n      ...NavigationItemsBase\n    }\n  }\n  parent {\n    ...NavigationItemsBase\n    parent {\n      ...NavigationItemsBase\n    }\n  }\n}\n\nquery NavigationItems($locale: String, $filter: navigation_items_filter = {}) {\n  navigation_items(filter: $filter) {\n    ...NavigationItems\n  }\n}"): (typeof documents)["fragment NavigationItemsBase on navigation_items {\n  link {\n    ...Links\n  }\n  variant\n  tokens\n}\n\nfragment NavigationItems on navigation_items {\n  link {\n    ...Links\n  }\n  variant\n  tokens\n  children {\n    ...NavigationItemsBase\n    children {\n      ...NavigationItemsBase\n    }\n  }\n  parent {\n    ...NavigationItemsBase\n    parent {\n      ...NavigationItemsBase\n    }\n  }\n}\n\nquery NavigationItems($locale: String, $filter: navigation_items_filter = {}) {\n  navigation_items(filter: $filter) {\n    ...NavigationItems\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PageSettings on page_settings {\n  id\n  belongs_to_collection\n  belongs_to_key\n  translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n    languages_code {\n      code\n    }\n    path\n    title\n    slug\n  }\n}\n\nfragment Page on pages {\n  translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n    title\n  }\n  page_settings(filter: {belongs_to_key: {_nnull: true}}) {\n    ...PageSettings\n  }\n}\n\nquery PageById($id: ID!, $locale: String!) {\n  pages_by_id(id: $id) {\n    ...Page\n  }\n}\n\nquery PageByIdWithoutFragment($id: ID!, $locale: String!) {\n  pages_by_id(id: $id) {\n    translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n      title\n    }\n    page_settings(filter: {belongs_to_key: {_nnull: true}}) {\n      ...PageSettings\n    }\n  }\n}"): (typeof documents)["fragment PageSettings on page_settings {\n  id\n  belongs_to_collection\n  belongs_to_key\n  translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n    languages_code {\n      code\n    }\n    path\n    title\n    slug\n  }\n}\n\nfragment Page on pages {\n  translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n    title\n  }\n  page_settings(filter: {belongs_to_key: {_nnull: true}}) {\n    ...PageSettings\n  }\n}\n\nquery PageById($id: ID!, $locale: String!) {\n  pages_by_id(id: $id) {\n    ...Page\n  }\n}\n\nquery PageByIdWithoutFragment($id: ID!, $locale: String!) {\n  pages_by_id(id: $id) {\n    translations(filter: {languages_code: {code: {_eq: $locale}}}) {\n      title\n    }\n    page_settings(filter: {belongs_to_key: {_nnull: true}}) {\n      ...PageSettings\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;