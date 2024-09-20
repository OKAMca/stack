import type { ITheme } from 'survey-core'

export interface TDirectusSurveyProps {
  formConfigId: string
  schema: JsonObject
  locale?: string
  versionDate?: string
  fieldMap?: JsonObject
  additionalData?: JsonObject
  customCSS?: { [key: string]: string | { [key: string]: string } }
  theme?: ITheme
  directusUrl?: string
  directusApiKey?: string
}

export type JsonValue = string | number | boolean | JsonObject | JsonArray
export interface JsonObject {
  [key: string]: JsonValue
}

type JsonArray = Array<JsonValue>
