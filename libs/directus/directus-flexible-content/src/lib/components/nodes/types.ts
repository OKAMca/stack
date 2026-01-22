import type { TDefaultComponent } from '@okam/stack-ui'
import type { JSX, ReactNode } from 'react'

export interface TBaseRenderingNode extends TDefaultComponent {
  children: ReactNode
  attrs?: Record<string, number | string | boolean | undefined>
}

export type TRenderingNodes = {
  [_key in keyof JSX.IntrinsicElements]?: (_props: TBaseRenderingNode) => JSX.Element
}
