import { Listbox, Transition } from '@headlessui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { CaretDown, Trash, TrashSimple } from 'phosphor-react'
import React, { Fragment, useEffect, useState } from 'react'

import { Button } from '../../components/Button'
import { Dependent } from '../../components/Dependent'
import { Input } from '../../components/Input/index'
import { FieldErrors } from '../../utils/validations'
import { assistenciaFuneralValidator } from '../../utils/validations/assistenciaFuneralValidator'
import { convertToCurrency } from '../../utils/valueConvert'
import { Base, BaseProps } from '../Base/index'

type PlanSelected = {
  type: 'individual' | 'familiar'
  age: string
  value: number
}
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

type PlanProps = {
  age: string
  individualValue: number
  familiarValue: number
}

type AggregateValues = {
  age: string
  value: number
}

export interface AssistenciaFuneralTemplateProps {
  base: BaseProps
  contract: string[]
  plans: PlanProps[]
  aggregates: AggregateValues[]
}

export function AssistenciaFuneralTemplate({
  base,
  contract,
  plans,
  aggregates
}: AssistenciaFuneralTemplateProps) {
  const router = useRouter()
  const [planSelected, setPlanSelected] = useState<PlanSelected | null>(null)
  const [acceptedContract, setAcceptedContract] = useState(false)

  const [dependentsValue, setDependentsValue] = useState(0)
  const [total, setTotal] = useState(0)

  const [date, setDate] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [telephone, setTelephone] = useState<string>('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>()

  const [sendingInfo, setSendingInfo] = useState(false)

  const [dependents, setDependents] = useState<DependentStateProps[]>([])

  useEffect(() => {
    if (dependents.length > 0) {
      let sum = dependents.reduce((value, actual) => {
        return value + actual.value
      }, 0)
      setDependentsValue(sum)
      if (planSelected) {
        setTotal(planSelected.value + sum)
        return
      }
      return setTotal(sum)
    }
    setDependentsValue(0)
    if (planSelected) {
      setTotal(planSelected.value)
      return
    }
    return setTotal(0)
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
    const valueUnit = aggregates.filter(
      (value) => value.age === change.age.replace('anos', '').trim()
    )[0].value

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

  async function handleSendContact() {
    setSendingInfo(true)
    const errors = assistenciaFuneralValidator({
      name,
      email,
      telephone
    })
    if (!acceptedContract) {
      setSendingInfo(false)
      return setFieldErrors({
        terms: 'Aceite os termos antes de prosseguir'
      })
    }

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setSendingInfo(false)
      return
    }
    if (!planSelected) {
      setFieldErrors({
        plan: 'Selecione um plano'
      })
    }

    const response = await axios
      .post('/api/mailPlanoFuneral', {
        name,
        cpf,
        dateBirth: date,
        email,
        telephone,
        planSelected,
        dependents,
        contract
      })
      .then((data) => data.data)
      .catch(() => {
        setSendingInfo(false)
        setFieldErrors({
          terms: 'Houve um erro, tente novamente.'
        })
      })
    if (response.token) {
      return router.push(`/pdf?token=${response.token}`)
    }
  }

  return (
    <Base {...base}>
      <div className="container mx-auto my-4">
        <div className="rounded-2xl border border-black w-full md:w-11/12 md:mx-auto">
          <h3 className="text-4xl font-bold text-center border-b py-8">
            Contrato
          </h3>
          <div className="px-8 py-10 text-justify flex flex-col gap-5 h-96 overflow-y-auto">
            {contract.map((clause) => (
              <p key={clause} dangerouslySetInnerHTML={{ __html: clause }} />
            ))}
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
              error={fieldErrors?.name}
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
                error={fieldErrors?.email}
                required
              />
              <Input
                label="Telefone"
                id="Telefone"
                mask="telephone"
                valueInput={telephone}
                setValue={setTelephone}
                placeholder="(21) 9 1234-5678"
                error={fieldErrors?.telefone}
                required
              />
            </div>

            <div className="w-full">
              <h3 className="text-center font-bold text-xl mt-2 mb-4">
                Selecione o plano
              </h3>

              {fieldErrors?.plan && (
                <p className="text-red-500 text-center"> Selecione um plano </p>
              )}

              <table className={`w-full`}>
                <thead>
                  <tr>
                    <th className="border p-3 w-1/3">Faixa et??ria</th>
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
                            onChange={() => {
                              setPlanSelected({
                                age: plan.age,
                                type: 'individual',
                                value: plan.individualValue
                              })
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
                            onChange={() => {
                              setPlanSelected({
                                age: plan.age,
                                type: 'familiar',
                                value: plan.familiarValue
                              })
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
                  <div>Selecione a Faixa et??ria</div>
                  <div className="flex items-center justify-around gap-8">
                    <p>Valor</p>
                    <div className="w-4 h-4"> </div>
                  </div>
                </div>
              )}
              {dependents?.map((dependent) => (
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
                  className="bg-primary-500 px-5 py-2 rounded-lg text-zinc-100 hover:bg-primary-700 transition-colors"
                  onClick={() => {
                    setDependents([
                      ...dependents,
                      { ...aggregates[0], quantity: 1, id: getLastIdMoreOne() }
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
              Plano Selecionado: {convertToCurrency(planSelected?.value || 0)}
            </span>
            <p className="text-center">
              Agregados/dependentes: {convertToCurrency(dependentsValue)}
            </p>
            <p className="text-2xl text-center flex py-4 items-center justify-around">
              <span className="font-bold pr-2">Total:</span>
              {convertToCurrency(total)}
            </p>
          </div>
          <div
            className={`flex items-center justify-center gap-2 ${
              fieldErrors?.terms && 'text-red-500'
            }`}
          >
            <input
              type="checkbox"
              name="accept_terms"
              id="accept_terms"
              onChange={(e) => setAcceptedContract(e.target.checked)}
              required
            />
            <label htmlFor="accept_terms">Aceito os termos do contrato</label>
          </div>
          {fieldErrors?.terms && (
            <p className="text-center">{fieldErrors?.terms}</p>
          )}
          <div className="flex items-center justify-center my-8">
            <Button onClick={handleSendContact} loading={sendingInfo}>
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </Base>
  )
}
