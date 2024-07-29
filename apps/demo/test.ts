// eslint-disable-next-line func-names
module.exports = async function (data: any) {
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { language, collection, key } = data?.$trigger?.body
  const { from, to } = JSON.parse(language)

  const translations = data?.$last?.[0]

  const fromTranslations = translations?.find((t: any) => t.languages_code === from)
  const toTranslations = translations?.find((t: any) => t.languages_code === to)
  const documentToUpdateId = key[0]

  return {
    fromTranslations,
    toTranslations,
    documentToUpdateId,
    collection,
  }
}
