import { Box, type TToken } from '@okam/stack-ui'
import type { PaginationRendererProps } from '../interface'

/**
 * Controlled component that only gets its props passed and does **not** call the `usePagination` context getter hook.
 * This component can be used more extensively this way.
 */
const PaginationRenderer = <Data = unknown, PageParam = unknown, T extends TToken = TToken>(
  props: PaginationRendererProps<Data, PageParam, T>,
) => {
  const { children, pages, pageParams, getItemKey, themeName, tokens, customTheme, ...rest } = props
  return (
    <Box themeName={`${themeName}.list`} tokens={tokens} customTheme={customTheme} {...rest}>
      {pages.map((page, index) => {
        return (
          <Box
            themeName={`${themeName}.item.wrapper`}
            tokens={tokens}
            customTheme={customTheme}
            {...rest}
            key={getItemKey(page, index)}
          >
            {children({ page, pageParam: pageParams[index], themeName: `${themeName}.item`, tokens })}
          </Box>
        )
      })}
    </Box>
  )
}

export default PaginationRenderer
