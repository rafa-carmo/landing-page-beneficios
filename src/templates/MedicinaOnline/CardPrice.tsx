import { Check } from 'phosphor-react'
import { useState, useEffect } from 'react'

import { SelectedPlan } from '.'
import { convertToCurrency } from '../../utils/valueConvert'

export interface CardPrice {
  id: string
  title: string
  value: number
  inclidesItems: string[]
  selected?: boolean
  handleClickPlan: (value: SelectedPlan) => void
}

export function CardPrice({
  id,
  inclidesItems,
  title,
  selected,
  value,
  handleClickPlan
}: CardPrice) {
  const [price, setPrice] = useState({
    prefix: '00',
    sufix: '00'
  })

  useEffect(() => {
    const values = convertToCurrency(value).replace('R$', '').split(',')
    setPrice({
      prefix: values[0].trim() || '00',
      sufix: values[1].trim() || '00'
    })
  }, [value])

  return (
    <div
      key={title}
      className={`w-80 shadow-lg flex flex-col justify-between font-roboto gap-5 px-4 py-8 gap-y-10 rounded-lg border-0 relative z-10 bg-white border-primary-500 ${
        selected && 'border-2'
      }`}
    >
      <div className="flex flex-col gap-5">
        <span className="text-center font-bold text-lg">{title}</span>
        <span className="pl-5 font-bold">por apenas:</span>
        <p className="text-center flex items-end justify-center text-2xl">
          <span className="flex gap-2 items-end">
            R$: <strong className="text-7xl">{price.prefix}</strong>
          </span>
          <em className="flex flex-col">
            ,{price.sufix} <strong>/mês</strong>
          </em>
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-5">
        {inclidesItems.map((item) => (
          <span key={item} className="flex items-center justify-start sm:gap-5">
            <Check
              className="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
              weight="bold"
            />
            <p className="text-sm">{item}</p>
          </span>
        ))}
      </div>

      <button
        onClick={() =>
          handleClickPlan({
            id,
            title,
            value
          })
        }
        className="mx-auto py-2 px-3 bg-primary-500 rounded-lg w-3/4 font-bold text-sm md:text-lg text-zinc-100"
      >
        Assinar agora!
      </button>
    </div>
  )
}
