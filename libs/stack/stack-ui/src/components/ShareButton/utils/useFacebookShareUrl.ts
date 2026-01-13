'use client'

import generateUtmTags from './generateUtmTags'
import useWindow from './useWindow'

const useFacebookShareUrl = (media: string, medium: string, urlToShare: string) => {
  const { windowLocation, windowTitle } = useWindow()

  const currentURL = urlToShare || windowLocation
  const utm = generateUtmTags(media, medium)
  const fullUrl = `${currentURL}${utm}`
  return `https://www.facebook.com/sharer.php?u=${fullUrl}&t=${windowTitle}`
}

export default useFacebookShareUrl
