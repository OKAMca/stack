'use client'

import { Box, PopoverButton, TagGroup, type TToken } from '@okam/stack-ui'
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
  const {
    label,
    children,
    items,
    defaultSelectedKeys,
    selectedKeys,
    selectionBehavior,
    selectionMode = 'multiple',
    options,
    description,
    disabledKeys,
    disallowEmptySelection,
    errorMessage,
    onRemove,
    onSelectionChange,
    themeName = 'filter',
    tokens,
    customTheme,
    type = 'dialog',
    placement = 'bottom',
    ...rest
  } = props

  const state = useFilterState({ ...props, selectionMode })

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme}>
      <PopoverButton
        themeName={`${themeName}.popover`}
        tokens={tokens}
        label={label}
        type={type}
        placement={placement}
        {...rest}
      >
        <TagGroup
          themeName={`${themeName}.tagGroup`}
          tokens={tokens}
          {...rest}
          items={items}
          selectionBehavior={selectionBehavior}
          selectionMode={selectionMode}
          description={description}
          disallowEmptySelection={disallowEmptySelection}
          errorMessage={errorMessage}
          {...state}
        >
          {children}
        </TagGroup>
      </PopoverButton>
    </Box>
  )
}

export default Filter
