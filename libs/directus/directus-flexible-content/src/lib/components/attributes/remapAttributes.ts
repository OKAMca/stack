import attributes from '.'

const remapAttributes = (
  mappedAttributes: Record<string, string> | undefined,
  attrs: Record<string, number | string | undefined>,
) => {
  return {
    ...Object.fromEntries(
      Object.entries(attrs).map(([key, value]) => {
        return [mappedAttributes?.[key] ?? attributes?.[key] ?? key, value]
      }),
    ),
  }
}

export default remapAttributes
