import { readFileSync } from 'fs'
import handlebars from 'handlebars'
import nodemailer from 'nodemailer'
import { join } from 'path'

interface MailHomeProps {
  name: string
  email: string
  telefone?: string
  subject?: string
  message: string
  host: string
}

export async function sendMailHome({
  name,
  email,
  telefone,
  subject,
  message,
  host
}: MailHomeProps) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '27ab94f52ef428',
      pass: '0db4129367a81e'
    }
  })

  const source = readFileSync(
    join('src', 'utils', 'mail', 'templates', 'message.html'),
    'utf-8'
  ).toString()
  const template = handlebars.compile(source)
  const replacements = {
    name,
    email,
    message,
    telefone: telefone || 'Não informado',
    subject: subject || 'Não informado',
    host
  }
  const htmlToSend = template(replacements)

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sistema autmoatico" <foo@example.com>',
    to: 'email@email.com',
    subject: `Mensagem do cliente - ${name}`,
    html: htmlToSend
  })
}
