import type { TBlockSerializerConfig } from '@okam/directus-block'
import type { JSONContent } from '@okam/directus-flexible-content'
import { FlexibleEditorContent } from '@okam/directus-flexible-content'
import { queryGql } from '@okam/directus-query'
import { Box, Typography } from '@okam/stack-ui'
import { PagesDocument } from 'apps/directus-data-query/src'

export default async function Index() {
  const flexibleContent = await queryGql(PagesDocument)

  const pageFlexibleContent = flexibleContent.pages.find((p) => p.title === 'Team')

  const editorNodes = pageFlexibleContent?.translations?.[0]?.editor_nodes
  const content = pageFlexibleContent?.translations?.[0]?.flexible_editor as JSONContent

  const relationBlocks: TBlockSerializerConfig = {
    components: {
      block_button: {
        default: (props) => <Box as="span">Related Block Button</Box>,
      },
      related_block_faqs: {
        default: (props) => <Box as="span">Related Block FAQ</Box>,
      },
      block_quote: {
        default: (props) => <Box>Block Quotes</Box>,
      },
    },
  }

  const relationMarks: TBlockSerializerConfig = {
    components: {
      links: {
        default: (props) => {
          const label = props?.item?.markText as string
          return <Box as="span">{label}</Box>
        },
      },
    },
  }

  return (
    <FlexibleEditorContent
      jsonContent={content}
      editorNodes={editorNodes}
      config={relationBlocks}
      relationMarksConfig={relationMarks}
      nodes={{
        // Used to remap default HTML nodes
        table: (props) => (
          <Box as="table" themeName={props.themeName}>
            <Box as="tbody">{props.children}</Box>
          </Box>
        ),
        sub: (props) => (
          <Typography as="sub" {...props}>
            {props.children}
          </Typography>
        ),
      }}
      remappedAttributes={{ colspan: 'colSpan', noRelatedItem: 'null' }} // Used to remap attributes, if not present in this case, error will be thrown for colspan
    />
  )
}
