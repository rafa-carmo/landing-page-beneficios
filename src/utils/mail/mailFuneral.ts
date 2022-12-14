import { readFileSync } from 'fs'
import handlebars from 'handlebars'
import path from 'path'

import { mailTemplateDirectory, transporter } from '.'
import { EmailsDocument, EmailsQuery } from '../../generated/graphql'
import { client } from '../../lib/urql'

interface MailHomeProps {
  name: string
  cpf?: string
  dateBirth?: string
  telephone: string
  email: string
  plan: {
    age: string
    type: string
    value: number
  }
  dependents: {
    quantity: number
    age: string
    value: number
  }[]
  contract: string
  host: string
  token: string
}

export async function sendMailAssistenciaFuneral({
  name,
  cpf,
  dateBirth,
  email,
  telephone,
  plan,
  dependents,
  host,
  token
}: MailHomeProps) {
  const source = readFileSync(
    mailTemplateDirectory + '/message-register-asssistencia-funeral.html',
    'utf-8'
  ).toString()

  const template = handlebars.compile(source)
  const replacements = {
    name,
    cpf: cpf || 'Não informado',
    dateBirth: dateBirth || 'Não informado',
    email,
    plan,
    dependents,
    telephone: telephone || 'Não informado',
    host,
    token
  }
  const htmlToSend = template(replacements)
  const emailSend =
    process.env.MAIL_USER || 'atendimento@vivermaisbeneficios.com.br'

  const request = await client.query(EmailsDocument, {}).toPromise()
  const emails: EmailsQuery = request.data
  const emailReceive = `${
    process.env.MAIL_EMAIL || 'atendimento@vivermaisbeneficios.com.br'
  },${emails.receiveEmails.map((email) => email.email).join(',')}`

  console.log(emailSend)
  let info = await transporter.sendMail({
    from: emailSend,
    to: emailReceive,
    subject: `Requisição de Assistencia funeral - ${name}`,
    html: htmlToSend
  })
}
