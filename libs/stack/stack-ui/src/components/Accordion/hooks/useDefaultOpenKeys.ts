import type { TAccordionProps } from '../interface'

/**
 * Returns the keys of all `AccordionItem` components that have should be opened by default
 */
export default function useDefaultOpen({ children }: TAccordionProps) {
  const childrenArray = Array.isArray(children) ? children : [children]

  const defaultOpenKeys = childrenArray.reduce<string[]>((selectedKeys, item) => {
    const { props: itemProps, key } = item
    const { defaultOpen } = itemProps ?? {}
    if (!defaultOpen || !key) return selectedKeys
    selectedKeys.push(key)
    return selectedKeys
  }, [])

  return defaultOpenKeys
}
