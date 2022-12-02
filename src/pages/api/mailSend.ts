// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { sendMailHome } from '../../utils/mail/mailer'

type Data = {
  error?: string
  name?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, telefone, subject, message } = req.body

  if (!name) {
    return res.status(400).json({ error: 'name is required' })
  }
  if (!email) {
    return res.status(400).json({ error: 'email is required' })
  }
  if (!message) {
    return res.status(400).json({ error: 'message is required' })
  }
  const host = req.headers.host || 'localhost'
  await sendMailHome({ name, email, telefone, subject, message, host })
  res.status(200).json({ name: 'John Doe' })
}
