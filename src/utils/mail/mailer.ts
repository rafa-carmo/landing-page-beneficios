import { readFileSync } from 'fs'
import handlebars from 'handlebars'
import path from 'path'

import { mailTemplateDirectory, transporter } from '.'

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

  let info = await transporter.sendMail({
    to: 'email@email.com',
    subject: `Mensagem do cliente - ${name}`,
    html: htmlToSend
  })
}
