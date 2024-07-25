/* eslint-disable @typescript-eslint/naming-convention */
export type TFiles = {
  id: string
  filename_disk?: string | null
  filename_download?: string | null
  /**
   * @deprecated
   */
  filenameDownload?: string | null
  title?: string | null
  type?: string | null
  width?: number | null
  height?: number | null
  duration?: number | null
  embed?: string | null
  description?: string | null
  focal_point_x?: number | null
  focal_point_y?: number | null
}
