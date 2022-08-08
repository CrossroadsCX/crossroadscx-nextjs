// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import SIBApi from '@sendinblue/client'
import { types } from 'util'
import { isNativeError } from 'util/types'

type ContactData = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

type ErrorResponse = { error: string }
type SuccessResponse = { message: string }

type Response = ErrorResponse | SuccessResponse

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const { name, email, phone, message } = req.body

    const { SIB_API_KEY } = process.env

    if (!SIB_API_KEY) {
      return res.status(500).json({ message: 'Could not send contact submission. SIB API key missing.'})
    }

    const api = new SIBApi.TransactionalEmailsApi()
    api.setApiKey(SIBApi.TransactionalEmailsApiApiKeys.apiKey, SIB_API_KEY)

    const sender = new SIBApi.SendSmtpEmailSender()
    sender.email = 'hello@crossroadscx.com'

    const toEmail = new SIBApi.SendSmtpEmailTo()
    toEmail.email = 'hello@crossroadscx.com'

    const sendInfo = new SIBApi.SendSmtpEmail()
    sendInfo.to = [toEmail]
    sendInfo.subject = 'New Contact Us Submission'

    sendInfo.htmlContent = `
      <!DOCTYPE html>
      <html lang="en">

      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Contact Us Submission</title>
      </head>

      <body>
          <div class="container">
              <h1>Contact Us Submission</h1>
              <hr>
              <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${phone}</li>
                <li>Message: ${message}</li>
              </ul>
          </div>
      </body>
      </html>
    `
    const { response, body } = await api.sendTransacEmail(sendInfo)

    // If there was an error sending the message
    if (response.statusCode !== 200) {
      const { statusCode, statusMessage } = response
      return res.status(500).json({ error: `SIB message failed to send (${statusCode}): ${statusMessage}`})
    }

    console.log(req.body)
    return res.status(200).json({ message: 'Contact Submitted Successfully' })
  } catch (err) {
    console.error(err)
    if (isNativeError(err)) {
      return res.status(500).json({ error: err.message })
    }
    return res.status(500).json({ error: 'Unknown error'})
  }

}
