import type { SerializedStyles } from '@emotion/react'
import type { AriaTabListProps } from '@react-types/tabs'
import type React from 'react'
import type { TwStyle } from 'twin.macro'

export type MenuProps = {
  children: React.ReactNode
  beforeTabContent?: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TransitonAnimation: (props: never) => JSX.Element
  menuContainerStyle?: SerializedStyles | TwStyle | undefined
  innerDivStyle?: SerializedStyles | TwStyle | undefined
  divWrapperStyle?: SerializedStyles | TwStyle | undefined
  tabWrapperStyle?: SerializedStyles | TwStyle | undefined
  id: string
}

export type TMenuProps = AriaTabListProps<MenuProps> & MenuProps

export default TMenuProps
