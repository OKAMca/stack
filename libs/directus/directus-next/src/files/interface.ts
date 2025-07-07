/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
export type TFiles = {
  id?: string | null
  title?: string | null
  description?: string | null
  tags?: any | null
  location?: string | null
  storage?: string | null
  focal_point_divider?: string | null
  focal_point_x?: number | null
  focal_point_y?: number | null
  filename_disk?: string | null
  filename_download?: string | null
  type?: string | null
  width?: number | null
  height?: number | null
  duration?: number | null
  embed?: string | null
  caption?: string | null
  thumbhash?: string | null
  /**
   * @deprecated Use `filename_download` instead
   */
  filenameDownload?: string | null
}
