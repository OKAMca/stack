'use client'

import { useEffect, useState } from 'react'

const useWindow = () => {
  const [windowLocation, setWindowLocation] = useState<string>()
  const [windowTitle, setWindowTitle] = useState<string>()

  useEffect(() => {
    setWindowLocation(window.location.href)
    setWindowTitle(window.document.title)
  }, [])

  return { windowLocation, windowTitle }
}

export default useWindow
