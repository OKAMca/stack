'use client'

import type { ReactNode } from 'react'
import { Button } from '@okam/stack-ui'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

interface DraftModeButtonProps {
  action: () => Promise<void>
  children: ReactNode
}

export default function DraftModeButton({ action, children }: DraftModeButtonProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <Button
      tokens={{ color: 'primary' }}
      isDisabled={isPending}
      handlePress={() => {
        startTransition(async () => {
          await action()
          router.refresh()
        })
      }}
    >
      {children}
    </Button>
  )
}
