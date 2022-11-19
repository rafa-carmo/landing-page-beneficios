import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input/index'
import { convertToCurrency } from '../../utils/valueConvert'
import { Base } from '../Base/index'

const plans = [
  {
    age: '18 a 39',
    individualValue: 23.9,
    familiarValue: 33.9
  },
  {
    age: '40 a 59',
    individualValue: 38.9,
    familiarValue: 50.9
  },
  {
    age: '60 a 65',
    individualValue: 51.9,
    familiarValue: 75.9
  }
]

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

export function AssistenciaFuneralTemplate() {
  const [selected, setSelected] = useState(values[0])
  const [quantity, setQuantity] = useState(1)
  const [planSelected, setPlanSelected] = useState(0)
  return (
    <Base>
      <div className="container mx-auto my-4">
        <div className="rounded-2xl border border-black w-full md:w-11/12 md:mx-auto">
          <h3 className="text-4xl font-bold text-center border-b py-8">
            Contrato
          </h3>
          <div className="px-8 py-10 text-justify flex flex-col gap-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-semibold text-2xl text-center">Formulario</h2>
          <div className="w-full md:w-5/6 md:mx-auto flex flex-col gap-7">
            <Input label="Teste" id="Teste" placeholder="Nome" />
            <div className="grid grid-cols-2 gap-7">
              <Input label="Email" id="Email" placeholder="Email" />
              <Input label="Telefone" id="Telefone" placeholder="Telefone" />
            </div>

            <div className="w-full">
              <h3 className="text-center font-bold text-xl mt-2 mb-4">
                Selecione o plano
              </h3>

              <table className="w-full ">
                <thead>
                  <tr>
                    <th className="border p-3 w-1/3">Faixa etária</th>
                    <th className="border p-3 w-1/3">Individual</th>
                    <th className="border p-3 w-1/3">Familiar</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan) => (
                    <tr key={plan.age}>
                      <td className="text-center border p-3 w-1/3">
                        {plan.age} Anos
                      </td>
                      <td className="text-center border p-3 w-1/3">
                        <div className="flex items-center justify-center gap-2">
                          <input
                            type="radio"
                            name="plan"
                            value={plan.individualValue}
                            onChange={(e) => {
                              setPlanSelected(parseFloat(e.target.value))
                            }}
                            id={`${plan.individualValue}-${plan.age}`}
                          />
                          <label
                            htmlFor={`${plan.individualValue}-${plan.age}`}
                          >
                            {convertToCurrency(plan.individualValue)}
                          </label>
                        </div>
                      </td>
                      <td className="text-center border p-3 w-1/3">
                        <div className="flex items-center justify-center gap-2">
                          <input
                            type="radio"
                            name="plan"
                            value={plan.familiarValue}
                            id={`${plan.familiarValue}-${plan.age}`}
                            onChange={(e) => {
                              setPlanSelected(parseFloat(e.target.value))
                            }}
                          />
                          <label htmlFor={`${plan.familiarValue}-${plan.age}`}>
                            {convertToCurrency(plan.familiarValue)}
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-center font-bold text-xl mt-2 mb-4">
                Deseja adicionar algum dependente ou agregado?
              </h3>

              <div className="flex items-center justify-between gap-5">
                <div className="w-28">
                  <Input
                    type="number"
                    label="Quantidade"
                    value={quantity}
                    onChange={(e) => setQuantity(parseFloat(e.target.value))}
                  />
                </div>
                <div className="flex-1 max-w-xl">
                  Selecione a Faixa etária
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.age}</span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {values.map((value) => (
                            <Listbox.Option
                              key={value.age}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? 'bg-amber-100 text-amber-900'
                                    : 'text-gray-900'
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
                                    {value.age} - (
                                    {convertToCurrency(value.value)} Por Pessoa)
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
                <div>
                  <span>Valor</span>
                  <p>{convertToCurrency(selected.value * quantity)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col my-7">
            <span className="text-center">
              Plano: {convertToCurrency(planSelected)}
            </span>
            <p className="text-center">
              Agregados/dependentes:{' '}
              {convertToCurrency(selected.value * quantity)}
            </p>
            <p className="text-2xl text-center flex py-4">
              <span className="font-bold pr-2">Total:</span>
              {convertToCurrency(planSelected + selected.value * quantity)}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" name="accept_terms" id="accept_terms" />
            <label htmlFor="accept_terms">Aceito os termos do contrato</label>
          </div>
          <div className="flex items-center justify-center my-8">
            <Button>Enviar</Button>
          </div>
        </div>
      </div>
    </Base>
  )
}
