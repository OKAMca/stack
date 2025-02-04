/* eslint-disable @typescript-eslint/naming-convention */

export interface TCategoriesTranslations {
  title?: string | null
}

export interface TCategories {
  id: string
  friendly_id?: string | null
  translations?: Array<TCategoriesTranslations | null> | null
  type?: TCategoryTypes | null
}

export interface TCategoryTypesTranslations {
  title?: string | null
}

export interface TCategoryTypes {
  id: string
  friendly_id?: string | null
  categories?: Array<TCategories | null> | null
  translations?: Array<TCategoryTypesTranslations | null> | null
}
