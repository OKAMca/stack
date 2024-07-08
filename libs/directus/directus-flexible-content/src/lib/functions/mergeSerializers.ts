import { Node, Mark } from '@tiptap/core'
import type { Extensions, ComponentSerializers } from './types'

const mergeSerializers = <T>(serializers: Extensions, componentSerializers: ComponentSerializers<T>): Extensions => {
  const compSerializers = componentSerializers.map((item) => {
    const nodeType = item.type === 'mark' ? Mark : Node

    return nodeType.create({
      name: item.name,
      // eslint-disable-next-line
      renderHTML({ HTMLAttributes }) {
        // eslint-disable-next-line
        if (item.render) return [...item.render(HTMLAttributes), 0] as any

        const element = item.component ?? (item.type === 'mark' ? 'span' : 'div')
        // eslint-disable-next-line
        return [element, HTMLAttributes, 0] as any
      },
    })
  })

  const componentSerializerNames = compSerializers.map(({ name }) => name)

  const sers = serializers.filter((item) => componentSerializerNames.indexOf(item.name) < 0)

  return [...sers, ...compSerializers] as Extensions
}

export default mergeSerializers
