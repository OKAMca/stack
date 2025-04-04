'use client'

import { useState } from 'react'
import { useEvent } from 'react-use'

function getHash() {
  if (typeof window === 'undefined') return ''
  return window.location.hash
}

/**
 * A hook that lets you read the current URL's hash.
 *
 * @returns The current `window.location.hash`, including the leading `#` character.
 */
export function useHash() {
  const defaultHash = getHash()
  const [hash, setHash] = useState(defaultHash)

  const handleHashChangeEvent = ({ newURL }: HashChangeEvent) => {
    if (!URL.canParse(newURL)) return

    const { hash: newHash } = new URL(newURL)
    if (!newHash || newHash === hash) return

    setHash(newHash)
  }

  useEvent('hashchange', handleHashChangeEvent)

  return hash
}
