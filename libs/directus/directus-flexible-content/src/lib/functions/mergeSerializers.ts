import type { Attrs, ComponentSerializers, Extensions } from './types'
import { Mark, Node } from '@tiptap/core'

function mergeSerializers<T>(serializers: Extensions, componentSerializers: ComponentSerializers<T>): Extensions {
  const compSerializers = componentSerializers.map((item) => {
    const nodeType = item.type === 'mark' ? Mark : Node

    return nodeType.create({
      name: item.name,

      renderHTML({ HTMLAttributes }: { HTMLAttributes: Attrs }) {
        if (item.render != null)
          return [...item.render(HTMLAttributes), 0] as [string, Attrs, number]

        const element = (item.component ?? (item.type === 'mark' ? 'span' : 'div')) as string
        return [element, HTMLAttributes, 0] as [string, Attrs, number]
      },
    })
  })

  const componentSerializerNames = compSerializers.map(({ name }) => name)

  const sers = serializers.filter(item => !componentSerializerNames.includes(item.name))

  return [...sers, ...compSerializers] as Extensions
}

export default mergeSerializers
