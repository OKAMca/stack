import type { TAccordionProps } from '../interface'

/**
 * Returns the keys of all `AccordionItem` components that have should be opened by default
 */
export default function useDefaultExpandedKeys({ children }: TAccordionProps) {
  const childrenArray = Array.isArray(children) ? children : [children]

  const defaultExpandedKeys = childrenArray.reduce<string[]>((selectedKeys, item) => {
    const { props: itemProps, key } = item
    const { defaultIsOpen } = itemProps ?? {}
    if (!defaultIsOpen || !key) return selectedKeys
    selectedKeys.push(key)
    return selectedKeys
  }, [])

  return defaultExpandedKeys
}
