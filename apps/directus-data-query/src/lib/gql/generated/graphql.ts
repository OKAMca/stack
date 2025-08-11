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
  /** Hashed string values */
  Hash: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  __typename?: 'Mutation';
  create_activites_item?: Maybe<Activites>;
  create_activites_items: Array<Activites>;
  create_block_button_group_item?: Maybe<Block_Button_Group>;
  create_block_button_group_items: Array<Block_Button_Group>;
  create_block_button_item?: Maybe<Block_Button>;
  create_block_button_items: Array<Block_Button>;
  create_block_columns_item?: Maybe<Block_Columns>;
  create_block_columns_items: Array<Block_Columns>;
  create_block_columns_rows_item?: Maybe<Block_Columns_Rows>;
  create_block_columns_rows_items: Array<Block_Columns_Rows>;
  create_block_cta_item?: Maybe<Block_Cta>;
  create_block_cta_items: Array<Block_Cta>;
  create_block_divider_item?: Maybe<Block_Divider>;
  create_block_divider_items: Array<Block_Divider>;
  create_block_faqs_item?: Maybe<Block_Faqs>;
  create_block_faqs_items: Array<Block_Faqs>;
  create_block_files_files_item?: Maybe<Block_Files_Files>;
  create_block_files_files_items: Array<Block_Files_Files>;
  create_block_files_item?: Maybe<Block_Files>;
  create_block_files_items: Array<Block_Files>;
  create_block_form_item?: Maybe<Block_Form>;
  create_block_form_items: Array<Block_Form>;
  create_block_gallery_files_item?: Maybe<Block_Gallery_Files>;
  create_block_gallery_files_items: Array<Block_Gallery_Files>;
  create_block_gallery_item?: Maybe<Block_Gallery>;
  create_block_gallery_items: Array<Block_Gallery>;
  create_block_hero_item?: Maybe<Block_Hero>;
  create_block_hero_items: Array<Block_Hero>;
  create_block_html_item?: Maybe<Block_Html>;
  create_block_html_items: Array<Block_Html>;
  create_block_logocloud_item?: Maybe<Block_Logocloud>;
  create_block_logocloud_items: Array<Block_Logocloud>;
  create_block_logocloud_logos_item?: Maybe<Block_Logocloud_Logos>;
  create_block_logocloud_logos_items: Array<Block_Logocloud_Logos>;
  create_block_quote_item?: Maybe<Block_Quote>;
  create_block_quote_items: Array<Block_Quote>;
  create_block_richtext_item?: Maybe<Block_Richtext>;
  create_block_richtext_items: Array<Block_Richtext>;
  create_block_settings_item?: Maybe<Block_Settings>;
  create_block_settings_items: Array<Block_Settings>;
  create_block_step_items_item?: Maybe<Block_Step_Items>;
  create_block_step_items_items: Array<Block_Step_Items>;
  create_block_steps_item?: Maybe<Block_Steps>;
  create_block_steps_items: Array<Block_Steps>;
  create_block_team_item?: Maybe<Block_Team>;
  create_block_team_items: Array<Block_Team>;
  create_block_testimonial_slider_items_item?: Maybe<Block_Testimonial_Slider_Items>;
  create_block_testimonial_slider_items_items: Array<Block_Testimonial_Slider_Items>;
  create_block_testimonials_item?: Maybe<Block_Testimonials>;
  create_block_testimonials_items: Array<Block_Testimonials>;
  create_block_video_item?: Maybe<Block_Video>;
  create_block_video_items: Array<Block_Video>;
  create_block_wysiwygs_item?: Maybe<Block_Wysiwygs>;
  create_block_wysiwygs_items: Array<Block_Wysiwygs>;
  create_categories_item?: Maybe<Categories>;
  create_categories_items: Array<Categories>;
  create_contacts_item?: Maybe<Contacts>;
  create_contacts_items: Array<Contacts>;
  create_conversations_item?: Maybe<Conversations>;
  create_conversations_items: Array<Conversations>;
  create_directus_sync_id_map_item?: Maybe<Directus_Sync_Id_Map>;
  create_directus_sync_id_map_items: Array<Directus_Sync_Id_Map>;
  create_form_builder_item?: Maybe<Form_Builder>;
  create_form_builder_items: Array<Form_Builder>;
  create_form_builder_schema_item?: Maybe<Form_Builder_Schema>;
  create_form_builder_schema_items: Array<Form_Builder_Schema>;
  create_form_builder_translations_item?: Maybe<Form_Builder_Translations>;
  create_form_builder_translations_items: Array<Form_Builder_Translations>;
  create_form_configs_item?: Maybe<Form_Configs>;
  create_form_configs_items: Array<Form_Configs>;
  create_form_entry_item?: Maybe<Form_Entry>;
  create_form_entry_items: Array<Form_Entry>;
  create_form_field_settings_item?: Maybe<Form_Field_Settings>;
  create_form_field_settings_items: Array<Form_Field_Settings>;
  create_form_field_text_item?: Maybe<Form_Field_Text>;
  create_form_field_text_items: Array<Form_Field_Text>;
  create_form_field_text_settings_item?: Maybe<Form_Field_Text_Settings>;
  create_form_field_text_settings_items: Array<Form_Field_Text_Settings>;
  create_forms_item?: Maybe<Forms>;
  create_forms_items: Array<Forms>;
  create_help_articles_files_item?: Maybe<Help_Articles_Files>;
  create_help_articles_files_items: Array<Help_Articles_Files>;
  create_help_articles_item?: Maybe<Help_Articles>;
  create_help_articles_items: Array<Help_Articles>;
  create_help_articles_messages_item?: Maybe<Help_Articles_Messages>;
  create_help_articles_messages_items: Array<Help_Articles_Messages>;
  create_help_collections_item?: Maybe<Help_Collections>;
  create_help_collections_items: Array<Help_Collections>;
  create_help_feedback_item?: Maybe<Help_Feedback>;
  create_help_feedback_items: Array<Help_Feedback>;
  create_inbox_item?: Maybe<Inbox>;
  create_inbox_items: Array<Inbox>;
  create_languages_item?: Maybe<Languages>;
  create_languages_items: Array<Languages>;
  create_links_item?: Maybe<Links>;
  create_links_items: Array<Links>;
  create_messages_item?: Maybe<Messages>;
  create_messages_items: Array<Messages>;
  create_navigation_item?: Maybe<Navigation>;
  create_navigation_items: Array<Navigation>;
  create_navigation_items_item?: Maybe<Navigation_Items>;
  create_navigation_items_items: Array<Navigation_Items>;
  create_organization_addresses_item?: Maybe<Organization_Addresses>;
  create_organization_addresses_items: Array<Organization_Addresses>;
  create_organizations_contacts_item?: Maybe<Organizations_Contacts>;
  create_organizations_contacts_items: Array<Organizations_Contacts>;
  create_organizations_item?: Maybe<Organizations>;
  create_organizations_items: Array<Organizations>;
  create_os_activities_item?: Maybe<Os_Activities>;
  create_os_activities_items: Array<Os_Activities>;
  create_os_activity_contacts_item?: Maybe<Os_Activity_Contacts>;
  create_os_activity_contacts_items: Array<Os_Activity_Contacts>;
  create_os_deal_contacts_item?: Maybe<Os_Deal_Contacts>;
  create_os_deal_contacts_items: Array<Os_Deal_Contacts>;
  create_os_deal_stages_item?: Maybe<Os_Deal_Stages>;
  create_os_deal_stages_items: Array<Os_Deal_Stages>;
  create_os_deals_item?: Maybe<Os_Deals>;
  create_os_deals_items: Array<Os_Deals>;
  create_os_email_templates_item?: Maybe<Os_Email_Templates>;
  create_os_email_templates_items: Array<Os_Email_Templates>;
  create_os_expenses_item?: Maybe<Os_Expenses>;
  create_os_expenses_items: Array<Os_Expenses>;
  create_os_invoice_items_item?: Maybe<Os_Invoice_Items>;
  create_os_invoice_items_items: Array<Os_Invoice_Items>;
  create_os_invoices_item?: Maybe<Os_Invoices>;
  create_os_invoices_items: Array<Os_Invoices>;
  create_os_items_item?: Maybe<Os_Items>;
  create_os_items_items: Array<Os_Items>;
  create_os_payment_terms_item?: Maybe<Os_Payment_Terms>;
  create_os_payment_terms_items: Array<Os_Payment_Terms>;
  create_os_payments_item?: Maybe<Os_Payments>;
  create_os_payments_items: Array<Os_Payments>;
  create_os_project_contacts_item?: Maybe<Os_Project_Contacts>;
  create_os_project_contacts_items: Array<Os_Project_Contacts>;
  create_os_project_templates_item?: Maybe<Os_Project_Templates>;
  create_os_project_templates_items: Array<Os_Project_Templates>;
  create_os_project_updates_item?: Maybe<Os_Project_Updates>;
  create_os_project_updates_items: Array<Os_Project_Updates>;
  create_os_projects_item?: Maybe<Os_Projects>;
  create_os_projects_items: Array<Os_Projects>;
  create_os_proposal_approvals_item?: Maybe<Os_Proposal_Approvals>;
  create_os_proposal_approvals_items: Array<Os_Proposal_Approvals>;
  create_os_proposal_blocks_item?: Maybe<Os_Proposal_Blocks>;
  create_os_proposal_blocks_items: Array<Os_Proposal_Blocks>;
  create_os_proposal_contacts_item?: Maybe<Os_Proposal_Contacts>;
  create_os_proposal_contacts_items: Array<Os_Proposal_Contacts>;
  create_os_proposals_item?: Maybe<Os_Proposals>;
  create_os_proposals_items: Array<Os_Proposals>;
  create_os_task_files_item?: Maybe<Os_Task_Files>;
  create_os_task_files_items: Array<Os_Task_Files>;
  create_os_tasks_item?: Maybe<Os_Tasks>;
  create_os_tasks_items: Array<Os_Tasks>;
  create_os_tax_rates_item?: Maybe<Os_Tax_Rates>;
  create_os_tax_rates_items: Array<Os_Tax_Rates>;
  create_page_blocks_item?: Maybe<Page_Blocks>;
  create_page_blocks_items: Array<Page_Blocks>;
  create_page_editor_nodes_item?: Maybe<Page_Editor_Nodes>;
  create_page_editor_nodes_items: Array<Page_Editor_Nodes>;
  create_page_settings_item?: Maybe<Page_Settings>;
  create_page_settings_items: Array<Page_Settings>;
  create_page_settings_translations_item?: Maybe<Page_Settings_Translations>;
  create_page_settings_translations_items: Array<Page_Settings_Translations>;
  create_pages_item?: Maybe<Pages>;
  create_pages_items: Array<Pages>;
  create_pages_translations_item?: Maybe<Pages_Translations>;
  create_pages_translations_items: Array<Pages_Translations>;
  create_post_gallery_items_item?: Maybe<Post_Gallery_Items>;
  create_post_gallery_items_items: Array<Post_Gallery_Items>;
  create_posts_item?: Maybe<Posts>;
  create_posts_items: Array<Posts>;
  create_redirects_item?: Maybe<Redirects>;
  create_redirects_items: Array<Redirects>;
  create_related_block_faqs_block_faqs_item?: Maybe<Related_Block_Faqs_Block_Faqs>;
  create_related_block_faqs_block_faqs_items: Array<Related_Block_Faqs_Block_Faqs>;
  create_related_block_faqs_item?: Maybe<Related_Block_Faqs>;
  create_related_block_faqs_items: Array<Related_Block_Faqs>;
  create_repeater_example_item?: Maybe<Repeater_Example>;
  create_repeater_example_items: Array<Repeater_Example>;
  create_routes_item?: Maybe<Routes>;
  create_routes_items: Array<Routes>;
  create_routes_translations_item?: Maybe<Routes_Translations>;
  create_routes_translations_items: Array<Routes_Translations>;
  create_search_params_item?: Maybe<Search_Params>;
  create_search_params_items: Array<Search_Params>;
  create_seo_item?: Maybe<Seo>;
  create_seo_items: Array<Seo>;
  create_team_item?: Maybe<Team>;
  create_team_items: Array<Team>;
  create_testimonials_item?: Maybe<Testimonials>;
  create_testimonials_items: Array<Testimonials>;
  create_versioning_example_item?: Maybe<Versioning_Example>;
  create_versioning_example_items: Array<Versioning_Example>;
  delete_activites_item?: Maybe<Delete_One>;
  delete_activites_items?: Maybe<Delete_Many>;
  delete_block_button_group_item?: Maybe<Delete_One>;
  delete_block_button_group_items?: Maybe<Delete_Many>;
  delete_block_button_item?: Maybe<Delete_One>;
  delete_block_button_items?: Maybe<Delete_Many>;
  delete_block_columns_item?: Maybe<Delete_One>;
  delete_block_columns_items?: Maybe<Delete_Many>;
  delete_block_columns_rows_item?: Maybe<Delete_One>;
  delete_block_columns_rows_items?: Maybe<Delete_Many>;
  delete_block_cta_item?: Maybe<Delete_One>;
  delete_block_cta_items?: Maybe<Delete_Many>;
  delete_block_divider_item?: Maybe<Delete_One>;
  delete_block_divider_items?: Maybe<Delete_Many>;
  delete_block_faqs_item?: Maybe<Delete_One>;
  delete_block_faqs_items?: Maybe<Delete_Many>;
  delete_block_files_files_item?: Maybe<Delete_One>;
  delete_block_files_files_items?: Maybe<Delete_Many>;
  delete_block_files_item?: Maybe<Delete_One>;
  delete_block_files_items?: Maybe<Delete_Many>;
  delete_block_form_item?: Maybe<Delete_One>;
  delete_block_form_items?: Maybe<Delete_Many>;
  delete_block_gallery_files_item?: Maybe<Delete_One>;
  delete_block_gallery_files_items?: Maybe<Delete_Many>;
  delete_block_gallery_item?: Maybe<Delete_One>;
  delete_block_gallery_items?: Maybe<Delete_Many>;
  delete_block_hero_item?: Maybe<Delete_One>;
  delete_block_hero_items?: Maybe<Delete_Many>;
  delete_block_html_item?: Maybe<Delete_One>;
  delete_block_html_items?: Maybe<Delete_Many>;
  delete_block_logocloud_item?: Maybe<Delete_One>;
  delete_block_logocloud_items?: Maybe<Delete_Many>;
  delete_block_logocloud_logos_item?: Maybe<Delete_One>;
  delete_block_logocloud_logos_items?: Maybe<Delete_Many>;
  delete_block_quote_item?: Maybe<Delete_One>;
  delete_block_quote_items?: Maybe<Delete_Many>;
  delete_block_richtext_item?: Maybe<Delete_One>;
  delete_block_richtext_items?: Maybe<Delete_Many>;
  delete_block_settings_item?: Maybe<Delete_One>;
  delete_block_settings_items?: Maybe<Delete_Many>;
  delete_block_step_items_item?: Maybe<Delete_One>;
  delete_block_step_items_items?: Maybe<Delete_Many>;
  delete_block_steps_item?: Maybe<Delete_One>;
  delete_block_steps_items?: Maybe<Delete_Many>;
  delete_block_team_item?: Maybe<Delete_One>;
  delete_block_team_items?: Maybe<Delete_Many>;
  delete_block_testimonial_slider_items_item?: Maybe<Delete_One>;
  delete_block_testimonial_slider_items_items?: Maybe<Delete_Many>;
  delete_block_testimonials_item?: Maybe<Delete_One>;
  delete_block_testimonials_items?: Maybe<Delete_Many>;
  delete_block_video_item?: Maybe<Delete_One>;
  delete_block_video_items?: Maybe<Delete_Many>;
  delete_block_wysiwygs_item?: Maybe<Delete_One>;
  delete_block_wysiwygs_items?: Maybe<Delete_Many>;
  delete_categories_item?: Maybe<Delete_One>;
  delete_categories_items?: Maybe<Delete_Many>;
  delete_contacts_item?: Maybe<Delete_One>;
  delete_contacts_items?: Maybe<Delete_Many>;
  delete_conversations_item?: Maybe<Delete_One>;
  delete_conversations_items?: Maybe<Delete_Many>;
  delete_directus_sync_id_map_item?: Maybe<Delete_One>;
  delete_directus_sync_id_map_items?: Maybe<Delete_Many>;
  delete_form_builder_item?: Maybe<Delete_One>;
  delete_form_builder_items?: Maybe<Delete_Many>;
  delete_form_builder_schema_item?: Maybe<Delete_One>;
  delete_form_builder_schema_items?: Maybe<Delete_Many>;
  delete_form_builder_translations_item?: Maybe<Delete_One>;
  delete_form_builder_translations_items?: Maybe<Delete_Many>;
  delete_form_configs_item?: Maybe<Delete_One>;
  delete_form_configs_items?: Maybe<Delete_Many>;
  delete_form_entry_item?: Maybe<Delete_One>;
  delete_form_entry_items?: Maybe<Delete_Many>;
  delete_form_field_settings_item?: Maybe<Delete_One>;
  delete_form_field_settings_items?: Maybe<Delete_Many>;
  delete_form_field_text_item?: Maybe<Delete_One>;
  delete_form_field_text_items?: Maybe<Delete_Many>;
  delete_form_field_text_settings_item?: Maybe<Delete_One>;
  delete_form_field_text_settings_items?: Maybe<Delete_Many>;
  delete_forms_item?: Maybe<Delete_One>;
  delete_forms_items?: Maybe<Delete_Many>;
  delete_help_articles_files_item?: Maybe<Delete_One>;
  delete_help_articles_files_items?: Maybe<Delete_Many>;
  delete_help_articles_item?: Maybe<Delete_One>;
  delete_help_articles_items?: Maybe<Delete_Many>;
  delete_help_articles_messages_item?: Maybe<Delete_One>;
  delete_help_articles_messages_items?: Maybe<Delete_Many>;
  delete_help_collections_item?: Maybe<Delete_One>;
  delete_help_collections_items?: Maybe<Delete_Many>;
  delete_help_feedback_item?: Maybe<Delete_One>;
  delete_help_feedback_items?: Maybe<Delete_Many>;
  delete_inbox_item?: Maybe<Delete_One>;
  delete_inbox_items?: Maybe<Delete_Many>;
  delete_languages_item?: Maybe<Delete_One>;
  delete_languages_items?: Maybe<Delete_Many>;
  delete_links_item?: Maybe<Delete_One>;
  delete_links_items?: Maybe<Delete_Many>;
  delete_messages_item?: Maybe<Delete_One>;
  delete_messages_items?: Maybe<Delete_Many>;
  delete_navigation_item?: Maybe<Delete_One>;
  delete_navigation_items?: Maybe<Delete_Many>;
  delete_navigation_items_item?: Maybe<Delete_One>;
  delete_navigation_items_items?: Maybe<Delete_Many>;
  delete_organization_addresses_item?: Maybe<Delete_One>;
  delete_organization_addresses_items?: Maybe<Delete_Many>;
  delete_organizations_contacts_item?: Maybe<Delete_One>;
  delete_organizations_contacts_items?: Maybe<Delete_Many>;
  delete_organizations_item?: Maybe<Delete_One>;
  delete_organizations_items?: Maybe<Delete_Many>;
  delete_os_activities_item?: Maybe<Delete_One>;
  delete_os_activities_items?: Maybe<Delete_Many>;
  delete_os_activity_contacts_item?: Maybe<Delete_One>;
  delete_os_activity_contacts_items?: Maybe<Delete_Many>;
  delete_os_deal_contacts_item?: Maybe<Delete_One>;
  delete_os_deal_contacts_items?: Maybe<Delete_Many>;
  delete_os_deal_stages_item?: Maybe<Delete_One>;
  delete_os_deal_stages_items?: Maybe<Delete_Many>;
  delete_os_deals_item?: Maybe<Delete_One>;
  delete_os_deals_items?: Maybe<Delete_Many>;
  delete_os_email_templates_item?: Maybe<Delete_One>;
  delete_os_email_templates_items?: Maybe<Delete_Many>;
  delete_os_expenses_item?: Maybe<Delete_One>;
  delete_os_expenses_items?: Maybe<Delete_Many>;
  delete_os_invoice_items_item?: Maybe<Delete_One>;
  delete_os_invoice_items_items?: Maybe<Delete_Many>;
  delete_os_invoices_item?: Maybe<Delete_One>;
  delete_os_invoices_items?: Maybe<Delete_Many>;
  delete_os_items_item?: Maybe<Delete_One>;
  delete_os_items_items?: Maybe<Delete_Many>;
  delete_os_payment_terms_item?: Maybe<Delete_One>;
  delete_os_payment_terms_items?: Maybe<Delete_Many>;
  delete_os_payments_item?: Maybe<Delete_One>;
  delete_os_payments_items?: Maybe<Delete_Many>;
  delete_os_project_contacts_item?: Maybe<Delete_One>;
  delete_os_project_contacts_items?: Maybe<Delete_Many>;
  delete_os_project_templates_item?: Maybe<Delete_One>;
  delete_os_project_templates_items?: Maybe<Delete_Many>;
  delete_os_project_updates_item?: Maybe<Delete_One>;
  delete_os_project_updates_items?: Maybe<Delete_Many>;
  delete_os_projects_item?: Maybe<Delete_One>;
  delete_os_projects_items?: Maybe<Delete_Many>;
  delete_os_proposal_approvals_item?: Maybe<Delete_One>;
  delete_os_proposal_approvals_items?: Maybe<Delete_Many>;
  delete_os_proposal_blocks_item?: Maybe<Delete_One>;
  delete_os_proposal_blocks_items?: Maybe<Delete_Many>;
  delete_os_proposal_contacts_item?: Maybe<Delete_One>;
  delete_os_proposal_contacts_items?: Maybe<Delete_Many>;
  delete_os_proposals_item?: Maybe<Delete_One>;
  delete_os_proposals_items?: Maybe<Delete_Many>;
  delete_os_task_files_item?: Maybe<Delete_One>;
  delete_os_task_files_items?: Maybe<Delete_Many>;
  delete_os_tasks_item?: Maybe<Delete_One>;
  delete_os_tasks_items?: Maybe<Delete_Many>;
  delete_os_tax_rates_item?: Maybe<Delete_One>;
  delete_os_tax_rates_items?: Maybe<Delete_Many>;
  delete_page_blocks_item?: Maybe<Delete_One>;
  delete_page_blocks_items?: Maybe<Delete_Many>;
  delete_page_editor_nodes_item?: Maybe<Delete_One>;
  delete_page_editor_nodes_items?: Maybe<Delete_Many>;
  delete_page_settings_item?: Maybe<Delete_One>;
  delete_page_settings_items?: Maybe<Delete_Many>;
  delete_page_settings_translations_item?: Maybe<Delete_One>;
  delete_page_settings_translations_items?: Maybe<Delete_Many>;
  delete_pages_item?: Maybe<Delete_One>;
  delete_pages_items?: Maybe<Delete_Many>;
  delete_pages_translations_item?: Maybe<Delete_One>;
  delete_pages_translations_items?: Maybe<Delete_Many>;
  delete_post_gallery_items_item?: Maybe<Delete_One>;
  delete_post_gallery_items_items?: Maybe<Delete_Many>;
  delete_posts_item?: Maybe<Delete_One>;
  delete_posts_items?: Maybe<Delete_Many>;
  delete_redirects_item?: Maybe<Delete_One>;
  delete_redirects_items?: Maybe<Delete_Many>;
  delete_related_block_faqs_block_faqs_item?: Maybe<Delete_One>;
  delete_related_block_faqs_block_faqs_items?: Maybe<Delete_Many>;
  delete_related_block_faqs_item?: Maybe<Delete_One>;
  delete_related_block_faqs_items?: Maybe<Delete_Many>;
  delete_repeater_example_item?: Maybe<Delete_One>;
  delete_repeater_example_items?: Maybe<Delete_Many>;
  delete_routes_item?: Maybe<Delete_One>;
  delete_routes_items?: Maybe<Delete_Many>;
  delete_routes_translations_item?: Maybe<Delete_One>;
  delete_routes_translations_items?: Maybe<Delete_Many>;
  delete_search_params_item?: Maybe<Delete_One>;
  delete_search_params_items?: Maybe<Delete_Many>;
  delete_seo_item?: Maybe<Delete_One>;
  delete_seo_items?: Maybe<Delete_Many>;
  delete_team_item?: Maybe<Delete_One>;
  delete_team_items?: Maybe<Delete_Many>;
  delete_testimonials_item?: Maybe<Delete_One>;
  delete_testimonials_items?: Maybe<Delete_Many>;
  delete_versioning_example_item?: Maybe<Delete_One>;
  delete_versioning_example_items?: Maybe<Delete_Many>;
  update_activites_batch: Array<Activites>;
  update_activites_item?: Maybe<Activites>;
  update_activites_items: Array<Activites>;
  update_block_button_batch: Array<Block_Button>;
  update_block_button_group_batch: Array<Block_Button_Group>;
  update_block_button_group_item?: Maybe<Block_Button_Group>;
  update_block_button_group_items: Array<Block_Button_Group>;
  update_block_button_item?: Maybe<Block_Button>;
  update_block_button_items: Array<Block_Button>;
  update_block_columns_batch: Array<Block_Columns>;
  update_block_columns_item?: Maybe<Block_Columns>;
  update_block_columns_items: Array<Block_Columns>;
  update_block_columns_rows_batch: Array<Block_Columns_Rows>;
  update_block_columns_rows_item?: Maybe<Block_Columns_Rows>;
  update_block_columns_rows_items: Array<Block_Columns_Rows>;
  update_block_cta_batch: Array<Block_Cta>;
  update_block_cta_item?: Maybe<Block_Cta>;
  update_block_cta_items: Array<Block_Cta>;
  update_block_divider_batch: Array<Block_Divider>;
  update_block_divider_item?: Maybe<Block_Divider>;
  update_block_divider_items: Array<Block_Divider>;
  update_block_faqs_batch: Array<Block_Faqs>;
  update_block_faqs_item?: Maybe<Block_Faqs>;
  update_block_faqs_items: Array<Block_Faqs>;
  update_block_files_batch: Array<Block_Files>;
  update_block_files_files_batch: Array<Block_Files_Files>;
  update_block_files_files_item?: Maybe<Block_Files_Files>;
  update_block_files_files_items: Array<Block_Files_Files>;
  update_block_files_item?: Maybe<Block_Files>;
  update_block_files_items: Array<Block_Files>;
  update_block_form_batch: Array<Block_Form>;
  update_block_form_item?: Maybe<Block_Form>;
  update_block_form_items: Array<Block_Form>;
  update_block_gallery_batch: Array<Block_Gallery>;
  update_block_gallery_files_batch: Array<Block_Gallery_Files>;
  update_block_gallery_files_item?: Maybe<Block_Gallery_Files>;
  update_block_gallery_files_items: Array<Block_Gallery_Files>;
  update_block_gallery_item?: Maybe<Block_Gallery>;
  update_block_gallery_items: Array<Block_Gallery>;
  update_block_hero_batch: Array<Block_Hero>;
  update_block_hero_item?: Maybe<Block_Hero>;
  update_block_hero_items: Array<Block_Hero>;
  update_block_html_batch: Array<Block_Html>;
  update_block_html_item?: Maybe<Block_Html>;
  update_block_html_items: Array<Block_Html>;
  update_block_logocloud_batch: Array<Block_Logocloud>;
  update_block_logocloud_item?: Maybe<Block_Logocloud>;
  update_block_logocloud_items: Array<Block_Logocloud>;
  update_block_logocloud_logos_batch: Array<Block_Logocloud_Logos>;
  update_block_logocloud_logos_item?: Maybe<Block_Logocloud_Logos>;
  update_block_logocloud_logos_items: Array<Block_Logocloud_Logos>;
  update_block_quote_batch: Array<Block_Quote>;
  update_block_quote_item?: Maybe<Block_Quote>;
  update_block_quote_items: Array<Block_Quote>;
  update_block_richtext_batch: Array<Block_Richtext>;
  update_block_richtext_item?: Maybe<Block_Richtext>;
  update_block_richtext_items: Array<Block_Richtext>;
  update_block_settings_batch: Array<Block_Settings>;
  update_block_settings_item?: Maybe<Block_Settings>;
  update_block_settings_items: Array<Block_Settings>;
  update_block_step_items_batch: Array<Block_Step_Items>;
  update_block_step_items_item?: Maybe<Block_Step_Items>;
  update_block_step_items_items: Array<Block_Step_Items>;
  update_block_steps_batch: Array<Block_Steps>;
  update_block_steps_item?: Maybe<Block_Steps>;
  update_block_steps_items: Array<Block_Steps>;
  update_block_team_batch: Array<Block_Team>;
  update_block_team_item?: Maybe<Block_Team>;
  update_block_team_items: Array<Block_Team>;
  update_block_testimonial_slider_items_batch: Array<Block_Testimonial_Slider_Items>;
  update_block_testimonial_slider_items_item?: Maybe<Block_Testimonial_Slider_Items>;
  update_block_testimonial_slider_items_items: Array<Block_Testimonial_Slider_Items>;
  update_block_testimonials_batch: Array<Block_Testimonials>;
  update_block_testimonials_item?: Maybe<Block_Testimonials>;
  update_block_testimonials_items: Array<Block_Testimonials>;
  update_block_video_batch: Array<Block_Video>;
  update_block_video_item?: Maybe<Block_Video>;
  update_block_video_items: Array<Block_Video>;
  update_block_wysiwygs_batch: Array<Block_Wysiwygs>;
  update_block_wysiwygs_item?: Maybe<Block_Wysiwygs>;
  update_block_wysiwygs_items: Array<Block_Wysiwygs>;
  update_categories_batch: Array<Categories>;
  update_categories_item?: Maybe<Categories>;
  update_categories_items: Array<Categories>;
  update_contacts_batch: Array<Contacts>;
  update_contacts_item?: Maybe<Contacts>;
  update_contacts_items: Array<Contacts>;
  update_conversations_batch: Array<Conversations>;
  update_conversations_item?: Maybe<Conversations>;
  update_conversations_items: Array<Conversations>;
  update_directus_sync_id_map_batch: Array<Directus_Sync_Id_Map>;
  update_directus_sync_id_map_item?: Maybe<Directus_Sync_Id_Map>;
  update_directus_sync_id_map_items: Array<Directus_Sync_Id_Map>;
  update_form_builder_batch: Array<Form_Builder>;
  update_form_builder_item?: Maybe<Form_Builder>;
  update_form_builder_items: Array<Form_Builder>;
  update_form_builder_schema_batch: Array<Form_Builder_Schema>;
  update_form_builder_schema_item?: Maybe<Form_Builder_Schema>;
  update_form_builder_schema_items: Array<Form_Builder_Schema>;
  update_form_builder_translations_batch: Array<Form_Builder_Translations>;
  update_form_builder_translations_item?: Maybe<Form_Builder_Translations>;
  update_form_builder_translations_items: Array<Form_Builder_Translations>;
  update_form_configs_batch: Array<Form_Configs>;
  update_form_configs_item?: Maybe<Form_Configs>;
  update_form_configs_items: Array<Form_Configs>;
  update_form_entry_batch: Array<Form_Entry>;
  update_form_entry_item?: Maybe<Form_Entry>;
  update_form_entry_items: Array<Form_Entry>;
  update_form_field_settings_batch: Array<Form_Field_Settings>;
  update_form_field_settings_item?: Maybe<Form_Field_Settings>;
  update_form_field_settings_items: Array<Form_Field_Settings>;
  update_form_field_text_batch: Array<Form_Field_Text>;
  update_form_field_text_item?: Maybe<Form_Field_Text>;
  update_form_field_text_items: Array<Form_Field_Text>;
  update_form_field_text_settings_batch: Array<Form_Field_Text_Settings>;
  update_form_field_text_settings_item?: Maybe<Form_Field_Text_Settings>;
  update_form_field_text_settings_items: Array<Form_Field_Text_Settings>;
  update_forms_batch: Array<Forms>;
  update_forms_item?: Maybe<Forms>;
  update_forms_items: Array<Forms>;
  update_globals?: Maybe<Globals>;
  update_help_articles_batch: Array<Help_Articles>;
  update_help_articles_files_batch: Array<Help_Articles_Files>;
  update_help_articles_files_item?: Maybe<Help_Articles_Files>;
  update_help_articles_files_items: Array<Help_Articles_Files>;
  update_help_articles_item?: Maybe<Help_Articles>;
  update_help_articles_items: Array<Help_Articles>;
  update_help_articles_messages_batch: Array<Help_Articles_Messages>;
  update_help_articles_messages_item?: Maybe<Help_Articles_Messages>;
  update_help_articles_messages_items: Array<Help_Articles_Messages>;
  update_help_collections_batch: Array<Help_Collections>;
  update_help_collections_item?: Maybe<Help_Collections>;
  update_help_collections_items: Array<Help_Collections>;
  update_help_feedback_batch: Array<Help_Feedback>;
  update_help_feedback_item?: Maybe<Help_Feedback>;
  update_help_feedback_items: Array<Help_Feedback>;
  update_inbox_batch: Array<Inbox>;
  update_inbox_item?: Maybe<Inbox>;
  update_inbox_items: Array<Inbox>;
  update_languages_batch: Array<Languages>;
  update_languages_item?: Maybe<Languages>;
  update_languages_items: Array<Languages>;
  update_links_batch: Array<Links>;
  update_links_item?: Maybe<Links>;
  update_links_items: Array<Links>;
  update_messages_batch: Array<Messages>;
  update_messages_item?: Maybe<Messages>;
  update_messages_items: Array<Messages>;
  update_navigation_batch: Array<Navigation>;
  update_navigation_item?: Maybe<Navigation>;
  update_navigation_items: Array<Navigation>;
  update_navigation_items_batch: Array<Navigation_Items>;
  update_navigation_items_item?: Maybe<Navigation_Items>;
  update_navigation_items_items: Array<Navigation_Items>;
  update_organization_addresses_batch: Array<Organization_Addresses>;
  update_organization_addresses_item?: Maybe<Organization_Addresses>;
  update_organization_addresses_items: Array<Organization_Addresses>;
  update_organizations_batch: Array<Organizations>;
  update_organizations_contacts_batch: Array<Organizations_Contacts>;
  update_organizations_contacts_item?: Maybe<Organizations_Contacts>;
  update_organizations_contacts_items: Array<Organizations_Contacts>;
  update_organizations_item?: Maybe<Organizations>;
  update_organizations_items: Array<Organizations>;
  update_os_activities_batch: Array<Os_Activities>;
  update_os_activities_item?: Maybe<Os_Activities>;
  update_os_activities_items: Array<Os_Activities>;
  update_os_activity_contacts_batch: Array<Os_Activity_Contacts>;
  update_os_activity_contacts_item?: Maybe<Os_Activity_Contacts>;
  update_os_activity_contacts_items: Array<Os_Activity_Contacts>;
  update_os_deal_contacts_batch: Array<Os_Deal_Contacts>;
  update_os_deal_contacts_item?: Maybe<Os_Deal_Contacts>;
  update_os_deal_contacts_items: Array<Os_Deal_Contacts>;
  update_os_deal_stages_batch: Array<Os_Deal_Stages>;
  update_os_deal_stages_item?: Maybe<Os_Deal_Stages>;
  update_os_deal_stages_items: Array<Os_Deal_Stages>;
  update_os_deals_batch: Array<Os_Deals>;
  update_os_deals_item?: Maybe<Os_Deals>;
  update_os_deals_items: Array<Os_Deals>;
  update_os_email_templates_batch: Array<Os_Email_Templates>;
  update_os_email_templates_item?: Maybe<Os_Email_Templates>;
  update_os_email_templates_items: Array<Os_Email_Templates>;
  update_os_expenses_batch: Array<Os_Expenses>;
  update_os_expenses_item?: Maybe<Os_Expenses>;
  update_os_expenses_items: Array<Os_Expenses>;
  update_os_invoice_items_batch: Array<Os_Invoice_Items>;
  update_os_invoice_items_item?: Maybe<Os_Invoice_Items>;
  update_os_invoice_items_items: Array<Os_Invoice_Items>;
  update_os_invoices_batch: Array<Os_Invoices>;
  update_os_invoices_item?: Maybe<Os_Invoices>;
  update_os_invoices_items: Array<Os_Invoices>;
  update_os_items_batch: Array<Os_Items>;
  update_os_items_item?: Maybe<Os_Items>;
  update_os_items_items: Array<Os_Items>;
  update_os_payment_terms_batch: Array<Os_Payment_Terms>;
  update_os_payment_terms_item?: Maybe<Os_Payment_Terms>;
  update_os_payment_terms_items: Array<Os_Payment_Terms>;
  update_os_payments_batch: Array<Os_Payments>;
  update_os_payments_item?: Maybe<Os_Payments>;
  update_os_payments_items: Array<Os_Payments>;
  update_os_project_contacts_batch: Array<Os_Project_Contacts>;
  update_os_project_contacts_item?: Maybe<Os_Project_Contacts>;
  update_os_project_contacts_items: Array<Os_Project_Contacts>;
  update_os_project_templates_batch: Array<Os_Project_Templates>;
  update_os_project_templates_item?: Maybe<Os_Project_Templates>;
  update_os_project_templates_items: Array<Os_Project_Templates>;
  update_os_project_updates_batch: Array<Os_Project_Updates>;
  update_os_project_updates_item?: Maybe<Os_Project_Updates>;
  update_os_project_updates_items: Array<Os_Project_Updates>;
  update_os_projects_batch: Array<Os_Projects>;
  update_os_projects_item?: Maybe<Os_Projects>;
  update_os_projects_items: Array<Os_Projects>;
  update_os_proposal_approvals_batch: Array<Os_Proposal_Approvals>;
  update_os_proposal_approvals_item?: Maybe<Os_Proposal_Approvals>;
  update_os_proposal_approvals_items: Array<Os_Proposal_Approvals>;
  update_os_proposal_blocks_batch: Array<Os_Proposal_Blocks>;
  update_os_proposal_blocks_item?: Maybe<Os_Proposal_Blocks>;
  update_os_proposal_blocks_items: Array<Os_Proposal_Blocks>;
  update_os_proposal_contacts_batch: Array<Os_Proposal_Contacts>;
  update_os_proposal_contacts_item?: Maybe<Os_Proposal_Contacts>;
  update_os_proposal_contacts_items: Array<Os_Proposal_Contacts>;
  update_os_proposals_batch: Array<Os_Proposals>;
  update_os_proposals_item?: Maybe<Os_Proposals>;
  update_os_proposals_items: Array<Os_Proposals>;
  update_os_settings?: Maybe<Os_Settings>;
  update_os_task_files_batch: Array<Os_Task_Files>;
  update_os_task_files_item?: Maybe<Os_Task_Files>;
  update_os_task_files_items: Array<Os_Task_Files>;
  update_os_tasks_batch: Array<Os_Tasks>;
  update_os_tasks_item?: Maybe<Os_Tasks>;
  update_os_tasks_items: Array<Os_Tasks>;
  update_os_tax_rates_batch: Array<Os_Tax_Rates>;
  update_os_tax_rates_item?: Maybe<Os_Tax_Rates>;
  update_os_tax_rates_items: Array<Os_Tax_Rates>;
  update_page_blocks_batch: Array<Page_Blocks>;
  update_page_blocks_item?: Maybe<Page_Blocks>;
  update_page_blocks_items: Array<Page_Blocks>;
  update_page_editor_nodes_batch: Array<Page_Editor_Nodes>;
  update_page_editor_nodes_item?: Maybe<Page_Editor_Nodes>;
  update_page_editor_nodes_items: Array<Page_Editor_Nodes>;
  update_page_settings_batch: Array<Page_Settings>;
  update_page_settings_item?: Maybe<Page_Settings>;
  update_page_settings_items: Array<Page_Settings>;
  update_page_settings_translations_batch: Array<Page_Settings_Translations>;
  update_page_settings_translations_item?: Maybe<Page_Settings_Translations>;
  update_page_settings_translations_items: Array<Page_Settings_Translations>;
  update_pages_batch: Array<Pages>;
  update_pages_blog?: Maybe<Pages_Blog>;
  update_pages_item?: Maybe<Pages>;
  update_pages_items: Array<Pages>;
  update_pages_projects?: Maybe<Pages_Projects>;
  update_pages_translations_batch: Array<Pages_Translations>;
  update_pages_translations_item?: Maybe<Pages_Translations>;
  update_pages_translations_items: Array<Pages_Translations>;
  update_post_gallery_items_batch: Array<Post_Gallery_Items>;
  update_post_gallery_items_item?: Maybe<Post_Gallery_Items>;
  update_post_gallery_items_items: Array<Post_Gallery_Items>;
  update_posts_batch: Array<Posts>;
  update_posts_item?: Maybe<Posts>;
  update_posts_items: Array<Posts>;
  update_redirects_batch: Array<Redirects>;
  update_redirects_item?: Maybe<Redirects>;
  update_redirects_items: Array<Redirects>;
  update_related_block_faqs_batch: Array<Related_Block_Faqs>;
  update_related_block_faqs_block_faqs_batch: Array<Related_Block_Faqs_Block_Faqs>;
  update_related_block_faqs_block_faqs_item?: Maybe<Related_Block_Faqs_Block_Faqs>;
  update_related_block_faqs_block_faqs_items: Array<Related_Block_Faqs_Block_Faqs>;
  update_related_block_faqs_item?: Maybe<Related_Block_Faqs>;
  update_related_block_faqs_items: Array<Related_Block_Faqs>;
  update_repeater_example_batch: Array<Repeater_Example>;
  update_repeater_example_item?: Maybe<Repeater_Example>;
  update_repeater_example_items: Array<Repeater_Example>;
  update_routes_batch: Array<Routes>;
  update_routes_item?: Maybe<Routes>;
  update_routes_items: Array<Routes>;
  update_routes_translations_batch: Array<Routes_Translations>;
  update_routes_translations_item?: Maybe<Routes_Translations>;
  update_routes_translations_items: Array<Routes_Translations>;
  update_search_params_batch: Array<Search_Params>;
  update_search_params_item?: Maybe<Search_Params>;
  update_search_params_items: Array<Search_Params>;
  update_seo_batch: Array<Seo>;
  update_seo_item?: Maybe<Seo>;
  update_seo_items: Array<Seo>;
  update_team_batch: Array<Team>;
  update_team_item?: Maybe<Team>;
  update_team_items: Array<Team>;
  update_testimonials_batch: Array<Testimonials>;
  update_testimonials_item?: Maybe<Testimonials>;
  update_testimonials_items: Array<Testimonials>;
  update_versioning_example_batch: Array<Versioning_Example>;
  update_versioning_example_item?: Maybe<Versioning_Example>;
  update_versioning_example_items: Array<Versioning_Example>;
};


export type MutationCreate_Activites_ItemArgs = {
  data: Create_Activites_Input;
};


export type MutationCreate_Activites_ItemsArgs = {
  data?: InputMaybe<Array<Create_Activites_Input>>;
  filter?: InputMaybe<Activites_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Button_Group_ItemArgs = {
  data: Create_Block_Button_Group_Input;
};


export type MutationCreate_Block_Button_Group_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Button_Group_Input>>;
  filter?: InputMaybe<Block_Button_Group_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Button_ItemArgs = {
  data: Create_Block_Button_Input;
};


export type MutationCreate_Block_Button_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Button_Input>>;
  filter?: InputMaybe<Block_Button_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Columns_ItemArgs = {
  data: Create_Block_Columns_Input;
};


export type MutationCreate_Block_Columns_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Columns_Input>>;
  filter?: InputMaybe<Block_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Columns_Rows_ItemArgs = {
  data: Create_Block_Columns_Rows_Input;
};


export type MutationCreate_Block_Columns_Rows_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Columns_Rows_Input>>;
  filter?: InputMaybe<Block_Columns_Rows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Cta_ItemArgs = {
  data: Create_Block_Cta_Input;
};


export type MutationCreate_Block_Cta_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Cta_Input>>;
  filter?: InputMaybe<Block_Cta_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Divider_ItemArgs = {
  data: Create_Block_Divider_Input;
};


export type MutationCreate_Block_Divider_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Divider_Input>>;
  filter?: InputMaybe<Block_Divider_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Faqs_ItemArgs = {
  data: Create_Block_Faqs_Input;
};


export type MutationCreate_Block_Faqs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Faqs_Input>>;
  filter?: InputMaybe<Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Files_Files_ItemArgs = {
  data: Create_Block_Files_Files_Input;
};


export type MutationCreate_Block_Files_Files_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Files_Files_Input>>;
  filter?: InputMaybe<Block_Files_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Files_ItemArgs = {
  data: Create_Block_Files_Input;
};


export type MutationCreate_Block_Files_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Files_Input>>;
  filter?: InputMaybe<Block_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Form_ItemArgs = {
  data: Create_Block_Form_Input;
};


export type MutationCreate_Block_Form_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Form_Input>>;
  filter?: InputMaybe<Block_Form_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Gallery_Files_ItemArgs = {
  data: Create_Block_Gallery_Files_Input;
};


export type MutationCreate_Block_Gallery_Files_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Gallery_Files_Input>>;
  filter?: InputMaybe<Block_Gallery_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Gallery_ItemArgs = {
  data: Create_Block_Gallery_Input;
};


export type MutationCreate_Block_Gallery_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Gallery_Input>>;
  filter?: InputMaybe<Block_Gallery_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Hero_ItemArgs = {
  data: Create_Block_Hero_Input;
};


export type MutationCreate_Block_Hero_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Hero_Input>>;
  filter?: InputMaybe<Block_Hero_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Html_ItemArgs = {
  data: Create_Block_Html_Input;
};


export type MutationCreate_Block_Html_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Html_Input>>;
  filter?: InputMaybe<Block_Html_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Logocloud_ItemArgs = {
  data: Create_Block_Logocloud_Input;
};


export type MutationCreate_Block_Logocloud_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Logocloud_Input>>;
  filter?: InputMaybe<Block_Logocloud_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Logocloud_Logos_ItemArgs = {
  data: Create_Block_Logocloud_Logos_Input;
};


export type MutationCreate_Block_Logocloud_Logos_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Logocloud_Logos_Input>>;
  filter?: InputMaybe<Block_Logocloud_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Quote_ItemArgs = {
  data: Create_Block_Quote_Input;
};


export type MutationCreate_Block_Quote_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Quote_Input>>;
  filter?: InputMaybe<Block_Quote_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Richtext_ItemArgs = {
  data: Create_Block_Richtext_Input;
};


export type MutationCreate_Block_Richtext_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Richtext_Input>>;
  filter?: InputMaybe<Block_Richtext_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Settings_ItemArgs = {
  data: Create_Block_Settings_Input;
};


export type MutationCreate_Block_Settings_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Settings_Input>>;
  filter?: InputMaybe<Block_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Step_Items_ItemArgs = {
  data: Create_Block_Step_Items_Input;
};


export type MutationCreate_Block_Step_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Step_Items_Input>>;
  filter?: InputMaybe<Block_Step_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Steps_ItemArgs = {
  data: Create_Block_Steps_Input;
};


export type MutationCreate_Block_Steps_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Steps_Input>>;
  filter?: InputMaybe<Block_Steps_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Team_ItemArgs = {
  data: Create_Block_Team_Input;
};


export type MutationCreate_Block_Team_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Team_Input>>;
  filter?: InputMaybe<Block_Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Testimonial_Slider_Items_ItemArgs = {
  data: Create_Block_Testimonial_Slider_Items_Input;
};


export type MutationCreate_Block_Testimonial_Slider_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Testimonial_Slider_Items_Input>>;
  filter?: InputMaybe<Block_Testimonial_Slider_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Testimonials_ItemArgs = {
  data: Create_Block_Testimonials_Input;
};


export type MutationCreate_Block_Testimonials_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Testimonials_Input>>;
  filter?: InputMaybe<Block_Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Video_ItemArgs = {
  data: Create_Block_Video_Input;
};


export type MutationCreate_Block_Video_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Video_Input>>;
  filter?: InputMaybe<Block_Video_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Block_Wysiwygs_ItemArgs = {
  data: Create_Block_Wysiwygs_Input;
};


export type MutationCreate_Block_Wysiwygs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Block_Wysiwygs_Input>>;
  filter?: InputMaybe<Block_Wysiwygs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Categories_ItemArgs = {
  data: Create_Categories_Input;
};


export type MutationCreate_Categories_ItemsArgs = {
  data?: InputMaybe<Array<Create_Categories_Input>>;
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Contacts_ItemArgs = {
  data: Create_Contacts_Input;
};


export type MutationCreate_Contacts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Contacts_Input>>;
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Conversations_ItemArgs = {
  data: Create_Conversations_Input;
};


export type MutationCreate_Conversations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Conversations_Input>>;
  filter?: InputMaybe<Conversations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Directus_Sync_Id_Map_ItemArgs = {
  data: Create_Directus_Sync_Id_Map_Input;
};


export type MutationCreate_Directus_Sync_Id_Map_ItemsArgs = {
  data?: InputMaybe<Array<Create_Directus_Sync_Id_Map_Input>>;
  filter?: InputMaybe<Directus_Sync_Id_Map_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Form_Builder_ItemArgs = {
  data: Create_Form_Builder_Input;
};


export type MutationCreate_Form_Builder_ItemsArgs = {
  data?: InputMaybe<Array<Create_Form_Builder_Input>>;
  filter?: InputMaybe<Form_Builder_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Form_Builder_Schema_ItemArgs = {
  data: Create_Form_Builder_Schema_Input;
};


export type MutationCreate_Form_Builder_Schema_ItemsArgs = {
  data?: InputMaybe<Array<Create_Form_Builder_Schema_Input>>;
  filter?: InputMaybe<Form_Builder_Schema_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Form_Builder_Translations_ItemArgs = {
  data: Create_Form_Builder_Translations_Input;
};


export type MutationCreate_Form_Builder_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Form_Builder_Translations_Input>>;
  filter?: InputMaybe<Form_Builder_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Form_Configs_ItemArgs = {
  data: Create_Form_Configs_Input;
};


export type MutationCreate_Form_Configs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Form_Configs_Input>>;
  filter?: InputMaybe<Form_Configs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Form_Entry_ItemArgs = {
  data: Create_Form_Entry_Input;
};


export type MutationCreate_Form_Entry_ItemsArgs = {
  data?: InputMaybe<Array<Create_Form_Entry_Input>>;
  filter?: InputMaybe<Form_Entry_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Form_Field_Settings_ItemArgs = {
  data: Create_Form_Field_Settings_Input;
};


export type MutationCreate_Form_Field_Settings_ItemsArgs = {
  data?: InputMaybe<Array<Create_Form_Field_Settings_Input>>;
  filter?: InputMaybe<Form_Field_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Form_Field_Text_ItemArgs = {
  data: Create_Form_Field_Text_Input;
};


export type MutationCreate_Form_Field_Text_ItemsArgs = {
  data?: InputMaybe<Array<Create_Form_Field_Text_Input>>;
  filter?: InputMaybe<Form_Field_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Form_Field_Text_Settings_ItemArgs = {
  data: Create_Form_Field_Text_Settings_Input;
};


export type MutationCreate_Form_Field_Text_Settings_ItemsArgs = {
  data?: InputMaybe<Array<Create_Form_Field_Text_Settings_Input>>;
  filter?: InputMaybe<Form_Field_Text_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Forms_ItemArgs = {
  data: Create_Forms_Input;
};


export type MutationCreate_Forms_ItemsArgs = {
  data?: InputMaybe<Array<Create_Forms_Input>>;
  filter?: InputMaybe<Forms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Help_Articles_Files_ItemArgs = {
  data: Create_Help_Articles_Files_Input;
};


export type MutationCreate_Help_Articles_Files_ItemsArgs = {
  data?: InputMaybe<Array<Create_Help_Articles_Files_Input>>;
  filter?: InputMaybe<Help_Articles_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Help_Articles_ItemArgs = {
  data: Create_Help_Articles_Input;
};


export type MutationCreate_Help_Articles_ItemsArgs = {
  data?: InputMaybe<Array<Create_Help_Articles_Input>>;
  filter?: InputMaybe<Help_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Help_Articles_Messages_ItemArgs = {
  data: Create_Help_Articles_Messages_Input;
};


export type MutationCreate_Help_Articles_Messages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Help_Articles_Messages_Input>>;
  filter?: InputMaybe<Help_Articles_Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Help_Collections_ItemArgs = {
  data: Create_Help_Collections_Input;
};


export type MutationCreate_Help_Collections_ItemsArgs = {
  data?: InputMaybe<Array<Create_Help_Collections_Input>>;
  filter?: InputMaybe<Help_Collections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Help_Feedback_ItemArgs = {
  data: Create_Help_Feedback_Input;
};


export type MutationCreate_Help_Feedback_ItemsArgs = {
  data?: InputMaybe<Array<Create_Help_Feedback_Input>>;
  filter?: InputMaybe<Help_Feedback_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Inbox_ItemArgs = {
  data: Create_Inbox_Input;
};


export type MutationCreate_Inbox_ItemsArgs = {
  data?: InputMaybe<Array<Create_Inbox_Input>>;
  filter?: InputMaybe<Inbox_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Languages_ItemArgs = {
  data: Create_Languages_Input;
};


export type MutationCreate_Languages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Languages_Input>>;
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Links_ItemArgs = {
  data: Create_Links_Input;
};


export type MutationCreate_Links_ItemsArgs = {
  data?: InputMaybe<Array<Create_Links_Input>>;
  filter?: InputMaybe<Links_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Messages_ItemArgs = {
  data: Create_Messages_Input;
};


export type MutationCreate_Messages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Messages_Input>>;
  filter?: InputMaybe<Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Navigation_ItemArgs = {
  data: Create_Navigation_Input;
};


export type MutationCreate_Navigation_ItemsArgs = {
  data?: InputMaybe<Array<Create_Navigation_Input>>;
  filter?: InputMaybe<Navigation_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Navigation_Items_ItemArgs = {
  data: Create_Navigation_Items_Input;
};


export type MutationCreate_Navigation_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Navigation_Items_Input>>;
  filter?: InputMaybe<Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Organization_Addresses_ItemArgs = {
  data: Create_Organization_Addresses_Input;
};


export type MutationCreate_Organization_Addresses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Organization_Addresses_Input>>;
  filter?: InputMaybe<Organization_Addresses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Organizations_Contacts_ItemArgs = {
  data: Create_Organizations_Contacts_Input;
};


export type MutationCreate_Organizations_Contacts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Organizations_Contacts_Input>>;
  filter?: InputMaybe<Organizations_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Organizations_ItemArgs = {
  data: Create_Organizations_Input;
};


export type MutationCreate_Organizations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Organizations_Input>>;
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Activities_ItemArgs = {
  data: Create_Os_Activities_Input;
};


export type MutationCreate_Os_Activities_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Activities_Input>>;
  filter?: InputMaybe<Os_Activities_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Activity_Contacts_ItemArgs = {
  data: Create_Os_Activity_Contacts_Input;
};


export type MutationCreate_Os_Activity_Contacts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Activity_Contacts_Input>>;
  filter?: InputMaybe<Os_Activity_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Deal_Contacts_ItemArgs = {
  data: Create_Os_Deal_Contacts_Input;
};


export type MutationCreate_Os_Deal_Contacts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Deal_Contacts_Input>>;
  filter?: InputMaybe<Os_Deal_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Deal_Stages_ItemArgs = {
  data: Create_Os_Deal_Stages_Input;
};


export type MutationCreate_Os_Deal_Stages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Deal_Stages_Input>>;
  filter?: InputMaybe<Os_Deal_Stages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Deals_ItemArgs = {
  data: Create_Os_Deals_Input;
};


export type MutationCreate_Os_Deals_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Deals_Input>>;
  filter?: InputMaybe<Os_Deals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Email_Templates_ItemArgs = {
  data: Create_Os_Email_Templates_Input;
};


export type MutationCreate_Os_Email_Templates_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Email_Templates_Input>>;
  filter?: InputMaybe<Os_Email_Templates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Expenses_ItemArgs = {
  data: Create_Os_Expenses_Input;
};


export type MutationCreate_Os_Expenses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Expenses_Input>>;
  filter?: InputMaybe<Os_Expenses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Invoice_Items_ItemArgs = {
  data: Create_Os_Invoice_Items_Input;
};


export type MutationCreate_Os_Invoice_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Invoice_Items_Input>>;
  filter?: InputMaybe<Os_Invoice_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Invoices_ItemArgs = {
  data: Create_Os_Invoices_Input;
};


export type MutationCreate_Os_Invoices_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Invoices_Input>>;
  filter?: InputMaybe<Os_Invoices_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Items_ItemArgs = {
  data: Create_Os_Items_Input;
};


export type MutationCreate_Os_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Items_Input>>;
  filter?: InputMaybe<Os_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Payment_Terms_ItemArgs = {
  data: Create_Os_Payment_Terms_Input;
};


export type MutationCreate_Os_Payment_Terms_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Payment_Terms_Input>>;
  filter?: InputMaybe<Os_Payment_Terms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Payments_ItemArgs = {
  data: Create_Os_Payments_Input;
};


export type MutationCreate_Os_Payments_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Payments_Input>>;
  filter?: InputMaybe<Os_Payments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Project_Contacts_ItemArgs = {
  data: Create_Os_Project_Contacts_Input;
};


export type MutationCreate_Os_Project_Contacts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Project_Contacts_Input>>;
  filter?: InputMaybe<Os_Project_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Project_Templates_ItemArgs = {
  data: Create_Os_Project_Templates_Input;
};


export type MutationCreate_Os_Project_Templates_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Project_Templates_Input>>;
  filter?: InputMaybe<Os_Project_Templates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Project_Updates_ItemArgs = {
  data: Create_Os_Project_Updates_Input;
};


export type MutationCreate_Os_Project_Updates_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Project_Updates_Input>>;
  filter?: InputMaybe<Os_Project_Updates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Projects_ItemArgs = {
  data: Create_Os_Projects_Input;
};


export type MutationCreate_Os_Projects_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Projects_Input>>;
  filter?: InputMaybe<Os_Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Proposal_Approvals_ItemArgs = {
  data: Create_Os_Proposal_Approvals_Input;
};


export type MutationCreate_Os_Proposal_Approvals_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Proposal_Approvals_Input>>;
  filter?: InputMaybe<Os_Proposal_Approvals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Proposal_Blocks_ItemArgs = {
  data: Create_Os_Proposal_Blocks_Input;
};


export type MutationCreate_Os_Proposal_Blocks_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Proposal_Blocks_Input>>;
  filter?: InputMaybe<Os_Proposal_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Proposal_Contacts_ItemArgs = {
  data: Create_Os_Proposal_Contacts_Input;
};


export type MutationCreate_Os_Proposal_Contacts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Proposal_Contacts_Input>>;
  filter?: InputMaybe<Os_Proposal_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Proposals_ItemArgs = {
  data: Create_Os_Proposals_Input;
};


export type MutationCreate_Os_Proposals_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Proposals_Input>>;
  filter?: InputMaybe<Os_Proposals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Task_Files_ItemArgs = {
  data: Create_Os_Task_Files_Input;
};


export type MutationCreate_Os_Task_Files_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Task_Files_Input>>;
  filter?: InputMaybe<Os_Task_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Tasks_ItemArgs = {
  data: Create_Os_Tasks_Input;
};


export type MutationCreate_Os_Tasks_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Tasks_Input>>;
  filter?: InputMaybe<Os_Tasks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Os_Tax_Rates_ItemArgs = {
  data: Create_Os_Tax_Rates_Input;
};


export type MutationCreate_Os_Tax_Rates_ItemsArgs = {
  data?: InputMaybe<Array<Create_Os_Tax_Rates_Input>>;
  filter?: InputMaybe<Os_Tax_Rates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Page_Blocks_ItemArgs = {
  data: Create_Page_Blocks_Input;
};


export type MutationCreate_Page_Blocks_ItemsArgs = {
  data?: InputMaybe<Array<Create_Page_Blocks_Input>>;
  filter?: InputMaybe<Page_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Page_Editor_Nodes_ItemArgs = {
  data: Create_Page_Editor_Nodes_Input;
};


export type MutationCreate_Page_Editor_Nodes_ItemsArgs = {
  data?: InputMaybe<Array<Create_Page_Editor_Nodes_Input>>;
  filter?: InputMaybe<Page_Editor_Nodes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Page_Settings_ItemArgs = {
  data: Create_Page_Settings_Input;
};


export type MutationCreate_Page_Settings_ItemsArgs = {
  data?: InputMaybe<Array<Create_Page_Settings_Input>>;
  filter?: InputMaybe<Page_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Page_Settings_Translations_ItemArgs = {
  data: Create_Page_Settings_Translations_Input;
};


export type MutationCreate_Page_Settings_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Page_Settings_Translations_Input>>;
  filter?: InputMaybe<Page_Settings_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Pages_ItemArgs = {
  data: Create_Pages_Input;
};


export type MutationCreate_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pages_Input>>;
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Pages_Translations_ItemArgs = {
  data: Create_Pages_Translations_Input;
};


export type MutationCreate_Pages_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pages_Translations_Input>>;
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Post_Gallery_Items_ItemArgs = {
  data: Create_Post_Gallery_Items_Input;
};


export type MutationCreate_Post_Gallery_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Post_Gallery_Items_Input>>;
  filter?: InputMaybe<Post_Gallery_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Posts_ItemArgs = {
  data: Create_Posts_Input;
};


export type MutationCreate_Posts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Posts_Input>>;
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Redirects_ItemArgs = {
  data: Create_Redirects_Input;
};


export type MutationCreate_Redirects_ItemsArgs = {
  data?: InputMaybe<Array<Create_Redirects_Input>>;
  filter?: InputMaybe<Redirects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Related_Block_Faqs_Block_Faqs_ItemArgs = {
  data: Create_Related_Block_Faqs_Block_Faqs_Input;
};


export type MutationCreate_Related_Block_Faqs_Block_Faqs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Related_Block_Faqs_Block_Faqs_Input>>;
  filter?: InputMaybe<Related_Block_Faqs_Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Related_Block_Faqs_ItemArgs = {
  data: Create_Related_Block_Faqs_Input;
};


export type MutationCreate_Related_Block_Faqs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Related_Block_Faqs_Input>>;
  filter?: InputMaybe<Related_Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Repeater_Example_ItemArgs = {
  data: Create_Repeater_Example_Input;
};


export type MutationCreate_Repeater_Example_ItemsArgs = {
  data?: InputMaybe<Array<Create_Repeater_Example_Input>>;
  filter?: InputMaybe<Repeater_Example_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Routes_ItemArgs = {
  data: Create_Routes_Input;
};


export type MutationCreate_Routes_ItemsArgs = {
  data?: InputMaybe<Array<Create_Routes_Input>>;
  filter?: InputMaybe<Routes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Routes_Translations_ItemArgs = {
  data: Create_Routes_Translations_Input;
};


export type MutationCreate_Routes_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Routes_Translations_Input>>;
  filter?: InputMaybe<Routes_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Search_Params_ItemArgs = {
  data: Create_Search_Params_Input;
};


export type MutationCreate_Search_Params_ItemsArgs = {
  data?: InputMaybe<Array<Create_Search_Params_Input>>;
  filter?: InputMaybe<Search_Params_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Seo_ItemArgs = {
  data: Create_Seo_Input;
};


export type MutationCreate_Seo_ItemsArgs = {
  data?: InputMaybe<Array<Create_Seo_Input>>;
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Team_ItemArgs = {
  data: Create_Team_Input;
};


export type MutationCreate_Team_ItemsArgs = {
  data?: InputMaybe<Array<Create_Team_Input>>;
  filter?: InputMaybe<Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Testimonials_ItemArgs = {
  data: Create_Testimonials_Input;
};


export type MutationCreate_Testimonials_ItemsArgs = {
  data?: InputMaybe<Array<Create_Testimonials_Input>>;
  filter?: InputMaybe<Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Versioning_Example_ItemArgs = {
  data: Create_Versioning_Example_Input;
};


export type MutationCreate_Versioning_Example_ItemsArgs = {
  data?: InputMaybe<Array<Create_Versioning_Example_Input>>;
  filter?: InputMaybe<Versioning_Example_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Activites_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Activites_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Button_Group_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Button_Group_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Button_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Button_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Columns_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Columns_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Columns_Rows_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Columns_Rows_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Cta_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Cta_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Divider_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Divider_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Faqs_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Faqs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Files_Files_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Files_Files_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Files_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Files_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Form_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Form_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Gallery_Files_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Gallery_Files_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Gallery_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Gallery_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Hero_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Hero_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Html_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Html_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Logocloud_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Logocloud_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Logocloud_Logos_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Logocloud_Logos_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Quote_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Quote_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Richtext_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Richtext_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Settings_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Settings_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Step_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Step_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Steps_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Steps_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Team_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Team_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Testimonial_Slider_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Testimonial_Slider_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Testimonials_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Testimonials_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Video_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Video_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Block_Wysiwygs_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Block_Wysiwygs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Categories_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Categories_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Contacts_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Contacts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Conversations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Conversations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Directus_Sync_Id_Map_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Directus_Sync_Id_Map_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Form_Builder_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Form_Builder_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Form_Builder_Schema_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Form_Builder_Schema_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Form_Builder_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Form_Builder_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Form_Configs_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Form_Configs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Form_Entry_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Form_Entry_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Form_Field_Settings_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Form_Field_Settings_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Form_Field_Text_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Form_Field_Text_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Form_Field_Text_Settings_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Form_Field_Text_Settings_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Forms_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Forms_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Help_Articles_Files_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Help_Articles_Files_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Help_Articles_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Help_Articles_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Help_Articles_Messages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Help_Articles_Messages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Help_Collections_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Help_Collections_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Help_Feedback_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Help_Feedback_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Inbox_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Inbox_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Languages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Languages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Links_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Links_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Messages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Messages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Navigation_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Navigation_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Navigation_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Navigation_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Organization_Addresses_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Organization_Addresses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Organizations_Contacts_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Organizations_Contacts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Organizations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Organizations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Activities_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Activities_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Activity_Contacts_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Activity_Contacts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Deal_Contacts_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Deal_Contacts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Deal_Stages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Deal_Stages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Deals_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Deals_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Email_Templates_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Email_Templates_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Expenses_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Expenses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Invoice_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Invoice_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Invoices_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Invoices_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Payment_Terms_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Payment_Terms_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Payments_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Payments_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Project_Contacts_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Project_Contacts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Project_Templates_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Project_Templates_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Project_Updates_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Project_Updates_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Projects_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Projects_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Proposal_Approvals_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Proposal_Approvals_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Proposal_Blocks_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Proposal_Blocks_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Proposal_Contacts_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Proposal_Contacts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Proposals_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Proposals_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Task_Files_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Task_Files_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Tasks_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Tasks_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Os_Tax_Rates_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Os_Tax_Rates_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Page_Blocks_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Page_Blocks_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Page_Editor_Nodes_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Page_Editor_Nodes_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Page_Settings_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Page_Settings_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Page_Settings_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Page_Settings_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Pages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Pages_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Pages_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Post_Gallery_Items_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Post_Gallery_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Posts_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Posts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Redirects_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Redirects_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Related_Block_Faqs_Block_Faqs_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Related_Block_Faqs_Block_Faqs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Related_Block_Faqs_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Related_Block_Faqs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Repeater_Example_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Repeater_Example_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Routes_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Routes_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Routes_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Routes_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Search_Params_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Search_Params_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Seo_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Seo_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Team_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Team_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Testimonials_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Testimonials_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Versioning_Example_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Versioning_Example_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdate_Activites_BatchArgs = {
  data?: InputMaybe<Array<Update_Activites_Input>>;
  filter?: InputMaybe<Activites_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Activites_ItemArgs = {
  data: Update_Activites_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Activites_ItemsArgs = {
  data: Update_Activites_Input;
  filter?: InputMaybe<Activites_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Button_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Button_Input>>;
  filter?: InputMaybe<Block_Button_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Button_Group_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Button_Group_Input>>;
  filter?: InputMaybe<Block_Button_Group_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Button_Group_ItemArgs = {
  data: Update_Block_Button_Group_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Button_Group_ItemsArgs = {
  data: Update_Block_Button_Group_Input;
  filter?: InputMaybe<Block_Button_Group_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Button_ItemArgs = {
  data: Update_Block_Button_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Button_ItemsArgs = {
  data: Update_Block_Button_Input;
  filter?: InputMaybe<Block_Button_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Columns_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Columns_Input>>;
  filter?: InputMaybe<Block_Columns_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Columns_ItemArgs = {
  data: Update_Block_Columns_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Columns_ItemsArgs = {
  data: Update_Block_Columns_Input;
  filter?: InputMaybe<Block_Columns_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Columns_Rows_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Columns_Rows_Input>>;
  filter?: InputMaybe<Block_Columns_Rows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Columns_Rows_ItemArgs = {
  data: Update_Block_Columns_Rows_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Columns_Rows_ItemsArgs = {
  data: Update_Block_Columns_Rows_Input;
  filter?: InputMaybe<Block_Columns_Rows_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Cta_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Cta_Input>>;
  filter?: InputMaybe<Block_Cta_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Cta_ItemArgs = {
  data: Update_Block_Cta_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Cta_ItemsArgs = {
  data: Update_Block_Cta_Input;
  filter?: InputMaybe<Block_Cta_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Divider_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Divider_Input>>;
  filter?: InputMaybe<Block_Divider_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Divider_ItemArgs = {
  data: Update_Block_Divider_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Divider_ItemsArgs = {
  data: Update_Block_Divider_Input;
  filter?: InputMaybe<Block_Divider_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Faqs_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Faqs_Input>>;
  filter?: InputMaybe<Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Faqs_ItemArgs = {
  data: Update_Block_Faqs_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Faqs_ItemsArgs = {
  data: Update_Block_Faqs_Input;
  filter?: InputMaybe<Block_Faqs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Files_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Files_Input>>;
  filter?: InputMaybe<Block_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Files_Files_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Files_Files_Input>>;
  filter?: InputMaybe<Block_Files_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Files_Files_ItemArgs = {
  data: Update_Block_Files_Files_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Files_Files_ItemsArgs = {
  data: Update_Block_Files_Files_Input;
  filter?: InputMaybe<Block_Files_Files_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Files_ItemArgs = {
  data: Update_Block_Files_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Files_ItemsArgs = {
  data: Update_Block_Files_Input;
  filter?: InputMaybe<Block_Files_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Form_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Form_Input>>;
  filter?: InputMaybe<Block_Form_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Form_ItemArgs = {
  data: Update_Block_Form_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Form_ItemsArgs = {
  data: Update_Block_Form_Input;
  filter?: InputMaybe<Block_Form_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Gallery_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Gallery_Input>>;
  filter?: InputMaybe<Block_Gallery_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Gallery_Files_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Gallery_Files_Input>>;
  filter?: InputMaybe<Block_Gallery_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Gallery_Files_ItemArgs = {
  data: Update_Block_Gallery_Files_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Gallery_Files_ItemsArgs = {
  data: Update_Block_Gallery_Files_Input;
  filter?: InputMaybe<Block_Gallery_Files_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Gallery_ItemArgs = {
  data: Update_Block_Gallery_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Gallery_ItemsArgs = {
  data: Update_Block_Gallery_Input;
  filter?: InputMaybe<Block_Gallery_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Hero_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Hero_Input>>;
  filter?: InputMaybe<Block_Hero_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Hero_ItemArgs = {
  data: Update_Block_Hero_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Hero_ItemsArgs = {
  data: Update_Block_Hero_Input;
  filter?: InputMaybe<Block_Hero_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Html_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Html_Input>>;
  filter?: InputMaybe<Block_Html_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Html_ItemArgs = {
  data: Update_Block_Html_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Html_ItemsArgs = {
  data: Update_Block_Html_Input;
  filter?: InputMaybe<Block_Html_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Logocloud_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Logocloud_Input>>;
  filter?: InputMaybe<Block_Logocloud_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Logocloud_ItemArgs = {
  data: Update_Block_Logocloud_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Logocloud_ItemsArgs = {
  data: Update_Block_Logocloud_Input;
  filter?: InputMaybe<Block_Logocloud_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Logocloud_Logos_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Logocloud_Logos_Input>>;
  filter?: InputMaybe<Block_Logocloud_Logos_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Logocloud_Logos_ItemArgs = {
  data: Update_Block_Logocloud_Logos_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Logocloud_Logos_ItemsArgs = {
  data: Update_Block_Logocloud_Logos_Input;
  filter?: InputMaybe<Block_Logocloud_Logos_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Quote_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Quote_Input>>;
  filter?: InputMaybe<Block_Quote_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Quote_ItemArgs = {
  data: Update_Block_Quote_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Quote_ItemsArgs = {
  data: Update_Block_Quote_Input;
  filter?: InputMaybe<Block_Quote_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Richtext_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Richtext_Input>>;
  filter?: InputMaybe<Block_Richtext_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Richtext_ItemArgs = {
  data: Update_Block_Richtext_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Richtext_ItemsArgs = {
  data: Update_Block_Richtext_Input;
  filter?: InputMaybe<Block_Richtext_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Settings_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Settings_Input>>;
  filter?: InputMaybe<Block_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Settings_ItemArgs = {
  data: Update_Block_Settings_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Settings_ItemsArgs = {
  data: Update_Block_Settings_Input;
  filter?: InputMaybe<Block_Settings_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Step_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Step_Items_Input>>;
  filter?: InputMaybe<Block_Step_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Step_Items_ItemArgs = {
  data: Update_Block_Step_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Step_Items_ItemsArgs = {
  data: Update_Block_Step_Items_Input;
  filter?: InputMaybe<Block_Step_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Steps_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Steps_Input>>;
  filter?: InputMaybe<Block_Steps_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Steps_ItemArgs = {
  data: Update_Block_Steps_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Steps_ItemsArgs = {
  data: Update_Block_Steps_Input;
  filter?: InputMaybe<Block_Steps_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Team_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Team_Input>>;
  filter?: InputMaybe<Block_Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Team_ItemArgs = {
  data: Update_Block_Team_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Team_ItemsArgs = {
  data: Update_Block_Team_Input;
  filter?: InputMaybe<Block_Team_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Testimonial_Slider_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Testimonial_Slider_Items_Input>>;
  filter?: InputMaybe<Block_Testimonial_Slider_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Testimonial_Slider_Items_ItemArgs = {
  data: Update_Block_Testimonial_Slider_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Testimonial_Slider_Items_ItemsArgs = {
  data: Update_Block_Testimonial_Slider_Items_Input;
  filter?: InputMaybe<Block_Testimonial_Slider_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Testimonials_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Testimonials_Input>>;
  filter?: InputMaybe<Block_Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Testimonials_ItemArgs = {
  data: Update_Block_Testimonials_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Testimonials_ItemsArgs = {
  data: Update_Block_Testimonials_Input;
  filter?: InputMaybe<Block_Testimonials_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Video_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Video_Input>>;
  filter?: InputMaybe<Block_Video_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Video_ItemArgs = {
  data: Update_Block_Video_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Video_ItemsArgs = {
  data: Update_Block_Video_Input;
  filter?: InputMaybe<Block_Video_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Wysiwygs_BatchArgs = {
  data?: InputMaybe<Array<Update_Block_Wysiwygs_Input>>;
  filter?: InputMaybe<Block_Wysiwygs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Block_Wysiwygs_ItemArgs = {
  data: Update_Block_Wysiwygs_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Block_Wysiwygs_ItemsArgs = {
  data: Update_Block_Wysiwygs_Input;
  filter?: InputMaybe<Block_Wysiwygs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Categories_BatchArgs = {
  data?: InputMaybe<Array<Update_Categories_Input>>;
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Categories_ItemArgs = {
  data: Update_Categories_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Categories_ItemsArgs = {
  data: Update_Categories_Input;
  filter?: InputMaybe<Categories_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Contacts_BatchArgs = {
  data?: InputMaybe<Array<Update_Contacts_Input>>;
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Contacts_ItemArgs = {
  data: Update_Contacts_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Contacts_ItemsArgs = {
  data: Update_Contacts_Input;
  filter?: InputMaybe<Contacts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Conversations_BatchArgs = {
  data?: InputMaybe<Array<Update_Conversations_Input>>;
  filter?: InputMaybe<Conversations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Conversations_ItemArgs = {
  data: Update_Conversations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Conversations_ItemsArgs = {
  data: Update_Conversations_Input;
  filter?: InputMaybe<Conversations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Directus_Sync_Id_Map_BatchArgs = {
  data?: InputMaybe<Array<Update_Directus_Sync_Id_Map_Input>>;
  filter?: InputMaybe<Directus_Sync_Id_Map_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Directus_Sync_Id_Map_ItemArgs = {
  data: Update_Directus_Sync_Id_Map_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Directus_Sync_Id_Map_ItemsArgs = {
  data: Update_Directus_Sync_Id_Map_Input;
  filter?: InputMaybe<Directus_Sync_Id_Map_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Builder_BatchArgs = {
  data?: InputMaybe<Array<Update_Form_Builder_Input>>;
  filter?: InputMaybe<Form_Builder_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Builder_ItemArgs = {
  data: Update_Form_Builder_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Form_Builder_ItemsArgs = {
  data: Update_Form_Builder_Input;
  filter?: InputMaybe<Form_Builder_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Builder_Schema_BatchArgs = {
  data?: InputMaybe<Array<Update_Form_Builder_Schema_Input>>;
  filter?: InputMaybe<Form_Builder_Schema_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Builder_Schema_ItemArgs = {
  data: Update_Form_Builder_Schema_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Form_Builder_Schema_ItemsArgs = {
  data: Update_Form_Builder_Schema_Input;
  filter?: InputMaybe<Form_Builder_Schema_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Builder_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Form_Builder_Translations_Input>>;
  filter?: InputMaybe<Form_Builder_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Builder_Translations_ItemArgs = {
  data: Update_Form_Builder_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Form_Builder_Translations_ItemsArgs = {
  data: Update_Form_Builder_Translations_Input;
  filter?: InputMaybe<Form_Builder_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Configs_BatchArgs = {
  data?: InputMaybe<Array<Update_Form_Configs_Input>>;
  filter?: InputMaybe<Form_Configs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Configs_ItemArgs = {
  data: Update_Form_Configs_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Form_Configs_ItemsArgs = {
  data: Update_Form_Configs_Input;
  filter?: InputMaybe<Form_Configs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Entry_BatchArgs = {
  data?: InputMaybe<Array<Update_Form_Entry_Input>>;
  filter?: InputMaybe<Form_Entry_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Entry_ItemArgs = {
  data: Update_Form_Entry_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Form_Entry_ItemsArgs = {
  data: Update_Form_Entry_Input;
  filter?: InputMaybe<Form_Entry_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Field_Settings_BatchArgs = {
  data?: InputMaybe<Array<Update_Form_Field_Settings_Input>>;
  filter?: InputMaybe<Form_Field_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Field_Settings_ItemArgs = {
  data: Update_Form_Field_Settings_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Form_Field_Settings_ItemsArgs = {
  data: Update_Form_Field_Settings_Input;
  filter?: InputMaybe<Form_Field_Settings_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Field_Text_BatchArgs = {
  data?: InputMaybe<Array<Update_Form_Field_Text_Input>>;
  filter?: InputMaybe<Form_Field_Text_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Field_Text_ItemArgs = {
  data: Update_Form_Field_Text_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Form_Field_Text_ItemsArgs = {
  data: Update_Form_Field_Text_Input;
  filter?: InputMaybe<Form_Field_Text_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Field_Text_Settings_BatchArgs = {
  data?: InputMaybe<Array<Update_Form_Field_Text_Settings_Input>>;
  filter?: InputMaybe<Form_Field_Text_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Field_Text_Settings_ItemArgs = {
  data: Update_Form_Field_Text_Settings_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Form_Field_Text_Settings_ItemsArgs = {
  data: Update_Form_Field_Text_Settings_Input;
  filter?: InputMaybe<Form_Field_Text_Settings_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Forms_BatchArgs = {
  data?: InputMaybe<Array<Update_Forms_Input>>;
  filter?: InputMaybe<Forms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Forms_ItemArgs = {
  data: Update_Forms_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Forms_ItemsArgs = {
  data: Update_Forms_Input;
  filter?: InputMaybe<Forms_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_GlobalsArgs = {
  data: Update_Globals_Input;
};


export type MutationUpdate_Help_Articles_BatchArgs = {
  data?: InputMaybe<Array<Update_Help_Articles_Input>>;
  filter?: InputMaybe<Help_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Help_Articles_Files_BatchArgs = {
  data?: InputMaybe<Array<Update_Help_Articles_Files_Input>>;
  filter?: InputMaybe<Help_Articles_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Help_Articles_Files_ItemArgs = {
  data: Update_Help_Articles_Files_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Help_Articles_Files_ItemsArgs = {
  data: Update_Help_Articles_Files_Input;
  filter?: InputMaybe<Help_Articles_Files_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Help_Articles_ItemArgs = {
  data: Update_Help_Articles_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Help_Articles_ItemsArgs = {
  data: Update_Help_Articles_Input;
  filter?: InputMaybe<Help_Articles_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Help_Articles_Messages_BatchArgs = {
  data?: InputMaybe<Array<Update_Help_Articles_Messages_Input>>;
  filter?: InputMaybe<Help_Articles_Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Help_Articles_Messages_ItemArgs = {
  data: Update_Help_Articles_Messages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Help_Articles_Messages_ItemsArgs = {
  data: Update_Help_Articles_Messages_Input;
  filter?: InputMaybe<Help_Articles_Messages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Help_Collections_BatchArgs = {
  data?: InputMaybe<Array<Update_Help_Collections_Input>>;
  filter?: InputMaybe<Help_Collections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Help_Collections_ItemArgs = {
  data: Update_Help_Collections_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Help_Collections_ItemsArgs = {
  data: Update_Help_Collections_Input;
  filter?: InputMaybe<Help_Collections_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Help_Feedback_BatchArgs = {
  data?: InputMaybe<Array<Update_Help_Feedback_Input>>;
  filter?: InputMaybe<Help_Feedback_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Help_Feedback_ItemArgs = {
  data: Update_Help_Feedback_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Help_Feedback_ItemsArgs = {
  data: Update_Help_Feedback_Input;
  filter?: InputMaybe<Help_Feedback_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Inbox_BatchArgs = {
  data?: InputMaybe<Array<Update_Inbox_Input>>;
  filter?: InputMaybe<Inbox_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Inbox_ItemArgs = {
  data: Update_Inbox_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Inbox_ItemsArgs = {
  data: Update_Inbox_Input;
  filter?: InputMaybe<Inbox_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Languages_BatchArgs = {
  data?: InputMaybe<Array<Update_Languages_Input>>;
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Languages_ItemArgs = {
  data: Update_Languages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Languages_ItemsArgs = {
  data: Update_Languages_Input;
  filter?: InputMaybe<Languages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Links_BatchArgs = {
  data?: InputMaybe<Array<Update_Links_Input>>;
  filter?: InputMaybe<Links_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Links_ItemArgs = {
  data: Update_Links_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Links_ItemsArgs = {
  data: Update_Links_Input;
  filter?: InputMaybe<Links_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Messages_BatchArgs = {
  data?: InputMaybe<Array<Update_Messages_Input>>;
  filter?: InputMaybe<Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Messages_ItemArgs = {
  data: Update_Messages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Messages_ItemsArgs = {
  data: Update_Messages_Input;
  filter?: InputMaybe<Messages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Navigation_BatchArgs = {
  data?: InputMaybe<Array<Update_Navigation_Input>>;
  filter?: InputMaybe<Navigation_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Navigation_ItemArgs = {
  data: Update_Navigation_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Navigation_ItemsArgs = {
  data: Update_Navigation_Input;
  filter?: InputMaybe<Navigation_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Navigation_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Navigation_Items_Input>>;
  filter?: InputMaybe<Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Navigation_Items_ItemArgs = {
  data: Update_Navigation_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Navigation_Items_ItemsArgs = {
  data: Update_Navigation_Items_Input;
  filter?: InputMaybe<Navigation_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Organization_Addresses_BatchArgs = {
  data?: InputMaybe<Array<Update_Organization_Addresses_Input>>;
  filter?: InputMaybe<Organization_Addresses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Organization_Addresses_ItemArgs = {
  data: Update_Organization_Addresses_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Organization_Addresses_ItemsArgs = {
  data: Update_Organization_Addresses_Input;
  filter?: InputMaybe<Organization_Addresses_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Organizations_BatchArgs = {
  data?: InputMaybe<Array<Update_Organizations_Input>>;
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Organizations_Contacts_BatchArgs = {
  data?: InputMaybe<Array<Update_Organizations_Contacts_Input>>;
  filter?: InputMaybe<Organizations_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Organizations_Contacts_ItemArgs = {
  data: Update_Organizations_Contacts_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Organizations_Contacts_ItemsArgs = {
  data: Update_Organizations_Contacts_Input;
  filter?: InputMaybe<Organizations_Contacts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Organizations_ItemArgs = {
  data: Update_Organizations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Organizations_ItemsArgs = {
  data: Update_Organizations_Input;
  filter?: InputMaybe<Organizations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Activities_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Activities_Input>>;
  filter?: InputMaybe<Os_Activities_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Activities_ItemArgs = {
  data: Update_Os_Activities_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Activities_ItemsArgs = {
  data: Update_Os_Activities_Input;
  filter?: InputMaybe<Os_Activities_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Activity_Contacts_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Activity_Contacts_Input>>;
  filter?: InputMaybe<Os_Activity_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Activity_Contacts_ItemArgs = {
  data: Update_Os_Activity_Contacts_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Activity_Contacts_ItemsArgs = {
  data: Update_Os_Activity_Contacts_Input;
  filter?: InputMaybe<Os_Activity_Contacts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Deal_Contacts_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Deal_Contacts_Input>>;
  filter?: InputMaybe<Os_Deal_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Deal_Contacts_ItemArgs = {
  data: Update_Os_Deal_Contacts_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Deal_Contacts_ItemsArgs = {
  data: Update_Os_Deal_Contacts_Input;
  filter?: InputMaybe<Os_Deal_Contacts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Deal_Stages_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Deal_Stages_Input>>;
  filter?: InputMaybe<Os_Deal_Stages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Deal_Stages_ItemArgs = {
  data: Update_Os_Deal_Stages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Deal_Stages_ItemsArgs = {
  data: Update_Os_Deal_Stages_Input;
  filter?: InputMaybe<Os_Deal_Stages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Deals_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Deals_Input>>;
  filter?: InputMaybe<Os_Deals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Deals_ItemArgs = {
  data: Update_Os_Deals_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Deals_ItemsArgs = {
  data: Update_Os_Deals_Input;
  filter?: InputMaybe<Os_Deals_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Email_Templates_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Email_Templates_Input>>;
  filter?: InputMaybe<Os_Email_Templates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Email_Templates_ItemArgs = {
  data: Update_Os_Email_Templates_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Email_Templates_ItemsArgs = {
  data: Update_Os_Email_Templates_Input;
  filter?: InputMaybe<Os_Email_Templates_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Expenses_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Expenses_Input>>;
  filter?: InputMaybe<Os_Expenses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Expenses_ItemArgs = {
  data: Update_Os_Expenses_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Expenses_ItemsArgs = {
  data: Update_Os_Expenses_Input;
  filter?: InputMaybe<Os_Expenses_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Invoice_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Invoice_Items_Input>>;
  filter?: InputMaybe<Os_Invoice_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Invoice_Items_ItemArgs = {
  data: Update_Os_Invoice_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Invoice_Items_ItemsArgs = {
  data: Update_Os_Invoice_Items_Input;
  filter?: InputMaybe<Os_Invoice_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Invoices_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Invoices_Input>>;
  filter?: InputMaybe<Os_Invoices_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Invoices_ItemArgs = {
  data: Update_Os_Invoices_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Invoices_ItemsArgs = {
  data: Update_Os_Invoices_Input;
  filter?: InputMaybe<Os_Invoices_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Items_Input>>;
  filter?: InputMaybe<Os_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Items_ItemArgs = {
  data: Update_Os_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Items_ItemsArgs = {
  data: Update_Os_Items_Input;
  filter?: InputMaybe<Os_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Payment_Terms_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Payment_Terms_Input>>;
  filter?: InputMaybe<Os_Payment_Terms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Payment_Terms_ItemArgs = {
  data: Update_Os_Payment_Terms_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Payment_Terms_ItemsArgs = {
  data: Update_Os_Payment_Terms_Input;
  filter?: InputMaybe<Os_Payment_Terms_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Payments_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Payments_Input>>;
  filter?: InputMaybe<Os_Payments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Payments_ItemArgs = {
  data: Update_Os_Payments_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Payments_ItemsArgs = {
  data: Update_Os_Payments_Input;
  filter?: InputMaybe<Os_Payments_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Project_Contacts_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Project_Contacts_Input>>;
  filter?: InputMaybe<Os_Project_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Project_Contacts_ItemArgs = {
  data: Update_Os_Project_Contacts_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Project_Contacts_ItemsArgs = {
  data: Update_Os_Project_Contacts_Input;
  filter?: InputMaybe<Os_Project_Contacts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Project_Templates_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Project_Templates_Input>>;
  filter?: InputMaybe<Os_Project_Templates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Project_Templates_ItemArgs = {
  data: Update_Os_Project_Templates_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Project_Templates_ItemsArgs = {
  data: Update_Os_Project_Templates_Input;
  filter?: InputMaybe<Os_Project_Templates_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Project_Updates_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Project_Updates_Input>>;
  filter?: InputMaybe<Os_Project_Updates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Project_Updates_ItemArgs = {
  data: Update_Os_Project_Updates_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Project_Updates_ItemsArgs = {
  data: Update_Os_Project_Updates_Input;
  filter?: InputMaybe<Os_Project_Updates_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Projects_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Projects_Input>>;
  filter?: InputMaybe<Os_Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Projects_ItemArgs = {
  data: Update_Os_Projects_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Projects_ItemsArgs = {
  data: Update_Os_Projects_Input;
  filter?: InputMaybe<Os_Projects_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Proposal_Approvals_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Proposal_Approvals_Input>>;
  filter?: InputMaybe<Os_Proposal_Approvals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Proposal_Approvals_ItemArgs = {
  data: Update_Os_Proposal_Approvals_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Proposal_Approvals_ItemsArgs = {
  data: Update_Os_Proposal_Approvals_Input;
  filter?: InputMaybe<Os_Proposal_Approvals_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Proposal_Blocks_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Proposal_Blocks_Input>>;
  filter?: InputMaybe<Os_Proposal_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Proposal_Blocks_ItemArgs = {
  data: Update_Os_Proposal_Blocks_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Proposal_Blocks_ItemsArgs = {
  data: Update_Os_Proposal_Blocks_Input;
  filter?: InputMaybe<Os_Proposal_Blocks_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Proposal_Contacts_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Proposal_Contacts_Input>>;
  filter?: InputMaybe<Os_Proposal_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Proposal_Contacts_ItemArgs = {
  data: Update_Os_Proposal_Contacts_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Proposal_Contacts_ItemsArgs = {
  data: Update_Os_Proposal_Contacts_Input;
  filter?: InputMaybe<Os_Proposal_Contacts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Proposals_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Proposals_Input>>;
  filter?: InputMaybe<Os_Proposals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Proposals_ItemArgs = {
  data: Update_Os_Proposals_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Proposals_ItemsArgs = {
  data: Update_Os_Proposals_Input;
  filter?: InputMaybe<Os_Proposals_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_SettingsArgs = {
  data: Update_Os_Settings_Input;
};


export type MutationUpdate_Os_Task_Files_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Task_Files_Input>>;
  filter?: InputMaybe<Os_Task_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Task_Files_ItemArgs = {
  data: Update_Os_Task_Files_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Task_Files_ItemsArgs = {
  data: Update_Os_Task_Files_Input;
  filter?: InputMaybe<Os_Task_Files_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Tasks_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Tasks_Input>>;
  filter?: InputMaybe<Os_Tasks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Tasks_ItemArgs = {
  data: Update_Os_Tasks_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Tasks_ItemsArgs = {
  data: Update_Os_Tasks_Input;
  filter?: InputMaybe<Os_Tasks_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Tax_Rates_BatchArgs = {
  data?: InputMaybe<Array<Update_Os_Tax_Rates_Input>>;
  filter?: InputMaybe<Os_Tax_Rates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Os_Tax_Rates_ItemArgs = {
  data: Update_Os_Tax_Rates_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Os_Tax_Rates_ItemsArgs = {
  data: Update_Os_Tax_Rates_Input;
  filter?: InputMaybe<Os_Tax_Rates_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_Blocks_BatchArgs = {
  data?: InputMaybe<Array<Update_Page_Blocks_Input>>;
  filter?: InputMaybe<Page_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_Blocks_ItemArgs = {
  data: Update_Page_Blocks_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Page_Blocks_ItemsArgs = {
  data: Update_Page_Blocks_Input;
  filter?: InputMaybe<Page_Blocks_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_Editor_Nodes_BatchArgs = {
  data?: InputMaybe<Array<Update_Page_Editor_Nodes_Input>>;
  filter?: InputMaybe<Page_Editor_Nodes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_Editor_Nodes_ItemArgs = {
  data: Update_Page_Editor_Nodes_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Page_Editor_Nodes_ItemsArgs = {
  data: Update_Page_Editor_Nodes_Input;
  filter?: InputMaybe<Page_Editor_Nodes_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_Settings_BatchArgs = {
  data?: InputMaybe<Array<Update_Page_Settings_Input>>;
  filter?: InputMaybe<Page_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_Settings_ItemArgs = {
  data: Update_Page_Settings_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Page_Settings_ItemsArgs = {
  data: Update_Page_Settings_Input;
  filter?: InputMaybe<Page_Settings_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_Settings_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Page_Settings_Translations_Input>>;
  filter?: InputMaybe<Page_Settings_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_Settings_Translations_ItemArgs = {
  data: Update_Page_Settings_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Page_Settings_Translations_ItemsArgs = {
  data: Update_Page_Settings_Translations_Input;
  filter?: InputMaybe<Page_Settings_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pages_BatchArgs = {
  data?: InputMaybe<Array<Update_Pages_Input>>;
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pages_BlogArgs = {
  data: Update_Pages_Blog_Input;
};


export type MutationUpdate_Pages_ItemArgs = {
  data: Update_Pages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Pages_ItemsArgs = {
  data: Update_Pages_Input;
  filter?: InputMaybe<Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pages_ProjectsArgs = {
  data: Update_Pages_Projects_Input;
};


export type MutationUpdate_Pages_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Pages_Translations_Input>>;
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pages_Translations_ItemArgs = {
  data: Update_Pages_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Pages_Translations_ItemsArgs = {
  data: Update_Pages_Translations_Input;
  filter?: InputMaybe<Pages_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Post_Gallery_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Post_Gallery_Items_Input>>;
  filter?: InputMaybe<Post_Gallery_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Post_Gallery_Items_ItemArgs = {
  data: Update_Post_Gallery_Items_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Post_Gallery_Items_ItemsArgs = {
  data: Update_Post_Gallery_Items_Input;
  filter?: InputMaybe<Post_Gallery_Items_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Posts_BatchArgs = {
  data?: InputMaybe<Array<Update_Posts_Input>>;
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Posts_ItemArgs = {
  data: Update_Posts_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Posts_ItemsArgs = {
  data: Update_Posts_Input;
  filter?: InputMaybe<Posts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Redirects_BatchArgs = {
  data?: InputMaybe<Array<Update_Redirects_Input>>;
  filter?: InputMaybe<Redirects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Redirects_ItemArgs = {
  data: Update_Redirects_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Redirects_ItemsArgs = {
  data: Update_Redirects_Input;
  filter?: InputMaybe<Redirects_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Related_Block_Faqs_BatchArgs = {
  data?: InputMaybe<Array<Update_Related_Block_Faqs_Input>>;
  filter?: InputMaybe<Related_Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Related_Block_Faqs_Block_Faqs_BatchArgs = {
  data?: InputMaybe<Array<Update_Related_Block_Faqs_Block_Faqs_Input>>;
  filter?: InputMaybe<Related_Block_Faqs_Block_Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Related_Block_Faqs_Block_Faqs_ItemArgs = {
  data: Update_Related_Block_Faqs_Block_Faqs_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Related_Block_Faqs_Block_Faqs_ItemsArgs = {
  data: Update_Related_Block_Faqs_Block_Faqs_Input;
  filter?: InputMaybe<Related_Block_Faqs_Block_Faqs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Related_Block_Faqs_ItemArgs = {
  data: Update_Related_Block_Faqs_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Related_Block_Faqs_ItemsArgs = {
  data: Update_Related_Block_Faqs_Input;
  filter?: InputMaybe<Related_Block_Faqs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Repeater_Example_BatchArgs = {
  data?: InputMaybe<Array<Update_Repeater_Example_Input>>;
  filter?: InputMaybe<Repeater_Example_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Repeater_Example_ItemArgs = {
  data: Update_Repeater_Example_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Repeater_Example_ItemsArgs = {
  data: Update_Repeater_Example_Input;
  filter?: InputMaybe<Repeater_Example_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Routes_BatchArgs = {
  data?: InputMaybe<Array<Update_Routes_Input>>;
  filter?: InputMaybe<Routes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Routes_ItemArgs = {
  data: Update_Routes_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Routes_ItemsArgs = {
  data: Update_Routes_Input;
  filter?: InputMaybe<Routes_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Routes_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Routes_Translations_Input>>;
  filter?: InputMaybe<Routes_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Routes_Translations_ItemArgs = {
  data: Update_Routes_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Routes_Translations_ItemsArgs = {
  data: Update_Routes_Translations_Input;
  filter?: InputMaybe<Routes_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Search_Params_BatchArgs = {
  data?: InputMaybe<Array<Update_Search_Params_Input>>;
  filter?: InputMaybe<Search_Params_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Search_Params_ItemArgs = {
  data: Update_Search_Params_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Search_Params_ItemsArgs = {
  data: Update_Search_Params_Input;
  filter?: InputMaybe<Search_Params_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Seo_BatchArgs = {
  data?: InputMaybe<Array<Update_Seo_Input>>;
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Seo_ItemArgs = {
  data: Update_Seo_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Seo_ItemsArgs = {
  data: Update_Seo_Input;
  filter?: InputMaybe<Seo_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Team_BatchArgs = {
  data?: InputMaybe<Array<Update_Team_Input>>;
  filter?: InputMaybe<Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Team_ItemArgs = {
  data: Update_Team_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Team_ItemsArgs = {
  data: Update_Team_Input;
  filter?: InputMaybe<Team_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Testimonials_BatchArgs = {
  data?: InputMaybe<Array<Update_Testimonials_Input>>;
  filter?: InputMaybe<Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Testimonials_ItemArgs = {
  data: Update_Testimonials_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Testimonials_ItemsArgs = {
  data: Update_Testimonials_Input;
  filter?: InputMaybe<Testimonials_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Versioning_Example_BatchArgs = {
  data?: InputMaybe<Array<Update_Versioning_Example_Input>>;
  filter?: InputMaybe<Versioning_Example_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Versioning_Example_ItemArgs = {
  data: Update_Versioning_Example_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Versioning_Example_ItemsArgs = {
  data: Update_Versioning_Example_Input;
  filter?: InputMaybe<Versioning_Example_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

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
  conversations: Array<Conversations>;
  conversations_aggregated: Array<Conversations_Aggregated>;
  conversations_by_id?: Maybe<Conversations>;
  conversations_by_version?: Maybe<Version_Conversations>;
  directus_sync_id_map: Array<Directus_Sync_Id_Map>;
  directus_sync_id_map_aggregated: Array<Directus_Sync_Id_Map_Aggregated>;
  directus_sync_id_map_by_id?: Maybe<Directus_Sync_Id_Map>;
  directus_sync_id_map_by_version?: Maybe<Version_Directus_Sync_Id_Map>;
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
  globals?: Maybe<Globals>;
  globals_by_version?: Maybe<Version_Globals>;
  help_articles: Array<Help_Articles>;
  help_articles_aggregated: Array<Help_Articles_Aggregated>;
  help_articles_by_id?: Maybe<Help_Articles>;
  help_articles_by_version?: Maybe<Version_Help_Articles>;
  help_articles_files: Array<Help_Articles_Files>;
  help_articles_files_aggregated: Array<Help_Articles_Files_Aggregated>;
  help_articles_files_by_id?: Maybe<Help_Articles_Files>;
  help_articles_files_by_version?: Maybe<Version_Help_Articles_Files>;
  help_articles_messages: Array<Help_Articles_Messages>;
  help_articles_messages_aggregated: Array<Help_Articles_Messages_Aggregated>;
  help_articles_messages_by_id?: Maybe<Help_Articles_Messages>;
  help_articles_messages_by_version?: Maybe<Version_Help_Articles_Messages>;
  help_collections: Array<Help_Collections>;
  help_collections_aggregated: Array<Help_Collections_Aggregated>;
  help_collections_by_id?: Maybe<Help_Collections>;
  help_collections_by_version?: Maybe<Version_Help_Collections>;
  help_feedback: Array<Help_Feedback>;
  help_feedback_aggregated: Array<Help_Feedback_Aggregated>;
  help_feedback_by_id?: Maybe<Help_Feedback>;
  help_feedback_by_version?: Maybe<Version_Help_Feedback>;
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
  organization_addresses: Array<Organization_Addresses>;
  organization_addresses_aggregated: Array<Organization_Addresses_Aggregated>;
  organization_addresses_by_id?: Maybe<Organization_Addresses>;
  organization_addresses_by_version?: Maybe<Version_Organization_Addresses>;
  organizations: Array<Organizations>;
  organizations_aggregated: Array<Organizations_Aggregated>;
  organizations_by_id?: Maybe<Organizations>;
  organizations_by_version?: Maybe<Version_Organizations>;
  organizations_contacts: Array<Organizations_Contacts>;
  organizations_contacts_aggregated: Array<Organizations_Contacts_Aggregated>;
  organizations_contacts_by_id?: Maybe<Organizations_Contacts>;
  organizations_contacts_by_version?: Maybe<Version_Organizations_Contacts>;
  os_activities: Array<Os_Activities>;
  os_activities_aggregated: Array<Os_Activities_Aggregated>;
  os_activities_by_id?: Maybe<Os_Activities>;
  os_activities_by_version?: Maybe<Version_Os_Activities>;
  os_activity_contacts: Array<Os_Activity_Contacts>;
  os_activity_contacts_aggregated: Array<Os_Activity_Contacts_Aggregated>;
  os_activity_contacts_by_id?: Maybe<Os_Activity_Contacts>;
  os_activity_contacts_by_version?: Maybe<Version_Os_Activity_Contacts>;
  os_deal_contacts: Array<Os_Deal_Contacts>;
  os_deal_contacts_aggregated: Array<Os_Deal_Contacts_Aggregated>;
  os_deal_contacts_by_id?: Maybe<Os_Deal_Contacts>;
  os_deal_contacts_by_version?: Maybe<Version_Os_Deal_Contacts>;
  os_deal_stages: Array<Os_Deal_Stages>;
  os_deal_stages_aggregated: Array<Os_Deal_Stages_Aggregated>;
  os_deal_stages_by_id?: Maybe<Os_Deal_Stages>;
  os_deal_stages_by_version?: Maybe<Version_Os_Deal_Stages>;
  os_deals: Array<Os_Deals>;
  os_deals_aggregated: Array<Os_Deals_Aggregated>;
  os_deals_by_id?: Maybe<Os_Deals>;
  os_deals_by_version?: Maybe<Version_Os_Deals>;
  os_email_templates: Array<Os_Email_Templates>;
  os_email_templates_aggregated: Array<Os_Email_Templates_Aggregated>;
  os_email_templates_by_id?: Maybe<Os_Email_Templates>;
  os_email_templates_by_version?: Maybe<Version_Os_Email_Templates>;
  os_expenses: Array<Os_Expenses>;
  os_expenses_aggregated: Array<Os_Expenses_Aggregated>;
  os_expenses_by_id?: Maybe<Os_Expenses>;
  os_expenses_by_version?: Maybe<Version_Os_Expenses>;
  os_invoice_items: Array<Os_Invoice_Items>;
  os_invoice_items_aggregated: Array<Os_Invoice_Items_Aggregated>;
  os_invoice_items_by_id?: Maybe<Os_Invoice_Items>;
  os_invoice_items_by_version?: Maybe<Version_Os_Invoice_Items>;
  os_invoices: Array<Os_Invoices>;
  os_invoices_aggregated: Array<Os_Invoices_Aggregated>;
  os_invoices_by_id?: Maybe<Os_Invoices>;
  os_invoices_by_version?: Maybe<Version_Os_Invoices>;
  os_items: Array<Os_Items>;
  os_items_aggregated: Array<Os_Items_Aggregated>;
  os_items_by_id?: Maybe<Os_Items>;
  os_items_by_version?: Maybe<Version_Os_Items>;
  os_payment_terms: Array<Os_Payment_Terms>;
  os_payment_terms_aggregated: Array<Os_Payment_Terms_Aggregated>;
  os_payment_terms_by_id?: Maybe<Os_Payment_Terms>;
  os_payment_terms_by_version?: Maybe<Version_Os_Payment_Terms>;
  os_payments: Array<Os_Payments>;
  os_payments_aggregated: Array<Os_Payments_Aggregated>;
  os_payments_by_id?: Maybe<Os_Payments>;
  os_payments_by_version?: Maybe<Version_Os_Payments>;
  os_project_contacts: Array<Os_Project_Contacts>;
  os_project_contacts_aggregated: Array<Os_Project_Contacts_Aggregated>;
  os_project_contacts_by_id?: Maybe<Os_Project_Contacts>;
  os_project_contacts_by_version?: Maybe<Version_Os_Project_Contacts>;
  os_project_templates: Array<Os_Project_Templates>;
  os_project_templates_aggregated: Array<Os_Project_Templates_Aggregated>;
  os_project_templates_by_id?: Maybe<Os_Project_Templates>;
  os_project_templates_by_version?: Maybe<Version_Os_Project_Templates>;
  os_project_updates: Array<Os_Project_Updates>;
  os_project_updates_aggregated: Array<Os_Project_Updates_Aggregated>;
  os_project_updates_by_id?: Maybe<Os_Project_Updates>;
  os_project_updates_by_version?: Maybe<Version_Os_Project_Updates>;
  os_projects: Array<Os_Projects>;
  os_projects_aggregated: Array<Os_Projects_Aggregated>;
  os_projects_by_id?: Maybe<Os_Projects>;
  os_projects_by_version?: Maybe<Version_Os_Projects>;
  os_proposal_approvals: Array<Os_Proposal_Approvals>;
  os_proposal_approvals_aggregated: Array<Os_Proposal_Approvals_Aggregated>;
  os_proposal_approvals_by_id?: Maybe<Os_Proposal_Approvals>;
  os_proposal_approvals_by_version?: Maybe<Version_Os_Proposal_Approvals>;
  os_proposal_blocks: Array<Os_Proposal_Blocks>;
  os_proposal_blocks_aggregated: Array<Os_Proposal_Blocks_Aggregated>;
  os_proposal_blocks_by_id?: Maybe<Os_Proposal_Blocks>;
  os_proposal_blocks_by_version?: Maybe<Version_Os_Proposal_Blocks>;
  os_proposal_contacts: Array<Os_Proposal_Contacts>;
  os_proposal_contacts_aggregated: Array<Os_Proposal_Contacts_Aggregated>;
  os_proposal_contacts_by_id?: Maybe<Os_Proposal_Contacts>;
  os_proposal_contacts_by_version?: Maybe<Version_Os_Proposal_Contacts>;
  os_proposals: Array<Os_Proposals>;
  os_proposals_aggregated: Array<Os_Proposals_Aggregated>;
  os_proposals_by_id?: Maybe<Os_Proposals>;
  os_proposals_by_version?: Maybe<Version_Os_Proposals>;
  os_settings?: Maybe<Os_Settings>;
  os_settings_by_version?: Maybe<Version_Os_Settings>;
  os_task_files: Array<Os_Task_Files>;
  os_task_files_aggregated: Array<Os_Task_Files_Aggregated>;
  os_task_files_by_id?: Maybe<Os_Task_Files>;
  os_task_files_by_version?: Maybe<Version_Os_Task_Files>;
  os_tasks: Array<Os_Tasks>;
  os_tasks_aggregated: Array<Os_Tasks_Aggregated>;
  os_tasks_by_id?: Maybe<Os_Tasks>;
  os_tasks_by_version?: Maybe<Version_Os_Tasks>;
  os_tax_rates: Array<Os_Tax_Rates>;
  os_tax_rates_aggregated: Array<Os_Tax_Rates_Aggregated>;
  os_tax_rates_by_id?: Maybe<Os_Tax_Rates>;
  os_tax_rates_by_version?: Maybe<Version_Os_Tax_Rates>;
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
  repeater_example: Array<Repeater_Example>;
  repeater_example_aggregated: Array<Repeater_Example_Aggregated>;
  repeater_example_by_id?: Maybe<Repeater_Example>;
  repeater_example_by_version?: Maybe<Version_Repeater_Example>;
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
  seo: Array<Seo>;
  seo_aggregated: Array<Seo_Aggregated>;
  seo_by_id?: Maybe<Seo>;
  seo_by_version?: Maybe<Version_Seo>;
  team: Array<Team>;
  team_aggregated: Array<Team_Aggregated>;
  team_by_id?: Maybe<Team>;
  team_by_version?: Maybe<Version_Team>;
  testimonials: Array<Testimonials>;
  testimonials_aggregated: Array<Testimonials_Aggregated>;
  testimonials_by_id?: Maybe<Testimonials>;
  testimonials_by_version?: Maybe<Version_Testimonials>;
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


export type QueryConversationsArgs = {
  filter?: InputMaybe<Conversations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryConversations_AggregatedArgs = {
  filter?: InputMaybe<Conversations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryConversations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryConversations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryDirectus_Sync_Id_MapArgs = {
  filter?: InputMaybe<Directus_Sync_Id_Map_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Sync_Id_Map_AggregatedArgs = {
  filter?: InputMaybe<Directus_Sync_Id_Map_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDirectus_Sync_Id_Map_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDirectus_Sync_Id_Map_By_VersionArgs = {
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


export type QueryGlobalsArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGlobals_By_VersionArgs = {
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


export type QueryHelp_Articles_FilesArgs = {
  filter?: InputMaybe<Help_Articles_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Articles_Files_AggregatedArgs = {
  filter?: InputMaybe<Help_Articles_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Articles_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHelp_Articles_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryHelp_Articles_MessagesArgs = {
  filter?: InputMaybe<Help_Articles_Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Articles_Messages_AggregatedArgs = {
  filter?: InputMaybe<Help_Articles_Messages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Articles_Messages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHelp_Articles_Messages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryHelp_CollectionsArgs = {
  filter?: InputMaybe<Help_Collections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Collections_AggregatedArgs = {
  filter?: InputMaybe<Help_Collections_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Collections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHelp_Collections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryHelp_FeedbackArgs = {
  filter?: InputMaybe<Help_Feedback_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Feedback_AggregatedArgs = {
  filter?: InputMaybe<Help_Feedback_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHelp_Feedback_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHelp_Feedback_By_VersionArgs = {
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


export type QueryOrganization_AddressesArgs = {
  filter?: InputMaybe<Organization_Addresses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrganization_Addresses_AggregatedArgs = {
  filter?: InputMaybe<Organization_Addresses_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrganization_Addresses_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganization_Addresses_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOrganizationsArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrganizations_AggregatedArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrganizations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOrganizations_ContactsArgs = {
  filter?: InputMaybe<Organizations_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrganizations_Contacts_AggregatedArgs = {
  filter?: InputMaybe<Organizations_Contacts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrganizations_Contacts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizations_Contacts_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_ActivitiesArgs = {
  filter?: InputMaybe<Os_Activities_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Activities_AggregatedArgs = {
  filter?: InputMaybe<Os_Activities_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Activities_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Activities_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Activity_ContactsArgs = {
  filter?: InputMaybe<Os_Activity_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Activity_Contacts_AggregatedArgs = {
  filter?: InputMaybe<Os_Activity_Contacts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Activity_Contacts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Activity_Contacts_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Deal_ContactsArgs = {
  filter?: InputMaybe<Os_Deal_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Deal_Contacts_AggregatedArgs = {
  filter?: InputMaybe<Os_Deal_Contacts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Deal_Contacts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Deal_Contacts_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Deal_StagesArgs = {
  filter?: InputMaybe<Os_Deal_Stages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Deal_Stages_AggregatedArgs = {
  filter?: InputMaybe<Os_Deal_Stages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Deal_Stages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Deal_Stages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_DealsArgs = {
  filter?: InputMaybe<Os_Deals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Deals_AggregatedArgs = {
  filter?: InputMaybe<Os_Deals_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Deals_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Deals_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Email_TemplatesArgs = {
  filter?: InputMaybe<Os_Email_Templates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Email_Templates_AggregatedArgs = {
  filter?: InputMaybe<Os_Email_Templates_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Email_Templates_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Email_Templates_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_ExpensesArgs = {
  filter?: InputMaybe<Os_Expenses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Expenses_AggregatedArgs = {
  filter?: InputMaybe<Os_Expenses_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Expenses_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Expenses_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Invoice_ItemsArgs = {
  filter?: InputMaybe<Os_Invoice_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Invoice_Items_AggregatedArgs = {
  filter?: InputMaybe<Os_Invoice_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Invoice_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Invoice_Items_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_InvoicesArgs = {
  filter?: InputMaybe<Os_Invoices_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Invoices_AggregatedArgs = {
  filter?: InputMaybe<Os_Invoices_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Invoices_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Invoices_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_ItemsArgs = {
  filter?: InputMaybe<Os_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Items_AggregatedArgs = {
  filter?: InputMaybe<Os_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Items_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Payment_TermsArgs = {
  filter?: InputMaybe<Os_Payment_Terms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Payment_Terms_AggregatedArgs = {
  filter?: InputMaybe<Os_Payment_Terms_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Payment_Terms_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Payment_Terms_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_PaymentsArgs = {
  filter?: InputMaybe<Os_Payments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Payments_AggregatedArgs = {
  filter?: InputMaybe<Os_Payments_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Payments_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Payments_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Project_ContactsArgs = {
  filter?: InputMaybe<Os_Project_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Project_Contacts_AggregatedArgs = {
  filter?: InputMaybe<Os_Project_Contacts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Project_Contacts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Project_Contacts_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Project_TemplatesArgs = {
  filter?: InputMaybe<Os_Project_Templates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Project_Templates_AggregatedArgs = {
  filter?: InputMaybe<Os_Project_Templates_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Project_Templates_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Project_Templates_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Project_UpdatesArgs = {
  filter?: InputMaybe<Os_Project_Updates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Project_Updates_AggregatedArgs = {
  filter?: InputMaybe<Os_Project_Updates_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Project_Updates_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Project_Updates_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_ProjectsArgs = {
  filter?: InputMaybe<Os_Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Projects_AggregatedArgs = {
  filter?: InputMaybe<Os_Projects_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Projects_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Projects_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Proposal_ApprovalsArgs = {
  filter?: InputMaybe<Os_Proposal_Approvals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Proposal_Approvals_AggregatedArgs = {
  filter?: InputMaybe<Os_Proposal_Approvals_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Proposal_Approvals_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Proposal_Approvals_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Proposal_BlocksArgs = {
  filter?: InputMaybe<Os_Proposal_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Proposal_Blocks_AggregatedArgs = {
  filter?: InputMaybe<Os_Proposal_Blocks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Proposal_Blocks_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Proposal_Blocks_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Proposal_ContactsArgs = {
  filter?: InputMaybe<Os_Proposal_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Proposal_Contacts_AggregatedArgs = {
  filter?: InputMaybe<Os_Proposal_Contacts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Proposal_Contacts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Proposal_Contacts_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_ProposalsArgs = {
  filter?: InputMaybe<Os_Proposals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Proposals_AggregatedArgs = {
  filter?: InputMaybe<Os_Proposals_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Proposals_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Proposals_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_SettingsArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Settings_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryOs_Task_FilesArgs = {
  filter?: InputMaybe<Os_Task_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Task_Files_AggregatedArgs = {
  filter?: InputMaybe<Os_Task_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Task_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Task_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_TasksArgs = {
  filter?: InputMaybe<Os_Tasks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Tasks_AggregatedArgs = {
  filter?: InputMaybe<Os_Tasks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Tasks_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Tasks_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOs_Tax_RatesArgs = {
  filter?: InputMaybe<Os_Tax_Rates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Tax_Rates_AggregatedArgs = {
  filter?: InputMaybe<Os_Tax_Rates_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOs_Tax_Rates_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOs_Tax_Rates_By_VersionArgs = {
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


export type QueryRepeater_ExampleArgs = {
  filter?: InputMaybe<Repeater_Example_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRepeater_Example_AggregatedArgs = {
  filter?: InputMaybe<Repeater_Example_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRepeater_Example_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRepeater_Example_By_VersionArgs = {
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


export type QuerySeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeo_AggregatedArgs = {
  filter?: InputMaybe<Seo_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeo_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySeo_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryTeamArgs = {
  filter?: InputMaybe<Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_AggregatedArgs = {
  filter?: InputMaybe<Team_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeam_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryTestimonialsArgs = {
  filter?: InputMaybe<Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTestimonials_AggregatedArgs = {
  filter?: InputMaybe<Testimonials_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTestimonials_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTestimonials_By_VersionArgs = {
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
  conversations_mutated?: Maybe<Conversations_Mutated>;
  directus_activity_mutated?: Maybe<Directus_Activity_Mutated>;
  directus_dashboards_mutated?: Maybe<Directus_Dashboards_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  directus_flows_mutated?: Maybe<Directus_Flows_Mutated>;
  directus_folders_mutated?: Maybe<Directus_Folders_Mutated>;
  directus_notifications_mutated?: Maybe<Directus_Notifications_Mutated>;
  directus_operations_mutated?: Maybe<Directus_Operations_Mutated>;
  directus_panels_mutated?: Maybe<Directus_Panels_Mutated>;
  directus_permissions_mutated?: Maybe<Directus_Permissions_Mutated>;
  directus_presets_mutated?: Maybe<Directus_Presets_Mutated>;
  directus_revisions_mutated?: Maybe<Directus_Revisions_Mutated>;
  directus_roles_mutated?: Maybe<Directus_Roles_Mutated>;
  directus_settings_mutated?: Maybe<Directus_Settings_Mutated>;
  directus_shares_mutated?: Maybe<Directus_Shares_Mutated>;
  directus_sync_id_map_mutated?: Maybe<Directus_Sync_Id_Map_Mutated>;
  directus_translations_mutated?: Maybe<Directus_Translations_Mutated>;
  directus_users_mutated?: Maybe<Directus_Users_Mutated>;
  directus_versions_mutated?: Maybe<Directus_Versions_Mutated>;
  directus_webhooks_mutated?: Maybe<Directus_Webhooks_Mutated>;
  form_builder_mutated?: Maybe<Form_Builder_Mutated>;
  form_builder_schema_mutated?: Maybe<Form_Builder_Schema_Mutated>;
  form_builder_translations_mutated?: Maybe<Form_Builder_Translations_Mutated>;
  form_configs_mutated?: Maybe<Form_Configs_Mutated>;
  form_entry_mutated?: Maybe<Form_Entry_Mutated>;
  form_field_settings_mutated?: Maybe<Form_Field_Settings_Mutated>;
  form_field_text_mutated?: Maybe<Form_Field_Text_Mutated>;
  form_field_text_settings_mutated?: Maybe<Form_Field_Text_Settings_Mutated>;
  forms_mutated?: Maybe<Forms_Mutated>;
  globals_mutated?: Maybe<Globals_Mutated>;
  help_articles_files_mutated?: Maybe<Help_Articles_Files_Mutated>;
  help_articles_messages_mutated?: Maybe<Help_Articles_Messages_Mutated>;
  help_articles_mutated?: Maybe<Help_Articles_Mutated>;
  help_collections_mutated?: Maybe<Help_Collections_Mutated>;
  help_feedback_mutated?: Maybe<Help_Feedback_Mutated>;
  inbox_mutated?: Maybe<Inbox_Mutated>;
  languages_mutated?: Maybe<Languages_Mutated>;
  links_mutated?: Maybe<Links_Mutated>;
  messages_mutated?: Maybe<Messages_Mutated>;
  navigation_items_mutated?: Maybe<Navigation_Items_Mutated>;
  navigation_mutated?: Maybe<Navigation_Mutated>;
  organization_addresses_mutated?: Maybe<Organization_Addresses_Mutated>;
  organizations_contacts_mutated?: Maybe<Organizations_Contacts_Mutated>;
  organizations_mutated?: Maybe<Organizations_Mutated>;
  os_activities_mutated?: Maybe<Os_Activities_Mutated>;
  os_activity_contacts_mutated?: Maybe<Os_Activity_Contacts_Mutated>;
  os_deal_contacts_mutated?: Maybe<Os_Deal_Contacts_Mutated>;
  os_deal_stages_mutated?: Maybe<Os_Deal_Stages_Mutated>;
  os_deals_mutated?: Maybe<Os_Deals_Mutated>;
  os_email_templates_mutated?: Maybe<Os_Email_Templates_Mutated>;
  os_expenses_mutated?: Maybe<Os_Expenses_Mutated>;
  os_invoice_items_mutated?: Maybe<Os_Invoice_Items_Mutated>;
  os_invoices_mutated?: Maybe<Os_Invoices_Mutated>;
  os_items_mutated?: Maybe<Os_Items_Mutated>;
  os_payment_terms_mutated?: Maybe<Os_Payment_Terms_Mutated>;
  os_payments_mutated?: Maybe<Os_Payments_Mutated>;
  os_project_contacts_mutated?: Maybe<Os_Project_Contacts_Mutated>;
  os_project_templates_mutated?: Maybe<Os_Project_Templates_Mutated>;
  os_project_updates_mutated?: Maybe<Os_Project_Updates_Mutated>;
  os_projects_mutated?: Maybe<Os_Projects_Mutated>;
  os_proposal_approvals_mutated?: Maybe<Os_Proposal_Approvals_Mutated>;
  os_proposal_blocks_mutated?: Maybe<Os_Proposal_Blocks_Mutated>;
  os_proposal_contacts_mutated?: Maybe<Os_Proposal_Contacts_Mutated>;
  os_proposals_mutated?: Maybe<Os_Proposals_Mutated>;
  os_settings_mutated?: Maybe<Os_Settings_Mutated>;
  os_task_files_mutated?: Maybe<Os_Task_Files_Mutated>;
  os_tasks_mutated?: Maybe<Os_Tasks_Mutated>;
  os_tax_rates_mutated?: Maybe<Os_Tax_Rates_Mutated>;
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
  repeater_example_mutated?: Maybe<Repeater_Example_Mutated>;
  routes_mutated?: Maybe<Routes_Mutated>;
  routes_translations_mutated?: Maybe<Routes_Translations_Mutated>;
  search_params_mutated?: Maybe<Search_Params_Mutated>;
  seo_mutated?: Maybe<Seo_Mutated>;
  team_mutated?: Maybe<Team_Mutated>;
  testimonials_mutated?: Maybe<Testimonials_Mutated>;
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


export type SubscriptionConversations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Activity_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Dashboards_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Flows_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Folders_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Notifications_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Operations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Panels_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Permissions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Presets_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Revisions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Roles_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Shares_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Sync_Id_Map_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Versions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Webhooks_MutatedArgs = {
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


export type SubscriptionGlobals_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHelp_Articles_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHelp_Articles_Messages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHelp_Articles_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHelp_Collections_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHelp_Feedback_MutatedArgs = {
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


export type SubscriptionOrganization_Addresses_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOrganizations_Contacts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOrganizations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Activities_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Activity_Contacts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Deal_Contacts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Deal_Stages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Deals_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Email_Templates_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Expenses_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Invoice_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Invoices_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Payment_Terms_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Payments_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Project_Contacts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Project_Templates_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Project_Updates_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Projects_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Proposal_Approvals_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Proposal_Blocks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Proposal_Contacts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Proposals_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Task_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Tasks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOs_Tax_Rates_MutatedArgs = {
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


export type SubscriptionRepeater_Example_MutatedArgs = {
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


export type SubscriptionSeo_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTeam_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTestimonials_MutatedArgs = {
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type ActivitesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ActivitesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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


export type Block_ButtonUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_ButtonUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Block_Button_GroupButtonsArgs = {
  filter?: InputMaybe<Block_Button_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Button_GroupUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Button_GroupUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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


export type Block_Columns_RowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Columns_RowsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Block_FilesFilesArgs = {
  filter?: InputMaybe<Block_Files_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_FilesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_FilesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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


export type Block_Gallery_FilesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Gallery_FilesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  variant?: Maybe<Scalars['String']['output']>;
};


export type Block_SettingsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_SettingsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  testimonials_id?: Maybe<Testimonials>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Block_Testimonial_Slider_ItemsBlock_Testimonial_Slider_IdArgs = {
  filter?: InputMaybe<Block_Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Testimonial_Slider_ItemsTestimonials_IdArgs = {
  filter?: InputMaybe<Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Testimonial_Slider_ItemsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Testimonial_Slider_ItemsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  testimonials_id?: InputMaybe<Testimonials_Filter>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Block_WysiwygsSettingsArgs = {
  filter?: InputMaybe<Block_Settings_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_WysiwygsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_WysiwygsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type CategoriesSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
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
  seo?: InputMaybe<Seo_Filter>;
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
  activities?: Maybe<Array<Maybe<Os_Activity_Contacts>>>;
  activities_func?: Maybe<Count_Functions>;
  /** Notes about this contact. Never visible to this person or their organization. */
  contact_notes?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  deals?: Maybe<Array<Maybe<Os_Deal_Contacts>>>;
  deals_func?: Maybe<Count_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  job_title?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  organizations?: Maybe<Array<Maybe<Organizations_Contacts>>>;
  organizations_func?: Maybe<Count_Functions>;
  phone?: Maybe<Scalars['String']['output']>;
  /** Is this an active contact? */
  status?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Directus_Users>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type ContactsActivitiesArgs = {
  filter?: InputMaybe<Os_Activity_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContactsDealsArgs = {
  filter?: InputMaybe<Os_Deal_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContactsOrganizationsArgs = {
  filter?: InputMaybe<Organizations_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContactsUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContactsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContactsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  activities?: Maybe<Scalars['Int']['output']>;
  /** Notes about this contact. Never visible to this person or their organization. */
  contact_notes?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  deals?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  first_name?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  job_title?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['Int']['output']>;
  organizations?: Maybe<Scalars['Int']['output']>;
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
  activities?: InputMaybe<Os_Activity_Contacts_Filter>;
  activities_func?: InputMaybe<Count_Function_Filter_Operators>;
  contact_notes?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  deals?: InputMaybe<Os_Deal_Contacts_Filter>;
  deals_func?: InputMaybe<Count_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  job_title?: InputMaybe<String_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  organizations?: InputMaybe<Organizations_Contacts_Filter>;
  organizations_func?: InputMaybe<Count_Function_Filter_Operators>;
  phone?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Contacts_Mutated = {
  __typename?: 'contacts_mutated';
  data?: Maybe<Contacts>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Conversations = {
  __typename?: 'conversations';
  collection?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  messages?: Maybe<Array<Maybe<Messages>>>;
  messages_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  visitor_id?: Maybe<Scalars['String']['output']>;
};


export type ConversationsMessagesArgs = {
  filter?: InputMaybe<Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ConversationsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ConversationsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Conversations_Aggregated = {
  __typename?: 'conversations_aggregated';
  count?: Maybe<Conversations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Conversations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Conversations_Aggregated_Count = {
  __typename?: 'conversations_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  messages?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  visitor_id?: Maybe<Scalars['Int']['output']>;
};

export type Conversations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Conversations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Conversations_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  messages?: InputMaybe<Messages_Filter>;
  messages_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  visitor_id?: InputMaybe<String_Filter_Operators>;
};

export type Conversations_Mutated = {
  __typename?: 'conversations_mutated';
  data?: Maybe<Conversations>;
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

export type Create_Activites_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Block_Button_Group_Input = {
  alignment?: InputMaybe<Scalars['String']['input']>;
  buttons?: InputMaybe<Array<InputMaybe<Create_Block_Button_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Block_Button_Input = {
  button_group?: InputMaybe<Create_Block_Button_Group_Input>;
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  external_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Create_Pages_Input>;
  post?: InputMaybe<Create_Posts_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Columns_Input = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  rows?: InputMaybe<Array<InputMaybe<Create_Block_Columns_Rows_Input>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Columns_Rows_Input = {
  block_columns?: InputMaybe<Create_Block_Columns_Input>;
  button_group?: InputMaybe<Create_Block_Button_Group_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  image_position?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Block_Cta_Input = {
  button_group?: InputMaybe<Create_Block_Button_Group_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Divider_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Faqs_Input = {
  alignment?: InputMaybe<Scalars['String']['input']>;
  faqs?: InputMaybe<Scalars['JSON']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Files_Files_Input = {
  block_files_id?: InputMaybe<Create_Block_Files_Input>;
  directus_files_id?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Create_Block_Files_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  files?: InputMaybe<Array<InputMaybe<Create_Block_Files_Files_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Block_Form_Input = {
  form?: InputMaybe<Create_Forms_Input>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Gallery_Files_Input = {
  block_gallery_id?: InputMaybe<Create_Block_Gallery_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  directus_files_id?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Block_Gallery_Input = {
  gallery_items?: InputMaybe<Array<InputMaybe<Create_Block_Gallery_Files_Input>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Hero_Input = {
  button_group?: InputMaybe<Create_Block_Button_Group_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  image_position?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Html_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  raw_html?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Logocloud_Input = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logos?: InputMaybe<Array<InputMaybe<Create_Block_Logocloud_Logos_Input>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Logocloud_Logos_Input = {
  block_logocloud_id?: InputMaybe<Create_Block_Logocloud_Input>;
  directus_files_id?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Block_Quote_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Richtext_Input = {
  alignment?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Settings_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Scalars['JSON']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Step_Items_Input = {
  block_steps?: InputMaybe<Create_Block_Steps_Input>;
  button_group?: InputMaybe<Create_Block_Button_Group_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Steps_Input = {
  /** If enabled, image position is alternated between left and right. */
  alternate_image_position: Scalars['Boolean']['input'];
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Show the step numbers on the website. For example: (Step 1, Step 2, etc) */
  show_step_numbers?: InputMaybe<Scalars['Boolean']['input']>;
  steps?: InputMaybe<Array<InputMaybe<Create_Block_Step_Items_Input>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Team_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Testimonial_Slider_Items_Input = {
  block_testimonial_slider_id?: InputMaybe<Create_Block_Testimonials_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  testimonials_id?: InputMaybe<Create_Testimonials_Input>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Block_Testimonials_Input = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  testimonials?: InputMaybe<Array<InputMaybe<Create_Block_Testimonial_Slider_Items_Input>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Video_Input = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  video_file?: InputMaybe<Create_Directus_Files_Input>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Block_Wysiwygs_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  settings?: InputMaybe<Create_Block_Settings_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Categories_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<Create_Seo_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Contacts_Input = {
  activities?: InputMaybe<Array<InputMaybe<Create_Os_Activity_Contacts_Input>>>;
  /** Notes about this contact. Never visible to this person or their organization. */
  contact_notes?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  deals?: InputMaybe<Array<InputMaybe<Create_Os_Deal_Contacts_Input>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Create_Organizations_Contacts_Input>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Is this an active contact? */
  status?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Create_Directus_Users_Input>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Conversations_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Array<InputMaybe<Create_Messages_Input>>>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  visitor_id?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Directus_Files_Input = {
  caption?: InputMaybe<Scalars['String']['input']>;
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download: Scalars['String']['input'];
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage: Scalars['String']['input'];
  tags?: InputMaybe<Scalars['JSON']['input']>;
  thumbhash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  organizations?: InputMaybe<Array<InputMaybe<Create_Organizations_Input>>>;
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Roles_Input = {
  admin_access: Scalars['Boolean']['input'];
  app_access?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enforce_tfa: Scalars['Boolean']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
};

export type Create_Directus_Sync_Id_Map_Input = {
  created_at?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  local_id: Scalars['String']['input'];
  sync_id: Scalars['String']['input'];
  table: Scalars['String']['input'];
};

export type Create_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  contacts?: InputMaybe<Array<InputMaybe<Create_Contacts_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Create_Form_Builder_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  on_success?: InputMaybe<Scalars['String']['input']>;
  redirect_url?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Array<InputMaybe<Create_Form_Builder_Schema_Input>>>;
  status?: InputMaybe<Scalars['String']['input']>;
  success_message?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Form_Builder_Schema_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  form_builder_id?: InputMaybe<Create_Form_Builder_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Form_Builder_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_id?: InputMaybe<Create_Languages_Input>;
};

export type Create_Form_Configs_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  friendly_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Form_Entry_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form?: InputMaybe<Create_Form_Builder_Input>;
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_ip?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Create_Languages_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Form_Field_Settings_Input = {
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** This validation should follow the AJV format guidelines */
  generic_validation?: InputMaybe<Scalars['String']['input']>;
  halfwidth?: InputMaybe<Scalars['Boolean']['input']>;
  hasPattern?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
  pattern_error_message?: InputMaybe<Scalars['String']['input']>;
  readonly?: InputMaybe<Scalars['Boolean']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  required_error_message?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Form_Field_Text_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form_field_settings?: InputMaybe<Create_Form_Field_Settings_Input>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  text_settings?: InputMaybe<Create_Form_Field_Text_Settings_Input>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Form_Field_Text_Settings_Input = {
  default_value?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Forms_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  on_success?: InputMaybe<Scalars['String']['input']>;
  redirect_url?: InputMaybe<Scalars['String']['input']>;
  /** The fields for the form. */
  schema?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  /** The text for the submit button label. */
  submit_label?: InputMaybe<Scalars['String']['input']>;
  success_message?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Help_Articles_Files_Input = {
  directus_files_id?: InputMaybe<Create_Directus_Files_Input>;
  help_articles_id?: InputMaybe<Create_Help_Articles_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Create_Help_Articles_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  files?: InputMaybe<Array<InputMaybe<Create_Help_Articles_Files_Input>>>;
  help_collection?: InputMaybe<Create_Help_Collections_Input>;
  help_messages?: InputMaybe<Array<InputMaybe<Create_Help_Articles_Messages_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  owner?: InputMaybe<Create_Directus_Users_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Help_Articles_Messages_Input = {
  help_articles_id?: InputMaybe<Create_Help_Articles_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messages_id?: InputMaybe<Create_Messages_Input>;
};

export type Create_Help_Collections_Input = {
  articles?: InputMaybe<Array<InputMaybe<Create_Help_Articles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Help_Feedback_Input = {
  comments?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  visitor_id?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Inbox_Input = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form?: InputMaybe<Create_Forms_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  project?: InputMaybe<Create_Os_Projects_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Create_Os_Tasks_Input>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Languages_Input = {
  code: Scalars['ID']['input'];
  direction?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Links_Input = {
  anchor?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Create_Page_Settings_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  external_link?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Array<InputMaybe<Create_Search_Params_Input>>>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Messages_Input = {
  contact_id?: InputMaybe<Scalars['String']['input']>;
  conversation?: InputMaybe<Create_Conversations_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  visitor_id?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Navigation_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  items?: InputMaybe<Array<InputMaybe<Create_Navigation_Items_Input>>>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Navigation_Items_Input = {
  children?: InputMaybe<Array<InputMaybe<Create_Navigation_Items_Input>>>;
  has_children?: InputMaybe<Scalars['Boolean']['input']>;
  /** Icon that displays in dropdown menus on website. */
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Label to help users. Displays below the link in dropdown nav menus. */
  label?: InputMaybe<Scalars['String']['input']>;
  navigation?: InputMaybe<Create_Navigation_Input>;
  open_in_new_tab?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Create_Pages_Input>;
  parent?: InputMaybe<Create_Navigation_Items_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Organization_Addresses_Input = {
  address_country?: InputMaybe<Scalars['String']['input']>;
  /** City */
  address_locality?: InputMaybe<Scalars['String']['input']>;
  /** State (or region if outside US) */
  address_region?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Is this the primary billing address? */
  is_primary_billing?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Create_Organizations_Input>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  street_address?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Organizations_Contacts_Input = {
  contacts_id?: InputMaybe<Create_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  organizations_id?: InputMaybe<Create_Organizations_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Organizations_Input = {
  addresses?: InputMaybe<Array<InputMaybe<Create_Organization_Addresses_Input>>>;
  brand_color?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<Array<InputMaybe<Create_Organizations_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  /** Company billing email address */
  email?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<Create_Directus_Files_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_notes?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Create_Directus_Users_Input>;
  payment_terms?: InputMaybe<Create_Os_Payment_Terms_Input>;
  /** Company billing phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Os_Activities_Input = {
  activity_notes?: InputMaybe<Scalars['String']['input']>;
  activity_type?: InputMaybe<Scalars['String']['input']>;
  assigned_to?: InputMaybe<Create_Directus_Users_Input>;
  contacts?: InputMaybe<Array<InputMaybe<Create_Os_Activity_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  deal?: InputMaybe<Create_Os_Deals_Input>;
  /** When does this activity need to be completed? */
  due_date?: InputMaybe<Scalars['Date']['input']>;
  /** Meeting end time */
  end_time?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Create_Organizations_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  /** Meeting start time */
  start_time?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Activity_Contacts_Input = {
  contacts_id?: InputMaybe<Create_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_activities_id?: InputMaybe<Create_Os_Activities_Input>;
};

export type Create_Os_Deal_Contacts_Input = {
  contacts_id?: InputMaybe<Create_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_deals_id?: InputMaybe<Create_Os_Deals_Input>;
  primary?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Os_Deal_Stages_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Deals_Input = {
  activities?: InputMaybe<Array<InputMaybe<Create_Os_Activities_Input>>>;
  close_date?: InputMaybe<Scalars['Date']['input']>;
  contacts?: InputMaybe<Array<InputMaybe<Create_Os_Deal_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  deal_notes?: InputMaybe<Scalars['String']['input']>;
  deal_stage?: InputMaybe<Create_Os_Deal_Stages_Input>;
  deal_value?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Name of the potential project */
  name?: InputMaybe<Scalars['String']['input']>;
  next_contact_date?: InputMaybe<Scalars['Date']['input']>;
  organization?: InputMaybe<Create_Organizations_Input>;
  owner?: InputMaybe<Create_Directus_Users_Input>;
  proposals?: InputMaybe<Array<InputMaybe<Create_Os_Proposals_Input>>>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Email_Templates_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Expenses_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoice_item?: InputMaybe<Create_Os_Invoice_Items_Input>;
  is_billable?: InputMaybe<Scalars['Boolean']['input']>;
  is_reimbursable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Create_Os_Projects_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_submitted?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Invoice_Items_Input = {
  billable_expense?: InputMaybe<Create_Os_Expenses_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoice?: InputMaybe<Create_Os_Invoices_Input>;
  item?: InputMaybe<Create_Os_Items_Input>;
  item_name?: InputMaybe<Scalars['String']['input']>;
  line_amount?: InputMaybe<Scalars['Float']['input']>;
  line_item_number?: InputMaybe<Scalars['Int']['input']>;
  override_unit_price?: InputMaybe<Scalars['Boolean']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  tax_amount?: InputMaybe<Scalars['Float']['input']>;
  tax_rate?: InputMaybe<Create_Os_Tax_Rates_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Invoices_Input = {
  amount_due?: InputMaybe<Scalars['Float']['input']>;
  amount_paid?: InputMaybe<Scalars['Float']['input']>;
  contact?: InputMaybe<Create_Contacts_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoice_number?: InputMaybe<Scalars['String']['input']>;
  issue_date?: InputMaybe<Scalars['Date']['input']>;
  line_items?: InputMaybe<Array<InputMaybe<Create_Os_Invoice_Items_Input>>>;
  organization?: InputMaybe<Create_Organizations_Input>;
  payments?: InputMaybe<Array<InputMaybe<Create_Os_Payments_Input>>>;
  project?: InputMaybe<Create_Os_Projects_Input>;
  reference?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtotal?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  total_tax?: InputMaybe<Scalars['Float']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Items_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  default_tax_rate?: InputMaybe<Create_Os_Tax_Rates_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  unit_cost?: InputMaybe<Scalars['Float']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Payment_Terms_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Payments_Input = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  contact?: InputMaybe<Create_Contacts_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoice?: InputMaybe<Create_Os_Invoices_Input>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  organization?: InputMaybe<Create_Organizations_Input>;
  payment_date?: InputMaybe<Scalars['Date']['input']>;
  payment_method_type?: InputMaybe<Scalars['String']['input']>;
  receipt_url?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stripe_payment_id?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Project_Contacts_Input = {
  contacts_id?: InputMaybe<Create_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_projects_id?: InputMaybe<Create_Os_Projects_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Os_Project_Templates_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tasks?: InputMaybe<Scalars['JSON']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Project_Updates_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Create_Os_Projects_Input>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Projects_Input = {
  contacts?: InputMaybe<Array<InputMaybe<Create_Os_Project_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  expenses?: InputMaybe<Array<InputMaybe<Create_Os_Expenses_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoices?: InputMaybe<Array<InputMaybe<Create_Os_Invoices_Input>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Create_Organizations_Input>;
  owner?: InputMaybe<Create_Directus_Users_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tasks?: InputMaybe<Array<InputMaybe<Create_Os_Tasks_Input>>>;
  updates?: InputMaybe<Array<InputMaybe<Create_Os_Project_Updates_Input>>>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Proposal_Approvals_Input = {
  contact?: InputMaybe<Create_Contacts_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  esignature_agreement?: InputMaybe<Scalars['Boolean']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  proposal?: InputMaybe<Create_Os_Proposals_Input>;
  signature_image?: InputMaybe<Create_Directus_Files_Input>;
  signature_text?: InputMaybe<Scalars['String']['input']>;
  signature_type?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Proposal_Blocks_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  os_proposals_id?: InputMaybe<Create_Os_Proposals_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Proposal_Contacts_Input = {
  contacts_id?: InputMaybe<Create_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_proposals_id?: InputMaybe<Create_Os_Proposals_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Os_Proposals_Input = {
  approvals?: InputMaybe<Array<InputMaybe<Create_Os_Proposal_Approvals_Input>>>;
  blocks?: InputMaybe<Array<InputMaybe<Create_Os_Proposal_Blocks_Input>>>;
  contacts?: InputMaybe<Array<InputMaybe<Create_Os_Proposal_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  deal?: InputMaybe<Create_Os_Deals_Input>;
  expiration_date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Title of the proposal */
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Create_Organizations_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  /** What is the current status of the proposal? */
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Task_Files_Input = {
  directus_files_id?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_tasks_id?: InputMaybe<Create_Os_Tasks_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Os_Tasks_Input = {
  assigned_to?: InputMaybe<Create_Directus_Users_Input>;
  date_completed?: InputMaybe<Scalars['Date']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  embed_url?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<InputMaybe<Create_Os_Task_Files_Input>>>;
  form?: InputMaybe<Create_Forms_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_visible_to_client: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Create_Os_Projects_Input>;
  responsibility?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Os_Tax_Rates_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Page_Blocks_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  /** Hide this block on the frontend without having to remove it from your page. */
  hide_block?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  pages_id?: InputMaybe<Create_Pages_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Page_Editor_Nodes_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  pages_id?: InputMaybe<Create_Pages_Input>;
  pages_translations_id?: InputMaybe<Create_Pages_Translations_Input>;
};

export type Create_Page_Settings_Input = {
  belongs_to_collection?: InputMaybe<Scalars['String']['input']>;
  belongs_to_key?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  route?: InputMaybe<Create_Routes_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Page_Settings_Translations_Input>>>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Page_Settings_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
  page_settings_id?: InputMaybe<Create_Page_Settings_Input>;
  path?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Pages_Input = {
  blocks?: InputMaybe<Array<InputMaybe<Create_Page_Blocks_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  page_settings?: InputMaybe<Create_Page_Settings_Input>;
  /** Start with a slash (/page) and do NOT add a trailing slash (/page/) */
  permalink?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<Create_Seo_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Pages_Translations_Input>>>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Pages_Translations_Input = {
  block_editor?: InputMaybe<Scalars['JSON']['input']>;
  editor_nodes?: InputMaybe<Array<InputMaybe<Create_Page_Editor_Nodes_Input>>>;
  flexible_editor?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  pages_id?: InputMaybe<Create_Pages_Input>;
};

export type Create_Post_Gallery_Items_Input = {
  directus_files_id?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  posts_id?: InputMaybe<Create_Posts_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Posts_Input = {
  author?: InputMaybe<Create_Team_Input>;
  built_with?: InputMaybe<Scalars['JSON']['input']>;
  category?: InputMaybe<Create_Categories_Input>;
  client?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  /** Use a range */
  cost?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_published?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Create_Post_Gallery_Items_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  seo?: InputMaybe<Create_Seo_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** What type of post is this? Determines the template used to display the post on the frontend. */
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Redirects_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  destination?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isrewrite?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['Boolean']['input']>;
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Related_Block_Faqs_Block_Faqs_Input = {
  block_faqs_id?: InputMaybe<Create_Block_Faqs_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  related_block_faqs_id?: InputMaybe<Create_Related_Block_Faqs_Input>;
};

export type Create_Related_Block_Faqs_Input = {
  blocks?: InputMaybe<Array<InputMaybe<Create_Related_Block_Faqs_Block_Faqs_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Create_Repeater_Example_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Routes_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Routes_Translations_Input>>>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Routes_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
  route?: InputMaybe<Scalars['String']['input']>;
  routes_id?: InputMaybe<Create_Routes_Input>;
};

export type Create_Search_Params_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Create_Links_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Seo_Input = {
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** This entries meta description. Max 160 characters. */
  meta_description?: InputMaybe<Scalars['String']['input']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: InputMaybe<Scalars['String']['input']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: InputMaybe<Scalars['Float']['input']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Team_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Create_Posts_Input>>>;
  social_media?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Testimonials_Input = {
  company?: InputMaybe<Scalars['String']['input']>;
  company_logo?: InputMaybe<Create_Directus_Files_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  link?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Versioning_Example_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
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

export type Date_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
  __typename?: 'date_functions';
  day?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
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

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID']['output'];
};

export type Directus_Activity = {
  __typename?: 'directus_activity';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  item: Scalars['String']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  revisions?: Maybe<Array<Maybe<Directus_Revisions>>>;
  revisions_func?: Maybe<Count_Functions>;
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<Datetime_Functions>;
  user?: Maybe<Directus_Users>;
  user_agent?: Maybe<Scalars['String']['output']>;
};


export type Directus_ActivityRevisionsArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_ActivityUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Activity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  comment?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  ip?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  origin?: InputMaybe<String_Filter_Operators>;
  revisions?: InputMaybe<Directus_Revisions_Filter>;
  revisions_func?: InputMaybe<Count_Function_Filter_Operators>;
  timestamp?: InputMaybe<Date_Filter_Operators>;
  timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
  user_agent?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Activity_Mutated = {
  __typename?: 'directus_activity_mutated';
  data?: Maybe<Directus_Activity>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Dashboards = {
  __typename?: 'directus_dashboards';
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  panels?: Maybe<Array<Maybe<Directus_Panels>>>;
  panels_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_DashboardsPanelsArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_DashboardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Dashboards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  panels?: InputMaybe<Directus_Panels_Filter>;
  panels_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Dashboards_Mutated = {
  __typename?: 'directus_dashboards_mutated';
  data?: Maybe<Directus_Dashboards>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
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
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
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
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
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

export type Directus_Flows = {
  __typename?: 'directus_flows';
  accountability?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operation?: Maybe<Directus_Operations>;
  operations?: Maybe<Array<Maybe<Directus_Operations>>>;
  operations_func?: Maybe<Count_Functions>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_FlowsOperationArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsOperationsArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Flows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  accountability?: InputMaybe<String_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  operation?: InputMaybe<Directus_Operations_Filter>;
  operations?: InputMaybe<Directus_Operations_Filter>;
  operations_func?: InputMaybe<Count_Function_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  trigger?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Flows_Mutated = {
  __typename?: 'directus_flows_mutated';
  data?: Maybe<Directus_Flows>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizations?: Maybe<Array<Maybe<Organizations>>>;
  organizations_func?: Maybe<Count_Functions>;
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersOrganizationsArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  organizations?: InputMaybe<Organizations_Filter>;
  organizations_func?: InputMaybe<Count_Function_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Folders_Mutated = {
  __typename?: 'directus_folders_mutated';
  data?: Maybe<Directus_Folders>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Notifications = {
  __typename?: 'directus_notifications';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<Directus_Users>;
  sender?: Maybe<Directus_Users>;
  status?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<Datetime_Functions>;
};


export type Directus_NotificationsRecipientArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_NotificationsSenderArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Notifications_Mutated = {
  __typename?: 'directus_notifications_mutated';
  data?: Maybe<Directus_Notifications>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Operations = {
  __typename?: 'directus_operations';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  flow?: Maybe<Directus_Flows>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  reject?: Maybe<Directus_Operations>;
  resolve?: Maybe<Directus_Operations>;
  type: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
};


export type Directus_OperationsFlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsRejectArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsResolveArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Operations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flow?: InputMaybe<Directus_Flows_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  reject?: InputMaybe<Directus_Operations_Filter>;
  resolve?: InputMaybe<Directus_Operations_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Operations_Mutated = {
  __typename?: 'directus_operations_mutated';
  data?: Maybe<Directus_Operations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Panels = {
  __typename?: 'directus_panels';
  color?: Maybe<Scalars['String']['output']>;
  dashboard?: Maybe<Directus_Dashboards>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  height: Scalars['Int']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  show_header: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
  width: Scalars['Int']['output'];
};


export type Directus_PanelsDashboardArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PanelsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Panels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  show_header?: InputMaybe<Boolean_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Panels_Mutated = {
  __typename?: 'directus_panels_mutated';
  data?: Maybe<Directus_Panels>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Permissions = {
  __typename?: 'directus_permissions';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  permissions?: Maybe<Scalars['JSON']['output']>;
  permissions_func?: Maybe<Count_Functions>;
  presets?: Maybe<Scalars['JSON']['output']>;
  presets_func?: Maybe<Count_Functions>;
  role?: Maybe<Directus_Roles>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_func?: Maybe<Count_Functions>;
};


export type Directus_PermissionsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Permissions_Mutated = {
  __typename?: 'directus_permissions_mutated';
  data?: Maybe<Directus_Permissions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Presets = {
  __typename?: 'directus_presets';
  bookmark?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
  filter_func?: Maybe<Count_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  layout?: Maybe<Scalars['String']['output']>;
  layout_options?: Maybe<Scalars['JSON']['output']>;
  layout_options_func?: Maybe<Count_Functions>;
  layout_query?: Maybe<Scalars['JSON']['output']>;
  layout_query_func?: Maybe<Count_Functions>;
  refresh_interval?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Directus_Roles>;
  search?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Directus_Users>;
};


export type Directus_PresetsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PresetsUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Presets_Mutated = {
  __typename?: 'directus_presets_mutated';
  data?: Maybe<Directus_Presets>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Revisions = {
  __typename?: 'directus_revisions';
  activity?: Maybe<Directus_Activity>;
  collection: Scalars['String']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  data_func?: Maybe<Count_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  parent?: Maybe<Directus_Revisions>;
  version?: Maybe<Directus_Versions>;
};


export type Directus_RevisionsActivityArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsParentArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsVersionArgs = {
  filter?: InputMaybe<Directus_Versions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Revisions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  activity?: InputMaybe<Directus_Activity_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Revisions_Filter>;
  version?: InputMaybe<Directus_Versions_Filter>;
};

export type Directus_Revisions_Mutated = {
  __typename?: 'directus_revisions_mutated';
  data?: Maybe<Directus_Revisions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean']['output'];
  app_access?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enforce_tfa: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Roles_Mutated = {
  __typename?: 'directus_roles_mutated';
  data?: Maybe<Directus_Roles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Settings = {
  __typename?: 'directus_settings';
  auth_login_attempts?: Maybe<Scalars['Int']['output']>;
  auth_password_policy?: Maybe<Scalars['String']['output']>;
  basemaps?: Maybe<Scalars['JSON']['output']>;
  basemaps_func?: Maybe<Count_Functions>;
  custom_aspect_ratios?: Maybe<Scalars['JSON']['output']>;
  custom_aspect_ratios_func?: Maybe<Count_Functions>;
  custom_css?: Maybe<Scalars['String']['output']>;
  default_appearance?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  default_theme_dark?: Maybe<Scalars['String']['output']>;
  default_theme_light?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mapbox_key?: Maybe<Scalars['String']['output']>;
  module_bar?: Maybe<Scalars['JSON']['output']>;
  module_bar_func?: Maybe<Count_Functions>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_logo?: Maybe<Directus_Files>;
  project_name?: Maybe<Scalars['String']['output']>;
  project_url?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<Directus_Files>;
  public_favicon?: Maybe<Directus_Files>;
  public_foreground?: Maybe<Directus_Files>;
  public_note?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.public_registration_note */
  public_registration: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.public_registration_email_filter_note */
  public_registration_email_filter?: Maybe<Scalars['JSON']['output']>;
  public_registration_email_filter_func?: Maybe<Count_Functions>;
  public_registration_role?: Maybe<Directus_Roles>;
  /** $t:fields.directus_settings.public_registration_verify_email_note */
  public_registration_verify_email?: Maybe<Scalars['Boolean']['output']>;
  report_bug_url?: Maybe<Scalars['String']['output']>;
  report_error_url?: Maybe<Scalars['String']['output']>;
  report_feature_url?: Maybe<Scalars['String']['output']>;
  storage_asset_presets?: Maybe<Scalars['JSON']['output']>;
  storage_asset_presets_func?: Maybe<Count_Functions>;
  storage_asset_transform?: Maybe<Scalars['String']['output']>;
  storage_default_folder?: Maybe<Directus_Folders>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<Count_Functions>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<Count_Functions>;
};


export type Directus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_FaviconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_Registration_RoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsStorage_Default_FolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Settings_Mutated = {
  __typename?: 'directus_settings_mutated';
  data?: Maybe<Directus_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Shares = {
  __typename?: 'directus_shares';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']['output']>;
  date_end_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']['output']>;
  date_start_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: Maybe<Scalars['Hash']['output']>;
  role?: Maybe<Directus_Roles>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Shares_Mutated = {
  __typename?: 'directus_shares_mutated';
  data?: Maybe<Directus_Shares>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Sync_Id_Map = {
  __typename?: 'directus_sync_id_map';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  local_id: Scalars['String']['output'];
  sync_id: Scalars['String']['output'];
  table: Scalars['String']['output'];
};

export type Directus_Sync_Id_Map_Aggregated = {
  __typename?: 'directus_sync_id_map_aggregated';
  avg?: Maybe<Directus_Sync_Id_Map_Aggregated_Fields>;
  avgDistinct?: Maybe<Directus_Sync_Id_Map_Aggregated_Fields>;
  count?: Maybe<Directus_Sync_Id_Map_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Sync_Id_Map_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Directus_Sync_Id_Map_Aggregated_Fields>;
  min?: Maybe<Directus_Sync_Id_Map_Aggregated_Fields>;
  sum?: Maybe<Directus_Sync_Id_Map_Aggregated_Fields>;
  sumDistinct?: Maybe<Directus_Sync_Id_Map_Aggregated_Fields>;
};

export type Directus_Sync_Id_Map_Aggregated_Count = {
  __typename?: 'directus_sync_id_map_aggregated_count';
  created_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  local_id?: Maybe<Scalars['Int']['output']>;
  sync_id?: Maybe<Scalars['Int']['output']>;
  table?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Sync_Id_Map_Aggregated_Fields = {
  __typename?: 'directus_sync_id_map_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Directus_Sync_Id_Map_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Sync_Id_Map_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Sync_Id_Map_Filter>>>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  local_id?: InputMaybe<String_Filter_Operators>;
  sync_id?: InputMaybe<String_Filter_Operators>;
  table?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Sync_Id_Map_Mutated = {
  __typename?: 'directus_sync_id_map_mutated';
  data?: Maybe<Directus_Sync_Id_Map>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Translations = {
  __typename?: 'directus_translations';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  language: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Directus_Translations_Mutated = {
  __typename?: 'directus_translations_mutated';
  data?: Maybe<Directus_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users = {
  __typename?: 'directus_users';
  appearance?: Maybe<Scalars['String']['output']>;
  auth_data?: Maybe<Scalars['JSON']['output']>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  contacts?: Maybe<Array<Maybe<Contacts>>>;
  contacts_func?: Maybe<Count_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['Date']['output']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['Hash']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Directus_Roles>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars['Hash']['output']>;
  theme_dark?: Maybe<Scalars['String']['output']>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<Count_Functions>;
  theme_light?: Maybe<Scalars['String']['output']>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersContactsArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  contacts?: InputMaybe<Contacts_Filter>;
  contacts_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  __typename?: 'directus_users_mutated';
  data?: Maybe<Directus_Users>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Versions = {
  __typename?: 'directus_versions';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Directus_VersionsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_VersionsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Versions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  hash?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Versions_Mutated = {
  __typename?: 'directus_versions_mutated';
  data?: Maybe<Directus_Versions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Webhooks = {
  __typename?: 'directus_webhooks';
  actions: Array<Maybe<Scalars['String']['output']>>;
  collections: Array<Maybe<Scalars['String']['output']>>;
  data?: Maybe<Scalars['Boolean']['output']>;
  headers?: Maybe<Scalars['JSON']['output']>;
  headers_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  migrated_flow?: Maybe<Directus_Flows>;
  name: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  was_active_before_deprecation: Scalars['Boolean']['output'];
};


export type Directus_WebhooksMigrated_FlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Webhooks_Mutated = {
  __typename?: 'directus_webhooks_mutated';
  data?: Maybe<Directus_Webhooks>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Form_BuilderSchemaArgs = {
  filter?: InputMaybe<Form_Builder_Schema_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Form_BuilderUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Form_BuilderUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Form_ConfigsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Form_ConfigsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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


export type Form_EntryUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Form_EntryUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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


export type Form_Field_TextUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Form_Field_TextUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type FormsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FormsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Forms_Mutated = {
  __typename?: 'forms_mutated';
  data?: Maybe<Forms>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Globals = {
  __typename?: 'globals';
  address_country?: Maybe<Scalars['String']['output']>;
  address_locality?: Maybe<Scalars['String']['output']>;
  address_region?: Maybe<Scalars['String']['output']>;
  /** URL for the build / deploy hook that starts a new build */
  build_hook_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo_on_dark_bg?: Maybe<Directus_Files>;
  logo_on_light_bg?: Maybe<Directus_Files>;
  og_image?: Maybe<Directus_Files>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  social_links?: Maybe<Scalars['JSON']['output']>;
  social_links_func?: Maybe<Count_Functions>;
  street_address?: Maybe<Scalars['String']['output']>;
  /** What's the website title? */
  tagline?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['JSON']['output']>;
  theme_func?: Maybe<Count_Functions>;
  /** What's the website title? */
  title?: Maybe<Scalars['String']['output']>;
  /** What's is the base url for the site? */
  url?: Maybe<Scalars['String']['output']>;
};


export type GlobalsLogo_On_Dark_BgArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlobalsLogo_On_Light_BgArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlobalsOg_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Globals_Mutated = {
  __typename?: 'globals_mutated';
  data?: Maybe<Globals>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Help_Articles = {
  __typename?: 'help_articles';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  files?: Maybe<Array<Maybe<Help_Articles_Files>>>;
  files_func?: Maybe<Count_Functions>;
  help_collection?: Maybe<Help_Collections>;
  help_messages?: Maybe<Array<Maybe<Help_Articles_Messages>>>;
  help_messages_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  owner?: Maybe<Directus_Users>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Help_ArticlesFilesArgs = {
  filter?: InputMaybe<Help_Articles_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Help_ArticlesHelp_CollectionArgs = {
  filter?: InputMaybe<Help_Collections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Help_ArticlesHelp_MessagesArgs = {
  filter?: InputMaybe<Help_Articles_Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Help_ArticlesOwnerArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Help_ArticlesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Help_ArticlesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  files?: Maybe<Scalars['Int']['output']>;
  help_collection?: Maybe<Scalars['Int']['output']>;
  help_messages?: Maybe<Scalars['Int']['output']>;
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

export type Help_Articles_Files = {
  __typename?: 'help_articles_files';
  directus_files_id?: Maybe<Directus_Files>;
  help_articles_id?: Maybe<Help_Articles>;
  id: Scalars['ID']['output'];
};


export type Help_Articles_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Help_Articles_FilesHelp_Articles_IdArgs = {
  filter?: InputMaybe<Help_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Help_Articles_Files_Aggregated = {
  __typename?: 'help_articles_files_aggregated';
  avg?: Maybe<Help_Articles_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Help_Articles_Files_Aggregated_Fields>;
  count?: Maybe<Help_Articles_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Help_Articles_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Help_Articles_Files_Aggregated_Fields>;
  min?: Maybe<Help_Articles_Files_Aggregated_Fields>;
  sum?: Maybe<Help_Articles_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Help_Articles_Files_Aggregated_Fields>;
};

export type Help_Articles_Files_Aggregated_Count = {
  __typename?: 'help_articles_files_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  help_articles_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Help_Articles_Files_Aggregated_Fields = {
  __typename?: 'help_articles_files_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Help_Articles_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Help_Articles_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Help_Articles_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  help_articles_id?: InputMaybe<Help_Articles_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Help_Articles_Files_Mutated = {
  __typename?: 'help_articles_files_mutated';
  data?: Maybe<Help_Articles_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Help_Articles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Help_Articles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Help_Articles_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  files?: InputMaybe<Help_Articles_Files_Filter>;
  files_func?: InputMaybe<Count_Function_Filter_Operators>;
  help_collection?: InputMaybe<Help_Collections_Filter>;
  help_messages?: InputMaybe<Help_Articles_Messages_Filter>;
  help_messages_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  owner?: InputMaybe<Directus_Users_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  summary?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Help_Articles_Messages = {
  __typename?: 'help_articles_messages';
  help_articles_id?: Maybe<Help_Articles>;
  id: Scalars['ID']['output'];
  messages_id?: Maybe<Messages>;
};


export type Help_Articles_MessagesHelp_Articles_IdArgs = {
  filter?: InputMaybe<Help_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Help_Articles_MessagesMessages_IdArgs = {
  filter?: InputMaybe<Messages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Help_Articles_Messages_Aggregated = {
  __typename?: 'help_articles_messages_aggregated';
  avg?: Maybe<Help_Articles_Messages_Aggregated_Fields>;
  avgDistinct?: Maybe<Help_Articles_Messages_Aggregated_Fields>;
  count?: Maybe<Help_Articles_Messages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Help_Articles_Messages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Help_Articles_Messages_Aggregated_Fields>;
  min?: Maybe<Help_Articles_Messages_Aggregated_Fields>;
  sum?: Maybe<Help_Articles_Messages_Aggregated_Fields>;
  sumDistinct?: Maybe<Help_Articles_Messages_Aggregated_Fields>;
};

export type Help_Articles_Messages_Aggregated_Count = {
  __typename?: 'help_articles_messages_aggregated_count';
  help_articles_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  messages_id?: Maybe<Scalars['Int']['output']>;
};

export type Help_Articles_Messages_Aggregated_Fields = {
  __typename?: 'help_articles_messages_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Help_Articles_Messages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Help_Articles_Messages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Help_Articles_Messages_Filter>>>;
  help_articles_id?: InputMaybe<Help_Articles_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  messages_id?: InputMaybe<Messages_Filter>;
};

export type Help_Articles_Messages_Mutated = {
  __typename?: 'help_articles_messages_mutated';
  data?: Maybe<Help_Articles_Messages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Help_Articles_Mutated = {
  __typename?: 'help_articles_mutated';
  data?: Maybe<Help_Articles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Help_Collections = {
  __typename?: 'help_collections';
  articles?: Maybe<Array<Maybe<Help_Articles>>>;
  articles_func?: Maybe<Count_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Help_CollectionsArticlesArgs = {
  filter?: InputMaybe<Help_Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Help_Collections_Aggregated = {
  __typename?: 'help_collections_aggregated';
  avg?: Maybe<Help_Collections_Aggregated_Fields>;
  avgDistinct?: Maybe<Help_Collections_Aggregated_Fields>;
  count?: Maybe<Help_Collections_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Help_Collections_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Help_Collections_Aggregated_Fields>;
  min?: Maybe<Help_Collections_Aggregated_Fields>;
  sum?: Maybe<Help_Collections_Aggregated_Fields>;
  sumDistinct?: Maybe<Help_Collections_Aggregated_Fields>;
};

export type Help_Collections_Aggregated_Count = {
  __typename?: 'help_collections_aggregated_count';
  articles?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Help_Collections_Aggregated_Fields = {
  __typename?: 'help_collections_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Help_Collections_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Help_Collections_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Help_Collections_Filter>>>;
  articles?: InputMaybe<Help_Articles_Filter>;
  articles_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Help_Collections_Mutated = {
  __typename?: 'help_collections_mutated';
  data?: Maybe<Help_Collections>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Help_Feedback = {
  __typename?: 'help_feedback';
  comments?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  visitor_id?: Maybe<Scalars['String']['output']>;
};


export type Help_FeedbackUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Help_FeedbackUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Help_Feedback_Aggregated = {
  __typename?: 'help_feedback_aggregated';
  avg?: Maybe<Help_Feedback_Aggregated_Fields>;
  avgDistinct?: Maybe<Help_Feedback_Aggregated_Fields>;
  count?: Maybe<Help_Feedback_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Help_Feedback_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Help_Feedback_Aggregated_Fields>;
  min?: Maybe<Help_Feedback_Aggregated_Fields>;
  sum?: Maybe<Help_Feedback_Aggregated_Fields>;
  sumDistinct?: Maybe<Help_Feedback_Aggregated_Fields>;
};

export type Help_Feedback_Aggregated_Count = {
  __typename?: 'help_feedback_aggregated_count';
  comments?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  visitor_id?: Maybe<Scalars['Int']['output']>;
};

export type Help_Feedback_Aggregated_Fields = {
  __typename?: 'help_feedback_aggregated_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

export type Help_Feedback_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Help_Feedback_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Help_Feedback_Filter>>>;
  comments?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  rating?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  visitor_id?: InputMaybe<String_Filter_Operators>;
};

export type Help_Feedback_Mutated = {
  __typename?: 'help_feedback_mutated';
  data?: Maybe<Help_Feedback>;
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
  project?: Maybe<Os_Projects>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Os_Tasks>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type InboxFormArgs = {
  filter?: InputMaybe<Forms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type InboxProjectArgs = {
  filter?: InputMaybe<Os_Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type InboxTaskArgs = {
  filter?: InputMaybe<Os_Tasks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type InboxUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type InboxUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  project?: InputMaybe<Os_Projects_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  task?: InputMaybe<Os_Tasks_Filter>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  anchor?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Page_Settings>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  external_link?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Array<Maybe<Search_Params>>>;
  params_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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


export type LinksUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LinksUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  external_link?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
  params?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
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
  external_link?: InputMaybe<String_Filter_Operators>;
  file?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  params?: InputMaybe<Search_Params_Filter>;
  params_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  conversation?: Maybe<Conversations>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  visitor_id?: Maybe<Scalars['String']['output']>;
};


export type MessagesConversationArgs = {
  filter?: InputMaybe<Conversations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MessagesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MessagesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  conversation?: InputMaybe<Conversations_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  text?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type NavigationItemsArgs = {
  filter?: InputMaybe<Navigation_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type NavigationUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type NavigationUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  tokens?: Maybe<Scalars['JSON']['output']>;
  tokens_func?: Maybe<Count_Functions>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
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
  tokens?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
  variant?: Maybe<Scalars['Int']['output']>;
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
  tokens?: InputMaybe<String_Filter_Operators>;
  tokens_func?: InputMaybe<Count_Function_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
  variant?: InputMaybe<String_Filter_Operators>;
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

export type Organization_Addresses = {
  __typename?: 'organization_addresses';
  address_country?: Maybe<Scalars['String']['output']>;
  /** City */
  address_locality?: Maybe<Scalars['String']['output']>;
  /** State (or region if outside US) */
  address_region?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  /** Is this the primary billing address? */
  is_primary_billing?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organizations>;
  postal_code?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  street_address?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Organization_AddressesOrganizationArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Organization_AddressesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Organization_AddressesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_Addresses_Aggregated = {
  __typename?: 'organization_addresses_aggregated';
  avg?: Maybe<Organization_Addresses_Aggregated_Fields>;
  avgDistinct?: Maybe<Organization_Addresses_Aggregated_Fields>;
  count?: Maybe<Organization_Addresses_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Organization_Addresses_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Organization_Addresses_Aggregated_Fields>;
  min?: Maybe<Organization_Addresses_Aggregated_Fields>;
  sum?: Maybe<Organization_Addresses_Aggregated_Fields>;
  sumDistinct?: Maybe<Organization_Addresses_Aggregated_Fields>;
};

export type Organization_Addresses_Aggregated_Count = {
  __typename?: 'organization_addresses_aggregated_count';
  address_country?: Maybe<Scalars['Int']['output']>;
  /** City */
  address_locality?: Maybe<Scalars['Int']['output']>;
  /** State (or region if outside US) */
  address_region?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Is this the primary billing address? */
  is_primary_billing?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Scalars['Int']['output']>;
  postal_code?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  street_address?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Organization_Addresses_Aggregated_Fields = {
  __typename?: 'organization_addresses_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Organization_Addresses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Organization_Addresses_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Organization_Addresses_Filter>>>;
  address_country?: InputMaybe<String_Filter_Operators>;
  address_locality?: InputMaybe<String_Filter_Operators>;
  address_region?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  is_primary_billing?: InputMaybe<Boolean_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  organization?: InputMaybe<Organizations_Filter>;
  postal_code?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  street_address?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Organization_Addresses_Mutated = {
  __typename?: 'organization_addresses_mutated';
  data?: Maybe<Organization_Addresses>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Organizations = {
  __typename?: 'organizations';
  addresses?: Maybe<Array<Maybe<Organization_Addresses>>>;
  addresses_func?: Maybe<Count_Functions>;
  brand_color?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Maybe<Organizations_Contacts>>>;
  contacts_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  /** Company billing email address */
  email?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Directus_Folders>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Directus_Files>;
  name?: Maybe<Scalars['String']['output']>;
  organization_notes?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Directus_Users>;
  payment_terms?: Maybe<Os_Payment_Terms>;
  /** Company billing phone number */
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  website?: Maybe<Scalars['String']['output']>;
};


export type OrganizationsAddressesArgs = {
  filter?: InputMaybe<Organization_Addresses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationsContactsArgs = {
  filter?: InputMaybe<Organizations_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationsFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationsLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationsOwnerArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationsPayment_TermsArgs = {
  filter?: InputMaybe<Os_Payment_Terms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organizations_Aggregated = {
  __typename?: 'organizations_aggregated';
  count?: Maybe<Organizations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Organizations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Organizations_Aggregated_Count = {
  __typename?: 'organizations_aggregated_count';
  addresses?: Maybe<Scalars['Int']['output']>;
  brand_color?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  /** Company billing email address */
  email?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logo?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  organization_notes?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<Scalars['Int']['output']>;
  payment_terms?: Maybe<Scalars['Int']['output']>;
  /** Company billing phone number */
  phone?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  stripe_customer_id?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  website?: Maybe<Scalars['Int']['output']>;
};

export type Organizations_Contacts = {
  __typename?: 'organizations_contacts';
  contacts_id?: Maybe<Contacts>;
  id: Scalars['ID']['output'];
  organizations_id?: Maybe<Organizations>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Organizations_ContactsContacts_IdArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Organizations_ContactsOrganizations_IdArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organizations_Contacts_Aggregated = {
  __typename?: 'organizations_contacts_aggregated';
  avg?: Maybe<Organizations_Contacts_Aggregated_Fields>;
  avgDistinct?: Maybe<Organizations_Contacts_Aggregated_Fields>;
  count?: Maybe<Organizations_Contacts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Organizations_Contacts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Organizations_Contacts_Aggregated_Fields>;
  min?: Maybe<Organizations_Contacts_Aggregated_Fields>;
  sum?: Maybe<Organizations_Contacts_Aggregated_Fields>;
  sumDistinct?: Maybe<Organizations_Contacts_Aggregated_Fields>;
};

export type Organizations_Contacts_Aggregated_Count = {
  __typename?: 'organizations_contacts_aggregated_count';
  contacts_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  organizations_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Organizations_Contacts_Aggregated_Fields = {
  __typename?: 'organizations_contacts_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Organizations_Contacts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Organizations_Contacts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Organizations_Contacts_Filter>>>;
  contacts_id?: InputMaybe<Contacts_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  organizations_id?: InputMaybe<Organizations_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Organizations_Contacts_Mutated = {
  __typename?: 'organizations_contacts_mutated';
  data?: Maybe<Organizations_Contacts>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Organizations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Organizations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Organizations_Filter>>>;
  addresses?: InputMaybe<Organization_Addresses_Filter>;
  addresses_func?: InputMaybe<Count_Function_Filter_Operators>;
  brand_color?: InputMaybe<String_Filter_Operators>;
  contacts?: InputMaybe<Organizations_Contacts_Filter>;
  contacts_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  logo?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  organization_notes?: InputMaybe<String_Filter_Operators>;
  owner?: InputMaybe<Directus_Users_Filter>;
  payment_terms?: InputMaybe<Os_Payment_Terms_Filter>;
  phone?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  stripe_customer_id?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  website?: InputMaybe<String_Filter_Operators>;
};

export type Organizations_Mutated = {
  __typename?: 'organizations_mutated';
  data?: Maybe<Organizations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Activities = {
  __typename?: 'os_activities';
  activity_notes?: Maybe<Scalars['String']['output']>;
  activity_type?: Maybe<Scalars['String']['output']>;
  assigned_to?: Maybe<Directus_Users>;
  contacts?: Maybe<Array<Maybe<Os_Activity_Contacts>>>;
  contacts_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  deal?: Maybe<Os_Deals>;
  /** When does this activity need to be completed? */
  due_date?: Maybe<Scalars['Date']['output']>;
  due_date_func?: Maybe<Datetime_Functions>;
  /** Meeting end time */
  end_time?: Maybe<Scalars['Date']['output']>;
  end_time_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organizations>;
  sort?: Maybe<Scalars['Int']['output']>;
  /** Meeting start time */
  start_time?: Maybe<Scalars['Date']['output']>;
  start_time_func?: Maybe<Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_ActivitiesAssigned_ToArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ActivitiesContactsArgs = {
  filter?: InputMaybe<Os_Activity_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ActivitiesDealArgs = {
  filter?: InputMaybe<Os_Deals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ActivitiesOrganizationArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ActivitiesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ActivitiesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Activities_Aggregated = {
  __typename?: 'os_activities_aggregated';
  avg?: Maybe<Os_Activities_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Activities_Aggregated_Fields>;
  count?: Maybe<Os_Activities_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Activities_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Activities_Aggregated_Fields>;
  min?: Maybe<Os_Activities_Aggregated_Fields>;
  sum?: Maybe<Os_Activities_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Activities_Aggregated_Fields>;
};

export type Os_Activities_Aggregated_Count = {
  __typename?: 'os_activities_aggregated_count';
  activity_notes?: Maybe<Scalars['Int']['output']>;
  activity_type?: Maybe<Scalars['Int']['output']>;
  /** Who is assigned to perform this activity? Typically the deal owner. */
  assigned_to?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  /** What deal is this activity linked to? */
  deal?: Maybe<Scalars['Int']['output']>;
  /** When does this activity need to be completed? */
  due_date?: Maybe<Scalars['Int']['output']>;
  /** Meeting end time */
  end_time?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  /** Meeting start time */
  start_time?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Activities_Aggregated_Fields = {
  __typename?: 'os_activities_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Activities_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Activities_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Activities_Filter>>>;
  activity_notes?: InputMaybe<String_Filter_Operators>;
  activity_type?: InputMaybe<String_Filter_Operators>;
  assigned_to?: InputMaybe<Directus_Users_Filter>;
  contacts?: InputMaybe<Os_Activity_Contacts_Filter>;
  contacts_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  deal?: InputMaybe<Os_Deals_Filter>;
  due_date?: InputMaybe<Date_Filter_Operators>;
  due_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  end_time?: InputMaybe<Date_Filter_Operators>;
  end_time_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  organization?: InputMaybe<Organizations_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  start_time?: InputMaybe<Date_Filter_Operators>;
  start_time_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Activities_Mutated = {
  __typename?: 'os_activities_mutated';
  data?: Maybe<Os_Activities>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Activity_Contacts = {
  __typename?: 'os_activity_contacts';
  contacts_id?: Maybe<Contacts>;
  id: Scalars['ID']['output'];
  os_activities_id?: Maybe<Os_Activities>;
};


export type Os_Activity_ContactsContacts_IdArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Activity_ContactsOs_Activities_IdArgs = {
  filter?: InputMaybe<Os_Activities_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Activity_Contacts_Aggregated = {
  __typename?: 'os_activity_contacts_aggregated';
  count?: Maybe<Os_Activity_Contacts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Activity_Contacts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Os_Activity_Contacts_Aggregated_Count = {
  __typename?: 'os_activity_contacts_aggregated_count';
  contacts_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  os_activities_id?: Maybe<Scalars['Int']['output']>;
};

export type Os_Activity_Contacts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Activity_Contacts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Activity_Contacts_Filter>>>;
  contacts_id?: InputMaybe<Contacts_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  os_activities_id?: InputMaybe<Os_Activities_Filter>;
};

export type Os_Activity_Contacts_Mutated = {
  __typename?: 'os_activity_contacts_mutated';
  data?: Maybe<Os_Activity_Contacts>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Deal_Contacts = {
  __typename?: 'os_deal_contacts';
  contacts_id?: Maybe<Contacts>;
  id: Scalars['ID']['output'];
  os_deals_id?: Maybe<Os_Deals>;
  primary?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Os_Deal_ContactsContacts_IdArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Deal_ContactsOs_Deals_IdArgs = {
  filter?: InputMaybe<Os_Deals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Deal_Contacts_Aggregated = {
  __typename?: 'os_deal_contacts_aggregated';
  avg?: Maybe<Os_Deal_Contacts_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Deal_Contacts_Aggregated_Fields>;
  count?: Maybe<Os_Deal_Contacts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Deal_Contacts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Deal_Contacts_Aggregated_Fields>;
  min?: Maybe<Os_Deal_Contacts_Aggregated_Fields>;
  sum?: Maybe<Os_Deal_Contacts_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Deal_Contacts_Aggregated_Fields>;
};

export type Os_Deal_Contacts_Aggregated_Count = {
  __typename?: 'os_deal_contacts_aggregated_count';
  contacts_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  os_deals_id?: Maybe<Scalars['Int']['output']>;
  primary?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Os_Deal_Contacts_Aggregated_Fields = {
  __typename?: 'os_deal_contacts_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Deal_Contacts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Deal_Contacts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Deal_Contacts_Filter>>>;
  contacts_id?: InputMaybe<Contacts_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  os_deals_id?: InputMaybe<Os_Deals_Filter>;
  primary?: InputMaybe<Boolean_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Os_Deal_Contacts_Mutated = {
  __typename?: 'os_deal_contacts_mutated';
  data?: Maybe<Os_Deal_Contacts>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Deal_Stages = {
  __typename?: 'os_deal_stages';
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_Deal_StagesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Deal_StagesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Deal_Stages_Aggregated = {
  __typename?: 'os_deal_stages_aggregated';
  avg?: Maybe<Os_Deal_Stages_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Deal_Stages_Aggregated_Fields>;
  count?: Maybe<Os_Deal_Stages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Deal_Stages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Deal_Stages_Aggregated_Fields>;
  min?: Maybe<Os_Deal_Stages_Aggregated_Fields>;
  sum?: Maybe<Os_Deal_Stages_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Deal_Stages_Aggregated_Fields>;
};

export type Os_Deal_Stages_Aggregated_Count = {
  __typename?: 'os_deal_stages_aggregated_count';
  color?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Deal_Stages_Aggregated_Fields = {
  __typename?: 'os_deal_stages_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Deal_Stages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Deal_Stages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Deal_Stages_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Deal_Stages_Mutated = {
  __typename?: 'os_deal_stages_mutated';
  data?: Maybe<Os_Deal_Stages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Deals = {
  __typename?: 'os_deals';
  activities?: Maybe<Array<Maybe<Os_Activities>>>;
  activities_func?: Maybe<Count_Functions>;
  close_date?: Maybe<Scalars['Date']['output']>;
  close_date_func?: Maybe<Date_Functions>;
  contacts?: Maybe<Array<Maybe<Os_Deal_Contacts>>>;
  contacts_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  deal_notes?: Maybe<Scalars['String']['output']>;
  deal_stage?: Maybe<Os_Deal_Stages>;
  deal_value?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** Name of the potential project */
  name?: Maybe<Scalars['String']['output']>;
  next_contact_date?: Maybe<Scalars['Date']['output']>;
  next_contact_date_func?: Maybe<Datetime_Functions>;
  organization?: Maybe<Organizations>;
  owner?: Maybe<Directus_Users>;
  proposals?: Maybe<Array<Maybe<Os_Proposals>>>;
  proposals_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_DealsActivitiesArgs = {
  filter?: InputMaybe<Os_Activities_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_DealsContactsArgs = {
  filter?: InputMaybe<Os_Deal_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_DealsDeal_StageArgs = {
  filter?: InputMaybe<Os_Deal_Stages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_DealsOrganizationArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_DealsOwnerArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_DealsProposalsArgs = {
  filter?: InputMaybe<Os_Proposals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_DealsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_DealsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Deals_Aggregated = {
  __typename?: 'os_deals_aggregated';
  avg?: Maybe<Os_Deals_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Deals_Aggregated_Fields>;
  count?: Maybe<Os_Deals_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Deals_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Deals_Aggregated_Fields>;
  min?: Maybe<Os_Deals_Aggregated_Fields>;
  sum?: Maybe<Os_Deals_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Deals_Aggregated_Fields>;
};

export type Os_Deals_Aggregated_Count = {
  __typename?: 'os_deals_aggregated_count';
  activities?: Maybe<Scalars['Int']['output']>;
  close_date?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  deal_notes?: Maybe<Scalars['Int']['output']>;
  deal_stage?: Maybe<Scalars['Int']['output']>;
  deal_value?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Name of the potential project */
  name?: Maybe<Scalars['Int']['output']>;
  next_contact_date?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Scalars['Int']['output']>;
  /** Who's the sales rep / assigned to? */
  owner?: Maybe<Scalars['Int']['output']>;
  proposals?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Deals_Aggregated_Fields = {
  __typename?: 'os_deals_aggregated_fields';
  deal_value?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Deals_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Deals_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Deals_Filter>>>;
  activities?: InputMaybe<Os_Activities_Filter>;
  activities_func?: InputMaybe<Count_Function_Filter_Operators>;
  close_date?: InputMaybe<Date_Filter_Operators>;
  close_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  contacts?: InputMaybe<Os_Deal_Contacts_Filter>;
  contacts_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  deal_notes?: InputMaybe<String_Filter_Operators>;
  deal_stage?: InputMaybe<Os_Deal_Stages_Filter>;
  deal_value?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  next_contact_date?: InputMaybe<Date_Filter_Operators>;
  next_contact_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  organization?: InputMaybe<Organizations_Filter>;
  owner?: InputMaybe<Directus_Users_Filter>;
  proposals?: InputMaybe<Os_Proposals_Filter>;
  proposals_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Deals_Mutated = {
  __typename?: 'os_deals_mutated';
  data?: Maybe<Os_Deals>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Email_Templates = {
  __typename?: 'os_email_templates';
  body?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_Email_TemplatesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Email_TemplatesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Email_Templates_Aggregated = {
  __typename?: 'os_email_templates_aggregated';
  avg?: Maybe<Os_Email_Templates_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Email_Templates_Aggregated_Fields>;
  count?: Maybe<Os_Email_Templates_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Email_Templates_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Email_Templates_Aggregated_Fields>;
  min?: Maybe<Os_Email_Templates_Aggregated_Fields>;
  sum?: Maybe<Os_Email_Templates_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Email_Templates_Aggregated_Fields>;
};

export type Os_Email_Templates_Aggregated_Count = {
  __typename?: 'os_email_templates_aggregated_count';
  body?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Email_Templates_Aggregated_Fields = {
  __typename?: 'os_email_templates_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Email_Templates_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Email_Templates_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Email_Templates_Filter>>>;
  body?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  subject?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Email_Templates_Mutated = {
  __typename?: 'os_email_templates_mutated';
  data?: Maybe<Os_Email_Templates>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Expenses = {
  __typename?: 'os_expenses';
  category?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  invoice_item?: Maybe<Os_Invoice_Items>;
  is_billable?: Maybe<Scalars['Boolean']['output']>;
  is_reimbursable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Os_Projects>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_submitted?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_ExpensesFileArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ExpensesInvoice_ItemArgs = {
  filter?: InputMaybe<Os_Invoice_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ExpensesProjectArgs = {
  filter?: InputMaybe<Os_Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ExpensesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ExpensesUser_SubmittedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ExpensesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Expenses_Aggregated = {
  __typename?: 'os_expenses_aggregated';
  avg?: Maybe<Os_Expenses_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Expenses_Aggregated_Fields>;
  count?: Maybe<Os_Expenses_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Expenses_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Expenses_Aggregated_Fields>;
  min?: Maybe<Os_Expenses_Aggregated_Fields>;
  sum?: Maybe<Os_Expenses_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Expenses_Aggregated_Fields>;
};

export type Os_Expenses_Aggregated_Count = {
  __typename?: 'os_expenses_aggregated_count';
  category?: Maybe<Scalars['Int']['output']>;
  cost?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invoice_item?: Maybe<Scalars['Int']['output']>;
  is_billable?: Maybe<Scalars['Int']['output']>;
  is_reimbursable?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  project?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_submitted?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Expenses_Aggregated_Fields = {
  __typename?: 'os_expenses_aggregated_fields';
  cost?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Expenses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Expenses_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Expenses_Filter>>>;
  category?: InputMaybe<String_Filter_Operators>;
  cost?: InputMaybe<Number_Filter_Operators>;
  date?: InputMaybe<Date_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  file?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  invoice_item?: InputMaybe<Os_Invoice_Items_Filter>;
  is_billable?: InputMaybe<Boolean_Filter_Operators>;
  is_reimbursable?: InputMaybe<Boolean_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  project?: InputMaybe<Os_Projects_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_submitted?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Expenses_Mutated = {
  __typename?: 'os_expenses_mutated';
  data?: Maybe<Os_Expenses>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Invoice_Items = {
  __typename?: 'os_invoice_items';
  billable_expense?: Maybe<Os_Expenses>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoice?: Maybe<Os_Invoices>;
  item?: Maybe<Os_Items>;
  item_name?: Maybe<Scalars['String']['output']>;
  line_amount?: Maybe<Scalars['Float']['output']>;
  line_item_number?: Maybe<Scalars['Int']['output']>;
  override_unit_price?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tax_amount?: Maybe<Scalars['Float']['output']>;
  tax_rate?: Maybe<Os_Tax_Rates>;
  type?: Maybe<Scalars['String']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_Invoice_ItemsBillable_ExpenseArgs = {
  filter?: InputMaybe<Os_Expenses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Invoice_ItemsInvoiceArgs = {
  filter?: InputMaybe<Os_Invoices_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Invoice_ItemsItemArgs = {
  filter?: InputMaybe<Os_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Invoice_ItemsTax_RateArgs = {
  filter?: InputMaybe<Os_Tax_Rates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Invoice_ItemsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Invoice_ItemsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Invoice_Items_Aggregated = {
  __typename?: 'os_invoice_items_aggregated';
  avg?: Maybe<Os_Invoice_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Invoice_Items_Aggregated_Fields>;
  count?: Maybe<Os_Invoice_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Invoice_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Invoice_Items_Aggregated_Fields>;
  min?: Maybe<Os_Invoice_Items_Aggregated_Fields>;
  sum?: Maybe<Os_Invoice_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Invoice_Items_Aggregated_Fields>;
};

export type Os_Invoice_Items_Aggregated_Count = {
  __typename?: 'os_invoice_items_aggregated_count';
  billable_expense?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invoice?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  item_name?: Maybe<Scalars['Int']['output']>;
  line_amount?: Maybe<Scalars['Int']['output']>;
  line_item_number?: Maybe<Scalars['Int']['output']>;
  override_unit_price?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tax_amount?: Maybe<Scalars['Int']['output']>;
  tax_rate?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  unit_price?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Invoice_Items_Aggregated_Fields = {
  __typename?: 'os_invoice_items_aggregated_fields';
  line_amount?: Maybe<Scalars['Float']['output']>;
  line_item_number?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
  tax_amount?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

export type Os_Invoice_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Invoice_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Invoice_Items_Filter>>>;
  billable_expense?: InputMaybe<Os_Expenses_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  invoice?: InputMaybe<Os_Invoices_Filter>;
  item?: InputMaybe<Os_Items_Filter>;
  item_name?: InputMaybe<String_Filter_Operators>;
  line_amount?: InputMaybe<Number_Filter_Operators>;
  line_item_number?: InputMaybe<Number_Filter_Operators>;
  override_unit_price?: InputMaybe<Boolean_Filter_Operators>;
  quantity?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  tax_amount?: InputMaybe<Number_Filter_Operators>;
  tax_rate?: InputMaybe<Os_Tax_Rates_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  unit_price?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Invoice_Items_Mutated = {
  __typename?: 'os_invoice_items_mutated';
  data?: Maybe<Os_Invoice_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Invoices = {
  __typename?: 'os_invoices';
  amount_due?: Maybe<Scalars['Float']['output']>;
  amount_paid?: Maybe<Scalars['Float']['output']>;
  contact?: Maybe<Contacts>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  due_date?: Maybe<Scalars['Date']['output']>;
  due_date_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  invoice_number?: Maybe<Scalars['String']['output']>;
  issue_date?: Maybe<Scalars['Date']['output']>;
  issue_date_func?: Maybe<Datetime_Functions>;
  line_items?: Maybe<Array<Maybe<Os_Invoice_Items>>>;
  line_items_func?: Maybe<Count_Functions>;
  organization?: Maybe<Organizations>;
  payments?: Maybe<Array<Maybe<Os_Payments>>>;
  payments_func?: Maybe<Count_Functions>;
  project?: Maybe<Os_Projects>;
  reference?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  total_tax?: Maybe<Scalars['Float']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_InvoicesContactArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_InvoicesLine_ItemsArgs = {
  filter?: InputMaybe<Os_Invoice_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_InvoicesOrganizationArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_InvoicesPaymentsArgs = {
  filter?: InputMaybe<Os_Payments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_InvoicesProjectArgs = {
  filter?: InputMaybe<Os_Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_InvoicesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_InvoicesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Invoices_Aggregated = {
  __typename?: 'os_invoices_aggregated';
  avg?: Maybe<Os_Invoices_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Invoices_Aggregated_Fields>;
  count?: Maybe<Os_Invoices_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Invoices_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Invoices_Aggregated_Fields>;
  min?: Maybe<Os_Invoices_Aggregated_Fields>;
  sum?: Maybe<Os_Invoices_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Invoices_Aggregated_Fields>;
};

export type Os_Invoices_Aggregated_Count = {
  __typename?: 'os_invoices_aggregated_count';
  amount_due?: Maybe<Scalars['Int']['output']>;
  amount_paid?: Maybe<Scalars['Int']['output']>;
  contact?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  due_date?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invoice_number?: Maybe<Scalars['Int']['output']>;
  issue_date?: Maybe<Scalars['Int']['output']>;
  line_items?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Scalars['Int']['output']>;
  payments?: Maybe<Scalars['Int']['output']>;
  project?: Maybe<Scalars['Int']['output']>;
  reference?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subtotal?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  total_tax?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Invoices_Aggregated_Fields = {
  __typename?: 'os_invoices_aggregated_fields';
  amount_due?: Maybe<Scalars['Float']['output']>;
  amount_paid?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  total_tax?: Maybe<Scalars['Float']['output']>;
};

export type Os_Invoices_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Invoices_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Invoices_Filter>>>;
  amount_due?: InputMaybe<Number_Filter_Operators>;
  amount_paid?: InputMaybe<Number_Filter_Operators>;
  contact?: InputMaybe<Contacts_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  due_date?: InputMaybe<Date_Filter_Operators>;
  due_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  invoice_number?: InputMaybe<String_Filter_Operators>;
  issue_date?: InputMaybe<Date_Filter_Operators>;
  issue_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  line_items?: InputMaybe<Os_Invoice_Items_Filter>;
  line_items_func?: InputMaybe<Count_Function_Filter_Operators>;
  organization?: InputMaybe<Organizations_Filter>;
  payments?: InputMaybe<Os_Payments_Filter>;
  payments_func?: InputMaybe<Count_Function_Filter_Operators>;
  project?: InputMaybe<Os_Projects_Filter>;
  reference?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  subtotal?: InputMaybe<Number_Filter_Operators>;
  total?: InputMaybe<Number_Filter_Operators>;
  total_tax?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Invoices_Mutated = {
  __typename?: 'os_invoices_mutated';
  data?: Maybe<Os_Invoices>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Items = {
  __typename?: 'os_items';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  default_tax_rate?: Maybe<Os_Tax_Rates>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  unit_cost?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_ItemsDefault_Tax_RateArgs = {
  filter?: InputMaybe<Os_Tax_Rates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ItemsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ItemsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Items_Aggregated = {
  __typename?: 'os_items_aggregated';
  avg?: Maybe<Os_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Items_Aggregated_Fields>;
  count?: Maybe<Os_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Items_Aggregated_Fields>;
  min?: Maybe<Os_Items_Aggregated_Fields>;
  sum?: Maybe<Os_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Items_Aggregated_Fields>;
};

export type Os_Items_Aggregated_Count = {
  __typename?: 'os_items_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  default_tax_rate?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  unit_cost?: Maybe<Scalars['Int']['output']>;
  unit_price?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Items_Aggregated_Fields = {
  __typename?: 'os_items_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
  unit_cost?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

export type Os_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Items_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  default_tax_rate?: InputMaybe<Os_Tax_Rates_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  unit_cost?: InputMaybe<Number_Filter_Operators>;
  unit_price?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Items_Mutated = {
  __typename?: 'os_items_mutated';
  data?: Maybe<Os_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Payment_Terms = {
  __typename?: 'os_payment_terms';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_Payment_TermsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Payment_TermsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Payment_Terms_Aggregated = {
  __typename?: 'os_payment_terms_aggregated';
  count?: Maybe<Os_Payment_Terms_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Payment_Terms_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Os_Payment_Terms_Aggregated_Count = {
  __typename?: 'os_payment_terms_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Payment_Terms_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Payment_Terms_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Payment_Terms_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Payment_Terms_Mutated = {
  __typename?: 'os_payment_terms_mutated';
  data?: Maybe<Os_Payment_Terms>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Payments = {
  __typename?: 'os_payments';
  amount?: Maybe<Scalars['Float']['output']>;
  contact?: Maybe<Contacts>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  invoice?: Maybe<Os_Invoices>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  organization?: Maybe<Organizations>;
  payment_date?: Maybe<Scalars['Date']['output']>;
  payment_date_func?: Maybe<Datetime_Functions>;
  payment_method_type?: Maybe<Scalars['String']['output']>;
  receipt_url?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripe_payment_id?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_PaymentsContactArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_PaymentsInvoiceArgs = {
  filter?: InputMaybe<Os_Invoices_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_PaymentsOrganizationArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_PaymentsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_PaymentsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Payments_Aggregated = {
  __typename?: 'os_payments_aggregated';
  avg?: Maybe<Os_Payments_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Payments_Aggregated_Fields>;
  count?: Maybe<Os_Payments_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Payments_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Payments_Aggregated_Fields>;
  min?: Maybe<Os_Payments_Aggregated_Fields>;
  sum?: Maybe<Os_Payments_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Payments_Aggregated_Fields>;
};

export type Os_Payments_Aggregated_Count = {
  __typename?: 'os_payments_aggregated_count';
  amount?: Maybe<Scalars['Int']['output']>;
  contact?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invoice?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Scalars['Int']['output']>;
  payment_date?: Maybe<Scalars['Int']['output']>;
  payment_method_type?: Maybe<Scalars['Int']['output']>;
  receipt_url?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  stripe_payment_id?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Payments_Aggregated_Fields = {
  __typename?: 'os_payments_aggregated_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Payments_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Payments_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Payments_Filter>>>;
  amount?: InputMaybe<Number_Filter_Operators>;
  contact?: InputMaybe<Contacts_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  invoice?: InputMaybe<Os_Invoices_Filter>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  organization?: InputMaybe<Organizations_Filter>;
  payment_date?: InputMaybe<Date_Filter_Operators>;
  payment_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  payment_method_type?: InputMaybe<String_Filter_Operators>;
  receipt_url?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  stripe_payment_id?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Payments_Mutated = {
  __typename?: 'os_payments_mutated';
  data?: Maybe<Os_Payments>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Project_Contacts = {
  __typename?: 'os_project_contacts';
  contacts_id?: Maybe<Contacts>;
  id: Scalars['ID']['output'];
  os_projects_id?: Maybe<Os_Projects>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Os_Project_ContactsContacts_IdArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Project_ContactsOs_Projects_IdArgs = {
  filter?: InputMaybe<Os_Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Project_Contacts_Aggregated = {
  __typename?: 'os_project_contacts_aggregated';
  avg?: Maybe<Os_Project_Contacts_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Project_Contacts_Aggregated_Fields>;
  count?: Maybe<Os_Project_Contacts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Project_Contacts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Project_Contacts_Aggregated_Fields>;
  min?: Maybe<Os_Project_Contacts_Aggregated_Fields>;
  sum?: Maybe<Os_Project_Contacts_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Project_Contacts_Aggregated_Fields>;
};

export type Os_Project_Contacts_Aggregated_Count = {
  __typename?: 'os_project_contacts_aggregated_count';
  contacts_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  os_projects_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Os_Project_Contacts_Aggregated_Fields = {
  __typename?: 'os_project_contacts_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Project_Contacts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Project_Contacts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Project_Contacts_Filter>>>;
  contacts_id?: InputMaybe<Contacts_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  os_projects_id?: InputMaybe<Os_Projects_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Os_Project_Contacts_Mutated = {
  __typename?: 'os_project_contacts_mutated';
  data?: Maybe<Os_Project_Contacts>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Project_Templates = {
  __typename?: 'os_project_templates';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tasks?: Maybe<Scalars['JSON']['output']>;
  tasks_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_Project_TemplatesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Project_TemplatesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Project_Templates_Aggregated = {
  __typename?: 'os_project_templates_aggregated';
  avg?: Maybe<Os_Project_Templates_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Project_Templates_Aggregated_Fields>;
  count?: Maybe<Os_Project_Templates_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Project_Templates_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Project_Templates_Aggregated_Fields>;
  min?: Maybe<Os_Project_Templates_Aggregated_Fields>;
  sum?: Maybe<Os_Project_Templates_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Project_Templates_Aggregated_Fields>;
};

export type Os_Project_Templates_Aggregated_Count = {
  __typename?: 'os_project_templates_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tasks?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Project_Templates_Aggregated_Fields = {
  __typename?: 'os_project_templates_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Project_Templates_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Project_Templates_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Project_Templates_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tasks?: InputMaybe<String_Filter_Operators>;
  tasks_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Project_Templates_Mutated = {
  __typename?: 'os_project_templates_mutated';
  data?: Maybe<Os_Project_Templates>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Project_Updates = {
  __typename?: 'os_project_updates';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Os_Projects>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_Project_UpdatesProjectArgs = {
  filter?: InputMaybe<Os_Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Project_UpdatesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Project_UpdatesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Project_Updates_Aggregated = {
  __typename?: 'os_project_updates_aggregated';
  count?: Maybe<Os_Project_Updates_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Project_Updates_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Os_Project_Updates_Aggregated_Count = {
  __typename?: 'os_project_updates_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['Int']['output']>;
  project?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Project_Updates_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Project_Updates_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Project_Updates_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  message?: InputMaybe<String_Filter_Operators>;
  project?: InputMaybe<Os_Projects_Filter>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Project_Updates_Mutated = {
  __typename?: 'os_project_updates_mutated';
  data?: Maybe<Os_Project_Updates>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Projects = {
  __typename?: 'os_projects';
  contacts?: Maybe<Array<Maybe<Os_Project_Contacts>>>;
  contacts_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['Date']['output']>;
  due_date_func?: Maybe<Datetime_Functions>;
  expenses?: Maybe<Array<Maybe<Os_Expenses>>>;
  expenses_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  invoices?: Maybe<Array<Maybe<Os_Invoices>>>;
  invoices_func?: Maybe<Count_Functions>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organizations>;
  owner?: Maybe<Directus_Users>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  start_date_func?: Maybe<Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  tasks?: Maybe<Array<Maybe<Os_Tasks>>>;
  tasks_func?: Maybe<Count_Functions>;
  updates?: Maybe<Array<Maybe<Os_Project_Updates>>>;
  updates_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_ProjectsContactsArgs = {
  filter?: InputMaybe<Os_Project_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProjectsExpensesArgs = {
  filter?: InputMaybe<Os_Expenses_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProjectsInvoicesArgs = {
  filter?: InputMaybe<Os_Invoices_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProjectsOrganizationArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProjectsOwnerArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProjectsTasksArgs = {
  filter?: InputMaybe<Os_Tasks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProjectsUpdatesArgs = {
  filter?: InputMaybe<Os_Project_Updates_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProjectsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProjectsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Projects_Aggregated = {
  __typename?: 'os_projects_aggregated';
  avg?: Maybe<Os_Projects_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Projects_Aggregated_Fields>;
  count?: Maybe<Os_Projects_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Projects_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Projects_Aggregated_Fields>;
  min?: Maybe<Os_Projects_Aggregated_Fields>;
  sum?: Maybe<Os_Projects_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Projects_Aggregated_Fields>;
};

export type Os_Projects_Aggregated_Count = {
  __typename?: 'os_projects_aggregated_count';
  contacts?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  due_date?: Maybe<Scalars['Int']['output']>;
  expenses?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invoices?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tasks?: Maybe<Scalars['Int']['output']>;
  updates?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Projects_Aggregated_Fields = {
  __typename?: 'os_projects_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Projects_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Projects_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Projects_Filter>>>;
  contacts?: InputMaybe<Os_Project_Contacts_Filter>;
  contacts_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  due_date?: InputMaybe<Date_Filter_Operators>;
  due_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  expenses?: InputMaybe<Os_Expenses_Filter>;
  expenses_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  invoices?: InputMaybe<Os_Invoices_Filter>;
  invoices_func?: InputMaybe<Count_Function_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  organization?: InputMaybe<Organizations_Filter>;
  owner?: InputMaybe<Directus_Users_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  start_date?: InputMaybe<Date_Filter_Operators>;
  start_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tasks?: InputMaybe<Os_Tasks_Filter>;
  tasks_func?: InputMaybe<Count_Function_Filter_Operators>;
  updates?: InputMaybe<Os_Project_Updates_Filter>;
  updates_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Projects_Mutated = {
  __typename?: 'os_projects_mutated';
  data?: Maybe<Os_Projects>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Proposal_Approvals = {
  __typename?: 'os_proposal_approvals';
  contact?: Maybe<Contacts>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  esignature_agreement?: Maybe<Scalars['Boolean']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip_address?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  organization?: Maybe<Scalars['String']['output']>;
  proposal?: Maybe<Os_Proposals>;
  signature_image?: Maybe<Directus_Files>;
  signature_text?: Maybe<Scalars['String']['output']>;
  signature_type?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_Proposal_ApprovalsContactArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Proposal_ApprovalsProposalArgs = {
  filter?: InputMaybe<Os_Proposals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Proposal_ApprovalsSignature_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Proposal_ApprovalsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Proposal_ApprovalsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Proposal_Approvals_Aggregated = {
  __typename?: 'os_proposal_approvals_aggregated';
  avg?: Maybe<Os_Proposal_Approvals_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Proposal_Approvals_Aggregated_Fields>;
  count?: Maybe<Os_Proposal_Approvals_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Proposal_Approvals_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Proposal_Approvals_Aggregated_Fields>;
  min?: Maybe<Os_Proposal_Approvals_Aggregated_Fields>;
  sum?: Maybe<Os_Proposal_Approvals_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Proposal_Approvals_Aggregated_Fields>;
};

export type Os_Proposal_Approvals_Aggregated_Count = {
  __typename?: 'os_proposal_approvals_aggregated_count';
  contact?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  esignature_agreement?: Maybe<Scalars['Int']['output']>;
  first_name?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip_address?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Scalars['Int']['output']>;
  proposal?: Maybe<Scalars['Int']['output']>;
  signature_image?: Maybe<Scalars['Int']['output']>;
  signature_text?: Maybe<Scalars['Int']['output']>;
  signature_type?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Proposal_Approvals_Aggregated_Fields = {
  __typename?: 'os_proposal_approvals_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Proposal_Approvals_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Proposal_Approvals_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Proposal_Approvals_Filter>>>;
  contact?: InputMaybe<Contacts_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  esignature_agreement?: InputMaybe<Boolean_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  ip_address?: InputMaybe<String_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  organization?: InputMaybe<String_Filter_Operators>;
  proposal?: InputMaybe<Os_Proposals_Filter>;
  signature_image?: InputMaybe<Directus_Files_Filter>;
  signature_text?: InputMaybe<String_Filter_Operators>;
  signature_type?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Proposal_Approvals_Mutated = {
  __typename?: 'os_proposal_approvals_mutated';
  data?: Maybe<Os_Proposal_Approvals>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Proposal_Blocks = {
  __typename?: 'os_proposal_blocks';
  collection?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item?: Maybe<Os_Proposal_Blocks_Item_Union>;
  os_proposals_id?: Maybe<Os_Proposals>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_Proposal_BlocksOs_Proposals_IdArgs = {
  filter?: InputMaybe<Os_Proposals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Proposal_BlocksUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Proposal_BlocksUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Proposal_Blocks_Aggregated = {
  __typename?: 'os_proposal_blocks_aggregated';
  avg?: Maybe<Os_Proposal_Blocks_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Proposal_Blocks_Aggregated_Fields>;
  count?: Maybe<Os_Proposal_Blocks_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Proposal_Blocks_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Proposal_Blocks_Aggregated_Fields>;
  min?: Maybe<Os_Proposal_Blocks_Aggregated_Fields>;
  sum?: Maybe<Os_Proposal_Blocks_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Proposal_Blocks_Aggregated_Fields>;
};

export type Os_Proposal_Blocks_Aggregated_Count = {
  __typename?: 'os_proposal_blocks_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  os_proposals_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Proposal_Blocks_Aggregated_Fields = {
  __typename?: 'os_proposal_blocks_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Proposal_Blocks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Proposal_Blocks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Proposal_Blocks_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  item__block_divider?: InputMaybe<Block_Divider_Filter>;
  item__block_faqs?: InputMaybe<Block_Faqs_Filter>;
  item__block_logocloud?: InputMaybe<Block_Logocloud_Filter>;
  item__block_quote?: InputMaybe<Block_Quote_Filter>;
  item__block_richtext?: InputMaybe<Block_Richtext_Filter>;
  item__block_steps?: InputMaybe<Block_Steps_Filter>;
  item__block_team?: InputMaybe<Block_Team_Filter>;
  item__block_video?: InputMaybe<Block_Video_Filter>;
  os_proposals_id?: InputMaybe<Os_Proposals_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Proposal_Blocks_Item_Union = Block_Divider | Block_Faqs | Block_Logocloud | Block_Quote | Block_Richtext | Block_Steps | Block_Team | Block_Video;

export type Os_Proposal_Blocks_Mutated = {
  __typename?: 'os_proposal_blocks_mutated';
  data?: Maybe<Os_Proposal_Blocks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Proposal_Contacts = {
  __typename?: 'os_proposal_contacts';
  contacts_id?: Maybe<Contacts>;
  id: Scalars['ID']['output'];
  os_proposals_id?: Maybe<Os_Proposals>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Os_Proposal_ContactsContacts_IdArgs = {
  filter?: InputMaybe<Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Proposal_ContactsOs_Proposals_IdArgs = {
  filter?: InputMaybe<Os_Proposals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Proposal_Contacts_Aggregated = {
  __typename?: 'os_proposal_contacts_aggregated';
  avg?: Maybe<Os_Proposal_Contacts_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Proposal_Contacts_Aggregated_Fields>;
  count?: Maybe<Os_Proposal_Contacts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Proposal_Contacts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Proposal_Contacts_Aggregated_Fields>;
  min?: Maybe<Os_Proposal_Contacts_Aggregated_Fields>;
  sum?: Maybe<Os_Proposal_Contacts_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Proposal_Contacts_Aggregated_Fields>;
};

export type Os_Proposal_Contacts_Aggregated_Count = {
  __typename?: 'os_proposal_contacts_aggregated_count';
  contacts_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  os_proposals_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Os_Proposal_Contacts_Aggregated_Fields = {
  __typename?: 'os_proposal_contacts_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Proposal_Contacts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Proposal_Contacts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Proposal_Contacts_Filter>>>;
  contacts_id?: InputMaybe<Contacts_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  os_proposals_id?: InputMaybe<Os_Proposals_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Os_Proposal_Contacts_Mutated = {
  __typename?: 'os_proposal_contacts_mutated';
  data?: Maybe<Os_Proposal_Contacts>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Proposals = {
  __typename?: 'os_proposals';
  approvals?: Maybe<Array<Maybe<Os_Proposal_Approvals>>>;
  approvals_func?: Maybe<Count_Functions>;
  blocks?: Maybe<Array<Maybe<Os_Proposal_Blocks>>>;
  blocks_func?: Maybe<Count_Functions>;
  contacts?: Maybe<Array<Maybe<Os_Proposal_Contacts>>>;
  contacts_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  deal?: Maybe<Os_Deals>;
  expiration_date?: Maybe<Scalars['Date']['output']>;
  expiration_date_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  /** Title of the proposal */
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organizations>;
  sort?: Maybe<Scalars['Int']['output']>;
  /** What is the current status of the proposal? */
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_ProposalsApprovalsArgs = {
  filter?: InputMaybe<Os_Proposal_Approvals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProposalsBlocksArgs = {
  filter?: InputMaybe<Os_Proposal_Blocks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProposalsContactsArgs = {
  filter?: InputMaybe<Os_Proposal_Contacts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProposalsDealArgs = {
  filter?: InputMaybe<Os_Deals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProposalsOrganizationArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProposalsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_ProposalsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Proposals_Aggregated = {
  __typename?: 'os_proposals_aggregated';
  avg?: Maybe<Os_Proposals_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Proposals_Aggregated_Fields>;
  count?: Maybe<Os_Proposals_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Proposals_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Proposals_Aggregated_Fields>;
  min?: Maybe<Os_Proposals_Aggregated_Fields>;
  sum?: Maybe<Os_Proposals_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Proposals_Aggregated_Fields>;
};

export type Os_Proposals_Aggregated_Count = {
  __typename?: 'os_proposals_aggregated_count';
  approvals?: Maybe<Scalars['Int']['output']>;
  /** This is the content of your proposal */
  blocks?: Maybe<Scalars['Int']['output']>;
  contacts?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  deal?: Maybe<Scalars['Int']['output']>;
  expiration_date?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Title of the proposal */
  name?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  /** What is the current status of the proposal? */
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Proposals_Aggregated_Fields = {
  __typename?: 'os_proposals_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Proposals_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Proposals_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Proposals_Filter>>>;
  approvals?: InputMaybe<Os_Proposal_Approvals_Filter>;
  approvals_func?: InputMaybe<Count_Function_Filter_Operators>;
  blocks?: InputMaybe<Os_Proposal_Blocks_Filter>;
  blocks_func?: InputMaybe<Count_Function_Filter_Operators>;
  contacts?: InputMaybe<Os_Proposal_Contacts_Filter>;
  contacts_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  deal?: InputMaybe<Os_Deals_Filter>;
  expiration_date?: InputMaybe<Date_Filter_Operators>;
  expiration_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  organization?: InputMaybe<Organizations_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Proposals_Mutated = {
  __typename?: 'os_proposals_mutated';
  data?: Maybe<Os_Proposals>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Settings = {
  __typename?: 'os_settings';
  id: Scalars['ID']['output'];
  /** We'll auto-populate this number for the next invoice you create. */
  next_invoice_number?: Maybe<Scalars['Int']['output']>;
  /** We'll auto-populate this number for the next proposal you create. */
  next_proposal_number?: Maybe<Scalars['Int']['output']>;
  organization_folder_root?: Maybe<Directus_Folders>;
};


export type Os_SettingsOrganization_Folder_RootArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Settings_Mutated = {
  __typename?: 'os_settings_mutated';
  data?: Maybe<Os_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Task_Files = {
  __typename?: 'os_task_files';
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  os_tasks_id?: Maybe<Os_Tasks>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Os_Task_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Task_FilesOs_Tasks_IdArgs = {
  filter?: InputMaybe<Os_Tasks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Task_Files_Aggregated = {
  __typename?: 'os_task_files_aggregated';
  avg?: Maybe<Os_Task_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Task_Files_Aggregated_Fields>;
  count?: Maybe<Os_Task_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Task_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Task_Files_Aggregated_Fields>;
  min?: Maybe<Os_Task_Files_Aggregated_Fields>;
  sum?: Maybe<Os_Task_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Task_Files_Aggregated_Fields>;
};

export type Os_Task_Files_Aggregated_Count = {
  __typename?: 'os_task_files_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  os_tasks_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Os_Task_Files_Aggregated_Fields = {
  __typename?: 'os_task_files_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Task_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Task_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Task_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  os_tasks_id?: InputMaybe<Os_Tasks_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Os_Task_Files_Mutated = {
  __typename?: 'os_task_files_mutated';
  data?: Maybe<Os_Task_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Tasks = {
  __typename?: 'os_tasks';
  assigned_to?: Maybe<Directus_Users>;
  date_completed?: Maybe<Scalars['Date']['output']>;
  date_completed_func?: Maybe<Datetime_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['Date']['output']>;
  due_date_func?: Maybe<Datetime_Functions>;
  embed_url?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<Maybe<Os_Task_Files>>>;
  files_func?: Maybe<Count_Functions>;
  form?: Maybe<Forms>;
  id: Scalars['ID']['output'];
  is_visible_to_client: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Os_Projects>;
  responsibility?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  start_date_func?: Maybe<Datetime_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_TasksAssigned_ToArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_TasksFilesArgs = {
  filter?: InputMaybe<Os_Task_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_TasksFormArgs = {
  filter?: InputMaybe<Forms_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_TasksProjectArgs = {
  filter?: InputMaybe<Os_Projects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_TasksUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_TasksUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Tasks_Aggregated = {
  __typename?: 'os_tasks_aggregated';
  avg?: Maybe<Os_Tasks_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Tasks_Aggregated_Fields>;
  count?: Maybe<Os_Tasks_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Tasks_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Tasks_Aggregated_Fields>;
  min?: Maybe<Os_Tasks_Aggregated_Fields>;
  sum?: Maybe<Os_Tasks_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Tasks_Aggregated_Fields>;
};

export type Os_Tasks_Aggregated_Count = {
  __typename?: 'os_tasks_aggregated_count';
  assigned_to?: Maybe<Scalars['Int']['output']>;
  date_completed?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  due_date?: Maybe<Scalars['Int']['output']>;
  embed_url?: Maybe<Scalars['Int']['output']>;
  files?: Maybe<Scalars['Int']['output']>;
  form?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_visible_to_client?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  project?: Maybe<Scalars['Int']['output']>;
  responsibility?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Tasks_Aggregated_Fields = {
  __typename?: 'os_tasks_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Tasks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Tasks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Tasks_Filter>>>;
  assigned_to?: InputMaybe<Directus_Users_Filter>;
  date_completed?: InputMaybe<Date_Filter_Operators>;
  date_completed_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  due_date?: InputMaybe<Date_Filter_Operators>;
  due_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  embed_url?: InputMaybe<String_Filter_Operators>;
  files?: InputMaybe<Os_Task_Files_Filter>;
  files_func?: InputMaybe<Count_Function_Filter_Operators>;
  form?: InputMaybe<Forms_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  is_visible_to_client?: InputMaybe<Boolean_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  project?: InputMaybe<Os_Projects_Filter>;
  responsibility?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  start_date?: InputMaybe<Date_Filter_Operators>;
  start_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Tasks_Mutated = {
  __typename?: 'os_tasks_mutated';
  data?: Maybe<Os_Tasks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Os_Tax_Rates = {
  __typename?: 'os_tax_rates';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Os_Tax_RatesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Os_Tax_RatesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Os_Tax_Rates_Aggregated = {
  __typename?: 'os_tax_rates_aggregated';
  avg?: Maybe<Os_Tax_Rates_Aggregated_Fields>;
  avgDistinct?: Maybe<Os_Tax_Rates_Aggregated_Fields>;
  count?: Maybe<Os_Tax_Rates_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Os_Tax_Rates_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Os_Tax_Rates_Aggregated_Fields>;
  min?: Maybe<Os_Tax_Rates_Aggregated_Fields>;
  sum?: Maybe<Os_Tax_Rates_Aggregated_Fields>;
  sumDistinct?: Maybe<Os_Tax_Rates_Aggregated_Fields>;
};

export type Os_Tax_Rates_Aggregated_Count = {
  __typename?: 'os_tax_rates_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  rate?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Os_Tax_Rates_Aggregated_Fields = {
  __typename?: 'os_tax_rates_aggregated_fields';
  rate?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Os_Tax_Rates_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Os_Tax_Rates_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Os_Tax_Rates_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  rate?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Os_Tax_Rates_Mutated = {
  __typename?: 'os_tax_rates_mutated';
  data?: Maybe<Os_Tax_Rates>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Page_BlocksPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_BlocksUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_BlocksUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  item__related_block_faqs?: InputMaybe<Related_Block_Faqs_Filter>;
  pages_id?: InputMaybe<Pages_Filter>;
  pages_translations_id?: InputMaybe<Pages_Translations_Filter>;
};

export type Page_Editor_Nodes_Item_Union = Block_Button | Block_Quote | Related_Block_Faqs;

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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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


export type Page_SettingsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Page_SettingsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  seo?: Maybe<Seo>;
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


export type PagesSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
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
  seo?: Maybe<Seo>;
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


export type Pages_BlogSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
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
  seo?: InputMaybe<Seo_Filter>;
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
  seo?: Maybe<Seo>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Pages_ProjectsSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  author?: Maybe<Team>;
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
  seo?: Maybe<Seo>;
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


export type PostsAuthorArgs = {
  filter?: InputMaybe<Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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


export type PostsSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
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
  author?: InputMaybe<Team_Filter>;
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
  seo?: InputMaybe<Seo_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type RedirectsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RedirectsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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

export type Repeater_Example = {
  __typename?: 'repeater_example';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Repeater_ExampleUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Repeater_ExampleUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Repeater_Example_Aggregated = {
  __typename?: 'repeater_example_aggregated';
  avg?: Maybe<Repeater_Example_Aggregated_Fields>;
  avgDistinct?: Maybe<Repeater_Example_Aggregated_Fields>;
  count?: Maybe<Repeater_Example_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Repeater_Example_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Repeater_Example_Aggregated_Fields>;
  min?: Maybe<Repeater_Example_Aggregated_Fields>;
  sum?: Maybe<Repeater_Example_Aggregated_Fields>;
  sumDistinct?: Maybe<Repeater_Example_Aggregated_Fields>;
};

export type Repeater_Example_Aggregated_Count = {
  __typename?: 'repeater_example_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Repeater_Example_Aggregated_Fields = {
  __typename?: 'repeater_example_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Repeater_Example_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Repeater_Example_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Repeater_Example_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Repeater_Example_Mutated = {
  __typename?: 'repeater_example_mutated';
  data?: Maybe<Repeater_Example>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type RoutesTranslationsArgs = {
  filter?: InputMaybe<Routes_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RoutesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RoutesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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


export type Search_ParamsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Search_ParamsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  id?: InputMaybe<String_Filter_Operators>;
  link?: InputMaybe<Links_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  value?: InputMaybe<String_Filter_Operators>;
};

export type Search_Params_Mutated = {
  __typename?: 'search_params_mutated';
  data?: Maybe<Search_Params>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Seo = {
  __typename?: 'seo';
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** This entries meta description. Max 160 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: Maybe<Scalars['Boolean']['output']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: Maybe<Scalars['Boolean']['output']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: Maybe<Scalars['String']['output']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: Maybe<Scalars['Float']['output']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: Maybe<Scalars['String']['output']>;
};

export type Seo_Aggregated = {
  __typename?: 'seo_aggregated';
  avg?: Maybe<Seo_Aggregated_Fields>;
  avgDistinct?: Maybe<Seo_Aggregated_Fields>;
  count?: Maybe<Seo_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Seo_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Seo_Aggregated_Fields>;
  min?: Maybe<Seo_Aggregated_Fields>;
  sum?: Maybe<Seo_Aggregated_Fields>;
  sumDistinct?: Maybe<Seo_Aggregated_Fields>;
};

export type Seo_Aggregated_Count = {
  __typename?: 'seo_aggregated_count';
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** This entries meta description. Max 160 characters. */
  meta_description?: Maybe<Scalars['Int']['output']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: Maybe<Scalars['Int']['output']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: Maybe<Scalars['Int']['output']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: Maybe<Scalars['Int']['output']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: Maybe<Scalars['Int']['output']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: Maybe<Scalars['Int']['output']>;
};

export type Seo_Aggregated_Fields = {
  __typename?: 'seo_aggregated_fields';
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: Maybe<Scalars['Float']['output']>;
};

export type Seo_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Seo_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Seo_Filter>>>;
  canonical_url?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  no_follow?: InputMaybe<Boolean_Filter_Operators>;
  no_index?: InputMaybe<Boolean_Filter_Operators>;
  sitemap_change_frequency?: InputMaybe<String_Filter_Operators>;
  sitemap_priority?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Seo_Mutated = {
  __typename?: 'seo_mutated';
  data?: Maybe<Seo>;
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

export type Team = {
  __typename?: 'team';
  bio?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  job_title?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  posts_func?: Maybe<Count_Functions>;
  social_media?: Maybe<Scalars['JSON']['output']>;
  social_media_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type TeamImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Team_Aggregated = {
  __typename?: 'team_aggregated';
  avg?: Maybe<Team_Aggregated_Fields>;
  avgDistinct?: Maybe<Team_Aggregated_Fields>;
  count?: Maybe<Team_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Team_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Team_Aggregated_Fields>;
  min?: Maybe<Team_Aggregated_Fields>;
  sum?: Maybe<Team_Aggregated_Fields>;
  sumDistinct?: Maybe<Team_Aggregated_Fields>;
};

export type Team_Aggregated_Count = {
  __typename?: 'team_aggregated_count';
  bio?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  job_title?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  posts?: Maybe<Scalars['Int']['output']>;
  social_media?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Team_Aggregated_Fields = {
  __typename?: 'team_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Team_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  bio?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  job_title?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  posts?: InputMaybe<Posts_Filter>;
  posts_func?: InputMaybe<Count_Function_Filter_Operators>;
  social_media?: InputMaybe<String_Filter_Operators>;
  social_media_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Team_Mutated = {
  __typename?: 'team_mutated';
  data?: Maybe<Team>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Testimonials = {
  __typename?: 'testimonials';
  company?: Maybe<Scalars['String']['output']>;
  company_logo?: Maybe<Directus_Files>;
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  link?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type TestimonialsCompany_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TestimonialsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TestimonialsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TestimonialsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonials_Aggregated = {
  __typename?: 'testimonials_aggregated';
  avg?: Maybe<Testimonials_Aggregated_Fields>;
  avgDistinct?: Maybe<Testimonials_Aggregated_Fields>;
  count?: Maybe<Testimonials_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Testimonials_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Testimonials_Aggregated_Fields>;
  min?: Maybe<Testimonials_Aggregated_Fields>;
  sum?: Maybe<Testimonials_Aggregated_Fields>;
  sumDistinct?: Maybe<Testimonials_Aggregated_Fields>;
};

export type Testimonials_Aggregated_Count = {
  __typename?: 'testimonials_aggregated_count';
  company?: Maybe<Scalars['Int']['output']>;
  company_logo?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Testimonials_Aggregated_Fields = {
  __typename?: 'testimonials_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Testimonials_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Testimonials_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Testimonials_Filter>>>;
  company?: InputMaybe<String_Filter_Operators>;
  company_logo?: InputMaybe<Directus_Files_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  link?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Testimonials_Mutated = {
  __typename?: 'testimonials_mutated';
  data?: Maybe<Testimonials>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Update_Activites_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Block_Button_Group_Input = {
  alignment?: InputMaybe<Scalars['String']['input']>;
  buttons?: InputMaybe<Array<InputMaybe<Update_Block_Button_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Block_Button_Input = {
  button_group?: InputMaybe<Update_Block_Button_Group_Input>;
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  external_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Update_Pages_Input>;
  post?: InputMaybe<Update_Posts_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Columns_Input = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  rows?: InputMaybe<Array<InputMaybe<Update_Block_Columns_Rows_Input>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Columns_Rows_Input = {
  block_columns?: InputMaybe<Update_Block_Columns_Input>;
  button_group?: InputMaybe<Update_Block_Button_Group_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  image_position?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Block_Cta_Input = {
  button_group?: InputMaybe<Update_Block_Button_Group_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Divider_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Faqs_Input = {
  alignment?: InputMaybe<Scalars['String']['input']>;
  faqs?: InputMaybe<Scalars['JSON']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Files_Files_Input = {
  block_files_id?: InputMaybe<Update_Block_Files_Input>;
  directus_files_id?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Update_Block_Files_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  files?: InputMaybe<Array<InputMaybe<Update_Block_Files_Files_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Block_Form_Input = {
  form?: InputMaybe<Update_Forms_Input>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Gallery_Files_Input = {
  block_gallery_id?: InputMaybe<Update_Block_Gallery_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  directus_files_id?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Block_Gallery_Input = {
  gallery_items?: InputMaybe<Array<InputMaybe<Update_Block_Gallery_Files_Input>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Hero_Input = {
  button_group?: InputMaybe<Update_Block_Button_Group_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  image_position?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Html_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  raw_html?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Logocloud_Input = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logos?: InputMaybe<Array<InputMaybe<Update_Block_Logocloud_Logos_Input>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Logocloud_Logos_Input = {
  block_logocloud_id?: InputMaybe<Update_Block_Logocloud_Input>;
  directus_files_id?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Block_Quote_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Richtext_Input = {
  alignment?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Settings_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Scalars['JSON']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Step_Items_Input = {
  block_steps?: InputMaybe<Update_Block_Steps_Input>;
  button_group?: InputMaybe<Update_Block_Button_Group_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Steps_Input = {
  /** If enabled, image position is alternated between left and right. */
  alternate_image_position?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Show the step numbers on the website. For example: (Step 1, Step 2, etc) */
  show_step_numbers?: InputMaybe<Scalars['Boolean']['input']>;
  steps?: InputMaybe<Array<InputMaybe<Update_Block_Step_Items_Input>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Team_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Testimonial_Slider_Items_Input = {
  block_testimonial_slider_id?: InputMaybe<Update_Block_Testimonials_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  testimonials_id?: InputMaybe<Update_Testimonials_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Block_Testimonials_Input = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  testimonials?: InputMaybe<Array<InputMaybe<Update_Block_Testimonial_Slider_Items_Input>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Video_Input = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  video_file?: InputMaybe<Update_Directus_Files_Input>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Block_Wysiwygs_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  settings?: InputMaybe<Update_Block_Settings_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Categories_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<Update_Seo_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Contacts_Input = {
  activities?: InputMaybe<Array<InputMaybe<Update_Os_Activity_Contacts_Input>>>;
  /** Notes about this contact. Never visible to this person or their organization. */
  contact_notes?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  deals?: InputMaybe<Array<InputMaybe<Update_Os_Deal_Contacts_Input>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Update_Organizations_Contacts_Input>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Is this an active contact? */
  status?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Update_Directus_Users_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Conversations_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Array<InputMaybe<Update_Messages_Input>>>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  visitor_id?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Directus_Files_Input = {
  caption?: InputMaybe<Scalars['String']['input']>;
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  thumbhash?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Update_Organizations_Input>>>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Roles_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']['input']>;
  app_access?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
};

export type Update_Directus_Sync_Id_Map_Input = {
  created_at?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  local_id?: InputMaybe<Scalars['String']['input']>;
  sync_id?: InputMaybe<Scalars['String']['input']>;
  table?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  contacts?: InputMaybe<Array<InputMaybe<Update_Contacts_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Update_Form_Builder_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  on_success?: InputMaybe<Scalars['String']['input']>;
  redirect_url?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Array<InputMaybe<Update_Form_Builder_Schema_Input>>>;
  status?: InputMaybe<Scalars['String']['input']>;
  success_message?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Form_Builder_Schema_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  form_builder_id?: InputMaybe<Update_Form_Builder_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Form_Builder_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_id?: InputMaybe<Update_Languages_Input>;
};

export type Update_Form_Configs_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  friendly_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  schema?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Form_Entry_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form?: InputMaybe<Update_Form_Builder_Input>;
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_ip?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Update_Languages_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Form_Field_Settings_Input = {
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** This validation should follow the AJV format guidelines */
  generic_validation?: InputMaybe<Scalars['String']['input']>;
  halfwidth?: InputMaybe<Scalars['Boolean']['input']>;
  hasPattern?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
  pattern_error_message?: InputMaybe<Scalars['String']['input']>;
  readonly?: InputMaybe<Scalars['Boolean']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  required_error_message?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Form_Field_Text_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form_field_settings?: InputMaybe<Update_Form_Field_Settings_Input>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  text_settings?: InputMaybe<Update_Form_Field_Text_Settings_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Form_Field_Text_Settings_Input = {
  default_value?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Forms_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  on_success?: InputMaybe<Scalars['String']['input']>;
  redirect_url?: InputMaybe<Scalars['String']['input']>;
  /** The fields for the form. */
  schema?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  /** The text for the submit button label. */
  submit_label?: InputMaybe<Scalars['String']['input']>;
  success_message?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Globals_Input = {
  address_country?: InputMaybe<Scalars['String']['input']>;
  address_locality?: InputMaybe<Scalars['String']['input']>;
  address_region?: InputMaybe<Scalars['String']['input']>;
  /** URL for the build / deploy hook that starts a new build */
  build_hook_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo_on_dark_bg?: InputMaybe<Update_Directus_Files_Input>;
  logo_on_light_bg?: InputMaybe<Update_Directus_Files_Input>;
  og_image?: InputMaybe<Update_Directus_Files_Input>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  social_links?: InputMaybe<Scalars['JSON']['input']>;
  street_address?: InputMaybe<Scalars['String']['input']>;
  /** What's the website title? */
  tagline?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['JSON']['input']>;
  /** What's the website title? */
  title?: InputMaybe<Scalars['String']['input']>;
  /** What's is the base url for the site? */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Help_Articles_Files_Input = {
  directus_files_id?: InputMaybe<Update_Directus_Files_Input>;
  help_articles_id?: InputMaybe<Update_Help_Articles_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Update_Help_Articles_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  files?: InputMaybe<Array<InputMaybe<Update_Help_Articles_Files_Input>>>;
  help_collection?: InputMaybe<Update_Help_Collections_Input>;
  help_messages?: InputMaybe<Array<InputMaybe<Update_Help_Articles_Messages_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  owner?: InputMaybe<Update_Directus_Users_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Help_Articles_Messages_Input = {
  help_articles_id?: InputMaybe<Update_Help_Articles_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messages_id?: InputMaybe<Update_Messages_Input>;
};

export type Update_Help_Collections_Input = {
  articles?: InputMaybe<Array<InputMaybe<Update_Help_Articles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Help_Feedback_Input = {
  comments?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  visitor_id?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Inbox_Input = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  form?: InputMaybe<Update_Forms_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  project?: InputMaybe<Update_Os_Projects_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Update_Os_Tasks_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Languages_Input = {
  code?: InputMaybe<Scalars['ID']['input']>;
  direction?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Links_Input = {
  anchor?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Update_Page_Settings_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  external_link?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Array<InputMaybe<Update_Search_Params_Input>>>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Messages_Input = {
  contact_id?: InputMaybe<Scalars['String']['input']>;
  conversation?: InputMaybe<Update_Conversations_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  visitor_id?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Navigation_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  items?: InputMaybe<Array<InputMaybe<Update_Navigation_Items_Input>>>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Navigation_Items_Input = {
  children?: InputMaybe<Array<InputMaybe<Update_Navigation_Items_Input>>>;
  has_children?: InputMaybe<Scalars['Boolean']['input']>;
  /** Icon that displays in dropdown menus on website. */
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Label to help users. Displays below the link in dropdown nav menus. */
  label?: InputMaybe<Scalars['String']['input']>;
  navigation?: InputMaybe<Update_Navigation_Input>;
  open_in_new_tab?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Update_Pages_Input>;
  parent?: InputMaybe<Update_Navigation_Items_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Organization_Addresses_Input = {
  address_country?: InputMaybe<Scalars['String']['input']>;
  /** City */
  address_locality?: InputMaybe<Scalars['String']['input']>;
  /** State (or region if outside US) */
  address_region?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Is this the primary billing address? */
  is_primary_billing?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Update_Organizations_Input>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  street_address?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Organizations_Contacts_Input = {
  contacts_id?: InputMaybe<Update_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  organizations_id?: InputMaybe<Update_Organizations_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Organizations_Input = {
  addresses?: InputMaybe<Array<InputMaybe<Update_Organization_Addresses_Input>>>;
  brand_color?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<Array<InputMaybe<Update_Organizations_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  /** Company billing email address */
  email?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<Update_Directus_Files_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_notes?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Update_Directus_Users_Input>;
  payment_terms?: InputMaybe<Update_Os_Payment_Terms_Input>;
  /** Company billing phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Os_Activities_Input = {
  activity_notes?: InputMaybe<Scalars['String']['input']>;
  activity_type?: InputMaybe<Scalars['String']['input']>;
  assigned_to?: InputMaybe<Update_Directus_Users_Input>;
  contacts?: InputMaybe<Array<InputMaybe<Update_Os_Activity_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  deal?: InputMaybe<Update_Os_Deals_Input>;
  /** When does this activity need to be completed? */
  due_date?: InputMaybe<Scalars['Date']['input']>;
  /** Meeting end time */
  end_time?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Update_Organizations_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  /** Meeting start time */
  start_time?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Activity_Contacts_Input = {
  contacts_id?: InputMaybe<Update_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_activities_id?: InputMaybe<Update_Os_Activities_Input>;
};

export type Update_Os_Deal_Contacts_Input = {
  contacts_id?: InputMaybe<Update_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_deals_id?: InputMaybe<Update_Os_Deals_Input>;
  primary?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Os_Deal_Stages_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Deals_Input = {
  activities?: InputMaybe<Array<InputMaybe<Update_Os_Activities_Input>>>;
  close_date?: InputMaybe<Scalars['Date']['input']>;
  contacts?: InputMaybe<Array<InputMaybe<Update_Os_Deal_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  deal_notes?: InputMaybe<Scalars['String']['input']>;
  deal_stage?: InputMaybe<Update_Os_Deal_Stages_Input>;
  deal_value?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Name of the potential project */
  name?: InputMaybe<Scalars['String']['input']>;
  next_contact_date?: InputMaybe<Scalars['Date']['input']>;
  organization?: InputMaybe<Update_Organizations_Input>;
  owner?: InputMaybe<Update_Directus_Users_Input>;
  proposals?: InputMaybe<Array<InputMaybe<Update_Os_Proposals_Input>>>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Email_Templates_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Expenses_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoice_item?: InputMaybe<Update_Os_Invoice_Items_Input>;
  is_billable?: InputMaybe<Scalars['Boolean']['input']>;
  is_reimbursable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Update_Os_Projects_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_submitted?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Invoice_Items_Input = {
  billable_expense?: InputMaybe<Update_Os_Expenses_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoice?: InputMaybe<Update_Os_Invoices_Input>;
  item?: InputMaybe<Update_Os_Items_Input>;
  item_name?: InputMaybe<Scalars['String']['input']>;
  line_amount?: InputMaybe<Scalars['Float']['input']>;
  line_item_number?: InputMaybe<Scalars['Int']['input']>;
  override_unit_price?: InputMaybe<Scalars['Boolean']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  tax_amount?: InputMaybe<Scalars['Float']['input']>;
  tax_rate?: InputMaybe<Update_Os_Tax_Rates_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Invoices_Input = {
  amount_due?: InputMaybe<Scalars['Float']['input']>;
  amount_paid?: InputMaybe<Scalars['Float']['input']>;
  contact?: InputMaybe<Update_Contacts_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoice_number?: InputMaybe<Scalars['String']['input']>;
  issue_date?: InputMaybe<Scalars['Date']['input']>;
  line_items?: InputMaybe<Array<InputMaybe<Update_Os_Invoice_Items_Input>>>;
  organization?: InputMaybe<Update_Organizations_Input>;
  payments?: InputMaybe<Array<InputMaybe<Update_Os_Payments_Input>>>;
  project?: InputMaybe<Update_Os_Projects_Input>;
  reference?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtotal?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  total_tax?: InputMaybe<Scalars['Float']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Items_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  default_tax_rate?: InputMaybe<Update_Os_Tax_Rates_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  unit_cost?: InputMaybe<Scalars['Float']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Payment_Terms_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Payments_Input = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  contact?: InputMaybe<Update_Contacts_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoice?: InputMaybe<Update_Os_Invoices_Input>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  organization?: InputMaybe<Update_Organizations_Input>;
  payment_date?: InputMaybe<Scalars['Date']['input']>;
  payment_method_type?: InputMaybe<Scalars['String']['input']>;
  receipt_url?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stripe_payment_id?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Project_Contacts_Input = {
  contacts_id?: InputMaybe<Update_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_projects_id?: InputMaybe<Update_Os_Projects_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Os_Project_Templates_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tasks?: InputMaybe<Scalars['JSON']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Project_Updates_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Update_Os_Projects_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Projects_Input = {
  contacts?: InputMaybe<Array<InputMaybe<Update_Os_Project_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  expenses?: InputMaybe<Array<InputMaybe<Update_Os_Expenses_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invoices?: InputMaybe<Array<InputMaybe<Update_Os_Invoices_Input>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Update_Organizations_Input>;
  owner?: InputMaybe<Update_Directus_Users_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tasks?: InputMaybe<Array<InputMaybe<Update_Os_Tasks_Input>>>;
  updates?: InputMaybe<Array<InputMaybe<Update_Os_Project_Updates_Input>>>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Proposal_Approvals_Input = {
  contact?: InputMaybe<Update_Contacts_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  esignature_agreement?: InputMaybe<Scalars['Boolean']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  proposal?: InputMaybe<Update_Os_Proposals_Input>;
  signature_image?: InputMaybe<Update_Directus_Files_Input>;
  signature_text?: InputMaybe<Scalars['String']['input']>;
  signature_type?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Proposal_Blocks_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  os_proposals_id?: InputMaybe<Update_Os_Proposals_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Proposal_Contacts_Input = {
  contacts_id?: InputMaybe<Update_Contacts_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_proposals_id?: InputMaybe<Update_Os_Proposals_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Os_Proposals_Input = {
  approvals?: InputMaybe<Array<InputMaybe<Update_Os_Proposal_Approvals_Input>>>;
  blocks?: InputMaybe<Array<InputMaybe<Update_Os_Proposal_Blocks_Input>>>;
  contacts?: InputMaybe<Array<InputMaybe<Update_Os_Proposal_Contacts_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  deal?: InputMaybe<Update_Os_Deals_Input>;
  expiration_date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Title of the proposal */
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Update_Organizations_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  /** What is the current status of the proposal? */
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Settings_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  /** We'll auto-populate this number for the next invoice you create. */
  next_invoice_number?: InputMaybe<Scalars['Int']['input']>;
  /** We'll auto-populate this number for the next proposal you create. */
  next_proposal_number?: InputMaybe<Scalars['Int']['input']>;
  organization_folder_root?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Os_Task_Files_Input = {
  directus_files_id?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  os_tasks_id?: InputMaybe<Update_Os_Tasks_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Os_Tasks_Input = {
  assigned_to?: InputMaybe<Update_Directus_Users_Input>;
  date_completed?: InputMaybe<Scalars['Date']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['Date']['input']>;
  embed_url?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<InputMaybe<Update_Os_Task_Files_Input>>>;
  form?: InputMaybe<Update_Forms_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_visible_to_client?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Update_Os_Projects_Input>;
  responsibility?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Os_Tax_Rates_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Page_Blocks_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  /** Hide this block on the frontend without having to remove it from your page. */
  hide_block?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  pages_id?: InputMaybe<Update_Pages_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Page_Editor_Nodes_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  pages_id?: InputMaybe<Update_Pages_Input>;
  pages_translations_id?: InputMaybe<Update_Pages_Translations_Input>;
};

export type Update_Page_Settings_Input = {
  belongs_to_collection?: InputMaybe<Scalars['String']['input']>;
  belongs_to_key?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  route?: InputMaybe<Update_Routes_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Page_Settings_Translations_Input>>>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Page_Settings_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
  page_settings_id?: InputMaybe<Update_Page_Settings_Input>;
  path?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Pages_Blog_Input = {
  featured_post?: InputMaybe<Update_Posts_Input>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<Update_Seo_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Pages_Input = {
  blocks?: InputMaybe<Array<InputMaybe<Update_Page_Blocks_Input>>>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  page_settings?: InputMaybe<Update_Page_Settings_Input>;
  /** Start with a slash (/page) and do NOT add a trailing slash (/page/) */
  permalink?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<Update_Seo_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Pages_Translations_Input>>>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Pages_Projects_Input = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<Update_Seo_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Pages_Translations_Input = {
  block_editor?: InputMaybe<Scalars['JSON']['input']>;
  editor_nodes?: InputMaybe<Array<InputMaybe<Update_Page_Editor_Nodes_Input>>>;
  flexible_editor?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  pages_id?: InputMaybe<Update_Pages_Input>;
};

export type Update_Post_Gallery_Items_Input = {
  directus_files_id?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  posts_id?: InputMaybe<Update_Posts_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Posts_Input = {
  author?: InputMaybe<Update_Team_Input>;
  built_with?: InputMaybe<Scalars['JSON']['input']>;
  category?: InputMaybe<Update_Categories_Input>;
  client?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  /** Use a range */
  cost?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_published?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Update_Post_Gallery_Items_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  seo?: InputMaybe<Update_Seo_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** What type of post is this? Determines the template used to display the post on the frontend. */
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Redirects_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  destination?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isrewrite?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['Boolean']['input']>;
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Related_Block_Faqs_Block_Faqs_Input = {
  block_faqs_id?: InputMaybe<Update_Block_Faqs_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  related_block_faqs_id?: InputMaybe<Update_Related_Block_Faqs_Input>;
};

export type Update_Related_Block_Faqs_Input = {
  blocks?: InputMaybe<Array<InputMaybe<Update_Related_Block_Faqs_Block_Faqs_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Update_Repeater_Example_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Routes_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Routes_Translations_Input>>>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Routes_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
  route?: InputMaybe<Scalars['String']['input']>;
  routes_id?: InputMaybe<Update_Routes_Input>;
};

export type Update_Search_Params_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Update_Links_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Seo_Input = {
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** This entries meta description. Max 160 characters. */
  meta_description?: InputMaybe<Scalars['String']['input']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: InputMaybe<Scalars['String']['input']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: InputMaybe<Scalars['Float']['input']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Team_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Update_Posts_Input>>>;
  social_media?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Testimonials_Input = {
  company?: InputMaybe<Scalars['String']['input']>;
  company_logo?: InputMaybe<Update_Directus_Files_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  link?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Versioning_Example_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Version_Activites = {
  __typename?: 'version_activites';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Block_Button = {
  __typename?: 'version_block_button';
  button_group?: Maybe<Scalars['JSON']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  external_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Scalars['JSON']['output']>;
  post?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Button_Group = {
  __typename?: 'version_block_button_group';
  alignment?: Maybe<Scalars['String']['output']>;
  buttons?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Block_Columns = {
  __typename?: 'version_block_columns';
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  rows?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Columns_Rows = {
  __typename?: 'version_block_columns_rows';
  block_columns?: Maybe<Scalars['JSON']['output']>;
  button_group?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['JSON']['output']>;
  image_position?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Block_Cta = {
  __typename?: 'version_block_cta';
  button_group?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Divider = {
  __typename?: 'version_block_divider';
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Faqs = {
  __typename?: 'version_block_faqs';
  alignment?: Maybe<Scalars['String']['output']>;
  faqs?: Maybe<Scalars['JSON']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Files = {
  __typename?: 'version_block_files';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  files?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Block_Files_Files = {
  __typename?: 'version_block_files_files';
  block_files_id?: Maybe<Scalars['JSON']['output']>;
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Version_Block_Form = {
  __typename?: 'version_block_form';
  form?: Maybe<Scalars['JSON']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Gallery = {
  __typename?: 'version_block_gallery';
  gallery_items?: Maybe<Scalars['JSON']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Gallery_Files = {
  __typename?: 'version_block_gallery_files';
  block_gallery_id?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Block_Hero = {
  __typename?: 'version_block_hero';
  button_group?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['JSON']['output']>;
  image_position?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Html = {
  __typename?: 'version_block_html';
  id?: Maybe<Scalars['ID']['output']>;
  raw_html?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Logocloud = {
  __typename?: 'version_block_logocloud';
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  logos?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Logocloud_Logos = {
  __typename?: 'version_block_logocloud_logos';
  block_logocloud_id?: Maybe<Scalars['JSON']['output']>;
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Block_Quote = {
  __typename?: 'version_block_quote';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Richtext = {
  __typename?: 'version_block_richtext';
  alignment?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Settings = {
  __typename?: 'version_block_settings';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Step_Items = {
  __typename?: 'version_block_step_items';
  block_steps?: Maybe<Scalars['JSON']['output']>;
  button_group?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Steps = {
  __typename?: 'version_block_steps';
  /** If enabled, image position is alternated between left and right. */
  alternate_image_position?: Maybe<Scalars['Boolean']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Show the step numbers on the website. For example: (Step 1, Step 2, etc) */
  show_step_numbers?: Maybe<Scalars['Boolean']['output']>;
  steps?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Team = {
  __typename?: 'version_block_team';
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Testimonial_Slider_Items = {
  __typename?: 'version_block_testimonial_slider_items';
  block_testimonial_slider_id?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  testimonials_id?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Block_Testimonials = {
  __typename?: 'version_block_testimonials';
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  testimonials?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Video = {
  __typename?: 'version_block_video';
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  video_file?: Maybe<Scalars['JSON']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
};

export type Version_Block_Wysiwygs = {
  __typename?: 'version_block_wysiwygs';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  settings?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Categories = {
  __typename?: 'version_categories';
  color?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  seo?: Maybe<Scalars['JSON']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Contacts = {
  __typename?: 'version_contacts';
  activities?: Maybe<Scalars['JSON']['output']>;
  /** Notes about this contact. Never visible to this person or their organization. */
  contact_notes?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  deals?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  organizations?: Maybe<Scalars['JSON']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** Is this an active contact? */
  status?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Conversations = {
  __typename?: 'version_conversations';
  collection?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  item?: Maybe<Scalars['String']['output']>;
  messages?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
  visitor_id?: Maybe<Scalars['String']['output']>;
};

export type Version_Directus_Sync_Id_Map = {
  __typename?: 'version_directus_sync_id_map';
  created_at?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  local_id?: Maybe<Scalars['String']['output']>;
  sync_id?: Maybe<Scalars['String']['output']>;
  table?: Maybe<Scalars['String']['output']>;
};

export type Version_Form_Builder = {
  __typename?: 'version_form_builder';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  on_success?: Maybe<Scalars['String']['output']>;
  redirect_url?: Maybe<Scalars['String']['output']>;
  schema?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  success_message?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Form_Builder_Schema = {
  __typename?: 'version_form_builder_schema';
  collection?: Maybe<Scalars['String']['output']>;
  form_builder_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  item?: Maybe<Scalars['String']['output']>;
};

export type Version_Form_Builder_Translations = {
  __typename?: 'version_form_builder_translations';
  id?: Maybe<Scalars['ID']['output']>;
  languages_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Form_Configs = {
  __typename?: 'version_form_configs';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  friendly_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  schema?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Form_Entry = {
  __typename?: 'version_form_entry';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  form?: Maybe<Scalars['JSON']['output']>;
  from_email?: Maybe<Scalars['String']['output']>;
  from_ip?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  language?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Form_Field_Settings = {
  __typename?: 'version_form_field_settings';
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** This validation should follow the AJV format guidelines */
  generic_validation?: Maybe<Scalars['String']['output']>;
  halfwidth?: Maybe<Scalars['Boolean']['output']>;
  hasPattern?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
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
  date_updated?: Maybe<Scalars['Date']['output']>;
  form_field_settings?: Maybe<Scalars['JSON']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  text_settings?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Form_Field_Text_Settings = {
  __typename?: 'version_form_field_text_settings';
  default_value?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
};

export type Version_Forms = {
  __typename?: 'version_forms';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  on_success?: Maybe<Scalars['String']['output']>;
  redirect_url?: Maybe<Scalars['String']['output']>;
  /** The fields for the form. */
  schema?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  /** The text for the submit button label. */
  submit_label?: Maybe<Scalars['String']['output']>;
  success_message?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Globals = {
  __typename?: 'version_globals';
  address_country?: Maybe<Scalars['String']['output']>;
  address_locality?: Maybe<Scalars['String']['output']>;
  address_region?: Maybe<Scalars['String']['output']>;
  /** URL for the build / deploy hook that starts a new build */
  build_hook_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  logo_on_dark_bg?: Maybe<Scalars['JSON']['output']>;
  logo_on_light_bg?: Maybe<Scalars['JSON']['output']>;
  og_image?: Maybe<Scalars['JSON']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  social_links?: Maybe<Scalars['JSON']['output']>;
  street_address?: Maybe<Scalars['String']['output']>;
  /** What's the website title? */
  tagline?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['JSON']['output']>;
  /** What's the website title? */
  title?: Maybe<Scalars['String']['output']>;
  /** What's is the base url for the site? */
  url?: Maybe<Scalars['String']['output']>;
};

export type Version_Help_Articles = {
  __typename?: 'version_help_articles';
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  files?: Maybe<Scalars['JSON']['output']>;
  help_collection?: Maybe<Scalars['JSON']['output']>;
  help_messages?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Help_Articles_Files = {
  __typename?: 'version_help_articles_files';
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  help_articles_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Version_Help_Articles_Messages = {
  __typename?: 'version_help_articles_messages';
  help_articles_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  messages_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Help_Collections = {
  __typename?: 'version_help_collections';
  articles?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Help_Feedback = {
  __typename?: 'version_help_feedback';
  comments?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
  visitor_id?: Maybe<Scalars['String']['output']>;
};

export type Version_Inbox = {
  __typename?: 'version_inbox';
  data?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  form?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  project?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Languages = {
  __typename?: 'version_languages';
  code?: Maybe<Scalars['ID']['output']>;
  direction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Version_Links = {
  __typename?: 'version_links';
  anchor?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  external_link?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Messages = {
  __typename?: 'version_messages';
  contact_id?: Maybe<Scalars['String']['output']>;
  conversation?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
  visitor_id?: Maybe<Scalars['String']['output']>;
};

export type Version_Navigation = {
  __typename?: 'version_navigation';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Navigation_Items = {
  __typename?: 'version_navigation_items';
  children?: Maybe<Scalars['JSON']['output']>;
  has_children?: Maybe<Scalars['Boolean']['output']>;
  /** Icon that displays in dropdown menus on website. */
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Label to help users. Displays below the link in dropdown nav menus. */
  label?: Maybe<Scalars['String']['output']>;
  navigation?: Maybe<Scalars['JSON']['output']>;
  open_in_new_tab?: Maybe<Scalars['Boolean']['output']>;
  page?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type Version_Organization_Addresses = {
  __typename?: 'version_organization_addresses';
  address_country?: Maybe<Scalars['String']['output']>;
  /** City */
  address_locality?: Maybe<Scalars['String']['output']>;
  /** State (or region if outside US) */
  address_region?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Is this the primary billing address? */
  is_primary_billing?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['JSON']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  street_address?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Organizations = {
  __typename?: 'version_organizations';
  addresses?: Maybe<Scalars['JSON']['output']>;
  brand_color?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  /** Company billing email address */
  email?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  logo?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization_notes?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  payment_terms?: Maybe<Scalars['JSON']['output']>;
  /** Company billing phone number */
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type Version_Organizations_Contacts = {
  __typename?: 'version_organizations_contacts';
  contacts_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  organizations_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Os_Activities = {
  __typename?: 'version_os_activities';
  activity_notes?: Maybe<Scalars['String']['output']>;
  activity_type?: Maybe<Scalars['String']['output']>;
  assigned_to?: Maybe<Scalars['JSON']['output']>;
  contacts?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  deal?: Maybe<Scalars['JSON']['output']>;
  /** When does this activity need to be completed? */
  due_date?: Maybe<Scalars['Date']['output']>;
  /** Meeting end time */
  end_time?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  /** Meeting start time */
  start_time?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Activity_Contacts = {
  __typename?: 'version_os_activity_contacts';
  contacts_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  os_activities_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Deal_Contacts = {
  __typename?: 'version_os_deal_contacts';
  contacts_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  os_deals_id?: Maybe<Scalars['JSON']['output']>;
  primary?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Os_Deal_Stages = {
  __typename?: 'version_os_deal_stages';
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Deals = {
  __typename?: 'version_os_deals';
  activities?: Maybe<Scalars['JSON']['output']>;
  close_date?: Maybe<Scalars['Date']['output']>;
  contacts?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  deal_notes?: Maybe<Scalars['String']['output']>;
  deal_stage?: Maybe<Scalars['JSON']['output']>;
  deal_value?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Name of the potential project */
  name?: Maybe<Scalars['String']['output']>;
  next_contact_date?: Maybe<Scalars['Date']['output']>;
  organization?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  proposals?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Email_Templates = {
  __typename?: 'version_os_email_templates';
  body?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Expenses = {
  __typename?: 'version_os_expenses';
  category?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoice_item?: Maybe<Scalars['JSON']['output']>;
  is_billable?: Maybe<Scalars['Boolean']['output']>;
  is_reimbursable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_submitted?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Invoice_Items = {
  __typename?: 'version_os_invoice_items';
  billable_expense?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoice?: Maybe<Scalars['JSON']['output']>;
  item?: Maybe<Scalars['JSON']['output']>;
  item_name?: Maybe<Scalars['String']['output']>;
  line_amount?: Maybe<Scalars['Float']['output']>;
  line_item_number?: Maybe<Scalars['Int']['output']>;
  override_unit_price?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tax_amount?: Maybe<Scalars['Float']['output']>;
  tax_rate?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Invoices = {
  __typename?: 'version_os_invoices';
  amount_due?: Maybe<Scalars['Float']['output']>;
  amount_paid?: Maybe<Scalars['Float']['output']>;
  contact?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  due_date?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoice_number?: Maybe<Scalars['String']['output']>;
  issue_date?: Maybe<Scalars['Date']['output']>;
  line_items?: Maybe<Scalars['JSON']['output']>;
  organization?: Maybe<Scalars['JSON']['output']>;
  payments?: Maybe<Scalars['JSON']['output']>;
  project?: Maybe<Scalars['JSON']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  total_tax?: Maybe<Scalars['Float']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Items = {
  __typename?: 'version_os_items';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  default_tax_rate?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  unit_cost?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Payment_Terms = {
  __typename?: 'version_os_payment_terms';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Payments = {
  __typename?: 'version_os_payments';
  amount?: Maybe<Scalars['Float']['output']>;
  contact?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoice?: Maybe<Scalars['JSON']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  organization?: Maybe<Scalars['JSON']['output']>;
  payment_date?: Maybe<Scalars['Date']['output']>;
  payment_method_type?: Maybe<Scalars['String']['output']>;
  receipt_url?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripe_payment_id?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Project_Contacts = {
  __typename?: 'version_os_project_contacts';
  contacts_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  os_projects_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Os_Project_Templates = {
  __typename?: 'version_os_project_templates';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tasks?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Project_Updates = {
  __typename?: 'version_os_project_updates';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Projects = {
  __typename?: 'version_os_projects';
  contacts?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['Date']['output']>;
  expenses?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoices?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tasks?: Maybe<Scalars['JSON']['output']>;
  updates?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Proposal_Approvals = {
  __typename?: 'version_os_proposal_approvals';
  contact?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  esignature_agreement?: Maybe<Scalars['Boolean']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  proposal?: Maybe<Scalars['JSON']['output']>;
  signature_image?: Maybe<Scalars['JSON']['output']>;
  signature_text?: Maybe<Scalars['String']['output']>;
  signature_type?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Proposal_Blocks = {
  __typename?: 'version_os_proposal_blocks';
  collection?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  item?: Maybe<Scalars['String']['output']>;
  os_proposals_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Proposal_Contacts = {
  __typename?: 'version_os_proposal_contacts';
  contacts_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  os_proposals_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Os_Proposals = {
  __typename?: 'version_os_proposals';
  approvals?: Maybe<Scalars['JSON']['output']>;
  blocks?: Maybe<Scalars['JSON']['output']>;
  contacts?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  deal?: Maybe<Scalars['JSON']['output']>;
  expiration_date?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Title of the proposal */
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  /** What is the current status of the proposal? */
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Settings = {
  __typename?: 'version_os_settings';
  id?: Maybe<Scalars['ID']['output']>;
  /** We'll auto-populate this number for the next invoice you create. */
  next_invoice_number?: Maybe<Scalars['Int']['output']>;
  /** We'll auto-populate this number for the next proposal you create. */
  next_proposal_number?: Maybe<Scalars['Int']['output']>;
  organization_folder_root?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Task_Files = {
  __typename?: 'version_os_task_files';
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  os_tasks_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Os_Tasks = {
  __typename?: 'version_os_tasks';
  assigned_to?: Maybe<Scalars['JSON']['output']>;
  date_completed?: Maybe<Scalars['Date']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due_date?: Maybe<Scalars['Date']['output']>;
  embed_url?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Scalars['JSON']['output']>;
  form?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_visible_to_client?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Scalars['JSON']['output']>;
  responsibility?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Os_Tax_Rates = {
  __typename?: 'version_os_tax_rates';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Page_Blocks = {
  __typename?: 'version_page_blocks';
  collection?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  /** Hide this block on the frontend without having to remove it from your page. */
  hide_block?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  item?: Maybe<Scalars['String']['output']>;
  pages_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Page_Editor_Nodes = {
  __typename?: 'version_page_editor_nodes';
  collection?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  item?: Maybe<Scalars['String']['output']>;
  pages_id?: Maybe<Scalars['JSON']['output']>;
  pages_translations_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Page_Settings = {
  __typename?: 'version_page_settings';
  belongs_to_collection?: Maybe<Scalars['String']['output']>;
  belongs_to_key?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  route?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Page_Settings_Translations = {
  __typename?: 'version_page_settings_translations';
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Scalars['JSON']['output']>;
  page_settings_id?: Maybe<Scalars['JSON']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages = {
  __typename?: 'version_pages';
  blocks?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  page_settings?: Maybe<Scalars['JSON']['output']>;
  /** Start with a slash (/page) and do NOT add a trailing slash (/page/) */
  permalink?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages_Blog = {
  __typename?: 'version_pages_blog';
  featured_post?: Maybe<Scalars['JSON']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  seo?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages_Projects = {
  __typename?: 'version_pages_projects';
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  seo?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages_Translations = {
  __typename?: 'version_pages_translations';
  block_editor?: Maybe<Scalars['JSON']['output']>;
  editor_nodes?: Maybe<Scalars['JSON']['output']>;
  flexible_editor?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pages_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Post_Gallery_Items = {
  __typename?: 'version_post_gallery_items';
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  posts_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Posts = {
  __typename?: 'version_posts';
  author?: Maybe<Scalars['JSON']['output']>;
  built_with?: Maybe<Scalars['JSON']['output']>;
  category?: Maybe<Scalars['JSON']['output']>;
  client?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  /** Use a range */
  cost?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_published?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  gallery?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['JSON']['output']>;
  seo?: Maybe<Scalars['JSON']['output']>;
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
  date_updated?: Maybe<Scalars['Date']['output']>;
  destination?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isrewrite?: Maybe<Scalars['Boolean']['output']>;
  locale?: Maybe<Scalars['Boolean']['output']>;
  permanent?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Related_Block_Faqs = {
  __typename?: 'version_related_block_faqs';
  blocks?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Version_Related_Block_Faqs_Block_Faqs = {
  __typename?: 'version_related_block_faqs_block_faqs';
  block_faqs_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  related_block_faqs_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Repeater_Example = {
  __typename?: 'version_repeater_example';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Routes = {
  __typename?: 'version_routes';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Routes_Translations = {
  __typename?: 'version_routes_translations';
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Scalars['JSON']['output']>;
  route?: Maybe<Scalars['String']['output']>;
  routes_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Search_Params = {
  __typename?: 'version_search_params';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  link?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Version_Seo = {
  __typename?: 'version_seo';
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** This entries meta description. Max 160 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: Maybe<Scalars['Boolean']['output']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: Maybe<Scalars['Boolean']['output']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: Maybe<Scalars['String']['output']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: Maybe<Scalars['Float']['output']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Team = {
  __typename?: 'version_team';
  bio?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['JSON']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Scalars['JSON']['output']>;
  social_media?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Testimonials = {
  __typename?: 'version_testimonials';
  company?: Maybe<Scalars['String']['output']>;
  company_logo?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['JSON']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Versioning_Example = {
  __typename?: 'version_versioning_example';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Versioning_ExampleUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Versioning_ExampleUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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


export type PagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'pages', title?: string | null, translations?: Array<{ __typename?: 'pages_translations', flexible_editor?: any | null, languages_code?: { __typename?: 'languages', code: string } | null, editor_nodes?: Array<{ __typename?: 'page_editor_nodes', id: string, collection?: string | null, pages_translations_id?: { __typename?: 'pages_translations', languages_code?: { __typename?: 'languages', code: string } | null } | null, item?: { __typename?: 'block_button', color?: string | null, date_created?: any | null, date_updated?: any | null, external_url?: string | null, id: string, label?: string | null, sort?: number | null, type?: string | null, variant?: string | null } | { __typename?: 'block_quote', content?: string | null, id: string, subtitle?: string | null, title?: string | null } | { __typename?: 'related_block_faqs', id: string, blocks?: Array<{ __typename?: 'related_block_faqs_block_faqs', id: string, block_faqs_id?: { __typename?: 'block_faqs', alignment?: string | null, faqs?: any | null, headline?: string | null, id: string, title?: string | null } | null } | null> | null } | null } | null> | null } | null> | null }> };

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
export const PagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flexible_editor"}},{"kind":"Field","name":{"kind":"Name","value":"editor_nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pages_translations_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"block_button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"date_updated"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"sort"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"related_block_faqs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"block_faqs_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alignment"}},{"kind":"Field","name":{"kind":"Name","value":"faqs"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PagesQuery, PagesQueryVariables>;
export const PageByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Page"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pages"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"belongs_to_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nnull"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}}]}}]} as unknown as DocumentNode<PageByIdQuery, PageByIdQueryVariables>;
export const PageByIdWithoutFragmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageByIdWithoutFragment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"belongs_to_key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nnull"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSettings"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"page_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_collection"}},{"kind":"Field","name":{"kind":"Name","value":"belongs_to_key"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages_code"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PageByIdWithoutFragmentQuery, PageByIdWithoutFragmentQueryVariables>;