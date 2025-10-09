/* eslint-disable react-hooks/rules-of-hooks */
import useFacebookShareUrl from './useFacebookShareUrl'
import useLinkedinShareUrl from './useLinkedinShareUrl'
import useXShareUrl from './useXShareUrl'

const getShareUrl = (media: string, medium: string, shareUrl: string, text: string) => {
  const textParam = encodeURIComponent(text)
  switch (media) {
    case 'x':
      return useXShareUrl(media, medium, textParam, shareUrl)
    case 'linkedin':
      return useLinkedinShareUrl(media, medium, shareUrl)
    case 'facebook':
      return useFacebookShareUrl(media, medium, shareUrl)
    default:
      return undefined
  }
}

export default getShareUrl
