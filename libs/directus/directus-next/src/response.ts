export function getJsonErrorResponse(data: unknown, status: number): Response {
  const headers = {

    'Content-Type': 'text/json; charset=UTF-8',
  }
  const body = JSON.stringify(data)
  return new Response(body, {
    status,
    headers,
  })
}
