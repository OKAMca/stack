'use client'

import type { TButtonProps } from '@okam/stack-ui'
import { Button } from '@okam/stack-ui'
import { useRouter } from 'next/navigation'

export default function DraftModeButton({ handlePress, children }: TButtonProps) {
  const router = useRouter()
  return (
    <Button
      tokens={{ color: 'primary' }}
      handlePress={(e) => {
        handlePress?.(e)
        router.refresh()
      }}
    >
      {children}
    </Button>
  )
}
