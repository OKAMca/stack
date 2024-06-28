'use server'

import { Node } from '@tiptap/core'
import React from 'react'
import type {
  JSONContent,
  Extensions,
  ReactRelationBlockSerializers,
  ReactComponentSerializers,
} from '../../functions/types'
import RenderNodes from '../RenderNodes'
import extensions from './extensions'

interface FlexibleEditorContentProps {
  content: JSONContent | null
  serializers?: Extensions
  componentSerializers?: ReactComponentSerializers
  relationBlocks?: ReactRelationBlockSerializers
}

const FlexibleEditorContent = (props: FlexibleEditorContentProps) => {
  const { content, serializers, componentSerializers, relationBlocks } = props

  // `.slice(0)` to clone the extensions array
  const effectiveSerializers = serializers ?? [...extensions] ?? []

  const relationBlockSerializer = Node.create({
    name: 'relation-block',
    renderHTML({ node, HTMLAttributes }) {
      if (relationBlocks) {
        const test = relationBlocks?.map(({ collection, component }) => {
          if (HTMLAttributes.collection === collection) {
            return [component, HTMLAttributes, 0]
          }
          return null
        })
        return test
      }

      // eslint-disable-next-line
      return [node.type, HTMLAttributes, 0] as any
    },
  })

  // console.log(relationBlockSerializer, 'relationBlockSerializer')

  effectiveSerializers.push(relationBlockSerializer)

  if (!content) {
    return null
  }

  return (
    <RenderNodes content={content} serializers={effectiveSerializers} componentSerializers={componentSerializers} />
  )
}

export default FlexibleEditorContent
