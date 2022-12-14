import jwt from 'jwt-simple'
import type { NextApiRequest, NextApiResponse } from 'next'

import { sendMailAssistenciaFuneral } from '../../utils/mail/mailFuneral'

type Data = {
  error?: string
  token?: string
}

type QueryProps = {
  name: string
  cpf?: string
  dateBirth?: string
  telephone: string
  email: string
  planSelected: {
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
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    name,
    cpf,
    dateBirth,
    email,
    telephone,
    planSelected: plan,
    dependents,
    contract
  }: QueryProps = req.body

  if (!name) {
    return res.status(400).json({ error: 'name is required' })
  }
  if (!email) {
    return res.status(400).json({ error: 'email is required' })
  }
  if (!plan) {
    return res.status(400).json({ error: 'Plan is required' })
  }
  if (!contract) {
    return res.status(400).json({ error: 'Contract is required' })
  }
  const host = process.env.HOST || 'https://www.vivermaisbeneficios.com.br'
  // console.log(name, cpf, dateBirth, email, telephone, plan, dependents)

  const date = new Date(`${dateBirth} 00:00`)

  const day = date.getDate().toString().padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())

  const FormatedDateBirth = `${day}/${month}/${year}`

  const token = jwt.encode(
    {
      name,
      cpf,
      dateBirth: FormatedDateBirth,
      email,
      telephone,
      plan,
      dependents,
      contract
    },
    process.env.JWT_SECRET || 'pssd'
  )
  await sendMailAssistenciaFuneral({
    name,
    cpf,
    dateBirth,
    email,
    telephone,
    plan,
    dependents,
    host,
    token,
    contract
  })
  return res.status(200).json({ token })
  //   res.status(200).json({ name: 'John Doe' })
}
