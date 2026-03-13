import { NextRequest } from 'next/server'

/**
 * Возвращает IP клиента из заголовков (same-origin, без CORS).
 * Используется формами вместо api.ipify.org, чтобы не блокировалось защитой от отслеживания.
 */
export async function GET(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(/,/)[0].trim() : request.headers.get('x-real-ip') ?? request.ip ?? ''
  return Response.json({ ip })
}
