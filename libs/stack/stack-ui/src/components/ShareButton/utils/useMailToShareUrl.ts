'use client'

import generateUtmTags from './generateUtmTags'
import useWindow from './useWindow'

const useMailToShareUrl = (media: string, medium: string, urlToShare: string) => {
  const { windowLocation, windowTitle } = useWindow()

  const currentURL = urlToShare ?? windowLocation
  const utm = generateUtmTags(media, medium)
  const fullUrl = `${currentURL}${utm}`
  return `mailto:?to=&body=${windowTitle}%20${fullUrl}`
}

export default useMailToShareUrl
