'use client'

import { useEffect, useState } from 'react'

function useWindow() {
  const [windowLocation, setWindowLocation] = useState<string>()
  const [windowTitle, setWindowTitle] = useState<string>()

  // Client-side hydration pattern: window object is only available after hydration
  // This intentionally sets state in useEffect to access browser APIs safely in SSR context
  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect -- SSR hydration pattern
    setWindowLocation(window.location.href)
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect -- SSR hydration pattern
    setWindowTitle(window.document.title)
  }, [])

  return { windowLocation, windowTitle }
}

export default useWindow
