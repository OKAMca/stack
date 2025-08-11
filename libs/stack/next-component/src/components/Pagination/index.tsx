import { Box, type TToken } from '@okam/stack-ui'
import type { DefaultError, QueryKey } from '@tanstack/react-query'
import { usePagination } from '../../providers/Pagination'
import PaginationRenderer from './components/Renderer'
import type { PaginationProps } from './interface'

const Pagination = <
  T extends TToken,
  Data = unknown,
  Error = DefaultError,
  Key extends QueryKey = QueryKey,
  PageParam = unknown,
>(
  props: PaginationProps<T, Data, Error, Key, PageParam>,
) => {
  const { children, themeName = 'pagination', tokens, customTheme, ...rest } = props
  const { data, getItemKey } = usePagination<Data, PageParam, Error>()
  const { pages, pageParams } = data

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme} {...rest}>
      <PaginationRenderer<T, Data, PageParam>
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
