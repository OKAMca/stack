export function normalizePath(path: string): string {
  const parts = path.split('/')

  const trimmedParts = parts.reduceRight<string[]>((acc, part) => {
    if (acc.length === 0 && part === '') {
      return acc
    }
    return [part, ...acc]
  }, [])

  return trimmedParts.join('/')
}
