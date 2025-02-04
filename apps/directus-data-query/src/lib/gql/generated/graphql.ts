/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  activites: Array<Activites>;
  activites_aggregated: Array<Activites_Aggregated>;
  activites_by_id?: Maybe<Activites>;
  activites_by_version?: Maybe<Version_Activites>;
  block_button: Array<Block_Button>;
  block_button_aggregated: Array<Block_Button_Aggregated>;
  block_button_by_id?: Maybe<Block_Button>;
  block_button_by_version?: Maybe<Version_Block_Button>;
  block_button_group: Array<Block_Button_Group>;
  block_button_group_aggregated: Array<Block_Button_Group_Aggregated>;
  block_button_group_by_id?: Maybe<Block_Button_Group>;
  block_button_group_by_version?: Maybe<Version_Block_Button_Group>;
  block_columns: Array<Block_Columns>;
  block_columns_aggregated: Array<Block_Columns_Aggregated>;
  block_columns_by_id?: Maybe<Block_Columns>;
  block_columns_by_version?: Maybe<Version_Block_Columns>;
  block_columns_rows: Array<Block_Columns_Rows>;
  block_columns_rows_aggregated: Array<Block_Columns_Rows_Aggregated>;
  block_columns_rows_by_id?: Maybe<Block_Columns_Rows>;
  block_columns_rows_by_version?: Maybe<Version_Block_Columns_Rows>;
  block_cta: Array<Block_Cta>;
  block_cta_aggregated: Array<Block_Cta_Aggregated>;
  block_cta_by_id?: Maybe<Block_Cta>;
  block_cta_by_version?: Maybe<Version_Block_Cta>;
  block_divider: Array<Block_Divider>;
  block_divider_aggregated: Array<Block_Divider_Aggregated>;
  block_divider_by_id?: Maybe<Block_Divider>;
  block_divider_by_version?: Maybe<Version_Block_Divider>;
  block_faqs: Array<Block_Faqs>;
  block_faqs_aggregated: Array<Block_Faqs_Aggregated>;
  block_faqs_by_id?: Maybe<Block_Faqs>;
  block_faqs_by_version?: Maybe<Version_Block_Faqs>;
  block_files: Array<Block_Files>;
  block_files_aggregated: Array<Block_Files_Aggregated>;
  block_files_by_id?: Maybe<Block_Files>;
  block_files_by_version?: Maybe<Version_Block_Files>;
  block_files_files: Array<Block_Files_Files>;
  block_files_files_aggregated: Array<Block_Files_Files_Aggregated>;
  block_files_files_by_id?: Maybe<Block_Files_Files>;
  block_files_files_by_version?: Maybe<Version_Block_Files_Files>;
  block_form: Array<Block_Form>;
  block_form_aggregated: Array<Block_Form_Aggregated>;
  block_form_by_id?: Maybe<Block_Form>;
  block_form_by_version?: Maybe<Version_Block_Form>;
  block_gallery: Array<Block_Gallery>;
  block_gallery_aggregated: Array<Block_Gallery_Aggregated>;
  block_gallery_by_id?: Maybe<Block_Gallery>;
  block_gallery_by_version?: Maybe<Version_Block_Gallery>;
  block_gallery_files: Array<Block_Gallery_Files>;
  block_gallery_files_aggregated: Array<Block_Gallery_Files_Aggregated>;
  block_gallery_files_by_id?: Maybe<Block_Gallery_Files>;
  block_gallery_files_by_version?: Maybe<Version_Block_Gallery_Files>;
  block_hero: Array<Block_Hero>;
  block_hero_aggregated: Array<Block_Hero_Aggregated>;
  block_hero_by_id?: Maybe<Block_Hero>;
  block_hero_by_version?: Maybe<Version_Block_Hero>;
  block_html: Array<Block_Html>;
  block_html_aggregated: Array<Block_Html_Aggregated>;
  block_html_by_id?: Maybe<Block_Html>;
  block_html_by_version?: Maybe<Version_Block_Html>;
  block_logocloud: Array<Block_Logocloud>;
  block_logocloud_aggregated: Array<Block_Logocloud_Aggregated>;
  block_logocloud_by_id?: Maybe<Block_Logocloud>;
  block_logocloud_by_version?: Maybe<Version_Block_Logocloud>;
  block_logocloud_logos: Array<Block_Logocloud_Logos>;
  block_logocloud_logos_aggregated: Array<Block_Logocloud_Logos_Aggregated>;
  block_logocloud_logos_by_id?: Maybe<Block_Logocloud_Logos>;
  block_logocloud_logos_by_version?: Maybe<Version_Block_Logocloud_Logos>;
  block_quote: Array<Block_Quote>;
  block_quote_aggregated: Array<Block_Quote_Aggregated>;
  block_quote_by_id?: Maybe<Block_Quote>;
  block_quote_by_version?: Maybe<Version_Block_Quote>;
  block_richtext: Array<Block_Richtext>;
  block_richtext_aggregated: Array<Block_Richtext_Aggregated>;
  block_richtext_by_id?: Maybe<Block_Richtext>;
  block_richtext_by_version?: Maybe<Version_Block_Richtext>;
  block_settings: Array<Block_Settings>;
  block_settings_aggregated: Array<Block_Settings_Aggregated>;
  block_settings_by_id?: Maybe<Block_Settings>;
  block_settings_by_version?: Maybe<Version_Block_Settings>;
  block_step_items: Array<Block_Step_Items>;
  block_step_items_aggregated: Array<Block_Step_Items_Aggregated>;
  block_step_items_by_id?: Maybe<Block_Step_Items>;
  block_step_items_by_version?: Maybe<Version_Block_Step_Items>;
  block_steps: Array<Block_Steps>;
  block_steps_aggregated: Array<Block_Steps_Aggregated>;
  block_steps_by_id?: Maybe<Block_Steps>;
  block_steps_by_version?: Maybe<Version_Block_Steps>;
  block_team: Array<Block_Team>;
  block_team_aggregated: Array<Block_Team_Aggregated>;
  block_team_by_id?: Maybe<Block_Team>;
  block_team_by_version?: Maybe<Version_Block_Team>;
  block_testimonial_slider_items: Array<Block_Testimonial_Slider_Items>;
  block_testimonial_slider_items_aggregated: Array<Block_Testimonial_Slider_Items_Aggregated>;
  block_testimonial_slider_items_by_id?: Maybe<Block_Testimonial_Slider_Items>;
  block_testimonial_slider_items_by_version?: Maybe<Version_Block_Testimonial_Slider_Items>;
  block_testimonials: Array<Block_Testimonials>;
  block_testimonials_aggregated: Array<Block_Testimonials_Aggregated>;
  block_testimonials_by_id?: Maybe<Block_Testimonials>;
  block_testimonials_by_version?: Maybe<Version_Block_Testimonials>;
  block_video: Array<Block_Video>;
  block_video_aggregated: Array<Block_Video_Aggregated>;
  block_video_by_id?: Maybe<Block_Video>;
  block_video_by_version?: Maybe<Version_Block_Video>;
  block_wysiwygs: Array<Block_Wysiwygs>;
  block_wysiwygs_aggregated: Array<Block_Wysiwygs_Aggregated>;
  block_wysiwygs_by_id?: Maybe<Block_Wysiwygs>;
  block_wysiwygs_by_version?: Maybe<Version_Block_Wysiwygs>;
  categories: Array<Categories>;
  categories_aggregated: Array<Categories_Aggregated>;
  categories_by_id?: Maybe<Categories>;
  categories_by_version?: Maybe<Version_Categories>;
  contacts: Array<Contacts>;
  contacts_aggregated: Array<Contacts_Aggregated>;
  contacts_by_id?: Maybe<Contacts>;
  contacts_by_version?: Maybe<Version_Contacts>;
  form_builder: Array<Form_Builder>;
  form_builder_aggregated: Array<Form_Builder_Aggregated>;
  form_builder_by_id?: Maybe<Form_Builder>;
  form_builder_by_version?: Maybe<Version_Form_Builder>;
  form_builder_schema: Array<Form_Builder_Schema>;
  form_builder_schema_aggregated: Array<Form_Builder_Schema_Aggregated>;
  form_builder_schema_by_id?: Maybe<Form_Builder_Schema>;
  form_builder_schema_by_version?: Maybe<Version_Form_Builder_Schema>;
  form_builder_translations: Array<Form_Builder_Translations>;
  form_builder_translations_aggregated: Array<Form_Builder_Translations_Aggregated>;
  form_builder_translations_by_id?: Maybe<Form_Builder_Translations>;
  form_builder_translations_by_version?: Maybe<Version_Form_Builder_Translations>;
  form_configs: Array<Form_Configs>;
  form_configs_aggregated: Array<Form_Configs_Aggregated>;
  form_configs_by_id?: Maybe<Form_Configs>;
  form_configs_by_version?: Maybe<Version_Form_Configs>;
  form_entry: Array<Form_Entry>;
  form_entry_aggregated: Array<Form_Entry_Aggregated>;
  form_entry_by_id?: Maybe<Form_Entry>;
  form_entry_by_version?: Maybe<Version_Form_Entry>;
  form_field_settings: Array<Form_Field_Settings>;
  form_field_settings_aggregated: Array<Form_Field_Settings_Aggregated>;
  form_field_settings_by_id?: Maybe<Form_Field_Settings>;
  form_field_settings_by_version?: Maybe<Version_Form_Field_Settings>;
  form_field_text: Array<Form_Field_Text>;
  form_field_text_aggregated: Array<Form_Field_Text_Aggregated>;
  form_field_text_by_id?: Maybe<Form_Field_Text>;
  form_field_text_by_version?: Maybe<Version_Form_Field_Text>;
  form_field_text_settings: Array<Form_Field_Text_Settings>;
  form_field_text_settings_aggregated: Array<Form_Field_Text_Settings_Aggregated>;
  form_field_text_settings_by_id?: Maybe<Form_Field_Text_Settings>;
  form_field_text_settings_by_version?: Maybe<Version_Form_Field_Text_Settings>;
  forms: Array<Forms>;
  forms_aggregated: Array<Forms_Aggregated>;
  forms_by_id?: Maybe<Forms>;
  forms_by_version?: Maybe<Version_Forms>;
  help_articles: Array<Help_Articles>;
  help_articles_aggregated: Array<Help_Articles_Aggregated>;
  help_articles_by_id?: Maybe<Help_Articles>;
  help_articles_by_version?: Maybe<Version_Help_Articles>;
  inbox: Array<Inbox>;
  inbox_aggregated: Array<Inbox_Aggregated>;
  inbox_by_id?: Maybe<Inbox>;
  inbox_by_version?: Maybe<Version_Inbox>;
  languages: Array<Languages>;
  languages_aggregated: Array<Languages_Aggregated>;
  languages_by_id?: Maybe<Languages>;
  languages_by_version?: Maybe<Version_Languages>;
  links: Array<Links>;
  links_aggregated: Array<Links_Aggregated>;
  links_by_id?: Maybe<Links>;
  links_by_version?: Maybe<Version_Links>;
  messages: Array<Messages>;
  messages_aggregated: Array<Messages_Aggregated>;
  messages_by_id?: Maybe<Messages>;
  messages_by_version?: Maybe<Version_Messages>;
  navigation: Array<Navigation>;
  navigation_aggregated: Array<Navigation_Aggregated>;
  navigation_by_id?: Maybe<Navigation>;
  navigation_by_version?: Maybe<Version_Navigation>;
  navigation_items: Array<Navigation_Items>;
  navigation_items_aggregated: Array<Navigation_Items_Aggregated>;
  navigation_items_by_id?: Maybe<Navigation_Items>;
  navigation_items_by_version?: Maybe<Version_Navigation_Items>;
  page_blocks: Array<Page_Blocks>;
  page_blocks_aggregated: Array<Page_Blocks_Aggregated>;
  page_blocks_by_id?: Maybe<Page_Blocks>;
  page_blocks_by_version?: Maybe<Version_Page_Blocks>;
  page_editor_nodes: Array<Page_Editor_Nodes>;
  page_editor_nodes_aggregated: Array<Page_Editor_Nodes_Aggregated>;
  page_editor_nodes_by_id?: Maybe<Page_Editor_Nodes>;
  page_editor_nodes_by_version?: Maybe<Version_Page_Editor_Nodes>;
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
  pages_blog?: Maybe<Pages_Blog>;
  pages_blog_by_version?: Maybe<Version_Pages_Blog>;
  pages_by_id?: Maybe<Pages>;
  pages_by_version?: Maybe<Version_Pages>;
  pages_projects?: Maybe<Pages_Projects>;
  pages_projects_by_version?: Maybe<Version_Pages_Projects>;
  pages_translations: Array<Pages_Translations>;
  pages_translations_aggregated: Array<Pages_Translations_Aggregated>;
  pages_translations_by_id?: Maybe<Pages_Translations>;
  pages_translations_by_version?: Maybe<Version_Pages_Translations>;
  post_gallery_items: Array<Post_Gallery_Items>;
  post_gallery_items_aggregated: Array<Post_Gallery_Items_Aggregated>;
  post_gallery_items_by_id?: Maybe<Post_Gallery_Items>;
  post_gallery_items_by_version?: Maybe<Version_Post_Gallery_Items>;
  posts: Array<Posts>;
  posts_aggregated: Array<Posts_Aggregated>;
  posts_by_id?: Maybe<Posts>;
  posts_by_version?: Maybe<Version_Posts>;
  redirects: Array<Redirects>;
  redirects_aggregated: Array<Redirects_Aggregated>;
  redirects_by_id?: Maybe<Redirects>;
  redirects_by_version?: Maybe<Version_Redirects>;
  related_block_faqs: Array<Related_Block_Faqs>;
  related_block_faqs_aggregated: Array<Related_Block_Faqs_Aggregated>;
  related_block_faqs_block_faqs: Array<Related_Block_Faqs_Block_Faqs>;
  related_block_faqs_block_faqs_aggregated: Array<Related_Block_Faqs_Block_Faqs_Aggregated>;
  related_block_faqs_block_faqs_by_id?: Maybe<Related_Block_Faqs_Block_Faqs>;
  related_block_faqs_block_faqs_by_version?: Maybe<Version_Related_Block_Faqs_Block_Faqs>;
  related_block_faqs_by_id?: Maybe<Related_Block_Faqs>;
  related_block_faqs_by_version?: Maybe<Version_Related_Block_Faqs>;
  routes: Array<Routes>;
  routes_aggregated: Array<Routes_Aggregated>;
  routes_by_id?: Maybe<Routes>;
  routes_by_version?: Maybe<Version_Routes>;
  routes_translations: Array<Routes_Translations>;
  routes_translations_aggregated: Array<Routes_Translations_Aggregated>;
  routes_translations_by_id?: Maybe<Routes_Translations>;
  routes_translations_by_version?: Maybe<Version_Routes_Translations>;
  versioning_example: Array<Versioning_Example>;
  versioning_example_aggregated: Array<Versioning_Example_Aggregated>;
  versioning_example_by_id?: Maybe<Versioning_Example>;
  versioning_example_by_version?: Maybe<Version_Versioning_Example>;
};


export type QueryActivitesArgs = {
  filter?: InputMaybe<Activites_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryActivites_AggregatedArgs = {
  filter?: InputMaybe<Activites_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryActivites_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryActivites_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_ButtonArgs = {
  filter?: InputMaybe<Block_Button_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Button_AggregatedArgs = {
  filter?: InputMaybe<Block_Button_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Button_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Button_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_Button_GroupArgs = {
  filter?: InputMaybe<Block_Button_Group_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Button_Group_AggregatedArgs = {
  filter?: InputMaybe<Block_Button_Group_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Button_Group_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Button_Group_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_ColumnsArgs = {
  filter?: InputMaybe<Block_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Columns_AggregatedArgs = {
  filter?: InputMaybe<Block_Columns_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Columns_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Columns_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_Columns_RowsArgs = {
  filter?: InputMaybe<Block_Columns_Rows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Columns_Rows_AggregatedArgs = {
  filter?: InputMaybe<Block_Columns_Rows_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Columns_Rows_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Columns_Rows_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_CtaArgs = {
  filter?: InputMaybe<Block_Cta_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Cta_AggregatedArgs = {
  filter?: InputMaybe<Block_Cta_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Cta_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Cta_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_DividerArgs = {
  filter?: InputMaybe<Block_Divider_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Divider_AggregatedArgs = {
  filter?: InputMaybe<Block_Divider_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Divider_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Divider_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_FaqsArgs = {
  filter?: InputMaybe<Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Faqs_AggregatedArgs = {
  filter?: InputMaybe<Block_Faqs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Faqs_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Faqs_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_FilesArgs = {
  filter?: InputMaybe<Block_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Files_AggregatedArgs = {
  filter?: InputMaybe<Block_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_Files_FilesArgs = {
  filter?: InputMaybe<Block_Files_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Files_Files_AggregatedArgs = {
  filter?: InputMaybe<Block_Files_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Files_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Files_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_FormArgs = {
  filter?: InputMaybe<Block_Form_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Form_AggregatedArgs = {
  filter?: InputMaybe<Block_Form_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Form_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Form_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_GalleryArgs = {
  filter?: InputMaybe<Block_Gallery_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Gallery_AggregatedArgs = {
  filter?: InputMaybe<Block_Gallery_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Gallery_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Gallery_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_Gallery_FilesArgs = {
  filter?: InputMaybe<Block_Gallery_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Gallery_Files_AggregatedArgs = {
  filter?: InputMaybe<Block_Gallery_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Gallery_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Gallery_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_HeroArgs = {
  filter?: InputMaybe<Block_Hero_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Hero_AggregatedArgs = {
  filter?: InputMaybe<Block_Hero_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Hero_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Hero_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_HtmlArgs = {
  filter?: InputMaybe<Block_Html_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Html_AggregatedArgs = {
  filter?: InputMaybe<Block_Html_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Html_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Html_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_LogocloudArgs = {
  filter?: InputMaybe<Block_Logocloud_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Logocloud_AggregatedArgs = {
  filter?: InputMaybe<Block_Logocloud_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Logocloud_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Logocloud_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_Logocloud_LogosArgs = {
  filter?: InputMaybe<Block_Logocloud_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Logocloud_Logos_AggregatedArgs = {
  filter?: InputMaybe<Block_Logocloud_Logos_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Logocloud_Logos_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Logocloud_Logos_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_QuoteArgs = {
  filter?: InputMaybe<Block_Quote_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Quote_AggregatedArgs = {
  filter?: InputMaybe<Block_Quote_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Quote_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Quote_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_RichtextArgs = {
  filter?: InputMaybe<Block_Richtext_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Richtext_AggregatedArgs = {
  filter?: InputMaybe<Block_Richtext_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Richtext_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Richtext_By_VersionArgs = {
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


export type QueryBlock_Step_ItemsArgs = {
  filter?: InputMaybe<Block_Step_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Step_Items_AggregatedArgs = {
  filter?: InputMaybe<Block_Step_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Step_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Step_Items_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_StepsArgs = {
  filter?: InputMaybe<Block_Steps_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Steps_AggregatedArgs = {
  filter?: InputMaybe<Block_Steps_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Steps_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Steps_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_TeamArgs = {
  filter?: InputMaybe<Block_Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Team_AggregatedArgs = {
  filter?: InputMaybe<Block_Team_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Team_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Team_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_Testimonial_Slider_ItemsArgs = {
  filter?: InputMaybe<Block_Testimonial_Slider_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Testimonial_Slider_Items_AggregatedArgs = {
  filter?: InputMaybe<Block_Testimonial_Slider_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Testimonial_Slider_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Testimonial_Slider_Items_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_TestimonialsArgs = {
  filter?: InputMaybe<Block_Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Testimonials_AggregatedArgs = {
  filter?: InputMaybe<Block_Testimonials_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Testimonials_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Testimonials_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_VideoArgs = {
  filter?: InputMaybe<Block_Video_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Video_AggregatedArgs = {
  filter?: InputMaybe<Block_Video_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Video_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Video_By_VersionArgs = {
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


export type QueryContactsArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContacts_AggregatedArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContacts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContacts_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryForm_BuilderArgs = {
  filter?: InputMaybe<Form_Builder_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Builder_AggregatedArgs = {
  filter?: InputMaybe<Form_Builder_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Builder_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForm_Builder_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryForm_Builder_SchemaArgs = {
  filter?: InputMaybe<Form_Builder_Schema_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Builder_Schema_AggregatedArgs = {
  filter?: InputMaybe<Form_Builder_Schema_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Builder_Schema_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForm_Builder_Schema_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryForm_Builder_TranslationsArgs = {
  filter?: InputMaybe<Form_Builder_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Builder_Translations_AggregatedArgs = {
  filter?: InputMaybe<Form_Builder_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Builder_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForm_Builder_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryForm_ConfigsArgs = {
  filter?: InputMaybe<Form_Configs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Configs_AggregatedArgs = {
  filter?: InputMaybe<Form_Configs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Configs_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForm_Configs_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryForm_EntryArgs = {
  filter?: InputMaybe<Form_Entry_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Entry_AggregatedArgs = {
  filter?: InputMaybe<Form_Entry_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Entry_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForm_Entry_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryForm_Field_SettingsArgs = {
  filter?: InputMaybe<Form_Field_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Field_Settings_AggregatedArgs = {
  filter?: InputMaybe<Form_Field_Settings_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Field_Settings_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForm_Field_Settings_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryForm_Field_TextArgs = {
  filter?: InputMaybe<Form_Field_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Field_Text_AggregatedArgs = {
  filter?: InputMaybe<Form_Field_Text_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Field_Text_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForm_Field_Text_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryForm_Field_Text_SettingsArgs = {
  filter?: InputMaybe<Form_Field_Text_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Field_Text_Settings_AggregatedArgs = {
  filter?: InputMaybe<Form_Field_Text_Settings_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Field_Text_Settings_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForm_Field_Text_Settings_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryFormsArgs = {
  filter?: InputMaybe<Forms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForms_AggregatedArgs = {
  filter?: InputMaybe<Forms_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForms_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForms_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryHelp_ArticlesArgs = {
  filter?: InputMaybe<Help_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Articles_AggregatedArgs = {
  filter?: InputMaybe<Help_Articles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Articles_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHelp_Articles_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryInboxArgs = {
  filter?: InputMaybe<Inbox_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInbox_AggregatedArgs = {
  filter?: InputMaybe<Inbox_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInbox_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInbox_By_VersionArgs = {
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


export type QueryMessagesArgs = {
  filter?: InputMaybe<Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMessages_AggregatedArgs = {
  filter?: InputMaybe<Messages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMessages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMessages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryNavigationArgs = {
  filter?: InputMaybe<Navigation_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigation_AggregatedArgs = {
  filter?: InputMaybe<Navigation_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigation_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavigation_By_VersionArgs = {
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


export type QueryPage_BlocksArgs = {
  filter?: InputMaybe<Page_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_Blocks_AggregatedArgs = {
  filter?: InputMaybe<Page_Blocks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_Blocks_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPage_Blocks_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPage_Editor_NodesArgs = {
  filter?: InputMaybe<Page_Editor_Nodes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_Editor_Nodes_AggregatedArgs = {
  filter?: InputMaybe<Page_Editor_Nodes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_Editor_Nodes_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPage_Editor_Nodes_By_VersionArgs = {
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


export type QueryPages_BlogArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_Blog_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryPages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPages_ProjectsArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_Projects_By_VersionArgs = {
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


export type QueryPages_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPost_Gallery_ItemsArgs = {
  filter?: InputMaybe<Post_Gallery_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPost_Gallery_Items_AggregatedArgs = {
  filter?: InputMaybe<Post_Gallery_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPost_Gallery_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPost_Gallery_Items_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_AggregatedArgs = {
  filter?: InputMaybe<Posts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPosts_By_VersionArgs = {
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


export type QueryRelated_Block_FaqsArgs = {
  filter?: InputMaybe<Related_Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRelated_Block_Faqs_AggregatedArgs = {
  filter?: InputMaybe<Related_Block_Faqs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRelated_Block_Faqs_Block_FaqsArgs = {
  filter?: InputMaybe<Related_Block_Faqs_Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRelated_Block_Faqs_Block_Faqs_AggregatedArgs = {
  filter?: InputMaybe<Related_Block_Faqs_Block_Faqs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRelated_Block_Faqs_Block_Faqs_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRelated_Block_Faqs_Block_Faqs_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryRelated_Block_Faqs_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRelated_Block_Faqs_By_VersionArgs = {
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


export type QueryVersioning_ExampleArgs = {
  filter?: InputMaybe<Versioning_Example_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVersioning_Example_AggregatedArgs = {
  filter?: InputMaybe<Versioning_Example_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVersioning_Example_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVersioning_Example_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  activites_mutated?: Maybe<Activites_Mutated>;
  block_button_group_mutated?: Maybe<Block_Button_Group_Mutated>;
  block_button_mutated?: Maybe<Block_Button_Mutated>;
  block_columns_mutated?: Maybe<Block_Columns_Mutated>;
  block_columns_rows_mutated?: Maybe<Block_Columns_Rows_Mutated>;
  block_cta_mutated?: Maybe<Block_Cta_Mutated>;
  block_divider_mutated?: Maybe<Block_Divider_Mutated>;
  block_faqs_mutated?: Maybe<Block_Faqs_Mutated>;
  block_files_files_mutated?: Maybe<Block_Files_Files_Mutated>;
  block_files_mutated?: Maybe<Block_Files_Mutated>;
  block_form_mutated?: Maybe<Block_Form_Mutated>;
  block_gallery_files_mutated?: Maybe<Block_Gallery_Files_Mutated>;
  block_gallery_mutated?: Maybe<Block_Gallery_Mutated>;
  block_hero_mutated?: Maybe<Block_Hero_Mutated>;
  block_html_mutated?: Maybe<Block_Html_Mutated>;
  block_logocloud_logos_mutated?: Maybe<Block_Logocloud_Logos_Mutated>;
  block_logocloud_mutated?: Maybe<Block_Logocloud_Mutated>;
  block_quote_mutated?: Maybe<Block_Quote_Mutated>;
  block_richtext_mutated?: Maybe<Block_Richtext_Mutated>;
  block_settings_mutated?: Maybe<Block_Settings_Mutated>;
  block_step_items_mutated?: Maybe<Block_Step_Items_Mutated>;
  block_steps_mutated?: Maybe<Block_Steps_Mutated>;
  block_team_mutated?: Maybe<Block_Team_Mutated>;
  block_testimonial_slider_items_mutated?: Maybe<Block_Testimonial_Slider_Items_Mutated>;
  block_testimonials_mutated?: Maybe<Block_Testimonials_Mutated>;
  block_video_mutated?: Maybe<Block_Video_Mutated>;
  block_wysiwygs_mutated?: Maybe<Block_Wysiwygs_Mutated>;
  categories_mutated?: Maybe<Categories_Mutated>;
  contacts_mutated?: Maybe<Contacts_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  form_builder_mutated?: Maybe<Form_Builder_Mutated>;
  form_builder_schema_mutated?: Maybe<Form_Builder_Schema_Mutated>;
  form_builder_translations_mutated?: Maybe<Form_Builder_Translations_Mutated>;
  form_configs_mutated?: Maybe<Form_Configs_Mutated>;
  form_entry_mutated?: Maybe<Form_Entry_Mutated>;
  form_field_settings_mutated?: Maybe<Form_Field_Settings_Mutated>;
  form_field_text_mutated?: Maybe<Form_Field_Text_Mutated>;
  form_field_text_settings_mutated?: Maybe<Form_Field_Text_Settings_Mutated>;
  forms_mutated?: Maybe<Forms_Mutated>;
  help_articles_mutated?: Maybe<Help_Articles_Mutated>;
  inbox_mutated?: Maybe<Inbox_Mutated>;
  languages_mutated?: Maybe<Languages_Mutated>;
  links_mutated?: Maybe<Links_Mutated>;
  messages_mutated?: Maybe<Messages_Mutated>;
  navigation_items_mutated?: Maybe<Navigation_Items_Mutated>;
  navigation_mutated?: Maybe<Navigation_Mutated>;
  page_blocks_mutated?: Maybe<Page_Blocks_Mutated>;
  page_editor_nodes_mutated?: Maybe<Page_Editor_Nodes_Mutated>;
  page_settings_mutated?: Maybe<Page_Settings_Mutated>;
  page_settings_translations_mutated?: Maybe<Page_Settings_Translations_Mutated>;
  pages_blog_mutated?: Maybe<Pages_Blog_Mutated>;
  pages_mutated?: Maybe<Pages_Mutated>;
  pages_projects_mutated?: Maybe<Pages_Projects_Mutated>;
  pages_translations_mutated?: Maybe<Pages_Translations_Mutated>;
  post_gallery_items_mutated?: Maybe<Post_Gallery_Items_Mutated>;
  posts_mutated?: Maybe<Posts_Mutated>;
  redirects_mutated?: Maybe<Redirects_Mutated>;
  related_block_faqs_block_faqs_mutated?: Maybe<Related_Block_Faqs_Block_Faqs_Mutated>;
  related_block_faqs_mutated?: Maybe<Related_Block_Faqs_Mutated>;
  routes_mutated?: Maybe<Routes_Mutated>;
  routes_translations_mutated?: Maybe<Routes_Translations_Mutated>;
  versioning_example_mutated?: Maybe<Versioning_Example_Mutated>;
};


export type SubscriptionActivites_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Button_Group_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Button_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Columns_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Columns_Rows_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Cta_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Divider_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Faqs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Files_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Form_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Gallery_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Gallery_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Hero_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Html_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Logocloud_Logos_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Logocloud_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Quote_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Richtext_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Step_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Steps_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Team_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Testimonial_Slider_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Testimonials_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Video_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Wysiwygs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategories_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContacts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionForm_Builder_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionForm_Builder_Schema_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionForm_Builder_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionForm_Configs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionForm_Entry_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionForm_Field_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionForm_Field_Text_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionForm_Field_Text_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionForms_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHelp_Articles_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionInbox_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLanguages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLinks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionMessages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionNavigation_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionNavigation_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPage_Blocks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPage_Editor_Nodes_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPage_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPage_Settings_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_Blog_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_Projects_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPost_Gallery_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPosts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRedirects_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRelated_Block_Faqs_Block_Faqs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRelated_Block_Faqs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRoutes_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRoutes_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionVersioning_Example_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Activites = {
  __typename?: 'activites';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Activites_Aggregated = {
  __typename?: 'activites_aggregated';
  avg?: Maybe<Activites_Aggregated_Fields>;
  avgDistinct?: Maybe<Activites_Aggregated_Fields>;
  count?: Maybe<Activites_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Activites_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Activites_Aggregated_Fields>;
  min?: Maybe<Activites_Aggregated_Fields>;
  sum?: Maybe<Activites_Aggregated_Fields>;
  sumDistinct?: Maybe<Activites_Aggregated_Fields>;
};

export type Activites_Aggregated_Count = {
  __typename?: 'activites_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Activites_Aggregated_Fields = {
  __typename?: 'activites_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Activites_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Activites_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Activites_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Activites_Mutated = {
  __typename?: 'activites_mutated';
  data?: Maybe<Activites>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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

export type Block_Button = {
  __typename?: 'block_button';
  button_group?: Maybe<Block_Button_Group>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  external_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Pages>;
  post?: Maybe<Posts>;
  sort?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


export type Block_ButtonButton_GroupArgs = {
  filter?: InputMaybe<Block_Button_Group_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_ButtonPageArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_ButtonPostArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Button_Aggregated = {
  __typename?: 'block_button_aggregated';
  avg?: Maybe<Block_Button_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Button_Aggregated_Fields>;
  count?: Maybe<Block_Button_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Button_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Button_Aggregated_Fields>;
  min?: Maybe<Block_Button_Aggregated_Fields>;
  sum?: Maybe<Block_Button_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Button_Aggregated_Fields>;
};

export type Block_Button_Aggregated_Count = {
  __typename?: 'block_button_aggregated_count';
  button_group?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  external_url?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  post?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  variant?: Maybe<Scalars['Int']['output']>;
};

export type Block_Button_Aggregated_Fields = {
  __typename?: 'block_button_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Button_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Button_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Button_Filter>>>;
  button_group?: InputMaybe<Block_Button_Group_Filter>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  external_url?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  page?: InputMaybe<Pages_Filter>;
  post?: InputMaybe<Posts_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  variant?: InputMaybe<String_Filter_Operators>;
};

export type Block_Button_Group = {
  __typename?: 'block_button_group';
  alignment?: Maybe<Scalars['String']['output']>;
  buttons?: Maybe<Array<Maybe<Block_Button>>>;
  buttons_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Block_Button_GroupButtonsArgs = {
  filter?: InputMaybe<Block_Button_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Button_Group_Aggregated = {
  __typename?: 'block_button_group_aggregated';
  avg?: Maybe<Block_Button_Group_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Button_Group_Aggregated_Fields>;
  count?: Maybe<Block_Button_Group_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Button_Group_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Button_Group_Aggregated_Fields>;
  min?: Maybe<Block_Button_Group_Aggregated_Fields>;
  sum?: Maybe<Block_Button_Group_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Button_Group_Aggregated_Fields>;
};

export type Block_Button_Group_Aggregated_Count = {
  __typename?: 'block_button_group_aggregated_count';
  alignment?: Maybe<Scalars['Int']['output']>;
  buttons?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Block_Button_Group_Aggregated_Fields = {
  __typename?: 'block_button_group_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Button_Group_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Button_Group_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Button_Group_Filter>>>;
  alignment?: InputMaybe<String_Filter_Operators>;
  buttons?: InputMaybe<Block_Button_Filter>;
  buttons_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Block_Button_Group_Mutated = {
  __typename?: 'block_button_group_mutated';
  data?: Maybe<Block_Button_Group>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Button_Mutated = {
  __typename?: 'block_button_mutated';
  data?: Maybe<Block_Button>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Columns = {
  __typename?: 'block_columns';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  rows?: Maybe<Array<Maybe<Block_Columns_Rows>>>;
  rows_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Block_ColumnsRowsArgs = {
  filter?: InputMaybe<Block_Columns_Rows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Columns_Aggregated = {
  __typename?: 'block_columns_aggregated';
  count?: Maybe<Block_Columns_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Columns_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Columns_Aggregated_Count = {
  __typename?: 'block_columns_aggregated_count';
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Columns_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Columns_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Columns_Filter>>>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  rows?: InputMaybe<Block_Columns_Rows_Filter>;
  rows_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Columns_Mutated = {
  __typename?: 'block_columns_mutated';
  data?: Maybe<Block_Columns>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Columns_Rows = {
  __typename?: 'block_columns_rows';
  block_columns?: Maybe<Block_Columns>;
  button_group?: Maybe<Block_Button_Group>;
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  image_position?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Block_Columns_RowsBlock_ColumnsArgs = {
  filter?: InputMaybe<Block_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Columns_RowsButton_GroupArgs = {
  filter?: InputMaybe<Block_Button_Group_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Columns_RowsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Columns_Rows_Aggregated = {
  __typename?: 'block_columns_rows_aggregated';
  avg?: Maybe<Block_Columns_Rows_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Columns_Rows_Aggregated_Fields>;
  count?: Maybe<Block_Columns_Rows_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Columns_Rows_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Columns_Rows_Aggregated_Fields>;
  min?: Maybe<Block_Columns_Rows_Aggregated_Fields>;
  sum?: Maybe<Block_Columns_Rows_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Columns_Rows_Aggregated_Fields>;
};

export type Block_Columns_Rows_Aggregated_Count = {
  __typename?: 'block_columns_rows_aggregated_count';
  block_columns?: Maybe<Scalars['Int']['output']>;
  button_group?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  image_position?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Block_Columns_Rows_Aggregated_Fields = {
  __typename?: 'block_columns_rows_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Columns_Rows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Columns_Rows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Columns_Rows_Filter>>>;
  block_columns?: InputMaybe<Block_Columns_Filter>;
  button_group?: InputMaybe<Block_Button_Group_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  image_position?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Block_Columns_Rows_Mutated = {
  __typename?: 'block_columns_rows_mutated';
  data?: Maybe<Block_Columns_Rows>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Cta = {
  __typename?: 'block_cta';
  button_group?: Maybe<Block_Button_Group>;
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type Block_CtaButton_GroupArgs = {
  filter?: InputMaybe<Block_Button_Group_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Cta_Aggregated = {
  __typename?: 'block_cta_aggregated';
  count?: Maybe<Block_Cta_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Cta_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Cta_Aggregated_Count = {
  __typename?: 'block_cta_aggregated_count';
  button_group?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Cta_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Cta_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Cta_Filter>>>;
  button_group?: InputMaybe<Block_Button_Group_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Cta_Mutated = {
  __typename?: 'block_cta_mutated';
  data?: Maybe<Block_Cta>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Divider = {
  __typename?: 'block_divider';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Block_Divider_Aggregated = {
  __typename?: 'block_divider_aggregated';
  count?: Maybe<Block_Divider_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Divider_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Divider_Aggregated_Count = {
  __typename?: 'block_divider_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Divider_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Divider_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Divider_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Divider_Mutated = {
  __typename?: 'block_divider_mutated';
  data?: Maybe<Block_Divider>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Faqs = {
  __typename?: 'block_faqs';
  alignment?: Maybe<Scalars['String']['output']>;
  faqs?: Maybe<Scalars['JSON']['output']>;
  faqs_func?: Maybe<Count_Functions>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Block_Faqs_Aggregated = {
  __typename?: 'block_faqs_aggregated';
  count?: Maybe<Block_Faqs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Faqs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Faqs_Aggregated_Count = {
  __typename?: 'block_faqs_aggregated_count';
  alignment?: Maybe<Scalars['Int']['output']>;
  faqs?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Faqs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Faqs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Faqs_Filter>>>;
  alignment?: InputMaybe<String_Filter_Operators>;
  faqs?: InputMaybe<String_Filter_Operators>;
  faqs_func?: InputMaybe<Count_Function_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Faqs_Mutated = {
  __typename?: 'block_faqs_mutated';
  data?: Maybe<Block_Faqs>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Files = {
  __typename?: 'block_files';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  files?: Maybe<Array<Maybe<Block_Files_Files>>>;
  files_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Block_FilesFilesArgs = {
  filter?: InputMaybe<Block_Files_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Files_Aggregated = {
  __typename?: 'block_files_aggregated';
  avg?: Maybe<Block_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Files_Aggregated_Fields>;
  count?: Maybe<Block_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Files_Aggregated_Fields>;
  min?: Maybe<Block_Files_Aggregated_Fields>;
  sum?: Maybe<Block_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Files_Aggregated_Fields>;
};

export type Block_Files_Aggregated_Count = {
  __typename?: 'block_files_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  files?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Block_Files_Aggregated_Fields = {
  __typename?: 'block_files_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Files_Files = {
  __typename?: 'block_files_files';
  block_files_id?: Maybe<Block_Files>;
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
};


export type Block_Files_FilesBlock_Files_IdArgs = {
  filter?: InputMaybe<Block_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Files_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Files_Files_Aggregated = {
  __typename?: 'block_files_files_aggregated';
  avg?: Maybe<Block_Files_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Files_Files_Aggregated_Fields>;
  count?: Maybe<Block_Files_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Files_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Files_Files_Aggregated_Fields>;
  min?: Maybe<Block_Files_Files_Aggregated_Fields>;
  sum?: Maybe<Block_Files_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Files_Files_Aggregated_Fields>;
};

export type Block_Files_Files_Aggregated_Count = {
  __typename?: 'block_files_files_aggregated_count';
  block_files_id?: Maybe<Scalars['Int']['output']>;
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Block_Files_Files_Aggregated_Fields = {
  __typename?: 'block_files_files_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Block_Files_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Files_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Files_Files_Filter>>>;
  block_files_id?: InputMaybe<Block_Files_Filter>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Block_Files_Files_Mutated = {
  __typename?: 'block_files_files_mutated';
  data?: Maybe<Block_Files_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Files_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  files?: InputMaybe<Block_Files_Files_Filter>;
  files_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Block_Files_Mutated = {
  __typename?: 'block_files_mutated';
  data?: Maybe<Block_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Form = {
  __typename?: 'block_form';
  form?: Maybe<Forms>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type Block_FormFormArgs = {
  filter?: InputMaybe<Forms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Form_Aggregated = {
  __typename?: 'block_form_aggregated';
  count?: Maybe<Block_Form_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Form_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Form_Aggregated_Count = {
  __typename?: 'block_form_aggregated_count';
  form?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Form_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Form_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Form_Filter>>>;
  form?: InputMaybe<Forms_Filter>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Form_Mutated = {
  __typename?: 'block_form_mutated';
  data?: Maybe<Block_Form>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Gallery = {
  __typename?: 'block_gallery';
  gallery_items?: Maybe<Array<Maybe<Block_Gallery_Files>>>;
  gallery_items_func?: Maybe<Count_Functions>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type Block_GalleryGallery_ItemsArgs = {
  filter?: InputMaybe<Block_Gallery_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Gallery_Aggregated = {
  __typename?: 'block_gallery_aggregated';
  count?: Maybe<Block_Gallery_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Gallery_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Gallery_Aggregated_Count = {
  __typename?: 'block_gallery_aggregated_count';
  gallery_items?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Gallery_Files = {
  __typename?: 'block_gallery_files';
  block_gallery_id?: Maybe<Block_Gallery>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Block_Gallery_FilesBlock_Gallery_IdArgs = {
  filter?: InputMaybe<Block_Gallery_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Gallery_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Gallery_Files_Aggregated = {
  __typename?: 'block_gallery_files_aggregated';
  avg?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  count?: Maybe<Block_Gallery_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Gallery_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  min?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  sum?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
};

export type Block_Gallery_Files_Aggregated_Count = {
  __typename?: 'block_gallery_files_aggregated_count';
  block_gallery_id?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Block_Gallery_Files_Aggregated_Fields = {
  __typename?: 'block_gallery_files_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Gallery_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Gallery_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Gallery_Files_Filter>>>;
  block_gallery_id?: InputMaybe<Block_Gallery_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Block_Gallery_Files_Mutated = {
  __typename?: 'block_gallery_files_mutated';
  data?: Maybe<Block_Gallery_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Gallery_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Gallery_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Gallery_Filter>>>;
  gallery_items?: InputMaybe<Block_Gallery_Files_Filter>;
  gallery_items_func?: InputMaybe<Count_Function_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Gallery_Mutated = {
  __typename?: 'block_gallery_mutated';
  data?: Maybe<Block_Gallery>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Hero = {
  __typename?: 'block_hero';
  button_group?: Maybe<Block_Button_Group>;
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  image_position?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Block_HeroButton_GroupArgs = {
  filter?: InputMaybe<Block_Button_Group_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_HeroImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Hero_Aggregated = {
  __typename?: 'block_hero_aggregated';
  count?: Maybe<Block_Hero_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Hero_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Hero_Aggregated_Count = {
  __typename?: 'block_hero_aggregated_count';
  button_group?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  image_position?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Hero_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Hero_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Hero_Filter>>>;
  button_group?: InputMaybe<Block_Button_Group_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  image_position?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Hero_Mutated = {
  __typename?: 'block_hero_mutated';
  data?: Maybe<Block_Hero>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Html = {
  __typename?: 'block_html';
  id: Scalars['ID']['output'];
  raw_html?: Maybe<Scalars['String']['output']>;
};

export type Block_Html_Aggregated = {
  __typename?: 'block_html_aggregated';
  count?: Maybe<Block_Html_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Html_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Html_Aggregated_Count = {
  __typename?: 'block_html_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  raw_html?: Maybe<Scalars['Int']['output']>;
};

export type Block_Html_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Html_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Html_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  raw_html?: InputMaybe<String_Filter_Operators>;
};

export type Block_Html_Mutated = {
  __typename?: 'block_html_mutated';
  data?: Maybe<Block_Html>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Logocloud = {
  __typename?: 'block_logocloud';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logos?: Maybe<Array<Maybe<Block_Logocloud_Logos>>>;
  logos_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Block_LogocloudLogosArgs = {
  filter?: InputMaybe<Block_Logocloud_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Logocloud_Aggregated = {
  __typename?: 'block_logocloud_aggregated';
  count?: Maybe<Block_Logocloud_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Logocloud_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Logocloud_Aggregated_Count = {
  __typename?: 'block_logocloud_aggregated_count';
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logos?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Logocloud_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Logocloud_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Logocloud_Filter>>>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  logos?: InputMaybe<Block_Logocloud_Logos_Filter>;
  logos_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Logocloud_Logos = {
  __typename?: 'block_logocloud_logos';
  block_logocloud_id?: Maybe<Block_Logocloud>;
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Block_Logocloud_LogosBlock_Logocloud_IdArgs = {
  filter?: InputMaybe<Block_Logocloud_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Logocloud_LogosDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Logocloud_Logos_Aggregated = {
  __typename?: 'block_logocloud_logos_aggregated';
  avg?: Maybe<Block_Logocloud_Logos_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Logocloud_Logos_Aggregated_Fields>;
  count?: Maybe<Block_Logocloud_Logos_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Logocloud_Logos_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Logocloud_Logos_Aggregated_Fields>;
  min?: Maybe<Block_Logocloud_Logos_Aggregated_Fields>;
  sum?: Maybe<Block_Logocloud_Logos_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Logocloud_Logos_Aggregated_Fields>;
};

export type Block_Logocloud_Logos_Aggregated_Count = {
  __typename?: 'block_logocloud_logos_aggregated_count';
  block_logocloud_id?: Maybe<Scalars['Int']['output']>;
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Block_Logocloud_Logos_Aggregated_Fields = {
  __typename?: 'block_logocloud_logos_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Logocloud_Logos_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Logocloud_Logos_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Logocloud_Logos_Filter>>>;
  block_logocloud_id?: InputMaybe<Block_Logocloud_Filter>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Block_Logocloud_Logos_Mutated = {
  __typename?: 'block_logocloud_logos_mutated';
  data?: Maybe<Block_Logocloud_Logos>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Logocloud_Mutated = {
  __typename?: 'block_logocloud_mutated';
  data?: Maybe<Block_Logocloud>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Quote = {
  __typename?: 'block_quote';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Block_Quote_Aggregated = {
  __typename?: 'block_quote_aggregated';
  count?: Maybe<Block_Quote_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Quote_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Quote_Aggregated_Count = {
  __typename?: 'block_quote_aggregated_count';
  content?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Quote_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Quote_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Quote_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Quote_Mutated = {
  __typename?: 'block_quote_mutated';
  data?: Maybe<Block_Quote>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Richtext = {
  __typename?: 'block_richtext';
  alignment?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Block_Richtext_Aggregated = {
  __typename?: 'block_richtext_aggregated';
  count?: Maybe<Block_Richtext_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Richtext_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Richtext_Aggregated_Count = {
  __typename?: 'block_richtext_aggregated_count';
  alignment?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Richtext_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Richtext_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Richtext_Filter>>>;
  alignment?: InputMaybe<String_Filter_Operators>;
  content?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Richtext_Mutated = {
  __typename?: 'block_richtext_mutated';
  data?: Maybe<Block_Richtext>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Settings = {
  __typename?: 'block_settings';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Scalars['JSON']['output']>;
  tokens_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type Block_Settings_Aggregated = {
  __typename?: 'block_settings_aggregated';
  avg?: Maybe<Block_Settings_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Settings_Aggregated_Fields>;
  count?: Maybe<Block_Settings_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Settings_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Settings_Aggregated_Fields>;
  min?: Maybe<Block_Settings_Aggregated_Fields>;
  sum?: Maybe<Block_Settings_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Settings_Aggregated_Fields>;
};

export type Block_Settings_Aggregated_Count = {
  __typename?: 'block_settings_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tokens?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  variant?: Maybe<Scalars['Int']['output']>;
};

export type Block_Settings_Aggregated_Fields = {
  __typename?: 'block_settings_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Settings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Settings_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Settings_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tokens?: InputMaybe<String_Filter_Operators>;
  tokens_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  variant?: InputMaybe<String_Filter_Operators>;
};

export type Block_Settings_Mutated = {
  __typename?: 'block_settings_mutated';
  data?: Maybe<Block_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Step_Items = {
  __typename?: 'block_step_items';
  block_steps?: Maybe<Block_Steps>;
  button_group?: Maybe<Block_Button_Group>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Block_Step_ItemsBlock_StepsArgs = {
  filter?: InputMaybe<Block_Steps_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Step_ItemsButton_GroupArgs = {
  filter?: InputMaybe<Block_Button_Group_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Step_ItemsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Step_Items_Aggregated = {
  __typename?: 'block_step_items_aggregated';
  avg?: Maybe<Block_Step_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Step_Items_Aggregated_Fields>;
  count?: Maybe<Block_Step_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Step_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Step_Items_Aggregated_Fields>;
  min?: Maybe<Block_Step_Items_Aggregated_Fields>;
  sum?: Maybe<Block_Step_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Step_Items_Aggregated_Fields>;
};

export type Block_Step_Items_Aggregated_Count = {
  __typename?: 'block_step_items_aggregated_count';
  block_steps?: Maybe<Scalars['Int']['output']>;
  button_group?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Step_Items_Aggregated_Fields = {
  __typename?: 'block_step_items_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Step_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Step_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Step_Items_Filter>>>;
  block_steps?: InputMaybe<Block_Steps_Filter>;
  button_group?: InputMaybe<Block_Button_Group_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Step_Items_Mutated = {
  __typename?: 'block_step_items_mutated';
  data?: Maybe<Block_Step_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Steps = {
  __typename?: 'block_steps';
  /** If enabled, image position is alternated between left and right. */
  alternate_image_position: Scalars['Boolean']['output'];
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Show the step numbers on the website. For example: (Step 1, Step 2, etc) */
  show_step_numbers?: Maybe<Scalars['Boolean']['output']>;
  steps?: Maybe<Array<Maybe<Block_Step_Items>>>;
  steps_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Block_StepsStepsArgs = {
  filter?: InputMaybe<Block_Step_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Steps_Aggregated = {
  __typename?: 'block_steps_aggregated';
  count?: Maybe<Block_Steps_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Steps_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Steps_Aggregated_Count = {
  __typename?: 'block_steps_aggregated_count';
  /** If enabled, image position is alternated between left and right. */
  alternate_image_position?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Show the step numbers on the website. For example: (Step 1, Step 2, etc) */
  show_step_numbers?: Maybe<Scalars['Int']['output']>;
  steps?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Steps_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Steps_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Steps_Filter>>>;
  alternate_image_position?: InputMaybe<Boolean_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  show_step_numbers?: InputMaybe<Boolean_Filter_Operators>;
  steps?: InputMaybe<Block_Step_Items_Filter>;
  steps_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Steps_Mutated = {
  __typename?: 'block_steps_mutated';
  data?: Maybe<Block_Steps>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Team = {
  __typename?: 'block_team';
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Block_Team_Aggregated = {
  __typename?: 'block_team_aggregated';
  count?: Maybe<Block_Team_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Team_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Team_Aggregated_Count = {
  __typename?: 'block_team_aggregated_count';
  content?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Team_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Team_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Team_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Team_Mutated = {
  __typename?: 'block_team_mutated';
  data?: Maybe<Block_Team>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Testimonial_Slider_Items = {
  __typename?: 'block_testimonial_slider_items';
  block_testimonial_slider_id?: Maybe<Block_Testimonials>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  testimonials_id?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Block_Testimonial_Slider_ItemsBlock_Testimonial_Slider_IdArgs = {
  filter?: InputMaybe<Block_Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Testimonial_Slider_Items_Aggregated = {
  __typename?: 'block_testimonial_slider_items_aggregated';
  avg?: Maybe<Block_Testimonial_Slider_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Testimonial_Slider_Items_Aggregated_Fields>;
  count?: Maybe<Block_Testimonial_Slider_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Testimonial_Slider_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Testimonial_Slider_Items_Aggregated_Fields>;
  min?: Maybe<Block_Testimonial_Slider_Items_Aggregated_Fields>;
  sum?: Maybe<Block_Testimonial_Slider_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Testimonial_Slider_Items_Aggregated_Fields>;
};

export type Block_Testimonial_Slider_Items_Aggregated_Count = {
  __typename?: 'block_testimonial_slider_items_aggregated_count';
  block_testimonial_slider_id?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  testimonials_id?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Block_Testimonial_Slider_Items_Aggregated_Fields = {
  __typename?: 'block_testimonial_slider_items_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Testimonial_Slider_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Testimonial_Slider_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Testimonial_Slider_Items_Filter>>>;
  block_testimonial_slider_id?: InputMaybe<Block_Testimonials_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  testimonials_id?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Block_Testimonial_Slider_Items_Mutated = {
  __typename?: 'block_testimonial_slider_items_mutated';
  data?: Maybe<Block_Testimonial_Slider_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Testimonials = {
  __typename?: 'block_testimonials';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  testimonials?: Maybe<Array<Maybe<Block_Testimonial_Slider_Items>>>;
  testimonials_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Block_TestimonialsTestimonialsArgs = {
  filter?: InputMaybe<Block_Testimonial_Slider_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Testimonials_Aggregated = {
  __typename?: 'block_testimonials_aggregated';
  count?: Maybe<Block_Testimonials_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Testimonials_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Testimonials_Aggregated_Count = {
  __typename?: 'block_testimonials_aggregated_count';
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  testimonials?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Testimonials_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Testimonials_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Testimonials_Filter>>>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  testimonials?: InputMaybe<Block_Testimonial_Slider_Items_Filter>;
  testimonials_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Testimonials_Mutated = {
  __typename?: 'block_testimonials_mutated';
  data?: Maybe<Block_Testimonials>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Video = {
  __typename?: 'block_video';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  video_file?: Maybe<Directus_Files>;
  video_url?: Maybe<Scalars['String']['output']>;
};


export type Block_VideoVideo_FileArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Video_Aggregated = {
  __typename?: 'block_video_aggregated';
  count?: Maybe<Block_Video_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Video_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Video_Aggregated_Count = {
  __typename?: 'block_video_aggregated_count';
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  video_file?: Maybe<Scalars['Int']['output']>;
  video_url?: Maybe<Scalars['Int']['output']>;
};

export type Block_Video_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Video_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Video_Filter>>>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  video_file?: InputMaybe<Directus_Files_Filter>;
  video_url?: InputMaybe<String_Filter_Operators>;
};

export type Block_Video_Mutated = {
  __typename?: 'block_video_mutated';
  data?: Maybe<Block_Video>;
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
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<String_Filter_Operators>;
  settings?: InputMaybe<Block_Settings_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
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
  color?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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
  color?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Categories_Aggregated_Fields = {
  __typename?: 'categories_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  seo?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Categories_Mutated = {
  __typename?: 'categories_mutated';
  data?: Maybe<Categories>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contacts = {
  __typename?: 'contacts';
  /** Notes about this contact. Never visible to this person or their organization. */
  contact_notes?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  job_title?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** Is this an active contact? */
  status?: Maybe<Scalars['String']['output']>;
  /** Not every contact will have a login to the portal. This is the linked user account for this contact. */
  user?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Contacts_Aggregated = {
  __typename?: 'contacts_aggregated';
  count?: Maybe<Contacts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contacts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Contacts_Aggregated_Count = {
  __typename?: 'contacts_aggregated_count';
  /** Notes about this contact. Never visible to this person or their organization. */
  contact_notes?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  first_name?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  job_title?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['Int']['output']>;
  /** Is this an active contact? */
  status?: Maybe<Scalars['Int']['output']>;
  /** Not every contact will have a login to the portal. This is the linked user account for this contact. */
  user?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Contacts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contacts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contacts_Filter>>>;
  contact_notes?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  job_title?: InputMaybe<String_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  phone?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Contacts_Mutated = {
  __typename?: 'contacts_mutated';
  data?: Maybe<Contacts>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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
  caption?: Maybe<Scalars['String']['output']>;
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['String']['output']>;
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
  uploaded_by?: Maybe<Scalars['String']['output']>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  caption?: InputMaybe<String_Filter_Operators>;
  charset?: InputMaybe<String_Filter_Operators>;
  created_on?: InputMaybe<Date_Filter_Operators>;
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
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
  uploaded_by?: InputMaybe<String_Filter_Operators>;
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

export type Form_Builder = {
  __typename?: 'form_builder';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  on_success?: Maybe<Scalars['String']['output']>;
  redirect_url?: Maybe<Scalars['String']['output']>;
  schema?: Maybe<Array<Maybe<Form_Builder_Schema>>>;
  schema_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  success_message?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Form_BuilderSchemaArgs = {
  filter?: InputMaybe<Form_Builder_Schema_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Builder_Aggregated = {
  __typename?: 'form_builder_aggregated';
  avg?: Maybe<Form_Builder_Aggregated_Fields>;
  avgDistinct?: Maybe<Form_Builder_Aggregated_Fields>;
  count?: Maybe<Form_Builder_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Form_Builder_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Form_Builder_Aggregated_Fields>;
  min?: Maybe<Form_Builder_Aggregated_Fields>;
  sum?: Maybe<Form_Builder_Aggregated_Fields>;
  sumDistinct?: Maybe<Form_Builder_Aggregated_Fields>;
};

export type Form_Builder_Aggregated_Count = {
  __typename?: 'form_builder_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  on_success?: Maybe<Scalars['Int']['output']>;
  redirect_url?: Maybe<Scalars['Int']['output']>;
  schema?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  success_message?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Form_Builder_Aggregated_Fields = {
  __typename?: 'form_builder_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Form_Builder_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Form_Builder_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Form_Builder_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  on_success?: InputMaybe<String_Filter_Operators>;
  redirect_url?: InputMaybe<String_Filter_Operators>;
  schema?: InputMaybe<Form_Builder_Schema_Filter>;
  schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  success_message?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Form_Builder_Mutated = {
  __typename?: 'form_builder_mutated';
  data?: Maybe<Form_Builder>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Form_Builder_Schema = {
  __typename?: 'form_builder_schema';
  collection?: Maybe<Scalars['String']['output']>;
  form_builder_id?: Maybe<Form_Builder>;
  id: Scalars['ID']['output'];
  item?: Maybe<Form_Builder_Schema_Item_Union>;
};


export type Form_Builder_SchemaForm_Builder_IdArgs = {
  filter?: InputMaybe<Form_Builder_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Builder_Schema_Aggregated = {
  __typename?: 'form_builder_schema_aggregated';
  avg?: Maybe<Form_Builder_Schema_Aggregated_Fields>;
  avgDistinct?: Maybe<Form_Builder_Schema_Aggregated_Fields>;
  count?: Maybe<Form_Builder_Schema_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Form_Builder_Schema_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Form_Builder_Schema_Aggregated_Fields>;
  min?: Maybe<Form_Builder_Schema_Aggregated_Fields>;
  sum?: Maybe<Form_Builder_Schema_Aggregated_Fields>;
  sumDistinct?: Maybe<Form_Builder_Schema_Aggregated_Fields>;
};

export type Form_Builder_Schema_Aggregated_Count = {
  __typename?: 'form_builder_schema_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  form_builder_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
};

export type Form_Builder_Schema_Aggregated_Fields = {
  __typename?: 'form_builder_schema_aggregated_fields';
  form_builder_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Form_Builder_Schema_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Form_Builder_Schema_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Form_Builder_Schema_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  form_builder_id?: InputMaybe<Form_Builder_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__form_field_text?: InputMaybe<Form_Field_Text_Filter>;
};

export type Form_Builder_Schema_Item_Union = Form_Field_Text;

export type Form_Builder_Schema_Mutated = {
  __typename?: 'form_builder_schema_mutated';
  data?: Maybe<Form_Builder_Schema>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Form_Builder_Translations = {
  __typename?: 'form_builder_translations';
  id: Scalars['ID']['output'];
  languages_id?: Maybe<Languages>;
};


export type Form_Builder_TranslationsLanguages_IdArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Builder_Translations_Aggregated = {
  __typename?: 'form_builder_translations_aggregated';
  avg?: Maybe<Form_Builder_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Form_Builder_Translations_Aggregated_Fields>;
  count?: Maybe<Form_Builder_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Form_Builder_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Form_Builder_Translations_Aggregated_Fields>;
  min?: Maybe<Form_Builder_Translations_Aggregated_Fields>;
  sum?: Maybe<Form_Builder_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Form_Builder_Translations_Aggregated_Fields>;
};

export type Form_Builder_Translations_Aggregated_Count = {
  __typename?: 'form_builder_translations_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  languages_id?: Maybe<Scalars['Int']['output']>;
};

export type Form_Builder_Translations_Aggregated_Fields = {
  __typename?: 'form_builder_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Form_Builder_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Form_Builder_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Form_Builder_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_id?: InputMaybe<Languages_Filter>;
};

export type Form_Builder_Translations_Mutated = {
  __typename?: 'form_builder_translations_mutated';
  data?: Maybe<Form_Builder_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Form_Configs = {
  __typename?: 'form_configs';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  schema?: Maybe<Scalars['JSON']['output']>;
  schema_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Form_Configs_Aggregated = {
  __typename?: 'form_configs_aggregated';
  avg?: Maybe<Form_Configs_Aggregated_Fields>;
  avgDistinct?: Maybe<Form_Configs_Aggregated_Fields>;
  count?: Maybe<Form_Configs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Form_Configs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Form_Configs_Aggregated_Fields>;
  min?: Maybe<Form_Configs_Aggregated_Fields>;
  sum?: Maybe<Form_Configs_Aggregated_Fields>;
  sumDistinct?: Maybe<Form_Configs_Aggregated_Fields>;
};

export type Form_Configs_Aggregated_Count = {
  __typename?: 'form_configs_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  friendly_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  schema?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Form_Configs_Aggregated_Fields = {
  __typename?: 'form_configs_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Form_Configs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Form_Configs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Form_Configs_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  friendly_id?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  schema?: InputMaybe<String_Filter_Operators>;
  schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Form_Configs_Mutated = {
  __typename?: 'form_configs_mutated';
  data?: Maybe<Form_Configs>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Form_Entry = {
  __typename?: 'form_entry';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  form?: Maybe<Form_Builder>;
  from_email?: Maybe<Scalars['String']['output']>;
  from_ip?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Form_EntryFormArgs = {
  filter?: InputMaybe<Form_Builder_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Form_EntryLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Entry_Aggregated = {
  __typename?: 'form_entry_aggregated';
  avg?: Maybe<Form_Entry_Aggregated_Fields>;
  avgDistinct?: Maybe<Form_Entry_Aggregated_Fields>;
  count?: Maybe<Form_Entry_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Form_Entry_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Form_Entry_Aggregated_Fields>;
  min?: Maybe<Form_Entry_Aggregated_Fields>;
  sum?: Maybe<Form_Entry_Aggregated_Fields>;
  sumDistinct?: Maybe<Form_Entry_Aggregated_Fields>;
};

export type Form_Entry_Aggregated_Count = {
  __typename?: 'form_entry_aggregated_count';
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  form?: Maybe<Scalars['Int']['output']>;
  from_email?: Maybe<Scalars['Int']['output']>;
  from_ip?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Form_Entry_Aggregated_Fields = {
  __typename?: 'form_entry_aggregated_fields';
  form?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Form_Entry_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Form_Entry_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Form_Entry_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  form?: InputMaybe<Form_Builder_Filter>;
  from_email?: InputMaybe<String_Filter_Operators>;
  from_ip?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Form_Entry_Mutated = {
  __typename?: 'form_entry_mutated';
  data?: Maybe<Form_Entry>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Form_Field_Settings = {
  __typename?: 'form_field_settings';
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** This validation should follow the AJV format guidelines */
  generic_validation?: Maybe<Scalars['String']['output']>;
  halfwidth?: Maybe<Scalars['Boolean']['output']>;
  hasPattern?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
  pattern_error_message?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  required_error_message?: Maybe<Scalars['String']['output']>;
};

export type Form_Field_Settings_Aggregated = {
  __typename?: 'form_field_settings_aggregated';
  avg?: Maybe<Form_Field_Settings_Aggregated_Fields>;
  avgDistinct?: Maybe<Form_Field_Settings_Aggregated_Fields>;
  count?: Maybe<Form_Field_Settings_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Form_Field_Settings_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Form_Field_Settings_Aggregated_Fields>;
  min?: Maybe<Form_Field_Settings_Aggregated_Fields>;
  sum?: Maybe<Form_Field_Settings_Aggregated_Fields>;
  sumDistinct?: Maybe<Form_Field_Settings_Aggregated_Fields>;
};

export type Form_Field_Settings_Aggregated_Count = {
  __typename?: 'form_field_settings_aggregated_count';
  disabled?: Maybe<Scalars['Int']['output']>;
  /** This validation should follow the AJV format guidelines */
  generic_validation?: Maybe<Scalars['Int']['output']>;
  halfwidth?: Maybe<Scalars['Int']['output']>;
  hasPattern?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  pattern?: Maybe<Scalars['Int']['output']>;
  pattern_error_message?: Maybe<Scalars['Int']['output']>;
  readonly?: Maybe<Scalars['Int']['output']>;
  required?: Maybe<Scalars['Int']['output']>;
  required_error_message?: Maybe<Scalars['Int']['output']>;
};

export type Form_Field_Settings_Aggregated_Fields = {
  __typename?: 'form_field_settings_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Form_Field_Settings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Form_Field_Settings_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Form_Field_Settings_Filter>>>;
  disabled?: InputMaybe<Boolean_Filter_Operators>;
  generic_validation?: InputMaybe<String_Filter_Operators>;
  halfwidth?: InputMaybe<Boolean_Filter_Operators>;
  hasPattern?: InputMaybe<Boolean_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  pattern?: InputMaybe<String_Filter_Operators>;
  pattern_error_message?: InputMaybe<String_Filter_Operators>;
  readonly?: InputMaybe<Boolean_Filter_Operators>;
  required?: InputMaybe<Boolean_Filter_Operators>;
  required_error_message?: InputMaybe<String_Filter_Operators>;
};

export type Form_Field_Settings_Mutated = {
  __typename?: 'form_field_settings_mutated';
  data?: Maybe<Form_Field_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Form_Field_Text = {
  __typename?: 'form_field_text';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  form_field_settings?: Maybe<Form_Field_Settings>;
  format?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  text_settings?: Maybe<Form_Field_Text_Settings>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Form_Field_TextForm_Field_SettingsArgs = {
  filter?: InputMaybe<Form_Field_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Form_Field_TextText_SettingsArgs = {
  filter?: InputMaybe<Form_Field_Text_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Field_Text_Aggregated = {
  __typename?: 'form_field_text_aggregated';
  avg?: Maybe<Form_Field_Text_Aggregated_Fields>;
  avgDistinct?: Maybe<Form_Field_Text_Aggregated_Fields>;
  count?: Maybe<Form_Field_Text_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Form_Field_Text_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Form_Field_Text_Aggregated_Fields>;
  min?: Maybe<Form_Field_Text_Aggregated_Fields>;
  sum?: Maybe<Form_Field_Text_Aggregated_Fields>;
  sumDistinct?: Maybe<Form_Field_Text_Aggregated_Fields>;
};

export type Form_Field_Text_Aggregated_Count = {
  __typename?: 'form_field_text_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  form_field_settings?: Maybe<Scalars['Int']['output']>;
  format?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  text_settings?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Form_Field_Text_Aggregated_Fields = {
  __typename?: 'form_field_text_aggregated_fields';
  form_field_settings?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  text_settings?: Maybe<Scalars['Float']['output']>;
};

export type Form_Field_Text_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Form_Field_Text_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Form_Field_Text_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  form_field_settings?: InputMaybe<Form_Field_Settings_Filter>;
  format?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  text_settings?: InputMaybe<Form_Field_Text_Settings_Filter>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Form_Field_Text_Mutated = {
  __typename?: 'form_field_text_mutated';
  data?: Maybe<Form_Field_Text>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Form_Field_Text_Settings = {
  __typename?: 'form_field_text_settings';
  default_value?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  placeholder?: Maybe<Scalars['String']['output']>;
};

export type Form_Field_Text_Settings_Aggregated = {
  __typename?: 'form_field_text_settings_aggregated';
  avg?: Maybe<Form_Field_Text_Settings_Aggregated_Fields>;
  avgDistinct?: Maybe<Form_Field_Text_Settings_Aggregated_Fields>;
  count?: Maybe<Form_Field_Text_Settings_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Form_Field_Text_Settings_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Form_Field_Text_Settings_Aggregated_Fields>;
  min?: Maybe<Form_Field_Text_Settings_Aggregated_Fields>;
  sum?: Maybe<Form_Field_Text_Settings_Aggregated_Fields>;
  sumDistinct?: Maybe<Form_Field_Text_Settings_Aggregated_Fields>;
};

export type Form_Field_Text_Settings_Aggregated_Count = {
  __typename?: 'form_field_text_settings_aggregated_count';
  default_value?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  placeholder?: Maybe<Scalars['Int']['output']>;
};

export type Form_Field_Text_Settings_Aggregated_Fields = {
  __typename?: 'form_field_text_settings_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Form_Field_Text_Settings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Form_Field_Text_Settings_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Form_Field_Text_Settings_Filter>>>;
  default_value?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  placeholder?: InputMaybe<String_Filter_Operators>;
};

export type Form_Field_Text_Settings_Mutated = {
  __typename?: 'form_field_text_settings_mutated';
  data?: Maybe<Form_Field_Text_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Forms = {
  __typename?: 'forms';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  on_success?: Maybe<Scalars['String']['output']>;
  redirect_url?: Maybe<Scalars['String']['output']>;
  /** The fields for the form. */
  schema?: Maybe<Scalars['JSON']['output']>;
  schema_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  /** The text for the submit button label. */
  submit_label?: Maybe<Scalars['String']['output']>;
  success_message?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Forms_Aggregated = {
  __typename?: 'forms_aggregated';
  avg?: Maybe<Forms_Aggregated_Fields>;
  avgDistinct?: Maybe<Forms_Aggregated_Fields>;
  count?: Maybe<Forms_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Forms_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Forms_Aggregated_Fields>;
  min?: Maybe<Forms_Aggregated_Fields>;
  sum?: Maybe<Forms_Aggregated_Fields>;
  sumDistinct?: Maybe<Forms_Aggregated_Fields>;
};

export type Forms_Aggregated_Count = {
  __typename?: 'forms_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['Int']['output']>;
  on_success?: Maybe<Scalars['Int']['output']>;
  redirect_url?: Maybe<Scalars['Int']['output']>;
  /** The fields for the form. */
  schema?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  /** The text for the submit button label. */
  submit_label?: Maybe<Scalars['Int']['output']>;
  success_message?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Forms_Aggregated_Fields = {
  __typename?: 'forms_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Forms_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Forms_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Forms_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  on_success?: InputMaybe<String_Filter_Operators>;
  redirect_url?: InputMaybe<String_Filter_Operators>;
  schema?: InputMaybe<String_Filter_Operators>;
  schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  submit_label?: InputMaybe<String_Filter_Operators>;
  success_message?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Forms_Mutated = {
  __typename?: 'forms_mutated';
  data?: Maybe<Forms>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Help_Articles = {
  __typename?: 'help_articles';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  help_collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  owner?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Help_Articles_Aggregated = {
  __typename?: 'help_articles_aggregated';
  avg?: Maybe<Help_Articles_Aggregated_Fields>;
  avgDistinct?: Maybe<Help_Articles_Aggregated_Fields>;
  count?: Maybe<Help_Articles_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Help_Articles_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Help_Articles_Aggregated_Fields>;
  min?: Maybe<Help_Articles_Aggregated_Fields>;
  sum?: Maybe<Help_Articles_Aggregated_Fields>;
  sumDistinct?: Maybe<Help_Articles_Aggregated_Fields>;
};

export type Help_Articles_Aggregated_Count = {
  __typename?: 'help_articles_aggregated_count';
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  help_collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Help_Articles_Aggregated_Fields = {
  __typename?: 'help_articles_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Help_Articles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Help_Articles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Help_Articles_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  help_collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  owner?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  summary?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Help_Articles_Mutated = {
  __typename?: 'help_articles_mutated';
  data?: Maybe<Help_Articles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Inbox = {
  __typename?: 'inbox';
  data?: Maybe<Scalars['JSON']['output']>;
  data_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  form?: Maybe<Forms>;
  id: Scalars['ID']['output'];
  project?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type InboxFormArgs = {
  filter?: InputMaybe<Forms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Inbox_Aggregated = {
  __typename?: 'inbox_aggregated';
  avg?: Maybe<Inbox_Aggregated_Fields>;
  avgDistinct?: Maybe<Inbox_Aggregated_Fields>;
  count?: Maybe<Inbox_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Inbox_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Inbox_Aggregated_Fields>;
  min?: Maybe<Inbox_Aggregated_Fields>;
  sum?: Maybe<Inbox_Aggregated_Fields>;
  sumDistinct?: Maybe<Inbox_Aggregated_Fields>;
};

export type Inbox_Aggregated_Count = {
  __typename?: 'inbox_aggregated_count';
  data?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  form?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  project?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  task?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Inbox_Aggregated_Fields = {
  __typename?: 'inbox_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Inbox_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Inbox_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Inbox_Filter>>>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  form?: InputMaybe<Forms_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  project?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  task?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Inbox_Mutated = {
  __typename?: 'inbox_mutated';
  data?: Maybe<Inbox>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  link_to_collection?: Maybe<Scalars['JSON']['output']>;
  link_to_collection_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
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
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  link_to_collection?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
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
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  link_to_collection?: InputMaybe<String_Filter_Operators>;
  link_to_collection_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Links_Mutated = {
  __typename?: 'links_mutated';
  data?: Maybe<Links>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Messages = {
  __typename?: 'messages';
  contact_id?: Maybe<Scalars['String']['output']>;
  conversation?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  visitor_id?: Maybe<Scalars['String']['output']>;
};

export type Messages_Aggregated = {
  __typename?: 'messages_aggregated';
  count?: Maybe<Messages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Messages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Messages_Aggregated_Count = {
  __typename?: 'messages_aggregated_count';
  contact_id?: Maybe<Scalars['Int']['output']>;
  conversation?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  visitor_id?: Maybe<Scalars['Int']['output']>;
};

export type Messages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Messages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Messages_Filter>>>;
  contact_id?: InputMaybe<String_Filter_Operators>;
  conversation?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  text?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  visitor_id?: InputMaybe<String_Filter_Operators>;
};

export type Messages_Mutated = {
  __typename?: 'messages_mutated';
  data?: Maybe<Messages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Navigation = {
  __typename?: 'navigation';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<Navigation_Items>>>;
  items_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type NavigationItemsArgs = {
  filter?: InputMaybe<Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Navigation_Aggregated = {
  __typename?: 'navigation_aggregated';
  count?: Maybe<Navigation_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Navigation_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Navigation_Aggregated_Count = {
  __typename?: 'navigation_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Navigation_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigation_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Navigation_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  items?: InputMaybe<Navigation_Items_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Navigation_Items = {
  __typename?: 'navigation_items';
  children?: Maybe<Array<Maybe<Navigation_Items>>>;
  children_func?: Maybe<Count_Functions>;
  has_children?: Maybe<Scalars['Boolean']['output']>;
  /** Icon that displays in dropdown menus on website. */
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Label to help users. Displays below the link in dropdown nav menus. */
  label?: Maybe<Scalars['String']['output']>;
  navigation?: Maybe<Navigation>;
  open_in_new_tab?: Maybe<Scalars['Boolean']['output']>;
  page?: Maybe<Pages>;
  parent?: Maybe<Navigation_Items>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Navigation_ItemsChildrenArgs = {
  filter?: InputMaybe<Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Navigation_ItemsNavigationArgs = {
  filter?: InputMaybe<Navigation_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Navigation_ItemsPageArgs = {
  filter?: InputMaybe<Pages_Filter>;
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
  has_children?: Maybe<Scalars['Int']['output']>;
  /** Icon that displays in dropdown menus on website. */
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Label to help users. Displays below the link in dropdown nav menus. */
  label?: Maybe<Scalars['Int']['output']>;
  navigation?: Maybe<Scalars['Int']['output']>;
  open_in_new_tab?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
};

export type Navigation_Items_Aggregated_Fields = {
  __typename?: 'navigation_items_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Navigation_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Navigation_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Navigation_Items_Filter>>>;
  children?: InputMaybe<Navigation_Items_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  has_children?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  navigation?: InputMaybe<Navigation_Filter>;
  open_in_new_tab?: InputMaybe<Boolean_Filter_Operators>;
  page?: InputMaybe<Pages_Filter>;
  parent?: InputMaybe<Navigation_Items_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
};

export type Navigation_Items_Mutated = {
  __typename?: 'navigation_items_mutated';
  data?: Maybe<Navigation_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Navigation_Mutated = {
  __typename?: 'navigation_mutated';
  data?: Maybe<Navigation>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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

export type Page_Blocks = {
  __typename?: 'page_blocks';
  collection?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Hide this block on the frontend without having to remove it from your page. */
  hide_block?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Page_Blocks_Item_Union>;
  pages_id?: Maybe<Pages>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Page_BlocksPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Blocks_Aggregated = {
  __typename?: 'page_blocks_aggregated';
  avg?: Maybe<Page_Blocks_Aggregated_Fields>;
  avgDistinct?: Maybe<Page_Blocks_Aggregated_Fields>;
  count?: Maybe<Page_Blocks_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Page_Blocks_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Page_Blocks_Aggregated_Fields>;
  min?: Maybe<Page_Blocks_Aggregated_Fields>;
  sum?: Maybe<Page_Blocks_Aggregated_Fields>;
  sumDistinct?: Maybe<Page_Blocks_Aggregated_Fields>;
};

export type Page_Blocks_Aggregated_Count = {
  __typename?: 'page_blocks_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  /** Hide this block on the frontend without having to remove it from your page. */
  hide_block?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  pages_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Page_Blocks_Aggregated_Fields = {
  __typename?: 'page_blocks_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Page_Blocks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Blocks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Blocks_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  hide_block?: InputMaybe<Boolean_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  item__block_columns?: InputMaybe<Block_Columns_Filter>;
  item__block_cta?: InputMaybe<Block_Cta_Filter>;
  item__block_divider?: InputMaybe<Block_Divider_Filter>;
  item__block_faqs?: InputMaybe<Block_Faqs_Filter>;
  item__block_form?: InputMaybe<Block_Form_Filter>;
  item__block_gallery?: InputMaybe<Block_Gallery_Filter>;
  item__block_hero?: InputMaybe<Block_Hero_Filter>;
  item__block_html?: InputMaybe<Block_Html_Filter>;
  item__block_logocloud?: InputMaybe<Block_Logocloud_Filter>;
  item__block_quote?: InputMaybe<Block_Quote_Filter>;
  item__block_richtext?: InputMaybe<Block_Richtext_Filter>;
  item__block_steps?: InputMaybe<Block_Steps_Filter>;
  item__block_team?: InputMaybe<Block_Team_Filter>;
  item__block_testimonials?: InputMaybe<Block_Testimonials_Filter>;
  item__block_video?: InputMaybe<Block_Video_Filter>;
  pages_id?: InputMaybe<Pages_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Page_Blocks_Item_Union = Block_Columns | Block_Cta | Block_Divider | Block_Faqs | Block_Form | Block_Gallery | Block_Hero | Block_Html | Block_Logocloud | Block_Quote | Block_Richtext | Block_Steps | Block_Team | Block_Testimonials | Block_Video;

export type Page_Blocks_Mutated = {
  __typename?: 'page_blocks_mutated';
  data?: Maybe<Page_Blocks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Page_Editor_Nodes = {
  __typename?: 'page_editor_nodes';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Page_Editor_Nodes_Item_Union>;
  pages_id?: Maybe<Pages>;
  pages_translations_id?: Maybe<Pages_Translations>;
};


export type Page_Editor_NodesPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_Editor_NodesPages_Translations_IdArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Editor_Nodes_Aggregated = {
  __typename?: 'page_editor_nodes_aggregated';
  avg?: Maybe<Page_Editor_Nodes_Aggregated_Fields>;
  avgDistinct?: Maybe<Page_Editor_Nodes_Aggregated_Fields>;
  count?: Maybe<Page_Editor_Nodes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Page_Editor_Nodes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Page_Editor_Nodes_Aggregated_Fields>;
  min?: Maybe<Page_Editor_Nodes_Aggregated_Fields>;
  sum?: Maybe<Page_Editor_Nodes_Aggregated_Fields>;
  sumDistinct?: Maybe<Page_Editor_Nodes_Aggregated_Fields>;
};

export type Page_Editor_Nodes_Aggregated_Count = {
  __typename?: 'page_editor_nodes_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  pages_id?: Maybe<Scalars['Int']['output']>;
  pages_translations_id?: Maybe<Scalars['Int']['output']>;
};

export type Page_Editor_Nodes_Aggregated_Fields = {
  __typename?: 'page_editor_nodes_aggregated_fields';
  pages_translations_id?: Maybe<Scalars['Float']['output']>;
};

export type Page_Editor_Nodes_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Editor_Nodes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Page_Editor_Nodes_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  item__block_button?: InputMaybe<Block_Button_Filter>;
  item__block_quote?: InputMaybe<Block_Quote_Filter>;
  item__links?: InputMaybe<Links_Filter>;
  item__related_block_faqs?: InputMaybe<Related_Block_Faqs_Filter>;
  pages_id?: InputMaybe<Pages_Filter>;
  pages_translations_id?: InputMaybe<Pages_Translations_Filter>;
};

export type Page_Editor_Nodes_Item_Union = Block_Button | Block_Quote | Links | Related_Block_Faqs;

export type Page_Editor_Nodes_Mutated = {
  __typename?: 'page_editor_nodes_mutated';
  data?: Maybe<Page_Editor_Nodes>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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
  route?: Maybe<Routes>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Page_Settings_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
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
  route?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
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
  id?: InputMaybe<String_Filter_Operators>;
  route?: InputMaybe<Routes_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Page_Settings_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Page_Settings_Mutated = {
  __typename?: 'page_settings_mutated';
  data?: Maybe<Page_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Page_Settings_Translations = {
  __typename?: 'page_settings_translations';
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
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
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
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
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
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

export type Pages = {
  __typename?: 'pages';
  blocks?: Maybe<Array<Maybe<Page_Blocks>>>;
  blocks_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  page_settings?: Maybe<Page_Settings>;
  /** Start with a slash (/page) and do NOT add a trailing slash (/page/) */
  permalink?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Pages_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type PagesBlocksArgs = {
  filter?: InputMaybe<Page_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PagesPage_SettingsArgs = {
  filter?: InputMaybe<Page_Settings_Filter>;
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
  blocks?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  page_settings?: Maybe<Scalars['Int']['output']>;
  /** Start with a slash (/page) and do NOT add a trailing slash (/page/) */
  permalink?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Aggregated_Fields = {
  __typename?: 'pages_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Blog = {
  __typename?: 'pages_blog';
  featured_post?: Maybe<Posts>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Pages_BlogFeatured_PostArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Blog_Mutated = {
  __typename?: 'pages_blog_mutated';
  data?: Maybe<Pages_Blog>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  blocks?: InputMaybe<Page_Blocks_Filter>;
  blocks_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  page_settings?: InputMaybe<Page_Settings_Filter>;
  permalink?: InputMaybe<String_Filter_Operators>;
  seo?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Pages_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Pages_Mutated = {
  __typename?: 'pages_mutated';
  data?: Maybe<Pages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pages_Projects = {
  __typename?: 'pages_projects';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Pages_Projects_Mutated = {
  __typename?: 'pages_projects_mutated';
  data?: Maybe<Pages_Projects>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pages_Translations = {
  __typename?: 'pages_translations';
  block_editor?: Maybe<Scalars['JSON']['output']>;
  block_editor_func?: Maybe<Count_Functions>;
  editor_nodes?: Maybe<Array<Maybe<Page_Editor_Nodes>>>;
  editor_nodes_func?: Maybe<Count_Functions>;
  flexible_editor?: Maybe<Scalars['JSON']['output']>;
  flexible_editor_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  name?: Maybe<Scalars['String']['output']>;
  pages_id?: Maybe<Pages>;
};


export type Pages_TranslationsEditor_NodesArgs = {
  filter?: InputMaybe<Page_Editor_Nodes_Filter>;
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
  block_editor?: Maybe<Scalars['Int']['output']>;
  editor_nodes?: Maybe<Scalars['Int']['output']>;
  flexible_editor?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  pages_id?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Translations_Aggregated_Fields = {
  __typename?: 'pages_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Translations_Filter>>>;
  block_editor?: InputMaybe<String_Filter_Operators>;
  block_editor_func?: InputMaybe<Count_Function_Filter_Operators>;
  editor_nodes?: InputMaybe<Page_Editor_Nodes_Filter>;
  editor_nodes_func?: InputMaybe<Count_Function_Filter_Operators>;
  flexible_editor?: InputMaybe<String_Filter_Operators>;
  flexible_editor_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  pages_id?: InputMaybe<Pages_Filter>;
};

export type Pages_Translations_Mutated = {
  __typename?: 'pages_translations_mutated';
  data?: Maybe<Pages_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Post_Gallery_Items = {
  __typename?: 'post_gallery_items';
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  posts_id?: Maybe<Posts>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Post_Gallery_ItemsDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Post_Gallery_ItemsPosts_IdArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Gallery_Items_Aggregated = {
  __typename?: 'post_gallery_items_aggregated';
  avg?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  count?: Maybe<Post_Gallery_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Post_Gallery_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  min?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  sum?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
};

export type Post_Gallery_Items_Aggregated_Count = {
  __typename?: 'post_gallery_items_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  posts_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Post_Gallery_Items_Aggregated_Fields = {
  __typename?: 'post_gallery_items_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Post_Gallery_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Post_Gallery_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Post_Gallery_Items_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  posts_id?: InputMaybe<Posts_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Post_Gallery_Items_Mutated = {
  __typename?: 'post_gallery_items_mutated';
  data?: Maybe<Post_Gallery_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Posts = {
  __typename?: 'posts';
  author?: Maybe<Scalars['String']['output']>;
  built_with?: Maybe<Scalars['JSON']['output']>;
  built_with_func?: Maybe<Count_Functions>;
  category?: Maybe<Categories>;
  client?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  /** Use a range */
  cost?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_published?: Maybe<Scalars['Date']['output']>;
  date_published_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  gallery?: Maybe<Array<Maybe<Post_Gallery_Items>>>;
  gallery_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  seo?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** What type of post is this? Determines the template used to display the post on the frontend. */
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
};


export type PostsCategoryArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostsGalleryArgs = {
  filter?: InputMaybe<Post_Gallery_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Posts_Aggregated = {
  __typename?: 'posts_aggregated';
  avg?: Maybe<Posts_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Aggregated_Fields>;
  count?: Maybe<Posts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Posts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Posts_Aggregated_Fields>;
  min?: Maybe<Posts_Aggregated_Fields>;
  sum?: Maybe<Posts_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Aggregated_Fields>;
};

export type Posts_Aggregated_Count = {
  __typename?: 'posts_aggregated_count';
  author?: Maybe<Scalars['Int']['output']>;
  built_with?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  client?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  /** Use a range */
  cost?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_published?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  gallery?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  /** What type of post is this? Determines the template used to display the post on the frontend. */
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  video_url?: Maybe<Scalars['Int']['output']>;
};

export type Posts_Aggregated_Fields = {
  __typename?: 'posts_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  author?: InputMaybe<String_Filter_Operators>;
  built_with?: InputMaybe<String_Filter_Operators>;
  built_with_func?: InputMaybe<Count_Function_Filter_Operators>;
  category?: InputMaybe<Categories_Filter>;
  client?: InputMaybe<String_Filter_Operators>;
  content?: InputMaybe<String_Filter_Operators>;
  cost?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_published?: InputMaybe<Date_Filter_Operators>;
  date_published_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  gallery?: InputMaybe<Post_Gallery_Items_Filter>;
  gallery_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  seo?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  summary?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  video_url?: InputMaybe<String_Filter_Operators>;
};

export type Posts_Mutated = {
  __typename?: 'posts_mutated';
  data?: Maybe<Posts>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<String_Filter_Operators>;
  isrewrite?: InputMaybe<Boolean_Filter_Operators>;
  locale?: InputMaybe<Boolean_Filter_Operators>;
  permanent?: InputMaybe<Boolean_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  source?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Redirects_Mutated = {
  __typename?: 'redirects_mutated';
  data?: Maybe<Redirects>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Related_Block_Faqs = {
  __typename?: 'related_block_faqs';
  blocks?: Maybe<Array<Maybe<Related_Block_Faqs_Block_Faqs>>>;
  blocks_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
};


export type Related_Block_FaqsBlocksArgs = {
  filter?: InputMaybe<Related_Block_Faqs_Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Related_Block_Faqs_Aggregated = {
  __typename?: 'related_block_faqs_aggregated';
  avg?: Maybe<Related_Block_Faqs_Aggregated_Fields>;
  avgDistinct?: Maybe<Related_Block_Faqs_Aggregated_Fields>;
  count?: Maybe<Related_Block_Faqs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Related_Block_Faqs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Related_Block_Faqs_Aggregated_Fields>;
  min?: Maybe<Related_Block_Faqs_Aggregated_Fields>;
  sum?: Maybe<Related_Block_Faqs_Aggregated_Fields>;
  sumDistinct?: Maybe<Related_Block_Faqs_Aggregated_Fields>;
};

export type Related_Block_Faqs_Aggregated_Count = {
  __typename?: 'related_block_faqs_aggregated_count';
  blocks?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Related_Block_Faqs_Aggregated_Fields = {
  __typename?: 'related_block_faqs_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Related_Block_Faqs_Block_Faqs = {
  __typename?: 'related_block_faqs_block_faqs';
  block_faqs_id?: Maybe<Block_Faqs>;
  id: Scalars['ID']['output'];
  related_block_faqs_id?: Maybe<Related_Block_Faqs>;
};


export type Related_Block_Faqs_Block_FaqsBlock_Faqs_IdArgs = {
  filter?: InputMaybe<Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Related_Block_Faqs_Block_FaqsRelated_Block_Faqs_IdArgs = {
  filter?: InputMaybe<Related_Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Related_Block_Faqs_Block_Faqs_Aggregated = {
  __typename?: 'related_block_faqs_block_faqs_aggregated';
  avg?: Maybe<Related_Block_Faqs_Block_Faqs_Aggregated_Fields>;
  avgDistinct?: Maybe<Related_Block_Faqs_Block_Faqs_Aggregated_Fields>;
  count?: Maybe<Related_Block_Faqs_Block_Faqs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Related_Block_Faqs_Block_Faqs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Related_Block_Faqs_Block_Faqs_Aggregated_Fields>;
  min?: Maybe<Related_Block_Faqs_Block_Faqs_Aggregated_Fields>;
  sum?: Maybe<Related_Block_Faqs_Block_Faqs_Aggregated_Fields>;
  sumDistinct?: Maybe<Related_Block_Faqs_Block_Faqs_Aggregated_Fields>;
};

export type Related_Block_Faqs_Block_Faqs_Aggregated_Count = {
  __typename?: 'related_block_faqs_block_faqs_aggregated_count';
  block_faqs_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  related_block_faqs_id?: Maybe<Scalars['Int']['output']>;
};

export type Related_Block_Faqs_Block_Faqs_Aggregated_Fields = {
  __typename?: 'related_block_faqs_block_faqs_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  related_block_faqs_id?: Maybe<Scalars['Float']['output']>;
};

export type Related_Block_Faqs_Block_Faqs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Related_Block_Faqs_Block_Faqs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Related_Block_Faqs_Block_Faqs_Filter>>>;
  block_faqs_id?: InputMaybe<Block_Faqs_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  related_block_faqs_id?: InputMaybe<Related_Block_Faqs_Filter>;
};

export type Related_Block_Faqs_Block_Faqs_Mutated = {
  __typename?: 'related_block_faqs_block_faqs_mutated';
  data?: Maybe<Related_Block_Faqs_Block_Faqs>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Related_Block_Faqs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Related_Block_Faqs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Related_Block_Faqs_Filter>>>;
  blocks?: InputMaybe<Related_Block_Faqs_Block_Faqs_Filter>;
  blocks_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Related_Block_Faqs_Mutated = {
  __typename?: 'related_block_faqs_mutated';
  data?: Maybe<Related_Block_Faqs>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Routes = {
  __typename?: 'routes';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Routes_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
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
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
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
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Routes_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
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

export type Version_Activites = {
  __typename?: 'version_activites';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Button = {
  __typename?: 'version_block_button';
  button_group?: Maybe<Scalars['JSON']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  external_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Scalars['JSON']['output']>;
  post?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Button_Group = {
  __typename?: 'version_block_button_group';
  alignment?: Maybe<Scalars['String']['output']>;
  buttons?: Maybe<Scalars['JSON']['output']>;
  buttons_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Columns = {
  __typename?: 'version_block_columns';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  rows?: Maybe<Scalars['JSON']['output']>;
  rows_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Columns_Rows = {
  __typename?: 'version_block_columns_rows';
  block_columns?: Maybe<Scalars['JSON']['output']>;
  button_group?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  image_position?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Cta = {
  __typename?: 'version_block_cta';
  button_group?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Divider = {
  __typename?: 'version_block_divider';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Faqs = {
  __typename?: 'version_block_faqs';
  alignment?: Maybe<Scalars['String']['output']>;
  faqs?: Maybe<Scalars['JSON']['output']>;
  faqs_func?: Maybe<Count_Functions>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Files = {
  __typename?: 'version_block_files';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  files?: Maybe<Scalars['JSON']['output']>;
  files_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Files_Files = {
  __typename?: 'version_block_files_files';
  block_files_id?: Maybe<Scalars['JSON']['output']>;
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
};

export type Version_Block_Form = {
  __typename?: 'version_block_form';
  form?: Maybe<Scalars['JSON']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Gallery = {
  __typename?: 'version_block_gallery';
  gallery_items?: Maybe<Scalars['JSON']['output']>;
  gallery_items_func?: Maybe<Count_Functions>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Gallery_Files = {
  __typename?: 'version_block_gallery_files';
  block_gallery_id?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Hero = {
  __typename?: 'version_block_hero';
  button_group?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  image_position?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Html = {
  __typename?: 'version_block_html';
  id: Scalars['ID']['output'];
  raw_html?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Logocloud = {
  __typename?: 'version_block_logocloud';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logos?: Maybe<Scalars['JSON']['output']>;
  logos_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Logocloud_Logos = {
  __typename?: 'version_block_logocloud_logos';
  block_logocloud_id?: Maybe<Scalars['JSON']['output']>;
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Block_Quote = {
  __typename?: 'version_block_quote';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Richtext = {
  __typename?: 'version_block_richtext';
  alignment?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Settings = {
  __typename?: 'version_block_settings';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Scalars['JSON']['output']>;
  tokens_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Step_Items = {
  __typename?: 'version_block_step_items';
  block_steps?: Maybe<Scalars['JSON']['output']>;
  button_group?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Steps = {
  __typename?: 'version_block_steps';
  /** If enabled, image position is alternated between left and right. */
  alternate_image_position: Scalars['Boolean']['output'];
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Show the step numbers on the website. For example: (Step 1, Step 2, etc) */
  show_step_numbers?: Maybe<Scalars['Boolean']['output']>;
  steps?: Maybe<Scalars['JSON']['output']>;
  steps_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Team = {
  __typename?: 'version_block_team';
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Testimonial_Slider_Items = {
  __typename?: 'version_block_testimonial_slider_items';
  block_testimonial_slider_id?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  testimonials_id?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Testimonials = {
  __typename?: 'version_block_testimonials';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  testimonials?: Maybe<Scalars['JSON']['output']>;
  testimonials_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Video = {
  __typename?: 'version_block_video';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  video_file?: Maybe<Scalars['JSON']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
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
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Categories = {
  __typename?: 'version_categories';
  color?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Contacts = {
  __typename?: 'version_contacts';
  /** Notes about this contact. Never visible to this person or their organization. */
  contact_notes?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  job_title?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** Is this an active contact? */
  status?: Maybe<Scalars['String']['output']>;
  /** Not every contact will have a login to the portal. This is the linked user account for this contact. */
  user?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Form_Builder = {
  __typename?: 'version_form_builder';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  on_success?: Maybe<Scalars['String']['output']>;
  redirect_url?: Maybe<Scalars['String']['output']>;
  schema?: Maybe<Scalars['JSON']['output']>;
  schema_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  success_message?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Form_Builder_Schema = {
  __typename?: 'version_form_builder_schema';
  collection?: Maybe<Scalars['String']['output']>;
  form_builder_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
};

export type Version_Form_Builder_Translations = {
  __typename?: 'version_form_builder_translations';
  id: Scalars['ID']['output'];
  languages_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Form_Configs = {
  __typename?: 'version_form_configs';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  friendly_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  schema?: Maybe<Scalars['JSON']['output']>;
  schema_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Form_Entry = {
  __typename?: 'version_form_entry';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  form?: Maybe<Scalars['JSON']['output']>;
  from_email?: Maybe<Scalars['String']['output']>;
  from_ip?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Form_Field_Settings = {
  __typename?: 'version_form_field_settings';
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** This validation should follow the AJV format guidelines */
  generic_validation?: Maybe<Scalars['String']['output']>;
  halfwidth?: Maybe<Scalars['Boolean']['output']>;
  hasPattern?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
  pattern_error_message?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  required_error_message?: Maybe<Scalars['String']['output']>;
};

export type Version_Form_Field_Text = {
  __typename?: 'version_form_field_text';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  form_field_settings?: Maybe<Scalars['JSON']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  text_settings?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Form_Field_Text_Settings = {
  __typename?: 'version_form_field_text_settings';
  default_value?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  placeholder?: Maybe<Scalars['String']['output']>;
};

export type Version_Forms = {
  __typename?: 'version_forms';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  on_success?: Maybe<Scalars['String']['output']>;
  redirect_url?: Maybe<Scalars['String']['output']>;
  /** The fields for the form. */
  schema?: Maybe<Scalars['JSON']['output']>;
  schema_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  /** The text for the submit button label. */
  submit_label?: Maybe<Scalars['String']['output']>;
  success_message?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Help_Articles = {
  __typename?: 'version_help_articles';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  help_collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  owner?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Inbox = {
  __typename?: 'version_inbox';
  data?: Maybe<Scalars['JSON']['output']>;
  data_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  form?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  project?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Languages = {
  __typename?: 'version_languages';
  code: Scalars['ID']['output'];
  direction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Version_Links = {
  __typename?: 'version_links';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  link_to_collection?: Maybe<Scalars['JSON']['output']>;
  link_to_collection_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Messages = {
  __typename?: 'version_messages';
  contact_id?: Maybe<Scalars['String']['output']>;
  conversation?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  visitor_id?: Maybe<Scalars['String']['output']>;
};

export type Version_Navigation = {
  __typename?: 'version_navigation';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  items?: Maybe<Scalars['JSON']['output']>;
  items_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Navigation_Items = {
  __typename?: 'version_navigation_items';
  children?: Maybe<Scalars['JSON']['output']>;
  children_func?: Maybe<Count_Functions>;
  has_children?: Maybe<Scalars['Boolean']['output']>;
  /** Icon that displays in dropdown menus on website. */
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Label to help users. Displays below the link in dropdown nav menus. */
  label?: Maybe<Scalars['String']['output']>;
  navigation?: Maybe<Scalars['JSON']['output']>;
  open_in_new_tab?: Maybe<Scalars['Boolean']['output']>;
  page?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Version_Page_Blocks = {
  __typename?: 'version_page_blocks';
  collection?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Hide this block on the frontend without having to remove it from your page. */
  hide_block?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  pages_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Page_Editor_Nodes = {
  __typename?: 'version_page_editor_nodes';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  pages_id?: Maybe<Scalars['JSON']['output']>;
  pages_translations_id?: Maybe<Scalars['JSON']['output']>;
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
  route?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Page_Settings_Translations = {
  __typename?: 'version_page_settings_translations';
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Scalars['JSON']['output']>;
  page_settings_id?: Maybe<Scalars['JSON']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages = {
  __typename?: 'version_pages';
  blocks?: Maybe<Scalars['JSON']['output']>;
  blocks_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  page_settings?: Maybe<Scalars['JSON']['output']>;
  /** Start with a slash (/page) and do NOT add a trailing slash (/page/) */
  permalink?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages_Blog = {
  __typename?: 'version_pages_blog';
  featured_post?: Maybe<Scalars['JSON']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages_Projects = {
  __typename?: 'version_pages_projects';
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages_Translations = {
  __typename?: 'version_pages_translations';
  block_editor?: Maybe<Scalars['JSON']['output']>;
  block_editor_func?: Maybe<Count_Functions>;
  editor_nodes?: Maybe<Scalars['JSON']['output']>;
  editor_nodes_func?: Maybe<Count_Functions>;
  flexible_editor?: Maybe<Scalars['JSON']['output']>;
  flexible_editor_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pages_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Post_Gallery_Items = {
  __typename?: 'version_post_gallery_items';
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  posts_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Posts = {
  __typename?: 'version_posts';
  author?: Maybe<Scalars['String']['output']>;
  built_with?: Maybe<Scalars['JSON']['output']>;
  built_with_func?: Maybe<Count_Functions>;
  category?: Maybe<Scalars['JSON']['output']>;
  client?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  /** Use a range */
  cost?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_published?: Maybe<Scalars['Date']['output']>;
  date_published_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  gallery?: Maybe<Scalars['JSON']['output']>;
  gallery_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  seo?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** What type of post is this? Determines the template used to display the post on the frontend. */
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
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
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Related_Block_Faqs = {
  __typename?: 'version_related_block_faqs';
  blocks?: Maybe<Scalars['JSON']['output']>;
  blocks_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
};

export type Version_Related_Block_Faqs_Block_Faqs = {
  __typename?: 'version_related_block_faqs_block_faqs';
  block_faqs_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  related_block_faqs_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Routes = {
  __typename?: 'version_routes';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Routes_Translations = {
  __typename?: 'version_routes_translations';
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Scalars['JSON']['output']>;
  route?: Maybe<Scalars['String']['output']>;
  routes_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Versioning_Example = {
  __typename?: 'version_versioning_example';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Versioning_Example = {
  __typename?: 'versioning_example';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Versioning_Example_Aggregated = {
  __typename?: 'versioning_example_aggregated';
  avg?: Maybe<Versioning_Example_Aggregated_Fields>;
  avgDistinct?: Maybe<Versioning_Example_Aggregated_Fields>;
  count?: Maybe<Versioning_Example_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Versioning_Example_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Versioning_Example_Aggregated_Fields>;
  min?: Maybe<Versioning_Example_Aggregated_Fields>;
  sum?: Maybe<Versioning_Example_Aggregated_Fields>;
  sumDistinct?: Maybe<Versioning_Example_Aggregated_Fields>;
};

export type Versioning_Example_Aggregated_Count = {
  __typename?: 'versioning_example_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Versioning_Example_Aggregated_Fields = {
  __typename?: 'versioning_example_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Versioning_Example_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Versioning_Example_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Versioning_Example_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Versioning_Example_Mutated = {
  __typename?: 'versioning_example_mutated';
  data?: Maybe<Versioning_Example>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusFilesFragment = { __typename?: 'directus_files', id: string, filename_disk?: string | null, filename_download: string, title?: string | null, type?: string | null, width?: number | null, height?: number | null, duration?: number | null, embed?: string | null, description?: string | null, focal_point_x?: number | null, focal_point_y?: number | null, caption?: string | null, thumbhash?: string | null } & { ' $fragmentName'?: 'DirectusFilesFragment' };

export type BlockFilesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BlockFilesQuery = { __typename?: 'Query', block_files_by_id?: { __typename?: 'block_files', files?: Array<{ __typename?: 'block_files_files', directus_files_id?: (
        { __typename?: 'directus_files' }
        & { ' $fragmentRefs'?: { 'DirectusFilesFragment': DirectusFilesFragment } }
      ) | null } | null> | null } | null };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'pages', title?: string | null, translations?: Array<{ __typename?: 'pages_translations', flexible_editor?: any | null, languages_code?: { __typename?: 'languages', code: string } | null, editor_nodes?: Array<{ __typename?: 'page_editor_nodes', id: string, collection?: string | null, pages_translations_id?: { __typename?: 'pages_translations', languages_code?: { __typename?: 'languages', code: string } | null } | null, item?: { __typename?: 'block_button', color?: string | null, date_created?: any | null, date_updated?: any | null, external_url?: string | null, id: string, label?: string | null, sort?: number | null, type?: string | null, variant?: string | null } | { __typename?: 'block_quote', content?: string | null, id: string, subtitle?: string | null, title?: string | null } | { __typename?: 'links', id: string, label?: string | null } | { __typename?: 'related_block_faqs', id: string, blocks?: Array<{ __typename?: 'related_block_faqs_block_faqs', id: string, block_faqs_id?: { __typename?: 'block_faqs', alignment?: string | null, faqs?: any | null, headline?: string | null, id: string, title?: string | null } | null } | null> | null } | null } | null> | null } | null> | null }> };

export type PageSettingsFragment = { __typename?: 'page_settings', id: string, belongs_to_collection?: string | null, belongs_to_key?: string | null, translations?: Array<{ __typename?: 'page_settings_translations', path?: string | null, title?: string | null, slug?: string | null, languages_code?: { __typename?: 'languages', code: string } | null } | null> | null } & { ' $fragmentName'?: 'PageSettingsFragment' };

export type PageFragment = { __typename?: 'pages', translations?: Array<{ __typename?: 'pages_translations', name?: string | null } | null> | null, page_settings?: (
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


export type PageByIdWithoutFragmentQuery = { __typename?: 'Query', pages_by_id?: { __typename?: 'pages', translations?: Array<{ __typename?: 'pages_translations', name?: string | null } | null> | null, page_settings?: (
      { __typename?: 'page_settings' }
      & { ' $fragmentRefs'?: { 'PageSettingsFragment': PageSettingsFragment } }
    ) | null } | null };

export const DirectusFilesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DirectusFiles"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_disk"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"embed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point_x"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point_y"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"thumbhash"}}]}}]} as unknown as DocumentNode<DirectusFilesFragment, unknown>;
export const PageSettingsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PageSettingsFragment, unknown>;
export const PageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pages"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"belongs_to_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nnull"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PageFragment, unknown>;
export const BlockFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlockFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_files_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directus_files_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DirectusFiles"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DirectusFiles"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"directus_files"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename_disk"}},{"kind":"Field","name":{"kind":"Name","value":"filename_download"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"embed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point_x"}},{"kind":"Field","name":{"kind":"Name","value":"focal_point_y"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"thumbhash"}}]}}]} as unknown as DocumentNode<BlockFilesQuery, BlockFilesQueryVariables>;
export const PagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flexible_editor"}},{"kind":"Field","name":{"kind":"Name","value":"editor_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pages_translations_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"date_updated"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"sort"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"related_block_faqs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"block_faqs_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"faqs"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"links"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PagesQuery, PagesQueryVariables>;
export const PageByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Page"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pages"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"belongs_to_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nnull"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}}]}}]} as unknown as DocumentNode<PageByIdQuery, PageByIdQueryVariables>;
export const PageByIdWithoutFragmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageByIdWithoutFragment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"belongs_to_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nnull"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PageByIdWithoutFragmentQuery, PageByIdWithoutFragmentQueryVariables>;