import type { TDefaultComponent } from '@okam/stack-ui'
import type React from 'react'

export interface TBaseRenderingNode extends TDefaultComponent {
  children: React.ReactNode
  attrs?: Record<string, number | string | boolean | undefined>
}

export type TRenderingNodes = {
  [key in keyof React.JSX.IntrinsicElements]?: (props: TBaseRenderingNode) => React.JSX.Element
}
