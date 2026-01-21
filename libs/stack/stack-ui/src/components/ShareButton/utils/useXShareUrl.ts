'use client'

import generateUtmTags from './generateUtmTags'
import useWindow from './useWindow'

function useXShareUrl(media: string, medium: string, textParam: string, urlToShare: string) {
  const { windowLocation } = useWindow()

  const currentURL = urlToShare || windowLocation
  const utm = generateUtmTags(media, medium)
  const fullUrl = `${currentURL}${utm}`
  return `https://X.com/intent/tweet/?text=${textParam}&url=${fullUrl}`
}

export default useXShareUrl
