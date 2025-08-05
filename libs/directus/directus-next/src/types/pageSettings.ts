/* eslint-disable @typescript-eslint/naming-convention */
export interface PageSettingsTranslation {
  languages_code?:
    | {
        code?: string | null | undefined
      }
    | null
    | undefined
  id: string
  page_settings_id?:
    | {
        belongs_to_collection?: string | null | undefined
        belongs_to_key?: string | null | undefined
      }
    | null
    | undefined
  title?: string | null | undefined
  slug?: string | null | undefined
  path?: string | null | undefined
}
