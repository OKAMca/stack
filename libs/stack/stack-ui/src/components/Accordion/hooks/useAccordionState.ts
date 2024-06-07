import { useTreeState } from 'react-stately'
import type { AccordionProps } from '../interface'

/**
 * Wraps react stately's `useTreeState` hook while automatically setting expanded keys props
 * to selected keys props for convenience.
 *
 * Also sets `defaultSelectedKeys` and `defaultExpandedKeys` based on the children's props
 *
 * If the expanded keys props are set, they will act like the regular `useTreeState` hook
 */
export default function useAccordionState(params: AccordionProps) {
  const {
    children,
    defaultSelectedKeys: propDefaultSelectedKeys,
    selectionMode = 'single',
    selectedKeys,
    onSelectionChange,
    ...rest
  } = params

  const childrenArray = Array.isArray(children) ? children : [children]

  const defaultOpenKeys =
    propDefaultSelectedKeys ??
    childrenArray.reduce<string[]>((openKeys, item) => {
      if (!item) return openKeys
      const { props: itemProps, key } = item
      const { defaultOpen } = itemProps ?? {}
      if (!defaultOpen || !key) return openKeys
      openKeys.push(key)
      return openKeys
    }, [])

  const state = useTreeState({
    children,
    selectionMode,
    defaultExpandedKeys: defaultOpenKeys,
    defaultSelectedKeys: defaultOpenKeys,
    expandedKeys: selectedKeys,
    selectedKeys,
    onSelectionChange,
    ...rest,
  })

  return state
}
