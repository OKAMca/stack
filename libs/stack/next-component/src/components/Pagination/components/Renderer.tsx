import { Box, type TToken } from '@okam/stack-ui'
import type { PaginationRendererProps } from '../interface'
import PaginationItem from './Item'

/**
 * Controlled component that only gets its props passed and does **not** call the `usePagination` context getter hook.
 * This component can be used more extensively this way.
 */
const PaginationRenderer = <T extends TToken = TToken, Data = unknown, PageParam = unknown>(
  props: PaginationRendererProps<T, Data, PageParam>,
) => {
  const { children, pages, pageParams, getItemKey, themeName, tokens, customTheme, ...rest } = props
  return (
    <Box themeName={`${themeName}.list`} tokens={tokens} customTheme={customTheme} {...rest}>
      {pages.map((page, index) => {
        return (
          <PaginationItem
            themeName={`${themeName}.item`}
            tokens={tokens}
            customTheme={customTheme}
            {...rest}
            key={getItemKey(page, index)}
          >
            {children(page)}
          </PaginationItem>
        )
      })}
    </Box>
  )
}

export default PaginationRenderer
