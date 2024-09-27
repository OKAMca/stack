import type { JSONContent } from '@tiptap/core'
import type { EditorNodes } from './types'

const injectDataIntoContent = (
  data: EditorNodes[] | undefined | null,
  content: JSONContent,
  primaryKeyField = 'id',
  itemField = 'item',
) => {
  const toContentWithInjectedData = (jsonContent: JSONContent) => {
    if (!data && jsonContent) return jsonContent
    if (!jsonContent || !data) return null
    if (
      (jsonContent.type === 'relation-mark' && jsonContent.attrs?.id) ||
      (jsonContent.type === 'relation-block' && jsonContent.attrs?.id) ||
      (jsonContent.type === 'relation-inline-block' && jsonContent.attrs?.id)
    ) {
      const relatedNode = data.find((node) => node?.[primaryKeyField] === jsonContent.attrs?.id)?.[itemField]
      // eslint-disable-next-line no-param-reassign
      jsonContent.attrs.data = relatedNode
    }
    jsonContent.content?.map(toContentWithInjectedData)
    jsonContent.marks?.map(toContentWithInjectedData)
    return jsonContent
  }

  return toContentWithInjectedData(content)
}

export default injectDataIntoContent
