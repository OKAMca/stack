# directus-flexible-content

## Exports
- FlexibleEditorContent (Component)
- TRenderingNodes (Type)
- JSONContent (Type)

## FlexibleEditorContent Component

### Props
  jsonContent: JSONContent -> This prop takes in the json data returned from the flexible editor in directus.
  editorNodes?: EditorNodes[] | undefined | null -> This prop takes in the editor nodes data from directus.
  serializers?: Extensions -> This prop takes in the differnet tiptap extensions that the flexible editor uses. There are already a bunch pre-installed in the package (see 'src/lib/components/FlexibleEditorContent/extensions')
  config?: TBlockSerializerConfig -> This takes in a BlockDispatcher config object for relation blocks placed in the flexible editor
  nodes?: TRenderingNodes -> This takes in a config object for remapping default HTML semantic tags to React Components
  remappedAttributes?: Record<string, string> -> This allows to remap HTML attributes to fix warnings or errors made by tiptap

### Configuring the flexible editor inside directus : 

- [Basic usage](https://github.com/formfcw/directus-extension-flexible-editor?tab=readme-ov-file#basic-usage)
- [With relation nodes](https://github.com/formfcw/directus-extension-flexible-editor?tab=readme-ov-file#usage-with-relation-nodes)
- [With relation nodes and exisiting items](https://github.com/formfcw/directus-extension-flexible-editor?tab=readme-ov-file#tutorial-relation-node-with-existing-items)

Adding blocks to the flexible editor options : the related blocks are handled in the Editor Nodes field beside the flexible editor field. You can add more collections by going in the relationship menu of the editor nodes and selecting additional collections in the associated collections section.

Most of the time, if you want to insert blocks inside the flexible editor, you will need to follow the `With relation nodes and exisiting items` tutorial. Note that it is important to prefix related blocks for selection with `related_` so that a related block would look like `related_{block-collection}` so if you have a `block_faqs` your related collection key should be `related_block_faqs`.

IMPORTANT: when configuring the many to many relation inside your `related_{block-collection}` collection. The key of the field should always be `blocks`.

### Querying 

Here is an example of what querying should look like : 

```graphql
flexible_editor
editor_nodes {
  id
  collection
  item {
    ... on related_block_quote {
      id
      blocks {
        id # id should always be present in the query for the blocks otherwise the block will not be displayed.
        item: block_quote_id { # You should always rename `block_[x]_id` to item
          ...BlockQuote
        }
      }
    }
    ... on related_block_button {
      id
      blocks {
        id
        item: block_button_id {
          ...BlockButton
        }
      }
    }
    ... on related_block_faqs {
      id
      blocks {
        id
        item: block_faqs_id {
          ...BlockFaqs
        }
      }
    }
  }
}
```


