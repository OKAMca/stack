// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getJsonErrorResponse(data: any, status: number): Response {
  const headers = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'text/json; charset=UTF-8',
  }
  const body = JSON.stringify(data)
  return new Response(body, {
    status,
    headers,
  })
}
