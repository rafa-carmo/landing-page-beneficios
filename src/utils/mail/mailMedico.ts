import { readFileSync } from 'fs'
import handlebars from 'handlebars'

import { mailTemplateDirectory, transporter } from '.'

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

  let info = await transporter.sendMail({
    to: 'email@email.com',
    subject: `Requisição de Assistencia funeral - ${name}`,
    html: htmlToSend
  })
}
