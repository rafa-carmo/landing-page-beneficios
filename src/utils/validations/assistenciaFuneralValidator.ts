import Joi from 'joi'

import { getFieldErrors } from '.'

type SendMessageValues = {
  name: string
  email: string
  telephone: string
}
// plan: number

const errorsMessages = {
  'string.empty': 'Este campo não pode estar vazio',
  'string.email': 'Favor digite um email valido'
}

const fieldValidations = {
  name: Joi.string().min(2).required().messages(errorsMessages),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages(errorsMessages),
  telephone: Joi.string().allow('').optional()
}
//   plan: Joi.string().required()

export function assistenciaFuneralValidator(values: SendMessageValues) {
  const schema = Joi.object(fieldValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
