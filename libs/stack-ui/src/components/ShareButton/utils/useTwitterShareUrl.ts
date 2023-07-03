import generateUtmTags from './generateUtmTags'
import useWindow from './useWindow'

const useTwitterShareUrl = (media: string, medium: string, urlToShare: string) => {
  const { windowLocation } = useWindow()

  const currentURL = urlToShare ?? windowLocation
  const utm = generateUtmTags(media, medium)
  const fullUrl = `${currentURL}${utm}`
  return `https://twitter.com/intent/tweet?text=${fullUrl}`
}

export default useTwitterShareUrl
