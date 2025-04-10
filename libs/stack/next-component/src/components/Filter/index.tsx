import { Box, Popover, TagGroup, type TToken } from '@okam/stack-ui'
import { useFilterState } from '../../hooks/useFilterState'
import type { TFilterProps } from './interface'

/**
 * ### Filter component for URL search params filtering.
 *
 * Format: `?{{props.id}}={{props.selectedKeys}}` where `selectedKeys` is a comma-separated list of all currently selected keys
 * @param props.selectedKeys - The currently selected keys. Leave empty for the Filter component to be uncontrolled, or pass a `Key[]` for controlled behavior.
 * @param props.onSelectionChange - The callback function that is called when the selection changes. Pass a function that updates the `selectedKeys` state if you are using controlled behavior.
 *
 * @example
 * #### Controlled state
 * ```tsx
 * const [selectedKeys, setSelectedKeys] = useState<Key[]>([])
 *
 * <Filter id="shape" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
 *   <Item key="circle">Circle</Item>
 *   <Item key="square">Square</Item>
 *   <Item key="triangle">Triangle</Item>
 * </Filter>
 * ```
 *
 * @returns
 */
const Filter = <T extends TToken = TToken>(props: TFilterProps<T>) => {
  const { label, children, themeName = 'filter', ...rest } = props
  const state = useFilterState(props)

  return (
    <Box themeName={`${themeName}.wrapper`}>
      <Popover themeName={`${themeName}.popover`} label={label} placement="bottom">
        <TagGroup themeName={`${themeName}.tagGroup`} {...rest} {...state}>
          {children}
        </TagGroup>
      </Popover>
    </Box>
  )
}

export default Filter
