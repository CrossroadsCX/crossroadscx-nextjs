// Contact form submissions are emailed to hello@ via Resend (https://resend.com/docs/api-reference/emails/send-email)
import type { NextApiRequest, NextApiResponse } from 'next'

type ErrorResponse = { error: string }
type SuccessResponse = { message: string }

type Response = ErrorResponse | SuccessResponse

const TO_EMAIL = 'hello@crossroadscx.com'
const FROM_EMAIL = 'CrossroadsCX Website <website@send.crossroadscx.com>'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const field = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body ?? {}

  // Honeypot: real visitors never see or fill this field, so quietly accept and drop bot submissions
  if (field(body.company, 200)) {
    return res.status(200).json({ message: 'Contact Submitted Successfully' })
  }

  const name = field(body.name, 200)
  const email = field(body.email, 320)
  const phone = field(body.phone, 50)
  const message = field(body.message, 5000)

  if (!name || !EMAIL_PATTERN.test(email) || !message) {
    return res.status(400).json({ error: 'Please include your name, a valid email address, and a message.' })
  }

  const { RESEND_API_KEY } = process.env

  if (!RESEND_API_KEY) {
    console.error('Contact form: RESEND_API_KEY is not set')
    return res.status(500).json({ error: 'Could not send contact submission.' })
  }

  const html = `
    <h1>Contact Us Submission</h1>
    <hr>
    <ul>
      <li>Name: ${escapeHtml(name)}</li>
      <li>Email: ${escapeHtml(email)}</li>
      <li>Phone: ${escapeHtml(phone || 'n/a')}</li>
    </ul>
    <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
  `
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'n/a'}\n\n${message}`

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New contact: ${name.replace(/\s+/g, ' ')}`,
        html,
        text,
      }),
    })

    if (!response.ok) {
      console.error(`Contact form: Resend failed (${response.status})`, await response.text())
      return res.status(502).json({ error: 'Could not send contact submission.' })
    }

    return res.status(200).json({ message: 'Contact Submitted Successfully' })
  } catch (err) {
    console.error('Contact form: request to Resend failed', err)
    return res.status(502).json({ error: 'Could not send contact submission.' })
  }
}
