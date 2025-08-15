import type { TToken } from '@okam/stack-ui'
import { Button } from '@okam/stack-ui'
import type { DefaultError } from '@tanstack/react-query'
import { useCallback } from 'react'
import type { PressEvent } from 'react-aria'
import { usePagination } from '../../../providers/Pagination'
import type { PaginationButtonProps } from '../interface'

const PaginationButton = <Data = unknown, PageParam = unknown, E = DefaultError, T extends TToken = TToken>(
  props: PaginationButtonProps<Data, PageParam, E, T>,
) => {
  const { themeName, tokens, customTheme, handlePageChange, handlePress: handlePressProp, ...rest } = props
  const pagination = usePagination<Data, PageParam, E>()
  const handlePress = useCallback(
    (e: PressEvent) => {
      handlePageChange(pagination)
      handlePressProp?.(e)
    },
    [handlePageChange, pagination, handlePressProp],
  )
  return (
    <Button
      themeName={`${themeName}.button`}
      tokens={tokens}
      customTheme={customTheme}
      {...rest}
      handlePress={handlePress}
    />
  )
}

export default PaginationButton
