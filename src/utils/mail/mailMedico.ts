import { readFileSync } from 'fs'
import handlebars from 'handlebars'

import { mailTemplateDirectory, transporter } from '.'
import { EmailsDocument, EmailsQuery } from '../../generated/graphql'
import { client } from '../../lib/urql'

interface MailHomeProps {
  name: string
  cpf: string
  dateBirth: string
  telephone: string
  email: string
  plan: {
    name: string
    value: number
  }
  host: string
}

export async function sendMailMedicoOnline({
  name,
  cpf,
  dateBirth,
  email,
  telephone,
  plan,
  host
}: MailHomeProps) {
  const source = readFileSync(
    mailTemplateDirectory + '/message-register-medico-online.html',
    'utf-8'
  ).toString()

  const template = handlebars.compile(source)
  const replacements = {
    name,
    cpf: cpf || 'Não informado',
    dateBirth: dateBirth || 'Não informado',
    email,
    plan,
    telephone: telephone || 'Não informado',
    host
  }
  const htmlToSend = template(replacements)
  const emailSend =
    process.env.MAIL_USER || 'atendimento@vivermaisbeneficios.com.br'

  const request = await client.query(EmailsDocument, {}).toPromise()
  const emails: EmailsQuery = request.data
  const emailReceive = `${
    process.env.MAIL_EMAIL || 'atendimento@vivermaisbeneficios.com.br'
  },${emails.receiveEmails.map((email) => email.email).join(',')}`

  let info = await transporter.sendMail({
    from: emailSend,
    to: emailReceive,
    subject: `Requisição de Assistencia funeral - ${name}`,
    html: htmlToSend
  })
}
