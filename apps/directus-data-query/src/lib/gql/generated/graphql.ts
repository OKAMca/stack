/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  __typename?: 'Query';
  block_custom_components: Array<Block_Custom_Components>;
  block_custom_components_aggregated: Array<Block_Custom_Components_Aggregated>;
  block_custom_components_by_id?: Maybe<Block_Custom_Components>;
  block_custom_components_by_version?: Maybe<Version_Block_Custom_Components>;
  block_settings: Array<Block_Settings>;
  block_settings_aggregated: Array<Block_Settings_Aggregated>;
  block_settings_by_id?: Maybe<Block_Settings>;
  block_settings_by_version?: Maybe<Version_Block_Settings>;
  block_wysiwygs: Array<Block_Wysiwygs>;
  block_wysiwygs_aggregated: Array<Block_Wysiwygs_Aggregated>;
  block_wysiwygs_by_id?: Maybe<Block_Wysiwygs>;
  block_wysiwygs_by_version?: Maybe<Version_Block_Wysiwygs>;
  categories: Array<Categories>;
  categories_aggregated: Array<Categories_Aggregated>;
  categories_by_id?: Maybe<Categories>;
  categories_by_version?: Maybe<Version_Categories>;
  categories_translations: Array<Categories_Translations>;
  categories_translations_aggregated: Array<Categories_Translations_Aggregated>;
  categories_translations_by_id?: Maybe<Categories_Translations>;
  categories_translations_by_version?: Maybe<Version_Categories_Translations>;
  category_types: Array<Category_Types>;
  category_types_aggregated: Array<Category_Types_Aggregated>;
  category_types_by_id?: Maybe<Category_Types>;
  category_types_by_version?: Maybe<Version_Category_Types>;
  category_types_translations: Array<Category_Types_Translations>;
  category_types_translations_aggregated: Array<Category_Types_Translations_Aggregated>;
  category_types_translations_by_id?: Maybe<Category_Types_Translations>;
  category_types_translations_by_version?: Maybe<Version_Category_Types_Translations>;
  languages: Array<Languages>;
  languages_aggregated: Array<Languages_Aggregated>;
  languages_by_id?: Maybe<Languages>;
  languages_by_version?: Maybe<Version_Languages>;
  links: Array<Links>;
  links_aggregated: Array<Links_Aggregated>;
  links_by_id?: Maybe<Links>;
  links_by_version?: Maybe<Version_Links>;
  navigation_items: Array<Navigation_Items>;
  navigation_items_aggregated: Array<Navigation_Items_Aggregated>;
  navigation_items_by_id?: Maybe<Navigation_Items>;
  navigation_items_by_version?: Maybe<Version_Navigation_Items>;
  navigations: Array<Navigations>;
  navigations_aggregated: Array<Navigations_Aggregated>;
  navigations_by_id?: Maybe<Navigations>;
  navigations_by_version?: Maybe<Version_Navigations>;
  navigations_translations: Array<Navigations_Translations>;
  navigations_translations_aggregated: Array<Navigations_Translations_Aggregated>;
  navigations_translations_by_id?: Maybe<Navigations_Translations>;
  navigations_translations_by_version?: Maybe<Version_Navigations_Translations>;
  navigations_translations_items: Array<Navigations_Translations_Items>;
  navigations_translations_items_aggregated: Array<Navigations_Translations_Items_Aggregated>;
  navigations_translations_items_by_id?: Maybe<Navigations_Translations_Items>;
  navigations_translations_items_by_version?: Maybe<Version_Navigations_Translations_Items>;
  navigations_translations_navigation_items: Array<Navigations_Translations_Navigation_Items>;
  navigations_translations_navigation_items_aggregated: Array<Navigations_Translations_Navigation_Items_Aggregated>;
  navigations_translations_navigation_items_by_id?: Maybe<Navigations_Translations_Navigation_Items>;
  navigations_translations_navigation_items_by_version?: Maybe<Version_Navigations_Translations_Navigation_Items>;
  page_settings: Array<Page_Settings>;
  page_settings_aggregated: Array<Page_Settings_Aggregated>;
  page_settings_by_id?: Maybe<Page_Settings>;
  page_settings_by_version?: Maybe<Version_Page_Settings>;
  page_settings_translations: Array<Page_Settings_Translations>;
  page_settings_translations_aggregated: Array<Page_Settings_Translations_Aggregated>;
  page_settings_translations_by_id?: Maybe<Page_Settings_Translations>;
  page_settings_translations_by_version?: Maybe<Version_Page_Settings_Translations>;
  pages: Array<Pages>;
  pages_aggregated: Array<Pages_Aggregated>;
  pages_by_id?: Maybe<Pages>;
  pages_by_version?: Maybe<Version_Pages>;
  pages_translations: Array<Pages_Translations>;
  pages_translations_aggregated: Array<Pages_Translations_Aggregated>;
  pages_translations_blocks: Array<Pages_Translations_Blocks>;
  pages_translations_blocks_aggregated: Array<Pages_Translations_Blocks_Aggregated>;
  pages_translations_blocks_by_id?: Maybe<Pages_Translations_Blocks>;
  pages_translations_blocks_by_version?: Maybe<Version_Pages_Translations_Blocks>;
  pages_translations_by_id?: Maybe<Pages_Translations>;
  pages_translations_by_version?: Maybe<Version_Pages_Translations>;
  redirects: Array<Redirects>;
  redirects_aggregated: Array<Redirects_Aggregated>;
  redirects_by_id?: Maybe<Redirects>;
  redirects_by_version?: Maybe<Version_Redirects>;
  routes: Array<Routes>;
  routes_aggregated: Array<Routes_Aggregated>;
  routes_by_id?: Maybe<Routes>;
  routes_by_version?: Maybe<Version_Routes>;
  routes_translations: Array<Routes_Translations>;
  routes_translations_aggregated: Array<Routes_Translations_Aggregated>;
  routes_translations_by_id?: Maybe<Routes_Translations>;
  routes_translations_by_version?: Maybe<Version_Routes_Translations>;
  search_params: Array<Search_Params>;
  search_params_aggregated: Array<Search_Params_Aggregated>;
  search_params_by_id?: Maybe<Search_Params>;
  search_params_by_version?: Maybe<Version_Search_Params>;
};


export type QueryBlock_Custom_ComponentsArgs = {
  filter?: InputMaybe<Block_Custom_Components_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Custom_Components_AggregatedArgs = {
  filter?: InputMaybe<Block_Custom_Components_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Custom_Components_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Custom_Components_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_SettingsArgs = {
  filter?: InputMaybe<Block_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Settings_AggregatedArgs = {
  filter?: InputMaybe<Block_Settings_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Settings_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Settings_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_WysiwygsArgs = {
  filter?: InputMaybe<Block_Wysiwygs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Wysiwygs_AggregatedArgs = {
  filter?: InputMaybe<Block_Wysiwygs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Wysiwygs_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Wysiwygs_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_AggregatedArgs = {
  filter?: InputMaybe<Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategories_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCategories_TranslationsArgs = {
  filter?: InputMaybe<Categories_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_Translations_AggregatedArgs = {
  filter?: InputMaybe<Categories_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategories_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCategory_TypesArgs = {
  filter?: InputMaybe<Category_Types_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Types_AggregatedArgs = {
  filter?: InputMaybe<Category_Types_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Types_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategory_Types_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCategory_Types_TranslationsArgs = {
  filter?: InputMaybe<Category_Types_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Types_Translations_AggregatedArgs = {
  filter?: InputMaybe<Category_Types_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Types_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategory_Types_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_AggregatedArgs = {
  filter?: InputMaybe<Languages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLanguages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryLinksArgs = {
  filter?: InputMaybe<Links_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLinks_AggregatedArgs = {
  filter?: InputMaybe<Links_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLinks_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLinks_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryNavigation_ItemsArgs = {
  filter?: InputMaybe<Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigation_Items_AggregatedArgs = {
  filter?: InputMaybe<Navigation_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigation_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavigation_Items_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryNavigationsArgs = {
  filter?: InputMaybe<Navigations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigations_AggregatedArgs = {
  filter?: InputMaybe<Navigations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavigations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryNavigations_TranslationsArgs = {
  filter?: InputMaybe<Navigations_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigations_Translations_AggregatedArgs = {
  filter?: InputMaybe<Navigations_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigations_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavigations_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryNavigations_Translations_ItemsArgs = {
  filter?: InputMaybe<Navigations_Translations_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigations_Translations_Items_AggregatedArgs = {
  filter?: InputMaybe<Navigations_Translations_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigations_Translations_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavigations_Translations_Items_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryNavigations_Translations_Navigation_ItemsArgs = {
  filter?: InputMaybe<Navigations_Translations_Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigations_Translations_Navigation_Items_AggregatedArgs = {
  filter?: InputMaybe<Navigations_Translations_Navigation_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigations_Translations_Navigation_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavigations_Translations_Navigation_Items_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPage_SettingsArgs = {
  filter?: InputMaybe<Page_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_Settings_AggregatedArgs = {
  filter?: InputMaybe<Page_Settings_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_Settings_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPage_Settings_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPage_Settings_TranslationsArgs = {
  filter?: InputMaybe<Page_Settings_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_Settings_Translations_AggregatedArgs = {
  filter?: InputMaybe<Page_Settings_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_Settings_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPage_Settings_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPages_TranslationsArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_Translations_AggregatedArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_Translations_BlocksArgs = {
  filter?: InputMaybe<Pages_Translations_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_Translations_Blocks_AggregatedArgs = {
  filter?: InputMaybe<Pages_Translations_Blocks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_Translations_Blocks_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_Translations_Blocks_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPages_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryRedirectsArgs = {
  filter?: InputMaybe<Redirects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRedirects_AggregatedArgs = {
  filter?: InputMaybe<Redirects_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRedirects_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRedirects_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryRoutesArgs = {
  filter?: InputMaybe<Routes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRoutes_AggregatedArgs = {
  filter?: InputMaybe<Routes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRoutes_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRoutes_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryRoutes_TranslationsArgs = {
  filter?: InputMaybe<Routes_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRoutes_Translations_AggregatedArgs = {
  filter?: InputMaybe<Routes_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRoutes_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRoutes_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySearch_ParamsArgs = {
  filter?: InputMaybe<Search_Params_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySearch_Params_AggregatedArgs = {
  filter?: InputMaybe<Search_Params_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySearch_Params_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearch_Params_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  block_custom_components_mutated?: Maybe<Block_Custom_Components_Mutated>;
  block_settings_mutated?: Maybe<Block_Settings_Mutated>;
  block_wysiwygs_mutated?: Maybe<Block_Wysiwygs_Mutated>;
  categories_mutated?: Maybe<Categories_Mutated>;
  categories_translations_mutated?: Maybe<Categories_Translations_Mutated>;
  category_types_mutated?: Maybe<Category_Types_Mutated>;
  category_types_translations_mutated?: Maybe<Category_Types_Translations_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  languages_mutated?: Maybe<Languages_Mutated>;
  links_mutated?: Maybe<Links_Mutated>;
  navigation_items_mutated?: Maybe<Navigation_Items_Mutated>;
  navigations_mutated?: Maybe<Navigations_Mutated>;
  navigations_translations_items_mutated?: Maybe<Navigations_Translations_Items_Mutated>;
  navigations_translations_mutated?: Maybe<Navigations_Translations_Mutated>;
  navigations_translations_navigation_items_mutated?: Maybe<Navigations_Translations_Navigation_Items_Mutated>;
  page_settings_mutated?: Maybe<Page_Settings_Mutated>;
  page_settings_translations_mutated?: Maybe<Page_Settings_Translations_Mutated>;
  pages_mutated?: Maybe<Pages_Mutated>;
  pages_translations_blocks_mutated?: Maybe<Pages_Translations_Blocks_Mutated>;
  pages_translations_mutated?: Maybe<Pages_Translations_Mutated>;
  redirects_mutated?: Maybe<Redirects_Mutated>;
  routes_mutated?: Maybe<Routes_Mutated>;
  routes_translations_mutated?: Maybe<Routes_Translations_Mutated>;
  search_params_mutated?: Maybe<Search_Params_Mutated>;
};


export type SubscriptionBlock_Custom_Components_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Wysiwygs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategories_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategories_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategory_Types_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategory_Types_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLanguages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLinks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionNavigation_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionNavigations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionNavigations_Translations_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionNavigations_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionNavigations_Translations_Navigation_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPage_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPage_Settings_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_Translations_Blocks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRedirects_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRoutes_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRoutes_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSearch_Params_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Block_Custom_Components = {
  __typename?: 'block_custom_components';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  props?: Maybe<Scalars['JSON']['output']>;
  props_func?: Maybe<Count_Functions>;
  settings?: Maybe<Block_Settings>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};


export type Block_Custom_ComponentsSettingsArgs = {
  filter?: InputMaybe<Block_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Custom_Components_Aggregated = {
  __typename?: 'block_custom_components_aggregated';
  avg?: Maybe<Block_Custom_Components_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Custom_Components_Aggregated_Fields>;
  count?: Maybe<Block_Custom_Components_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Custom_Components_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Custom_Components_Aggregated_Fields>;
  min?: Maybe<Block_Custom_Components_Aggregated_Fields>;
  sum?: Maybe<Block_Custom_Components_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Custom_Components_Aggregated_Fields>;
};

export type Block_Custom_Components_Aggregated_Count = {
  __typename?: 'block_custom_components_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  props?: Maybe<Scalars['Int']['output']>;
  settings?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Block_Custom_Components_Aggregated_Fields = {
  __typename?: 'block_custom_components_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Custom_Components_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Custom_Components_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Custom_Components_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  props?: InputMaybe<String_Filter_Operators>;
  props_func?: InputMaybe<Count_Function_Filter_Operators>;
  settings?: InputMaybe<Block_Settings_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Block_Custom_Components_Mutated = {
  __typename?: 'block_custom_components_mutated';
  data?: Maybe<Block_Custom_Components>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Settings = {
  __typename?: 'block_settings';
  /** Add an identifier to this block.<br>The identifier should not have any special characters, including spaces.<br>This ID can then be used in urls as hashtag to implement direct scrolling. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Add a short description to help giving more context to editors and help searching this block in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['String']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** This field is used for custom styling.<br>Only accepted value must be used (please consult the user guide).) */
  tokens?: Maybe<Scalars['String']['output']>;
  /** This field is used for custom styling.<br>Only accepted value must be used (please consult the user guide).) */
  variant?: Maybe<Scalars['String']['output']>;
};

export type Block_Settings_Aggregated = {
  __typename?: 'block_settings_aggregated';
  count?: Maybe<Block_Settings_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Settings_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Settings_Aggregated_Count = {
  __typename?: 'block_settings_aggregated_count';
  /** Add an identifier to this block.<br>The identifier should not have any special characters, including spaces.<br>This ID can then be used in urls as hashtag to implement direct scrolling. */
  anchor?: Maybe<Scalars['Int']['output']>;
  /** Add a short description to help giving more context to editors and help searching this block in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['Int']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** This field is used for custom styling.<br>Only accepted value must be used (please consult the user guide).) */
  tokens?: Maybe<Scalars['Int']['output']>;
  /** This field is used for custom styling.<br>Only accepted value must be used (please consult the user guide).) */
  variant?: Maybe<Scalars['Int']['output']>;
};

export type Block_Settings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Settings_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Settings_Filter>>>;
  anchor?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  friendly_id?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  tokens?: InputMaybe<String_Filter_Operators>;
  variant?: InputMaybe<String_Filter_Operators>;
};

export type Block_Settings_Mutated = {
  __typename?: 'block_settings_mutated';
  data?: Maybe<Block_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Wysiwygs = {
  __typename?: 'block_wysiwygs';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  settings?: Maybe<Block_Settings>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};


export type Block_WysiwygsSettingsArgs = {
  filter?: InputMaybe<Block_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Wysiwygs_Aggregated = {
  __typename?: 'block_wysiwygs_aggregated';
  avg?: Maybe<Block_Wysiwygs_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Wysiwygs_Aggregated_Fields>;
  count?: Maybe<Block_Wysiwygs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Wysiwygs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Wysiwygs_Aggregated_Fields>;
  min?: Maybe<Block_Wysiwygs_Aggregated_Fields>;
  sum?: Maybe<Block_Wysiwygs_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Wysiwygs_Aggregated_Fields>;
};

export type Block_Wysiwygs_Aggregated_Count = {
  __typename?: 'block_wysiwygs_aggregated_count';
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  settings?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Block_Wysiwygs_Aggregated_Fields = {
  __typename?: 'block_wysiwygs_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Wysiwygs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Wysiwygs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Wysiwygs_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  settings?: InputMaybe<Block_Settings_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Block_Wysiwygs_Mutated = {
  __typename?: 'block_wysiwygs_mutated';
  data?: Maybe<Block_Wysiwygs>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Categories = {
  __typename?: 'categories';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Add a short description to help giving more context to editors and help searching in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['String']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  page_settings?: Maybe<Page_Settings>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Categories_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  type?: Maybe<Category_Types>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};


export type CategoriesPage_SettingsArgs = {
  filter?: InputMaybe<Page_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoriesTranslationsArgs = {
  filter?: InputMaybe<Categories_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoriesTypeArgs = {
  filter?: InputMaybe<Category_Types_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Categories_Aggregated = {
  __typename?: 'categories_aggregated';
  avg?: Maybe<Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Aggregated_Fields>;
  count?: Maybe<Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Categories_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Categories_Aggregated_Fields>;
  min?: Maybe<Categories_Aggregated_Fields>;
  sum?: Maybe<Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Aggregated_Fields>;
};

export type Categories_Aggregated_Count = {
  __typename?: 'categories_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  /** Add a short description to help giving more context to editors and help searching in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['Int']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  page_settings?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Categories_Aggregated_Fields = {
  __typename?: 'categories_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  friendly_id?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  page_settings?: InputMaybe<Page_Settings_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Categories_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  type?: InputMaybe<Category_Types_Filter>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Categories_Mutated = {
  __typename?: 'categories_mutated';
  data?: Maybe<Categories>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Categories_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _none?: InputMaybe<Categories_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _some?: InputMaybe<Categories_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  friendly_id?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  page_settings?: InputMaybe<Page_Settings_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Categories_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  type?: InputMaybe<Category_Types_Filter>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Categories_Translations = {
  __typename?: 'categories_translations';
  categories_id?: Maybe<Categories>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Categories_TranslationsCategories_IdArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Categories_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Categories_Translations_Aggregated = {
  __typename?: 'categories_translations_aggregated';
  avg?: Maybe<Categories_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Translations_Aggregated_Fields>;
  count?: Maybe<Categories_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Categories_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Categories_Translations_Aggregated_Fields>;
  min?: Maybe<Categories_Translations_Aggregated_Fields>;
  sum?: Maybe<Categories_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Translations_Aggregated_Fields>;
};

export type Categories_Translations_Aggregated_Count = {
  __typename?: 'categories_translations_aggregated_count';
  categories_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Categories_Translations_Aggregated_Fields = {
  __typename?: 'categories_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Categories_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Translations_Filter>>>;
  categories_id?: InputMaybe<Categories_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Categories_Translations_Mutated = {
  __typename?: 'categories_translations_mutated';
  data?: Maybe<Categories_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Categories_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Translations_Filter>>>;
  _none?: InputMaybe<Categories_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Translations_Filter>>>;
  _some?: InputMaybe<Categories_Translations_Filter>;
  categories_id?: InputMaybe<Categories_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Category_Types = {
  __typename?: 'category_types';
  categories?: Maybe<Array<Maybe<Categories>>>;
  categories_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Add a short description to help giving more context to editors and help searching in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['String']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Category_Types_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};


export type Category_TypesCategoriesArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Category_TypesTranslationsArgs = {
  filter?: InputMaybe<Category_Types_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Types_Aggregated = {
  __typename?: 'category_types_aggregated';
  avg?: Maybe<Category_Types_Aggregated_Fields>;
  avgDistinct?: Maybe<Category_Types_Aggregated_Fields>;
  count?: Maybe<Category_Types_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Category_Types_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Category_Types_Aggregated_Fields>;
  min?: Maybe<Category_Types_Aggregated_Fields>;
  sum?: Maybe<Category_Types_Aggregated_Fields>;
  sumDistinct?: Maybe<Category_Types_Aggregated_Fields>;
};

export type Category_Types_Aggregated_Count = {
  __typename?: 'category_types_aggregated_count';
  categories?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  /** Add a short description to help giving more context to editors and help searching in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['Int']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Category_Types_Aggregated_Fields = {
  __typename?: 'category_types_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Category_Types_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Types_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Category_Types_Filter>>>;
  categories?: InputMaybe<Categories_Quantifier_Filter>;
  categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  friendly_id?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Category_Types_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Category_Types_Mutated = {
  __typename?: 'category_types_mutated';
  data?: Maybe<Category_Types>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Category_Types_Translations = {
  __typename?: 'category_types_translations';
  category_types_id?: Maybe<Category_Types>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Category_Types_TranslationsCategory_Types_IdArgs = {
  filter?: InputMaybe<Category_Types_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Category_Types_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Types_Translations_Aggregated = {
  __typename?: 'category_types_translations_aggregated';
  avg?: Maybe<Category_Types_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Category_Types_Translations_Aggregated_Fields>;
  count?: Maybe<Category_Types_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Category_Types_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Category_Types_Translations_Aggregated_Fields>;
  min?: Maybe<Category_Types_Translations_Aggregated_Fields>;
  sum?: Maybe<Category_Types_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Category_Types_Translations_Aggregated_Fields>;
};

export type Category_Types_Translations_Aggregated_Count = {
  __typename?: 'category_types_translations_aggregated_count';
  category_types_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Category_Types_Translations_Aggregated_Fields = {
  __typename?: 'category_types_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Category_Types_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Types_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Category_Types_Translations_Filter>>>;
  category_types_id?: InputMaybe<Category_Types_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Category_Types_Translations_Mutated = {
  __typename?: 'category_types_translations_mutated';
  data?: Maybe<Category_Types_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Category_Types_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Types_Translations_Filter>>>;
  _none?: InputMaybe<Category_Types_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Category_Types_Translations_Filter>>>;
  _some?: InputMaybe<Category_Types_Translations_Filter>;
  category_types_id?: InputMaybe<Category_Types_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  /** HTML content extracted from DOCX file */
  docx_html?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['ID']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['ID']['output']>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tus_data?: Maybe<Scalars['JSON']['output']>;
  tus_data_func?: Maybe<Count_Functions>;
  tus_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Scalars['ID']['output']>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  created_on?: InputMaybe<Date_Filter_Operators>;
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  docx_html?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<Id_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Id_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  thumbhash?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  tus_data?: InputMaybe<String_Filter_Operators>;
  tus_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  tus_id?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Id_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Id_Filter_Operators = {
  _contains?: InputMaybe<Scalars['ID']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['ID']['input']>;
  _eq?: InputMaybe<Scalars['ID']['input']>;
  _icontains?: InputMaybe<Scalars['ID']['input']>;
  _iends_with?: InputMaybe<Scalars['ID']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['ID']['input']>;
  _ncontains?: InputMaybe<Scalars['ID']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['ID']['input']>;
  _neq?: InputMaybe<Scalars['ID']['input']>;
  _niends_with?: InputMaybe<Scalars['ID']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['ID']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['ID']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type Languages = {
  __typename?: 'languages';
  code: Scalars['ID']['output'];
  direction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Languages_Aggregated = {
  __typename?: 'languages_aggregated';
  count?: Maybe<Languages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Languages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Languages_Aggregated_Count = {
  __typename?: 'languages_aggregated_count';
  code?: Maybe<Scalars['Int']['output']>;
  direction?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  direction?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Languages_Mutated = {
  __typename?: 'languages_mutated';
  data?: Maybe<Languages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Links = {
  __typename?: 'links';
  anchor?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Page_Settings>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** $t:common_fields_description_note */
  description?: Maybe<Scalars['String']['output']>;
  /** $t:links_external_link_note */
  external_link?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Array<Maybe<Search_Params>>>;
  params_func?: Maybe<Count_Functions>;
  prefetch?: Maybe<Scalars['Boolean']['output']>;
  replace?: Maybe<Scalars['Boolean']['output']>;
  scroll?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};


export type LinksCollectionArgs = {
  filter?: InputMaybe<Page_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LinksFileArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LinksParamsArgs = {
  filter?: InputMaybe<Search_Params_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Links_Aggregated = {
  __typename?: 'links_aggregated';
  avg?: Maybe<Links_Aggregated_Fields>;
  avgDistinct?: Maybe<Links_Aggregated_Fields>;
  count?: Maybe<Links_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Links_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Links_Aggregated_Fields>;
  min?: Maybe<Links_Aggregated_Fields>;
  sum?: Maybe<Links_Aggregated_Fields>;
  sumDistinct?: Maybe<Links_Aggregated_Fields>;
};

export type Links_Aggregated_Count = {
  __typename?: 'links_aggregated_count';
  anchor?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  /** $t:common_fields_description_note */
  description?: Maybe<Scalars['Int']['output']>;
  /** $t:links_external_link_note */
  external_link?: Maybe<Scalars['Int']['output']>;
  /** $t:links_file_note */
  file?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  params?: Maybe<Scalars['Int']['output']>;
  prefetch?: Maybe<Scalars['Int']['output']>;
  replace?: Maybe<Scalars['Int']['output']>;
  scroll?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Links_Aggregated_Fields = {
  __typename?: 'links_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Links_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Links_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Links_Filter>>>;
  anchor?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<Page_Settings_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  external_link?: InputMaybe<String_Filter_Operators>;
  file?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  params?: InputMaybe<Search_Params_Quantifier_Filter>;
  params_func?: InputMaybe<Count_Function_Filter_Operators>;
  prefetch?: InputMaybe<Boolean_Filter_Operators>;
  replace?: InputMaybe<Boolean_Filter_Operators>;
  scroll?: InputMaybe<Boolean_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  target?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Links_Mutated = {
  __typename?: 'links_mutated';
  data?: Maybe<Links>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Navigation_Items = {
  __typename?: 'navigation_items';
  children?: Maybe<Array<Maybe<Navigation_Items>>>;
  children_func?: Maybe<Count_Functions>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  link?: Maybe<Links>;
  parent?: Maybe<Navigation_Items>;
  sort?: Maybe<Scalars['Int']['output']>;
  /** $t:navigation_items_tokens_note */
  tokens?: Maybe<Scalars['JSON']['output']>;
  tokens_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
  /** $t:navigation_items_variant_note */
  variant?: Maybe<Scalars['String']['output']>;
};


export type Navigation_ItemsChildrenArgs = {
  filter?: InputMaybe<Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Navigation_ItemsLinkArgs = {
  filter?: InputMaybe<Links_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Navigation_ItemsParentArgs = {
  filter?: InputMaybe<Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Navigation_Items_Aggregated = {
  __typename?: 'navigation_items_aggregated';
  avg?: Maybe<Navigation_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Navigation_Items_Aggregated_Fields>;
  count?: Maybe<Navigation_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Navigation_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Navigation_Items_Aggregated_Fields>;
  min?: Maybe<Navigation_Items_Aggregated_Fields>;
  sum?: Maybe<Navigation_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Navigation_Items_Aggregated_Fields>;
};

export type Navigation_Items_Aggregated_Count = {
  __typename?: 'navigation_items_aggregated_count';
  children?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  /** $t:navigation_items_tokens_note */
  tokens?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  /** $t:navigation_items_variant_note */
  variant?: Maybe<Scalars['Int']['output']>;
};

export type Navigation_Items_Aggregated_Fields = {
  __typename?: 'navigation_items_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Navigation_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigation_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Navigation_Items_Filter>>>;
  children?: InputMaybe<Navigation_Items_Quantifier_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  link?: InputMaybe<Links_Filter>;
  parent?: InputMaybe<Navigation_Items_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  tokens?: InputMaybe<String_Filter_Operators>;
  tokens_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
  variant?: InputMaybe<String_Filter_Operators>;
};

export type Navigation_Items_Mutated = {
  __typename?: 'navigation_items_mutated';
  data?: Maybe<Navigation_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Navigation_Items_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigation_Items_Filter>>>;
  _none?: InputMaybe<Navigation_Items_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Navigation_Items_Filter>>>;
  _some?: InputMaybe<Navigation_Items_Filter>;
  children?: InputMaybe<Navigation_Items_Quantifier_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  link?: InputMaybe<Links_Filter>;
  parent?: InputMaybe<Navigation_Items_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  tokens?: InputMaybe<String_Filter_Operators>;
  tokens_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
  variant?: InputMaybe<String_Filter_Operators>;
};

export type Navigations = {
  __typename?: 'navigations';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Add a short description to help giving more context to editors and help searching in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** $t:navigations_location_note */
  location?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Navigations_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};


export type NavigationsTranslationsArgs = {
  filter?: InputMaybe<Navigations_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Navigations_Aggregated = {
  __typename?: 'navigations_aggregated';
  avg?: Maybe<Navigations_Aggregated_Fields>;
  avgDistinct?: Maybe<Navigations_Aggregated_Fields>;
  count?: Maybe<Navigations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Navigations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Navigations_Aggregated_Fields>;
  min?: Maybe<Navigations_Aggregated_Fields>;
  sum?: Maybe<Navigations_Aggregated_Fields>;
  sumDistinct?: Maybe<Navigations_Aggregated_Fields>;
};

export type Navigations_Aggregated_Count = {
  __typename?: 'navigations_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  /** Add a short description to help giving more context to editors and help searching in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** $t:navigations_location_note */
  location?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Navigations_Aggregated_Fields = {
  __typename?: 'navigations_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Navigations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Navigations_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Navigations_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Navigations_Mutated = {
  __typename?: 'navigations_mutated';
  data?: Maybe<Navigations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Navigations_Translations = {
  __typename?: 'navigations_translations';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<Navigations_Translations_Items>>>;
  items_func?: Maybe<Count_Functions>;
  label?: Maybe<Scalars['String']['output']>;
  languages_code?: Maybe<Languages>;
  navigations_id?: Maybe<Navigations>;
};


export type Navigations_TranslationsItemsArgs = {
  filter?: InputMaybe<Navigations_Translations_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Navigations_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Navigations_TranslationsNavigations_IdArgs = {
  filter?: InputMaybe<Navigations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Navigations_Translations_Aggregated = {
  __typename?: 'navigations_translations_aggregated';
  avg?: Maybe<Navigations_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Navigations_Translations_Aggregated_Fields>;
  count?: Maybe<Navigations_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Navigations_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Navigations_Translations_Aggregated_Fields>;
  min?: Maybe<Navigations_Translations_Aggregated_Fields>;
  sum?: Maybe<Navigations_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Navigations_Translations_Aggregated_Fields>;
};

export type Navigations_Translations_Aggregated_Count = {
  __typename?: 'navigations_translations_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  navigations_id?: Maybe<Scalars['Int']['output']>;
};

export type Navigations_Translations_Aggregated_Fields = {
  __typename?: 'navigations_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Navigations_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigations_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Navigations_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  items?: InputMaybe<Navigations_Translations_Items_Quantifier_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  navigations_id?: InputMaybe<Navigations_Filter>;
};

export type Navigations_Translations_Items = {
  __typename?: 'navigations_translations_items';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Navigations_Translations_Items_Item_Union>;
  navigations_translations_id?: Maybe<Navigations_Translations>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Navigations_Translations_ItemsNavigations_Translations_IdArgs = {
  filter?: InputMaybe<Navigations_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Navigations_Translations_Items_Aggregated = {
  __typename?: 'navigations_translations_items_aggregated';
  avg?: Maybe<Navigations_Translations_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Navigations_Translations_Items_Aggregated_Fields>;
  count?: Maybe<Navigations_Translations_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Navigations_Translations_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Navigations_Translations_Items_Aggregated_Fields>;
  min?: Maybe<Navigations_Translations_Items_Aggregated_Fields>;
  sum?: Maybe<Navigations_Translations_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Navigations_Translations_Items_Aggregated_Fields>;
};

export type Navigations_Translations_Items_Aggregated_Count = {
  __typename?: 'navigations_translations_items_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  navigations_translations_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Navigations_Translations_Items_Aggregated_Fields = {
  __typename?: 'navigations_translations_items_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  navigations_translations_id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Navigations_Translations_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigations_Translations_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Navigations_Translations_Items_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__navigation_items?: InputMaybe<Navigation_Items_Filter>;
  navigations_translations_id?: InputMaybe<Navigations_Translations_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Navigations_Translations_Items_Item_Union = Navigation_Items;

export type Navigations_Translations_Items_Mutated = {
  __typename?: 'navigations_translations_items_mutated';
  data?: Maybe<Navigations_Translations_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Navigations_Translations_Items_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigations_Translations_Items_Filter>>>;
  _none?: InputMaybe<Navigations_Translations_Items_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Navigations_Translations_Items_Filter>>>;
  _some?: InputMaybe<Navigations_Translations_Items_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__navigation_items?: InputMaybe<Navigation_Items_Filter>;
  navigations_translations_id?: InputMaybe<Navigations_Translations_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Navigations_Translations_Mutated = {
  __typename?: 'navigations_translations_mutated';
  data?: Maybe<Navigations_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Navigations_Translations_Navigation_Items = {
  __typename?: 'navigations_translations_navigation_items';
  id: Scalars['ID']['output'];
  navigation_items_id?: Maybe<Navigation_Items>;
  navigations_translations_id?: Maybe<Navigations_Translations>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Navigations_Translations_Navigation_ItemsNavigation_Items_IdArgs = {
  filter?: InputMaybe<Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Navigations_Translations_Navigation_ItemsNavigations_Translations_IdArgs = {
  filter?: InputMaybe<Navigations_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Navigations_Translations_Navigation_Items_Aggregated = {
  __typename?: 'navigations_translations_navigation_items_aggregated';
  avg?: Maybe<Navigations_Translations_Navigation_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Navigations_Translations_Navigation_Items_Aggregated_Fields>;
  count?: Maybe<Navigations_Translations_Navigation_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Navigations_Translations_Navigation_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Navigations_Translations_Navigation_Items_Aggregated_Fields>;
  min?: Maybe<Navigations_Translations_Navigation_Items_Aggregated_Fields>;
  sum?: Maybe<Navigations_Translations_Navigation_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Navigations_Translations_Navigation_Items_Aggregated_Fields>;
};

export type Navigations_Translations_Navigation_Items_Aggregated_Count = {
  __typename?: 'navigations_translations_navigation_items_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  navigation_items_id?: Maybe<Scalars['Int']['output']>;
  navigations_translations_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Navigations_Translations_Navigation_Items_Aggregated_Fields = {
  __typename?: 'navigations_translations_navigation_items_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  navigations_translations_id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Navigations_Translations_Navigation_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigations_Translations_Navigation_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Navigations_Translations_Navigation_Items_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  navigation_items_id?: InputMaybe<Navigation_Items_Filter>;
  navigations_translations_id?: InputMaybe<Navigations_Translations_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Navigations_Translations_Navigation_Items_Mutated = {
  __typename?: 'navigations_translations_navigation_items_mutated';
  data?: Maybe<Navigations_Translations_Navigation_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Navigations_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigations_Translations_Filter>>>;
  _none?: InputMaybe<Navigations_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Navigations_Translations_Filter>>>;
  _some?: InputMaybe<Navigations_Translations_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  items?: InputMaybe<Navigations_Translations_Items_Quantifier_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  navigations_id?: InputMaybe<Navigations_Filter>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Page_Settings = {
  __typename?: 'page_settings';
  belongs_to_collection?: Maybe<Scalars['String']['output']>;
  belongs_to_key?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  reviewer?: Maybe<Scalars['ID']['output']>;
  revision_status?: Maybe<Scalars['String']['output']>;
  route?: Maybe<Routes>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Array<Maybe<Page_Settings_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};


export type Page_SettingsRouteArgs = {
  filter?: InputMaybe<Routes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_SettingsTranslationsArgs = {
  filter?: InputMaybe<Page_Settings_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Settings_Aggregated = {
  __typename?: 'page_settings_aggregated';
  avg?: Maybe<Page_Settings_Aggregated_Fields>;
  avgDistinct?: Maybe<Page_Settings_Aggregated_Fields>;
  count?: Maybe<Page_Settings_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Page_Settings_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Page_Settings_Aggregated_Fields>;
  min?: Maybe<Page_Settings_Aggregated_Fields>;
  sum?: Maybe<Page_Settings_Aggregated_Fields>;
  sumDistinct?: Maybe<Page_Settings_Aggregated_Fields>;
};

export type Page_Settings_Aggregated_Count = {
  __typename?: 'page_settings_aggregated_count';
  belongs_to_collection?: Maybe<Scalars['Int']['output']>;
  belongs_to_key?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  reviewer?: Maybe<Scalars['Int']['output']>;
  revision_status?: Maybe<Scalars['Int']['output']>;
  route?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Page_Settings_Aggregated_Fields = {
  __typename?: 'page_settings_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Page_Settings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Settings_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Settings_Filter>>>;
  belongs_to_collection?: InputMaybe<String_Filter_Operators>;
  belongs_to_key?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  reviewer?: InputMaybe<Id_Filter_Operators>;
  revision_status?: InputMaybe<String_Filter_Operators>;
  route?: InputMaybe<Routes_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Page_Settings_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Page_Settings_Mutated = {
  __typename?: 'page_settings_mutated';
  data?: Maybe<Page_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Page_Settings_Translations = {
  __typename?: 'page_settings_translations';
  canonical_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  meta_description?: Maybe<Scalars['String']['output']>;
  no_follow?: Maybe<Scalars['Boolean']['output']>;
  no_index?: Maybe<Scalars['Boolean']['output']>;
  og_image?: Maybe<Directus_Files>;
  page_settings_id?: Maybe<Page_Settings>;
  path?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Page_Settings_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_Settings_TranslationsOg_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_Settings_TranslationsPage_Settings_IdArgs = {
  filter?: InputMaybe<Page_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Settings_Translations_Aggregated = {
  __typename?: 'page_settings_translations_aggregated';
  avg?: Maybe<Page_Settings_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Page_Settings_Translations_Aggregated_Fields>;
  count?: Maybe<Page_Settings_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Page_Settings_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Page_Settings_Translations_Aggregated_Fields>;
  min?: Maybe<Page_Settings_Translations_Aggregated_Fields>;
  sum?: Maybe<Page_Settings_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Page_Settings_Translations_Aggregated_Fields>;
};

export type Page_Settings_Translations_Aggregated_Count = {
  __typename?: 'page_settings_translations_aggregated_count';
  canonical_url?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  meta_description?: Maybe<Scalars['Int']['output']>;
  no_follow?: Maybe<Scalars['Int']['output']>;
  no_index?: Maybe<Scalars['Int']['output']>;
  og_image?: Maybe<Scalars['Int']['output']>;
  page_settings_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Page_Settings_Translations_Aggregated_Fields = {
  __typename?: 'page_settings_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Page_Settings_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Settings_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Settings_Translations_Filter>>>;
  canonical_url?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  no_follow?: InputMaybe<Boolean_Filter_Operators>;
  no_index?: InputMaybe<Boolean_Filter_Operators>;
  og_image?: InputMaybe<Directus_Files_Filter>;
  page_settings_id?: InputMaybe<Page_Settings_Filter>;
  path?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Page_Settings_Translations_Mutated = {
  __typename?: 'page_settings_translations_mutated';
  data?: Maybe<Page_Settings_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Page_Settings_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Settings_Translations_Filter>>>;
  _none?: InputMaybe<Page_Settings_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Page_Settings_Translations_Filter>>>;
  _some?: InputMaybe<Page_Settings_Translations_Filter>;
  canonical_url?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  no_follow?: InputMaybe<Boolean_Filter_Operators>;
  no_index?: InputMaybe<Boolean_Filter_Operators>;
  og_image?: InputMaybe<Directus_Files_Filter>;
  page_settings_id?: InputMaybe<Page_Settings_Filter>;
  path?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Pages = {
  __typename?: 'pages';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  page_settings?: Maybe<Page_Settings>;
  parent?: Maybe<Pages>;
  /** Schedule the day and time of publication for this content. */
  published_at?: Maybe<Scalars['Date']['output']>;
  published_at_func?: Maybe<Datetime_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Pages_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
  /** THIS FIELD WILL BE REMOVED AFTER THE DATA MIGRATION */
  wordpress_id?: Maybe<Scalars['Int']['output']>;
};


export type PagesPage_SettingsArgs = {
  filter?: InputMaybe<Page_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PagesParentArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PagesTranslationsArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Aggregated = {
  __typename?: 'pages_aggregated';
  avg?: Maybe<Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Aggregated_Fields>;
  count?: Maybe<Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pages_Aggregated_Fields>;
  min?: Maybe<Pages_Aggregated_Fields>;
  sum?: Maybe<Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Aggregated_Fields>;
};

export type Pages_Aggregated_Count = {
  __typename?: 'pages_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  page_settings?: Maybe<Scalars['Int']['output']>;
  /** Select the parent page (if applicable). */
  parent?: Maybe<Scalars['Int']['output']>;
  /** Schedule the day and time of publication for this content. */
  published_at?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  /** THIS FIELD WILL BE REMOVED AFTER THE DATA MIGRATION */
  wordpress_id?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Aggregated_Fields = {
  __typename?: 'pages_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
  /** THIS FIELD WILL BE REMOVED AFTER THE DATA MIGRATION */
  wordpress_id?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  friendly_id?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  page_settings?: InputMaybe<Page_Settings_Filter>;
  parent?: InputMaybe<Pages_Filter>;
  published_at?: InputMaybe<Date_Filter_Operators>;
  published_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Pages_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
  wordpress_id?: InputMaybe<Number_Filter_Operators>;
};

export type Pages_Mutated = {
  __typename?: 'pages_mutated';
  data?: Maybe<Pages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pages_Translations = {
  __typename?: 'pages_translations';
  blocks?: Maybe<Array<Maybe<Pages_Translations_Blocks>>>;
  blocks_func?: Maybe<Count_Functions>;
  featured_image?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  /** Add a short description to help giving more context to editors and help finding the page in the CMS.<br>This field is only used in the CMS, not on the website. */
  page_description?: Maybe<Scalars['String']['output']>;
  pages_id?: Maybe<Pages>;
  title: Scalars['String']['output'];
};


export type Pages_TranslationsBlocksArgs = {
  filter?: InputMaybe<Pages_Translations_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pages_TranslationsFeatured_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pages_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pages_TranslationsPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Translations_Aggregated = {
  __typename?: 'pages_translations_aggregated';
  avg?: Maybe<Pages_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Translations_Aggregated_Fields>;
  count?: Maybe<Pages_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pages_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pages_Translations_Aggregated_Fields>;
  min?: Maybe<Pages_Translations_Aggregated_Fields>;
  sum?: Maybe<Pages_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Translations_Aggregated_Fields>;
};

export type Pages_Translations_Aggregated_Count = {
  __typename?: 'pages_translations_aggregated_count';
  /** Content blocks that will be displayed on the page. */
  blocks?: Maybe<Scalars['Int']['output']>;
  /** The featured image is used in the context of search results on the Advertising Sales and Corporate sections of the website. */
  featured_image?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  /** Add a short description to help giving more context to editors and help finding the page in the CMS.<br>This field is only used in the CMS, not on the website. */
  page_description?: Maybe<Scalars['Int']['output']>;
  pages_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Translations_Aggregated_Fields = {
  __typename?: 'pages_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Translations_Blocks = {
  __typename?: 'pages_translations_blocks';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Pages_Translations_Blocks_Item_Union>;
  pages_translations_id?: Maybe<Pages_Translations>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Pages_Translations_BlocksPages_Translations_IdArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Translations_Blocks_Aggregated = {
  __typename?: 'pages_translations_blocks_aggregated';
  avg?: Maybe<Pages_Translations_Blocks_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Translations_Blocks_Aggregated_Fields>;
  count?: Maybe<Pages_Translations_Blocks_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pages_Translations_Blocks_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pages_Translations_Blocks_Aggregated_Fields>;
  min?: Maybe<Pages_Translations_Blocks_Aggregated_Fields>;
  sum?: Maybe<Pages_Translations_Blocks_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Translations_Blocks_Aggregated_Fields>;
};

export type Pages_Translations_Blocks_Aggregated_Count = {
  __typename?: 'pages_translations_blocks_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  pages_translations_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Translations_Blocks_Aggregated_Fields = {
  __typename?: 'pages_translations_blocks_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pages_translations_id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Translations_Blocks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Translations_Blocks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Translations_Blocks_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__block_custom_components?: InputMaybe<Block_Custom_Components_Filter>;
  item__block_wysiwygs?: InputMaybe<Block_Wysiwygs_Filter>;
  pages_translations_id?: InputMaybe<Pages_Translations_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Pages_Translations_Blocks_Item_Union = Block_Custom_Components | Block_Wysiwygs;

export type Pages_Translations_Blocks_Mutated = {
  __typename?: 'pages_translations_blocks_mutated';
  data?: Maybe<Pages_Translations_Blocks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pages_Translations_Blocks_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Translations_Blocks_Filter>>>;
  _none?: InputMaybe<Pages_Translations_Blocks_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Translations_Blocks_Filter>>>;
  _some?: InputMaybe<Pages_Translations_Blocks_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__block_custom_components?: InputMaybe<Block_Custom_Components_Filter>;
  item__block_wysiwygs?: InputMaybe<Block_Wysiwygs_Filter>;
  pages_translations_id?: InputMaybe<Pages_Translations_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Pages_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  blocks?: InputMaybe<Pages_Translations_Blocks_Quantifier_Filter>;
  blocks_func?: InputMaybe<Count_Function_Filter_Operators>;
  featured_image?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  page_description?: InputMaybe<String_Filter_Operators>;
  pages_id?: InputMaybe<Pages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Pages_Translations_Mutated = {
  __typename?: 'pages_translations_mutated';
  data?: Maybe<Pages_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pages_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  _none?: InputMaybe<Pages_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  _some?: InputMaybe<Pages_Translations_Filter>;
  blocks?: InputMaybe<Pages_Translations_Blocks_Quantifier_Filter>;
  blocks_func?: InputMaybe<Count_Function_Filter_Operators>;
  featured_image?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  page_description?: InputMaybe<String_Filter_Operators>;
  pages_id?: InputMaybe<Pages_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Redirects = {
  __typename?: 'redirects';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  destination?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isrewrite?: Maybe<Scalars['Boolean']['output']>;
  locale?: Maybe<Scalars['Boolean']['output']>;
  permanent?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Redirects_Aggregated = {
  __typename?: 'redirects_aggregated';
  avg?: Maybe<Redirects_Aggregated_Fields>;
  avgDistinct?: Maybe<Redirects_Aggregated_Fields>;
  count?: Maybe<Redirects_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Redirects_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Redirects_Aggregated_Fields>;
  min?: Maybe<Redirects_Aggregated_Fields>;
  sum?: Maybe<Redirects_Aggregated_Fields>;
  sumDistinct?: Maybe<Redirects_Aggregated_Fields>;
};

export type Redirects_Aggregated_Count = {
  __typename?: 'redirects_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  destination?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isrewrite?: Maybe<Scalars['Int']['output']>;
  locale?: Maybe<Scalars['Int']['output']>;
  permanent?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Redirects_Aggregated_Fields = {
  __typename?: 'redirects_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Redirects_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Redirects_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Redirects_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  destination?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Big_Int_Filter_Operators>;
  isrewrite?: InputMaybe<Boolean_Filter_Operators>;
  locale?: InputMaybe<Boolean_Filter_Operators>;
  permanent?: InputMaybe<Boolean_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  source?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Redirects_Mutated = {
  __typename?: 'redirects_mutated';
  data?: Maybe<Redirects>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Routes = {
  __typename?: 'routes';
  collection_name?: Maybe<Scalars['String']['output']>;
  collection_type?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Array<Maybe<Routes_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};


export type RoutesTranslationsArgs = {
  filter?: InputMaybe<Routes_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Routes_Aggregated = {
  __typename?: 'routes_aggregated';
  avg?: Maybe<Routes_Aggregated_Fields>;
  avgDistinct?: Maybe<Routes_Aggregated_Fields>;
  count?: Maybe<Routes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Routes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Routes_Aggregated_Fields>;
  min?: Maybe<Routes_Aggregated_Fields>;
  sum?: Maybe<Routes_Aggregated_Fields>;
  sumDistinct?: Maybe<Routes_Aggregated_Fields>;
};

export type Routes_Aggregated_Count = {
  __typename?: 'routes_aggregated_count';
  collection_name?: Maybe<Scalars['Int']['output']>;
  collection_type?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Routes_Aggregated_Fields = {
  __typename?: 'routes_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Routes_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Routes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Routes_Filter>>>;
  collection_name?: InputMaybe<String_Filter_Operators>;
  collection_type?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Routes_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
};

export type Routes_Mutated = {
  __typename?: 'routes_mutated';
  data?: Maybe<Routes>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Routes_Translations = {
  __typename?: 'routes_translations';
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  route?: Maybe<Scalars['String']['output']>;
  routes_id?: Maybe<Routes>;
};


export type Routes_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Routes_TranslationsRoutes_IdArgs = {
  filter?: InputMaybe<Routes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Routes_Translations_Aggregated = {
  __typename?: 'routes_translations_aggregated';
  avg?: Maybe<Routes_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Routes_Translations_Aggregated_Fields>;
  count?: Maybe<Routes_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Routes_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Routes_Translations_Aggregated_Fields>;
  min?: Maybe<Routes_Translations_Aggregated_Fields>;
  sum?: Maybe<Routes_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Routes_Translations_Aggregated_Fields>;
};

export type Routes_Translations_Aggregated_Count = {
  __typename?: 'routes_translations_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  route?: Maybe<Scalars['Int']['output']>;
  routes_id?: Maybe<Scalars['Int']['output']>;
};

export type Routes_Translations_Aggregated_Fields = {
  __typename?: 'routes_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Routes_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Routes_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Routes_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  route?: InputMaybe<String_Filter_Operators>;
  routes_id?: InputMaybe<Routes_Filter>;
};

export type Routes_Translations_Mutated = {
  __typename?: 'routes_translations_mutated';
  data?: Maybe<Routes_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Routes_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Routes_Translations_Filter>>>;
  _none?: InputMaybe<Routes_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Routes_Translations_Filter>>>;
  _some?: InputMaybe<Routes_Translations_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  route?: InputMaybe<String_Filter_Operators>;
  routes_id?: InputMaybe<Routes_Filter>;
};

export type Search_Params = {
  __typename?: 'search_params';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  link?: Maybe<Links>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};


export type Search_ParamsLinkArgs = {
  filter?: InputMaybe<Links_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Search_Params_Aggregated = {
  __typename?: 'search_params_aggregated';
  avg?: Maybe<Search_Params_Aggregated_Fields>;
  avgDistinct?: Maybe<Search_Params_Aggregated_Fields>;
  count?: Maybe<Search_Params_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Search_Params_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Search_Params_Aggregated_Fields>;
  min?: Maybe<Search_Params_Aggregated_Fields>;
  sum?: Maybe<Search_Params_Aggregated_Fields>;
  sumDistinct?: Maybe<Search_Params_Aggregated_Fields>;
};

export type Search_Params_Aggregated_Count = {
  __typename?: 'search_params_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type Search_Params_Aggregated_Fields = {
  __typename?: 'search_params_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Search_Params_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Search_Params_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Search_Params_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  link?: InputMaybe<Links_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
  value?: InputMaybe<String_Filter_Operators>;
};

export type Search_Params_Mutated = {
  __typename?: 'search_params_mutated';
  data?: Maybe<Search_Params>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Search_Params_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Search_Params_Filter>>>;
  _none?: InputMaybe<Search_Params_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Search_Params_Filter>>>;
  _some?: InputMaybe<Search_Params_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  link?: InputMaybe<Links_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Id_Filter_Operators>;
  user_updated?: InputMaybe<Id_Filter_Operators>;
  value?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Version_Block_Custom_Components = {
  __typename?: 'version_block_custom_components';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  props?: Maybe<Scalars['JSON']['output']>;
  props_func?: Maybe<Count_Functions>;
  settings?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Version_Block_Settings = {
  __typename?: 'version_block_settings';
  /** Add an identifier to this block.<br>The identifier should not have any special characters, including spaces.<br>This ID can then be used in urls as hashtag to implement direct scrolling. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Add a short description to help giving more context to editors and help searching this block in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['String']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** This field is used for custom styling.<br>Only accepted value must be used (please consult the user guide).) */
  tokens?: Maybe<Scalars['String']['output']>;
  /** This field is used for custom styling.<br>Only accepted value must be used (please consult the user guide).) */
  variant?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Wysiwygs = {
  __typename?: 'version_block_wysiwygs';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  settings?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Version_Categories = {
  __typename?: 'version_categories';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Add a short description to help giving more context to editors and help searching in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['String']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  page_settings?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  type?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Version_Categories_Translations = {
  __typename?: 'version_categories_translations';
  categories_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Category_Types = {
  __typename?: 'version_category_types';
  categories?: Maybe<Scalars['JSON']['output']>;
  categories_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Add a short description to help giving more context to editors and help searching in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['String']['output']>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Version_Category_Types_Translations = {
  __typename?: 'version_category_types_translations';
  category_types_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Languages = {
  __typename?: 'version_languages';
  code: Scalars['ID']['output'];
  direction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Version_Links = {
  __typename?: 'version_links';
  anchor?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** $t:common_fields_description_note */
  description?: Maybe<Scalars['String']['output']>;
  /** $t:links_external_link_note */
  external_link?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Scalars['JSON']['output']>;
  params_func?: Maybe<Count_Functions>;
  prefetch?: Maybe<Scalars['Boolean']['output']>;
  replace?: Maybe<Scalars['Boolean']['output']>;
  scroll?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Version_Navigation_Items = {
  __typename?: 'version_navigation_items';
  children?: Maybe<Scalars['JSON']['output']>;
  children_func?: Maybe<Count_Functions>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  /** $t:navigation_items_tokens_note */
  tokens?: Maybe<Scalars['JSON']['output']>;
  tokens_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
  /** $t:navigation_items_variant_note */
  variant?: Maybe<Scalars['String']['output']>;
};

export type Version_Navigations = {
  __typename?: 'version_navigations';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Add a short description to help giving more context to editors and help searching in the CMS.<br>This field is only used in the CMS, not on the website. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** $t:navigations_location_note */
  location?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Version_Navigations_Translations = {
  __typename?: 'version_navigations_translations';
  id: Scalars['ID']['output'];
  items?: Maybe<Scalars['JSON']['output']>;
  items_func?: Maybe<Count_Functions>;
  label?: Maybe<Scalars['String']['output']>;
  languages_code?: Maybe<Scalars['JSON']['output']>;
  navigations_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Navigations_Translations_Items = {
  __typename?: 'version_navigations_translations_items';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  navigations_translations_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Navigations_Translations_Navigation_Items = {
  __typename?: 'version_navigations_translations_navigation_items';
  id: Scalars['ID']['output'];
  navigation_items_id?: Maybe<Scalars['JSON']['output']>;
  navigations_translations_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Page_Settings = {
  __typename?: 'version_page_settings';
  belongs_to_collection?: Maybe<Scalars['String']['output']>;
  belongs_to_key?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  reviewer?: Maybe<Scalars['ID']['output']>;
  revision_status?: Maybe<Scalars['String']['output']>;
  route?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Version_Page_Settings_Translations = {
  __typename?: 'version_page_settings_translations';
  canonical_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Scalars['JSON']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  no_follow?: Maybe<Scalars['Boolean']['output']>;
  no_index?: Maybe<Scalars['Boolean']['output']>;
  og_image?: Maybe<Scalars['JSON']['output']>;
  page_settings_id?: Maybe<Scalars['JSON']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages = {
  __typename?: 'version_pages';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** This field is used only for development purpose and is not used on the website. */
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  page_settings?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['JSON']['output']>;
  /** Schedule the day and time of publication for this content. */
  published_at?: Maybe<Scalars['Date']['output']>;
  published_at_func?: Maybe<Datetime_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
  /** THIS FIELD WILL BE REMOVED AFTER THE DATA MIGRATION */
  wordpress_id?: Maybe<Scalars['Int']['output']>;
};

export type Version_Pages_Translations = {
  __typename?: 'version_pages_translations';
  blocks?: Maybe<Scalars['JSON']['output']>;
  blocks_func?: Maybe<Count_Functions>;
  featured_image?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Scalars['JSON']['output']>;
  /** Add a short description to help giving more context to editors and help finding the page in the CMS.<br>This field is only used in the CMS, not on the website. */
  page_description?: Maybe<Scalars['String']['output']>;
  pages_id?: Maybe<Scalars['JSON']['output']>;
  title: Scalars['String']['output'];
};

export type Version_Pages_Translations_Blocks = {
  __typename?: 'version_pages_translations_blocks';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  pages_translations_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Redirects = {
  __typename?: 'version_redirects';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  destination?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isrewrite?: Maybe<Scalars['Boolean']['output']>;
  locale?: Maybe<Scalars['Boolean']['output']>;
  permanent?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Version_Routes = {
  __typename?: 'version_routes';
  collection_name?: Maybe<Scalars['String']['output']>;
  collection_type?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
};

export type Version_Routes_Translations = {
  __typename?: 'version_routes_translations';
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Scalars['JSON']['output']>;
  route?: Maybe<Scalars['String']['output']>;
  routes_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Search_Params = {
  __typename?: 'version_search_params';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['ID']['output']>;
  user_updated?: Maybe<Scalars['ID']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type BlockSettingsFragment = { __typename?: 'block_settings', variant?: string | null, tokens?: string | null } & { ' $fragmentName'?: 'BlockSettingsFragment' };

export type BlockWysiwygsFragment = { __typename?: 'block_wysiwygs', id: string, content?: string | null, settings?: (
    { __typename?: 'block_settings' }
    & { ' $fragmentRefs'?: { 'BlockSettingsFragment': BlockSettingsFragment } }
  ) | null } & { ' $fragmentName'?: 'BlockWysiwygsFragment' };

export type BlockWysiwygsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BlockWysiwygsQuery = { __typename?: 'Query', block_wysiwygs_by_id?: (
    { __typename?: 'block_wysiwygs' }
    & { ' $fragmentRefs'?: { 'BlockWysiwygsFragment': BlockWysiwygsFragment } }
  ) | null };

export type DirectusFilesFragment = { __typename?: 'directus_files', id: string, filename_disk?: string | null, filename_download: string, title?: string | null, type?: string | null, width?: number | null, height?: number | null, duration?: number | null, embed?: string | null, description?: string | null, focal_point_x?: number | null, focal_point_y?: number | null, thumbhash?: string | null } & { ' $fragmentName'?: 'DirectusFilesFragment' };

export type SearchParamsFragment = { __typename?: 'search_params', id: string, name?: string | null, value?: string | null } & { ' $fragmentName'?: 'SearchParamsFragment' };

export type LinksFragment = { __typename?: 'links', anchor?: string | null, external_link?: string | null, id: string, label?: string | null, type?: string | null, collection?: (
    { __typename?: 'page_settings' }
    & { ' $fragmentRefs'?: { 'PageSettingsFragment': PageSettingsFragment } }
  ) | null, file?: { __typename?: 'directus_files', id: string, filename_download: string, width?: number | null, height?: number | null } | null, params?: Array<(
    { __typename?: 'search_params' }
    & { ' $fragmentRefs'?: { 'SearchParamsFragment': SearchParamsFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'LinksFragment' };

export type LinkByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type LinkByIdQuery = { __typename?: 'Query', links_by_id?: (
    { __typename?: 'links' }
    & { ' $fragmentRefs'?: { 'LinksFragment': LinksFragment } }
  ) | null };

export type NavigationItemsBaseFragment = { __typename?: 'navigation_items', variant?: string | null, tokens?: any | null, link?: (
    { __typename?: 'links' }
    & { ' $fragmentRefs'?: { 'LinksFragment': LinksFragment } }
  ) | null } & { ' $fragmentName'?: 'NavigationItemsBaseFragment' };

export type NavigationItemsFragment = { __typename?: 'navigation_items', variant?: string | null, tokens?: any | null, link?: (
    { __typename?: 'links' }
    & { ' $fragmentRefs'?: { 'LinksFragment': LinksFragment } }
  ) | null, children?: Array<(
    { __typename?: 'navigation_items', children?: Array<(
      { __typename?: 'navigation_items' }
      & { ' $fragmentRefs'?: { 'NavigationItemsBaseFragment': NavigationItemsBaseFragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'NavigationItemsBaseFragment': NavigationItemsBaseFragment } }
  ) | null> | null, parent?: (
    { __typename?: 'navigation_items', parent?: (
      { __typename?: 'navigation_items' }
      & { ' $fragmentRefs'?: { 'NavigationItemsBaseFragment': NavigationItemsBaseFragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'NavigationItemsBaseFragment': NavigationItemsBaseFragment } }
  ) | null } & { ' $fragmentName'?: 'NavigationItemsFragment' };

export type NavigationItemsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Navigation_Items_Filter>;
}>;


export type NavigationItemsQuery = { __typename?: 'Query', navigation_items: Array<(
    { __typename?: 'navigation_items' }
    & { ' $fragmentRefs'?: { 'NavigationItemsFragment': NavigationItemsFragment } }
  )> };

export type PageSettingsFragment = { __typename?: 'page_settings', id: string, belongs_to_collection?: string | null, belongs_to_key?: string | null, translations?: Array<{ __typename?: 'page_settings_translations', path?: string | null, title?: string | null, slug?: string | null, languages_code?: { __typename?: 'languages', code: string } | null } | null> | null } & { ' $fragmentName'?: 'PageSettingsFragment' };

export type PageFragment = { __typename?: 'pages', translations?: Array<{ __typename?: 'pages_translations', title: string } | null> | null, page_settings?: (
    { __typename?: 'page_settings' }
    & { ' $fragmentRefs'?: { 'PageSettingsFragment': PageSettingsFragment } }
  ) | null } & { ' $fragmentName'?: 'PageFragment' };

export type PageByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
}>;


export type PageByIdQuery = { __typename?: 'Query', pages_by_id?: (
    { __typename?: 'pages' }
    & { ' $fragmentRefs'?: { 'PageFragment': PageFragment } }
  ) | null };

export type PageByIdWithoutFragmentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
}>;


export type PageByIdWithoutFragmentQuery = { __typename?: 'Query', pages_by_id?: { __typename?: 'pages', translations?: Array<{ __typename?: 'pages_translations', title: string } | null> | null, page_settings?: (
      { __typename?: 'page_settings' }
      & { ' $fragmentRefs'?: { 'PageSettingsFragment': PageSettingsFragment } }
    ) | null } | null };

export const BlockSettingsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"}}]}}]} as unknown as DocumentNode<BlockSettingsFragment, unknown>;
export const BlockWysiwygsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockWysiwygs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_wysiwygs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockSettings"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"}}]}}]} as unknown as DocumentNode<BlockWysiwygsFragment, unknown>;
export const DirectusFilesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DirectusFiles"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_disk"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"embed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point_x"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point_y"}},{"kind":"Field","name":{"kind":"Name","value":"thumbhash"}}]}}]} as unknown as DocumentNode<DirectusFilesFragment, unknown>;
export const PageSettingsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PageSettingsFragment, unknown>;
export const SearchParamsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchParams"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"search_params"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<SearchParamsFragment, unknown>;
export const LinksFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Links"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"links"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"external_link"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"params"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchParams"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchParams"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"search_params"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<LinksFragment, unknown>;
export const NavigationItemsBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationItemsBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"navigation_items"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Links"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchParams"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"search_params"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Links"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"links"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"external_link"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"params"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchParams"}}]}}]}}]} as unknown as DocumentNode<NavigationItemsBaseFragment, unknown>;
export const NavigationItemsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationItems"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"navigation_items"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Links"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItemsBase"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItemsBase"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItemsBase"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItemsBase"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchParams"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"search_params"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Links"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"links"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"external_link"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"params"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchParams"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationItemsBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"navigation_items"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Links"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"}}]}}]} as unknown as DocumentNode<NavigationItemsFragment, unknown>;
export const PageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pages"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"belongs_to_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nnull"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PageFragment, unknown>;
export const BlockWysiwygsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlockWysiwygs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_wysiwygs_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockWysiwygs"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockWysiwygs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_wysiwygs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockSettings"}}]}}]}}]} as unknown as DocumentNode<BlockWysiwygsQuery, BlockWysiwygsQueryVariables>;
export const LinkByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LinkById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Links"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchParams"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"search_params"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Links"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"links"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"external_link"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"params"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchParams"}}]}}]}}]} as unknown as DocumentNode<LinkByIdQuery, LinkByIdQueryVariables>;
export const NavigationItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NavigationItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"navigation_items_filter"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigation_items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchParams"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"search_params"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Links"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"links"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"external_link"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"params"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchParams"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationItemsBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"navigation_items"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Links"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationItems"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"navigation_items"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Links"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItemsBase"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItemsBase"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItemsBase"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItemsBase"}}]}}]}}]}}]} as unknown as DocumentNode<NavigationItemsQuery, NavigationItemsQueryVariables>;
export const PageByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Page"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pages"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"belongs_to_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nnull"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}}]}}]} as unknown as DocumentNode<PageByIdQuery, PageByIdQueryVariables>;
export const PageByIdWithoutFragmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageByIdWithoutFragment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"belongs_to_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nnull"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PageByIdWithoutFragmentQuery, PageByIdWithoutFragmentQueryVariables>;