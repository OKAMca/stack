'use client'

import generateUtmTags from './generateUtmTags'
import useWindow from './useWindow'

const useLinkedinShareUrl = (media: string, medium: string, urlToShare: string) => {
  const { windowLocation } = useWindow()

  const currentURL = urlToShare || windowLocation
  const utm = generateUtmTags(media, medium)
  const fullUrl = `${currentURL}${utm}`
  return `https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}`
}

export default useLinkedinShareUrl
