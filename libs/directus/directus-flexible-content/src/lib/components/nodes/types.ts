import type { TDefaultComponent } from '@okam/stack-ui'
import type * as React from 'react'

export interface TBaseRenderingNode extends TDefaultComponent {
  children: React.ReactNode
  attrs?: Record<string, number | string | boolean | undefined>
}

export type TRenderingNodes = {
  [_key in keyof React.JSX.IntrinsicElements]?: (_props: TBaseRenderingNode) => React.JSX.Element
}
