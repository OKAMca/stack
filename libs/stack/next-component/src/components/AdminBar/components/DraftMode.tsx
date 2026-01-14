'use client'

import { Box, Button, type TDefaultComponent, type TToken } from '@okam/stack-ui'
import { useEffect } from 'react'
import { useAdminBar } from '../../../providers/AdminBar'
import { useDraftMode } from '../../../providers/DraftMode'

interface DraftModeProps<T = TToken> extends TDefaultComponent<T> {
  buttonLabel?: string
}

const DraftMode = ({
  themeName = 'adminBar',
  tokens,
  customTheme,
  buttonLabel = 'Disable Draft Mode',
}: DraftModeProps = {}) => {
  const { setError } = useAdminBar()
  const { isPending, error, isError, mutate } = useDraftMode()

  useEffect(() => {
    if (isError) {
      setError(error)
      return
    }
    setError(null)
  }, [error, isError, setError])

  return (
    <Box themeName={`${themeName}.draftMode`} tokens={tokens} customTheme={customTheme}>
      <Button
        themeName={`${themeName}.button`}
        tokens={tokens}
        customTheme={customTheme}
        handlePress={() => {
          mutate({ isEnabled: false })
        }}
        isDisabled={isPending}
      >
        {buttonLabel}
      </Button>
    </Box>
  )
}

export default DraftMode
