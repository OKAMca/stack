import type { TDirectusVideoProps } from '../../components/DirectusVideo/interface'
import { getDirectusFile } from '../getDirectusFile'

/**
 * Wrapper for {@link getDirectusFile} for video assets. Videos need no image
 * transform params, so this only maps the props common to every Directus file.
 * @param props Directus video props
 * @returns Props ready to be passed to a `Video` component
 */
export function getDirectusVideo(props: TDirectusVideoProps) {
  return getDirectusFile(props, props.baseUrl, props.searchParams)
}
