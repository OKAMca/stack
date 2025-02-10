import { Box, Popover, TagGroup, type TToken } from '@okam/stack-ui'
import { useFilterState } from '../../hooks/useFilterState'
import type { TFilterProps } from './interface'

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
