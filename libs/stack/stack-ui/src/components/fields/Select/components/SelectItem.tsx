import type { ReactElement } from 'react'
import { Item } from 'react-stately'
import type { TToken } from '../../../../providers/Theme/interface'
import type { TSelectItemProps } from '../interface'

const SelectItem = <T extends TToken>(props: TSelectItemProps<T>): ReactElement | null => {
  // @ts-expect-error This doesn't actually get rendered, it just serves to expose props to allow usage of select children server-side
  return <span {...props} />
}

// @ts-expect-error See https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Item.ts
SelectItem.getCollectionNode = Item.getCollectionNode

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const _SelectItem = SelectItem as <T extends TToken>(props: TSelectItemProps<T>) => JSX.Element

export default _SelectItem
