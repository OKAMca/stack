import type { TDefaultComponent } from '@okam/stack-ui'

export interface TBaseRenderingNode extends TDefaultComponent {
  children: React.ReactNode
  attrs?: Record<string, number | string | undefined>
}

export type TRenderingNodes = { [key in keyof JSX.IntrinsicElements]?: (props: TBaseRenderingNode) => JSX.Element }
