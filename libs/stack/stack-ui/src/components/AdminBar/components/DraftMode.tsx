'use client'

import { useEffect } from 'react'
import { useAdminBar } from '../../../providers/AdminBar'
import { useDraftMode } from '../../../providers/DraftMode'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'
import Box from '../../Box'
import Button from '../../Button'

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
    <Box themeName="flex" tokens={{ gap: 'medium', fullWidth: true, align: 'center', className: 'w-fit mx-0' }}>
      <Button
        themeName={`${themeName}.button`}
        tokens={{
          variant: 'primary',
          size: 'medium',
          width: 'fit',
          ...tokens,
        }}
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
