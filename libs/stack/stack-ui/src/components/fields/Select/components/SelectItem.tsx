import type { ReactElement } from 'react'
import { Item } from 'react-stately'
import type { TToken } from '../../../../providers/Theme/interface'
import type { TSelectItemProps } from '../interface'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectItem = <T extends TToken>(props: TSelectItemProps<T>): ReactElement | null => {
  return null
}

// @ts-expect-error See https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Item.ts
SelectItem.getCollectionNode = Item.getCollectionNode

/**
 * @deprecated Use `Item` from `react-stately` instead
 */
// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const _SelectItem = SelectItem as <T extends TToken>(props: TSelectItemProps<T>) => JSX.Element

export default _SelectItem
