function checkObjectProperty(obj: Record<string, unknown>, property: string) {
  const maybeObj = obj[property]

  if (maybeObj != null && typeof maybeObj === 'object' && Object.prototype.hasOwnProperty.call(obj, property)) {
    return maybeObj as Record<string, unknown>
  }
  return null
}

export default checkObjectProperty
