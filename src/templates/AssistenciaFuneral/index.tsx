import { Listbox, Transition } from '@headlessui/react'
import { CaretDown, Trash, TrashSimple } from 'phosphor-react'
import React, { Fragment, useEffect, useState } from 'react'

import { Button } from '../../components/Button'
import { Dependent } from '../../components/Dependent'
import { Input } from '../../components/Input/index'
import { convertToCurrency } from '../../utils/valueConvert'
import { Base, BaseProps } from '../Base/index'

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

export type DependentProps = {
  quantity: number
  age: string
  value: number
}

type DependentStateProps = {
  id: number
  quantity: number
  age: string
  value: number
}

export interface AssistenciaFuneralTemplateProps {
  base: BaseProps
}

export function AssistenciaFuneralTemplate({
  base
}: AssistenciaFuneralTemplateProps) {
  const [selected, setSelected] = useState<typeof values[0] | null>(null)

  const [quantity, setQuantity] = useState(1)
  const [planSelected, setPlanSelected] = useState(0)

  const [dependentsValue, setDependentsValue] = useState(0)
  const [total, setTotal] = useState(0)

  const [date, setDate] = useState<string | null>(null)
  const [cpf, setCpf] = useState<string | null>(null)
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [telephone, setTelephone] = useState<string | null>(null)

  const [dependents, setDependents] = useState<DependentStateProps[]>([])

  useEffect(() => {
    if (dependents.length > 0) {
      let sum = dependents.reduce((value, actual) => {
        return value + actual.value
      }, 0)
      setDependentsValue(sum)

      setTotal(planSelected + sum)
      return
    }
    setDependentsValue(0)
    setTotal(planSelected)
    return
  }, [dependents, planSelected, dependentsValue])

  function getDependentsValue() {
    if (dependents.length > 0) {
      let sum = dependents.reduce((value, actual) => {
        return value + actual.value
      }, 0)
      setDependentsValue(sum)
    }
  }

  function changeDependent(id: number, change: DependentProps) {
    const dependentId = dependents.findIndex((item) => item.id === id)
    const newArray = dependents
    const valueUnit = values.filter((value) => value.age === change.age)[0]
      .value

    newArray[dependentId] = {
      age: change.age,
      quantity: change.quantity,
      value: valueUnit * change.quantity,
      id
    }
    setDependents(newArray)
    getDependentsValue()
  }

  function handleRemoveDependentsItem(id: number) {
    setDependents(dependents.filter((element) => element.id !== id))
    getDependentsValue()
  }

  function getLastIdMoreOne() {
    const indexes = dependents
      .map((element) => element.id)
      .sort((a, b) => a - b)
    if (indexes.length > 0) {
      return indexes[indexes.length - 1] + 1
    }
    return 1
  }

  return (
    <Base {...base}>
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
          <div className="w-full md:w-5/6 md:mx-auto flex flex-col gap-7 px-2 md:p-0">
            <Input
              label="Nome"
              id="Nome"
              mask="name"
              valueInput={name}
              setValue={setName}
              placeholder="Nome"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <Input
                label="CPF"
                id="CPF"
                type="text"
                mask="cpf"
                valueInput={cpf}
                setValue={setCpf}
                placeholder="Digite seu cpf"
              />
              <Input
                label="Data de nascimento"
                id="DataDeNascimento"
                type="date"
                valueInput={date}
                setValue={setDate}
                placeholder="Data de Nascimento"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <Input
                label="Email"
                id="Email"
                type="email"
                valueInput={email}
                setValue={setEmail}
                placeholder="Email"
                required
              />
              <Input
                label="Telefone"
                id="Telefone"
                mask="telephone"
                valueInput={telephone}
                setValue={setTelephone}
                placeholder="(21) 9 1234-5678"
                required
              />
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
              <h3 className="text-center font-bold text-xl mt-2 mb-4 ">
                Deseja adicionar algum dependente ou agregado?
              </h3>
              {dependents.length > 0 && (
                <div className="grid grid-cols-3 text-center gap-5 font-bold text-zinc-400">
                  <div>Quantidade</div>
                  <div>Selecione a Faixa etária</div>
                  <div className="flex items-center justify-around gap-8">
                    <p>Valor</p>
                    <div className="w-4 h-4"> </div>
                  </div>
                </div>
              )}
              {dependents?.map((dependent, key) => (
                <Dependent
                  index={dependent.id}
                  quantity="1"
                  changeValues={changeDependent}
                  key={`dependent-${dependent.id}`}
                  deleteField={() => handleRemoveDependentsItem(dependent.id)}
                />
              ))}

              <div className="flex items-center justify-center my-5">
                <button
                  className="bg-primary-300 px-5 py-2 rounded-lg text-zinc-100"
                  onClick={() => {
                    setDependents([
                      ...dependents,
                      { ...values[0], quantity: 0, id: getLastIdMoreOne() }
                    ])
                  }}
                >
                  Adicionar {dependents.length > 0 && 'Outro'}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col my-7">
            <span className="text-center">
              Plano Selecionado: {convertToCurrency(planSelected)}
            </span>
            <p className="text-center">
              Agregados/dependentes: {convertToCurrency(dependentsValue)}
            </p>
            <p className="text-2xl text-center flex py-4 items-center justify-around">
              <span className="font-bold pr-2">Total:</span>
              {convertToCurrency(total)}
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
