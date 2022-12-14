import { readFileSync } from 'fs'
import handlebars from 'handlebars'
import path from 'path'

import { mailTemplateDirectory, transporter } from '.'
import { EmailsDocument, EmailsQuery } from '../../generated/graphql'
import { client } from '../../lib/urql'

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
  const source = readFileSync(
    mailTemplateDirectory + '/message.html',
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
  const emailSend =
    process.env.MAIL_USER || 'atendimento@vivermaisbeneficios.com.br'
  // const emailSend = process.env.MAIL_USER

  const request = await client.query(EmailsDocument, {}).toPromise()
  const emails: EmailsQuery = request.data
  const emailReceive = `${
    process.env.MAIL_EMAIL || 'atendimento@vivermaisbeneficios.com.br'
  },${emails.receiveEmails.map((email) => email.email).join(',')}`

  let info = await transporter.sendMail({
    from: emailSend,
    to: emailReceive,
    subject: `Mensagem do cliente - ${name}`,
    html: htmlToSend
  })
}
