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
 */
const documents = {
    "query Pages {\n  pages {\n    title\n    translations {\n      languages_code\n      flexible_editor\n      editor_nodes {\n        id\n        pages_translations_id {\n          languages_code\n        }\n        collection\n        item {\n          ... on block_quote {\n            content\n            id\n            subtitle\n            title\n          }\n          ... on block_button {\n            color\n            date_created\n            date_updated\n            external_url\n            id\n            label\n            sort\n            type\n            user_created\n            user_updated\n            variant\n          }\n          ... on related_block_faqs {\n            id\n            blocks {\n              id\n              block_faqs_id {\n                alignment\n                faqs\n                headline\n                id\n                title\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.PagesDocument,
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
export function graphql(source: "query Pages {\n  pages {\n    title\n    translations {\n      languages_code\n      flexible_editor\n      editor_nodes {\n        id\n        pages_translations_id {\n          languages_code\n        }\n        collection\n        item {\n          ... on block_quote {\n            content\n            id\n            subtitle\n            title\n          }\n          ... on block_button {\n            color\n            date_created\n            date_updated\n            external_url\n            id\n            label\n            sort\n            type\n            user_created\n            user_updated\n            variant\n          }\n          ... on related_block_faqs {\n            id\n            blocks {\n              id\n              block_faqs_id {\n                alignment\n                faqs\n                headline\n                id\n                title\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Pages {\n  pages {\n    title\n    translations {\n      languages_code\n      flexible_editor\n      editor_nodes {\n        id\n        pages_translations_id {\n          languages_code\n        }\n        collection\n        item {\n          ... on block_quote {\n            content\n            id\n            subtitle\n            title\n          }\n          ... on block_button {\n            color\n            date_created\n            date_updated\n            external_url\n            id\n            label\n            sort\n            type\n            user_created\n            user_updated\n            variant\n          }\n          ... on related_block_faqs {\n            id\n            blocks {\n              id\n              block_faqs_id {\n                alignment\n                faqs\n                headline\n                id\n                title\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;