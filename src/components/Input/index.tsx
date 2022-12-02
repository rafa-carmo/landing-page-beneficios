import { InputHTMLAttributes, useState } from 'react'

import { testCpf } from '../../utils/testCpf'

type InputProps = {
  label?: string
  mask?: 'telephone' | 'name' | 'cpf' | 'card' | 'number'
  error?: string
  valueInput: string | null
  setValue: (value: null | string) => void
} & InputHTMLAttributes<HTMLInputElement>

export function Input({
  label,
  mask,
  error,
  valueInput,
  setValue,

  ...props
}: InputProps) {
  const [errorState, setError] = useState<string | null | undefined>(error)
  const [cardFlag, setCardFlag] = useState<string | null>(null)
  function maskValue(valueChanged?: string) {
    if (!valueChanged) {
      setValue(null)
      return
    }
    let replaced = valueChanged
    switch (mask) {
      case 'number':
        replaced = valueChanged.replace(/[^0-9]/, '')
        setValue(replaced)
        return

      case 'cpf':
        setError(null)
        replaced = valueChanged
          .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
          .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        if (replaced.length === 14) {
          if (!testCpf(replaced.replaceAll('.', '').replaceAll('-', ''))) {
            setError('CPF inválido')
          }
        }
        setValue(replaced)
        return
      case 'name':
        replaced = valueChanged.replace(/[^a-zA-Z\s]/gi, '')
        setValue(replaced)
        return
      case 'telephone':
        replaced = valueChanged.replace(/\D/g, '')
        replaced = replaced.replace(/^0/, '')
        if (replaced.length > 10) {
          replaced = replaced.replace(
            /^(\d\d)(\d{1})(\d{4})(\d{4}).*/,
            '($1) $2 $3-$4'
          )
        } else if (replaced.length > 5) {
          replaced = replaced.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3')
        } else if (replaced.length > 2) {
          replaced = replaced.replace(/^(\d\d)(\d{0,5})/, '($1) $2')
        } else {
          replaced = replaced.replace(/^(\d*)/, '($1')
        }
        setValue(replaced)
        return
      case 'card':
        replaced = valueChanged.replace(/\D/g, '')
        replaced = replaced.replace(/^0/, '')

        if (replaced.length > 12) {
          replaced = replaced.replace(
            /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4}).*/,
            '$1 $2 $3 $4'
          )
        } else if (replaced.length > 8) {
          replaced = replaced.replace(
            /^(\d{0,4})(\d{0,4})(\d{0,4}).*/,
            '$1 $2 $3'
          )
        } else if (replaced.length > 4) {
          if (cardFlag) {
            setCardFlag(null)
          }
          replaced = replaced.replace(/^(\d{0,4})(\d{0,4})/, '$1 $2')
        }

        setValue(replaced)
        return
      default:
        setValue(valueChanged)
    }
  }

  return (
    <div>
      {label && (
        <label
          className="font-bold text-zinc-400"
          htmlFor={props.id || `input-${label}`}
        >
          {label}
        </label>
      )}
      <input
        id={props.id || `input-${label}`}
        value={valueInput || undefined}
        onChange={(e) => maskValue(e.target.value)}
        className="w-full border py-2 px-4 mt-1 rounded-lg form-input"
        {...props}
      />

      {errorState ? (
        <p className="text-red-500 text-xs pl-2">{errorState}</p>
      ) : (
        error && <p className="text-red-500 text-xs pl-2">{error}</p>
      )}
    </div>
  )
}
