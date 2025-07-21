/* eslint-disable @typescript-eslint/naming-convention */
export interface PageSettingsTranslation {
  languages_code: {
    code: string
  }
  id: string
  page_settings_id: {
    belongs_to_collection: string
    belongs_to_key: string
  }
  title: string
  slug: string
  path: string
}
