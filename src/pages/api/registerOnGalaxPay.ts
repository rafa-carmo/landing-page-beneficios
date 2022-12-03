import type { NextApiRequest, NextApiResponse } from 'next'

import { getAPIClient } from '../../services/axios'
import { sendMailMedicoOnline } from '../../utils/mail/mailMedico'

type ResponseData = {
  error?: string
  creditFlag?: string
}

type DataProps = {
  name: string
  cpf: string
  birthDate: string
  email: string
  telephone: string
  cep: string
  number: string
  selectedPlan: {
    id: number
    title: string
    value: number
  }
  card: {
    hash: string
    name: string
    number: string
    expiresAt: string
    cvv: string
  }
  address: {
    state: string
    city: string
    neighborhood: string
    street: string
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const {
    name,
    cpf,
    email,
    telephone,
    birthDate,
    cep,
    number,
    selectedPlan,
    card,
    address
  }: DataProps = req.body
  const host = req.headers.host || 'localhost'

  const register = {
    planGalaxPayId: selectedPlan.id,
    firstPayDayDate: new Date(Date.now()).toISOString().split('T')[0],
    mainPaymentMethodId: 'creditcard',
    Customer: {
      name,
      document: cpf.replace('.', '').replace('-', ''),
      emails: [email],
      Address: {
        zipCode: cep.replace('-', ''),
        street: address.street,
        number,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state
      }
    },
    PaymentMethodCreditCard: {
      Card: card,
      preAuthorize: false
    }
  }

  await (await getAPIClient()).post(`/subscriptions`, register)

  res.status(200).json({})

  await sendMailMedicoOnline({
    name,
    email,
    cpf,
    dateBirth: birthDate,
    telephone,
    host,
    plan: {
      name: selectedPlan.title,
      value: selectedPlan.value
    }
  })
  return
}
