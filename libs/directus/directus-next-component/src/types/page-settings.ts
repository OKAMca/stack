/* eslint-disable @typescript-eslint/naming-convention */
export type TPageSettings = {
  id: string
  belongs_to_collection?: string | null
  translations?: Array<{
    slug?: string | null
    title?: string | null
    path?: string | null
    languages_code?: { code: string } | null
  } | null> | null
  route?: {
    translations?: Array<{ route?: string | null } | null> | null
  } | null
}
