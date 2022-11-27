import { Listbox, Transition } from '@headlessui/react'
import { CaretDown, Trash } from 'phosphor-react'
import { Fragment, useState } from 'react'

import { DependentProps } from '../../templates/AssistenciaFuneral'
import { convertToCurrency } from '../../utils/valueConvert'
import { Input } from '../Input'

const values = [
  {
    age: '14 a 19 anos',
    value: 5.9
  },
  {
    age: '20 a 49 anos',
    value: 14.9
  },
  {
    age: '50 a 59 anos',
    value: 23.37
  },
  {
    age: '60 a 69 anos',
    value: 33.9
  },
  {
    age: '70 a 79 anos',
    value: 41.9
  },
  {
    age: '80+ anos',
    value: 55.9
  }
]
interface DependentComponentProps {
  quantity?: string
  index: number
  changeValues: (key: number, change: DependentProps) => void
  deleteField: () => void
}

type valuesTypes = {
  age?: string
  value?: number
  quantity?: string
}

export function Dependent({
  quantity = '1',
  index,
  changeValues,
  deleteField
}: DependentComponentProps) {
  const [selected, setSelected] = useState(values[0])
  const [quantityState, setQuantity] = useState(quantity)

  function handleChange({
    quantity = quantityState,
    age = selected.age,
    value = selected.value
  }: valuesTypes) {
    let valueCalculated = 0
    if (!isNaN(parseInt(quantity))) {
      valueCalculated = value * parseInt(quantity)
    }

    const change = {
      quantity: parseInt(quantity || '0'),
      age: age,
      value: valueCalculated
    }

    changeValues(index, change)
  }
  return (
    <div className="relative grid grid-cols-3 gap-5">
      <div className="flex items-center justify-center">
        <input
          type="number"
          value={quantityState || ''}
          min="0"
          onChange={(e) => {
            setQuantity(e.target.value.replace(/[^0-9]/g, ''))
            handleChange({
              quantity: e.target.value.replace(/[^0-9]/g, '')
            })
          }}
          className="w-full max-w-[100px] border py-2 px-4 mt-1 rounded-lg form-input text-center"
        />
      </div>

      <div>
        <Listbox
          value={selected}
          onChange={(e) => {
            setSelected(e)
            handleChange(e)
          }}
        >
          <div className="relative mt-1">
            <Listbox.Button className="md:relative z-10 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border">
              <span className="block truncate text-center">
                {selected.age} ({convertToCurrency(selected.value)} Por Pessoa)
              </span>

              <div className="absolute right-5 top-0 bottom-0 flex items-center">
                <CaretDown size={22} weight="light" />
              </div>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-1 max-h-60 min-w-[200px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {values.map((value) => (
                  <Listbox.Option
                    key={value.age}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={value}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {value.age} - ({convertToCurrency(value.value)} Por
                          Pessoa)
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div className="flex gap-8 items-center justify-around">
        <div className="flex items-center justify-center flex-col">
          <p>{convertToCurrency(selected.value * parseInt(quantityState))}</p>
        </div>

        <div className="flex items-center">
          <button
            onClick={deleteField}
            className="p-1 flex items-center justify-center bg-zinc-200 text-red-400 rounded-lg h-fit"
          >
            <Trash size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}
