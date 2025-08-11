import { Box, type TToken } from '@okam/stack-ui'
import type { PaginationItemProps } from '../interface'

const PaginationItem = <T extends TToken = TToken>(props: PaginationItemProps<T>) => {
  const { themeName, tokens, customTheme, children, ...rest } = props

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme} {...rest}>
      {children}
    </Box>
  )
}

export default PaginationItem
