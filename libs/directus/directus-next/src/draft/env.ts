export function getDraftSecretDefault(): string {
  // eslint-disable-next-line ts/prefer-nullish-coalescing, ts/strict-boolean-expressions -- empty string env var should fallback to default
  return process.env.NEXT_API_DRAFT_SECRET || ''
}
