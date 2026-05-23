import { NextRequest } from 'next/server'

const BOT_TOKEN =
  process.env.TELEGRAM_BOT_TOKEN ??
  '7862004029:AAFZ807gLMhUIzqjfh4DB62muUmzWv9JfrY'
const CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? '-4654232429'

type LeadBody = {
  text?: string
  parse_mode?: 'Markdown' | 'HTML'
}

export async function POST(request: NextRequest) {
  let body: LeadBody

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const text = body.text?.trim()
  if (!text) {
    return Response.json({ error: 'Message is required' }, { status: 400 })
  }

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text.slice(0, 4096),
        ...(body.parse_mode ? { parse_mode: body.parse_mode } : {}),
      }),
    },
  )

  const telegramData = (await telegramResponse.json()) as { ok?: boolean }

  if (!telegramResponse.ok || !telegramData.ok) {
    console.error('Telegram sendMessage failed:', telegramData)
    return Response.json({ error: 'Telegram API error' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
