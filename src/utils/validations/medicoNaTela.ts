import Joi from 'joi'

import { errorsMessages, getFieldErrors } from '.'

type MedicoNaTelaValues = {
  name: string
  cpf: string
  birthDate: string
  email: string
  telephone: string
  cep: string
  number: string
}

type CardValues = {
  name: string
  number: string
  expiresAt: string
  cvv: string
}

const fieldValidations = {
  name: Joi.string().min(2).required().messages(errorsMessages),
  cpf: Joi.string().min(14).max(14).required().messages(errorsMessages),
  birthDate: Joi.string().required().messages(errorsMessages),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages(errorsMessages),
  telephone: Joi.string().required().messages(errorsMessages),
  cep: Joi.string().required().messages(errorsMessages),
  number: Joi.string().allow('').messages(errorsMessages)
}

const cardValidations = {
  name: Joi.string().required().messages(errorsMessages),
  number: Joi.string().min(19).max(19).required().messages(errorsMessages),
  expiresAt: Joi.date()
    .min(new Date(Date.now()))
    .required()
    .messages(errorsMessages),
  cvv: Joi.string().required().min(3).max(3).messages(errorsMessages),
  hash: Joi.string().allow('').optional()
}

export function medicoNaTelaValidator(values: MedicoNaTelaValues) {
  const schema = Joi.object(fieldValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function cardMedicoNaTelaValidator(values: CardValues) {
  const schema = Joi.object(cardValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
