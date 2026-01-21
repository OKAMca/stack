import type { JSONContent } from '@tiptap/core'
import type { EditorNodes } from './types'

function injectDataIntoContent(data: EditorNodes[] | undefined | null, content: JSONContent, primaryKeyField = 'id', itemField = 'item') {
  const toContentWithInjectedData = (jsonContent: JSONContent | null | undefined): JSONContent | null => {
    // Early return if no content to process
    if (jsonContent == null)
      return null
    // If no data to inject, return content unchanged
    if (data == null)
      return jsonContent
    if (
      (jsonContent.type === 'relation-mark' && jsonContent.attrs?.id)
      || (jsonContent.type === 'relation-block' && jsonContent.attrs?.id)
      || (jsonContent.type === 'relation-inline-block' && jsonContent.attrs?.id)
    ) {
      const relatedNode = data.find(node => node?.[primaryKeyField] === jsonContent.attrs?.id)?.[itemField]

      jsonContent.attrs.data = relatedNode
    }
    jsonContent.content?.map(toContentWithInjectedData)
    jsonContent.marks?.map(toContentWithInjectedData)
    return jsonContent
  }

  return toContentWithInjectedData(content)
}

export default injectDataIntoContent
