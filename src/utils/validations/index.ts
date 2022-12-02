import Joi from 'joi'

export type FieldErrors = {
  [key: string]: string
}

export function getFieldErrors(objErrors: Joi.ValidationResult<any>) {
  const errors: FieldErrors = {}

  if (objErrors.error) {
    objErrors.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}
