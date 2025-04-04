'use client'

import { Button } from '@okam/stack-ui'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DraftModeButton() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const enableDraftMode = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/draft-mode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enable: true }),
      })

      if (response.ok) {
        // Refresh the page to show the admin bar
        router.refresh()
      } else {
        console.error('Failed to enable draft mode')
      }
    } catch (error) {
      console.error('Error enabling draft mode:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button tokens={{ color: 'primary' }} handlePress={enableDraftMode} isDisabled={isLoading}>
      {isLoading ? 'Enabling...' : 'Enable Draft Mode'}
    </Button>
  )
}
