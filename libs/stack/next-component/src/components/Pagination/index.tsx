import { Box, type TToken } from '@okam/stack-ui'
import { usePagination } from '../../providers/Pagination'
import PaginationRenderer from './components/Renderer'
import type { PaginationProps } from './interface'

const Pagination = <Data = unknown, PageParam = unknown, T extends TToken = TToken>(
  props: PaginationProps<Data, PageParam, T>,
) => {
  const { children, themeName = 'pagination', tokens, customTheme, ...rest } = props
  const { data, getItemKey } = usePagination<Data, PageParam>()
  const { pages, pageParams } = data

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme} {...rest}>
      <PaginationRenderer<Data, PageParam, T>
        pages={pages}
        pageParams={pageParams}
        getItemKey={getItemKey}
        themeName={themeName}
        tokens={tokens}
        customTheme={customTheme}
        {...rest}
      >
        {children}
      </PaginationRenderer>
    </Box>
  )
}

export default Pagination
