interface FlowTriggerBody {
  language?: string
  collection?: string
  key?: Array<string | number>
}

interface FlowTranslation {
  languages_code?: string | null
  [key: string]: unknown
}

interface FlowData {
  $trigger?: {
    body?: FlowTriggerBody
  }
  $last?: Array<FlowTranslation[] | undefined>
}

module.exports = function (data: FlowData) {
  const { language, collection, key } = data?.$trigger?.body ?? {}
  const { from, to } = (language != null && language !== '') ? (JSON.parse(language) as { from?: string, to?: string }) : {}

  const translations = data?.$last?.[0]

  const fromTranslations = translations?.find(t => t.languages_code === from)
  const toTranslations = translations?.find(t => t.languages_code === to)
  const documentToUpdateId = Array.isArray(key) ? key[0] : undefined

  return {
    fromTranslations,
    toTranslations,
    documentToUpdateId,
    collection,
  }
}
