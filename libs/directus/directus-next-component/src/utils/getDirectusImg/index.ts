import type { Nullable } from '@okam/stack-ui'
import type { TDirectusImgProps } from '../../components/DirectusImg/interface'
import { getDirectusFile } from '../getDirectusFile'

/**
 * Builds the image-only Directus transform params — focal point, intrinsic
 * dimensions and `fit` — that image loaders (e.g. `imgixImageLoader`) read back
 * off the `src` URL.
 *
 * Params are kept in Directus format; mapping them to a CDN's own format (imgix,
 * etc.) is the loader's responsibility. Any `searchParams` passed on the props
 * are merged in after the derived ones.
 */
function getDirectusImgSearchParams(props: TDirectusImgProps): URLSearchParams {
  const { focal_point_x: focalPointX, focal_point_y: focalPointY, width, height, fit = 'cover', searchParams } = props

  const imgSearchParams = ([
    ['focal_point_x', focalPointX],
    ['focal_point_y', focalPointY],
    ['width', width],
    ['height', height],
    ['fit', fit],
  ] as const).flatMap(([key, value]) => (value != null ? [[key, value.toString()]] : []))

  return new URLSearchParams([...imgSearchParams, ...(searchParams ?? [])])
}

/**
 * Wrapper for {@link getDirectusFile} for image assets. Appends the image-only
 * transform params (focal point, intrinsic dimensions, `fit`) to the asset URL
 * so image loaders can pick them up, then maps the common file props.
 * @param props Directus image props
 * @returns Props ready to be passed to `next/image` `Image` component
 */
export function getDirectusImg(props: Nullable<TDirectusImgProps>) {
  const searchParams = props != null ? getDirectusImgSearchParams(props) : undefined
  return getDirectusFile(props, props?.baseUrl, searchParams)
}
