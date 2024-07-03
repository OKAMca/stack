'use server'

import type { TBlockSerializerConfig } from '@okam/directus-block'
import type { JSONContent } from '@okam/directus-flexible-content'
import { FlexibleEditorContent } from '@okam/directus-flexible-content'
import { queryGql } from '@okam/directus-query'
import { Box } from '@okam/stack-ui'
import { PagesDocument } from 'libs/directus-data-query/src'

export default async function Index() {
  const flexibleContent = await queryGql(PagesDocument)

  const pageFlexibleContent = flexibleContent.pages.find((p) => p.title === 'Team')

  const editorNodes = pageFlexibleContent?.translations?.[0]?.editor_nodes
  const content = pageFlexibleContent?.translations?.[0]?.flexible_editor as JSONContent

  const relationBlocks: TBlockSerializerConfig = {
    components: {
      related_block_faqs: {
        default: (props) => <Box>Related Block FAQ</Box>,
      },
    },
  }

  return (
    <FlexibleEditorContent
      flexibleEditor={content}
      editorNodes={editorNodes}
      config={relationBlocks}
      nodes={{
        // Used to remap default HTML nodes
        table: (props) => (
          <Box as="table" themeName={props.themeName}>
            <Box as="tbody">{props.children}</Box>
          </Box>
        ),
      }}
      remappedAttributes={{ colspan: 'colSpan' }} // Used to remap attributes, if not present in this case, error will be thrown for colspan
    />
  )
}
