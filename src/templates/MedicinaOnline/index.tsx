import axios from 'axios'
import Image from 'next/image'
import Script from 'next/script'
import { Check } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input/index'
import { TimerCard } from '../../components/TimerCard'
import { countDown } from '../../utils/monthsToSeconds'
import { FieldErrors } from '../../utils/validations/index'
import {
  cardMedicoNaTelaValidator,
  medicoNaTelaValidator
} from '../../utils/validations/medicoNaTela'
import { convertToCurrency } from '../../utils/valueConvert'
import { Base, BaseProps } from '../Base'
import { CardPrice } from './CardPrice'

type ExpiresProps = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

type CardProps = {
  title: string
  text: string
  image: string
  alt: string
}

export type SelectedPlan = {
  id: number
  title: string
  value: number
}

type AddressProps = {
  state: string
  city: string
  neighborhood: string
  street: string
}

export interface MedicinaOnlineTemplateProps {
  base: BaseProps
  title: string
  subtitle: string
  planItems: string[]
  cards: CardProps[]
  priceArea: string
  cardsPrice: CardPrice[]
}

export function MedicinaOnlineTemplate({
  base,
  cards,
  priceArea,
  cardsPrice,
  planItems,
  subtitle,
  title
}: MedicinaOnlineTemplateProps) {
  const [loop, setLoop] = useState(0)
  const [expires, setExpires] = useState<ExpiresProps | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<null | SelectedPlan>(null)
  const [inputsData, setInputsData] = useState({
    name: '',
    cpf: '',
    birthDate: '',
    email: '',
    telephone: '',
    cep: '',
    number: ''
  })

  const [address, setAddress] = useState<AddressProps | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>()

  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    expiresAt: '',
    cvv: '',
    hash: ''
  })

  const [sendingInfo, setSendingInfo] = useState(false)
  const waitTime = async (seconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds))
  }

  const handleClickScroll = () => {
    const element = document.getElementById('plans')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleClickPlan = (plan: SelectedPlan) => {
    const element = document.getElementById('formRegister')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setSelectedPlan(plan)
    }
    return
  }

  useEffect(() => {
    if (!document.getElementById('galaxpayItem')) {
      const script = document.createElement('script')
      script.src = 'https://js.galaxpay.com.br/checkout.min.js'
      script.async = true
      script.id = 'galaxpayItem'
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    if (inputsData.cep.length >= 8) {
      axios
        .get(`https://brasilapi.com.br/api/cep/v1/${inputsData.cep}`)
        .then((res) => res.data)
        .then((data) => {
          setAddress({
            state: data.state,
            city: data.city,
            neighborhood: data.neighborhood,
            street: data.street
          })
        })
        .catch(() => setAddress(null))
      return
    }
    setAddress(null)
  }, [inputsData.cep])

  async function handleSubmit() {
    setFieldErrors({})
    const errorsInputs = medicoNaTelaValidator(inputsData)
    const errorsCard = cardMedicoNaTelaValidator(cardData)
    const errorPlan = !selectedPlan && {
      planSelected: 'selecione um plano'
    }

    const errors = {
      ...errorsInputs,
      ...errorsCard,
      ...errorPlan
    }

    if (Object.keys(errors).length) {
      setSendingInfo(false)
      setFieldErrors(errors)
      return
    }

    // @ts-ignore
    const hashCard = document.getElementById('hashCard').value
    const data = {
      ...inputsData,
      card: {
        ...cardData,
        hash: hashCard as string
      },
      selectedPlan,
      address
    }

    await axios.post('/api/registerOnGalaxPay', data)
    setSendingInfo(false)
  }

  const getHash = async () => {
    const token = process.env.NEXT_PUBLIC_GALAXY_TOKEN
    // @ts-ignore
    const galaxPay = new GalaxPay(token, false)

    const card = galaxPay.newCard({
      number: cardData.number,
      holder: cardData.name,
      expiresAt: cardData.expiresAt,
      cvv: cardData.cvv
    })

    galaxPay.hashCreditCard(
      card,
      (hash: string) => {
        setCardData((state) => ({ ...state, hash }))
      },
      () => {
        setFieldErrors({
          hash: 'error'
        })
      }
    )
  }
  const handleButton = async () => {
    if (typeof window !== 'undefined') {
      setCardData((state) => ({ ...state, hash: '' }))
      setSendingInfo(true)
      setFieldErrors({})
      const errorsInputs = medicoNaTelaValidator(inputsData)
      const errorsCard = cardMedicoNaTelaValidator(cardData)
      const errorPlan = !selectedPlan && {
        planSelected: 'selecione um plano'
      }

      const errors = {
        ...errorsInputs,
        ...errorsCard,
        ...errorPlan
      }

      if (Object.keys(errors).length) {
        setFieldErrors(errors)
        setSendingInfo(false)
        return
      }
      try {
        await getHash()
      } catch (e) {
        setFieldErrors({
          hash: 'error'
        })
        console.log('Error')
      }

      await waitTime(5000)
      // @ts-ignore
      const hashCard = document.getElementById('hashCard').value
      if (hashCard !== '') {
        handleSubmit()
        setSendingInfo(false)
        return
      }

      setFieldErrors({
        hash: 'error'
      })
      setSendingInfo(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (expires?.minutes === '00' && expires.seconds === '00') {
        return
      }
      setExpires(countDown(new Date().getFullYear(), new Date().getMonth()))
      setLoop(loop + 1)
    }, 1000)
    return
  }, [loop, expires])
  return (
    <Base {...base} className="bg-primary-300/5">
      <Script
        src="https://js.galaxpay.com.br/checkout.min.js"
        strategy="lazyOnload"
      />

      <div className="container mx-auto max-w-lg mt-14 flex flex-col gap-10">
        <h4 className="text-xl font-bold mx-auto text-center uppercase">
          Oferta por tempo limitado
        </h4>
        {expires && (
          <div className="container mx-auto flex justify-center items-center gap-1 md:gap-5">
            {/* <TimerCard type="Dia" value={expires.days} />
            <TimerCard type="Hora" value={expires.hours} /> */}
            <TimerCard type="Minuto" value={expires.minutes} />
            <TimerCard type="Segundo" value={expires.seconds} />
          </div>
        )}
      </div>

      <hr className="my-24 border-black container mx-auto" />

      <div className="flex container mx-auto gap-1 items-center justify-center relative">
        <div className="max-w-4xl text-center space-y-5  relative z-10 p-10">
          <h3 className="font-bold font-poppins text-xl md:text-4xl md:tracking-wide md:leading-10">
            {title}
          </h3>
          <h2 className="text-lg md:text-2xl font-inter">{subtitle}</h2>

          <div className="pl-5 font-inter py-10 flex items-center flex-col md:grid md:grid-cols-2 gap-y-3 ">
            {planItems.map((item) => (
              <span
                className="flex items-center justify-start sm:gap-5"
                key={item}
              >
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
            onClick={handleClickScroll}
            className="mx-auto p-5 bg-primary-500 rounded-lg w-2/4 font-bold text-sm md:text-xl text-zinc-100"
          >
            Quero Assinar agora!
          </button>
        </div>
        {/* <PersonHeart className="text-primary-500" /> */}
        <Image
          src="/images/personHeart.svg"
          width={500}
          height={500}
          className="text-primary-500 absolute right-14 bottom-1 z-0 opacity-50 xl:opacity-100"
          alt="peaple heart"
        />
        <Image
          src="/images/personMobile.svg"
          width={400}
          height={400}
          className="text-primary-500 absolute left-0 top-1 z-0 opacity-0  lg:opacity-50 xl:opacity-100 -scale-x-100"
          alt="peaple heart"
        />
      </div>
      <div className="bg-gradient-to-r  from-primary-500 to-secondary/25  mt-32 py-20">
        <h3 className="font-bold text-xl md:text-3xl text-white text-shadow-lg font-poppins text-center">
          Atendemos diversas demandas e tratamentos
        </h3>
        <div className="w-full my-16 pb-10 max-w-7xl mx-auto flex gap-10 flex-wrap justify-center">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-64 h-80 bg-white  shadow-lg rounded-lg flex flex-col items-center justify-around py-6 px-5 shadow-secondary"
            >
              <div className="w-24 h-24 relative">
                <Image src={card.image} fill alt={card.alt} className="" />
              </div>
              <div>
                <h4 className="font-bold text-center">{card.title}</h4>
              </div>

              <span className="font-thin text-sm font-poppins">
                {card.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className=" overflow-hidden" id="plans">
        <div className="container mx-auto flex flex-col items-center justify-center my-12 gap-24 ">
          <div className="text-center">
            <h3 className="font-poppins font-bold text-xl">{priceArea}</h3>
            <h4 className="font-poppins font-bold text-lg text-black/75">
              Simples e rápido
            </h4>
          </div>
          {fieldErrors?.planSelected && (
            <p className="text-center text-red-500">*Selecione um plano*</p>
          )}
          <div className="relative">
            <div className="absolute -right-32 top-5 bottom-5 z-0">
              <div className="  w-40 h-40 my-auto">
                <Image src="/images/articles.svg" alt="person" fill />
              </div>
            </div>
            <div className="flex gap-10 md:gap-5 flex-col md:flex-row">
              {cardsPrice.map((cardPrice) => (
                <CardPrice
                  key={cardPrice.title}
                  selected={selectedPlan?.id === cardPrice.id}
                  {...cardPrice}
                  handleClickPlan={handleClickPlan}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl space-y-24 my-12 p-4 md:p-0 ">
        <hr />

        <div className="bg-zinc-50/50 p-14 rounded" id="formRegister">
          <div className=" w-full flex items-center justify-center ">
            <h3 className="font-bold mb-5 text-3xl relative after:rounded-3xl after:absolute after:left-5 after:right-5 after:-bottom-2 after:bg-primary-500 after:h-1">
              Dados Pessoais
            </h3>
          </div>
          <form action="" className="space-y-5">
            <Input
              setValue={(change) => {
                setInputsData((state) => ({ ...state, name: change || '' }))
              }}
              id="name"
              valueInput={inputsData.name}
              label="Nome"
              mask="name"
              placeholder="Digite seu nome completo"
              error={fieldErrors?.name}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input
                setValue={(change) => {
                  setInputsData((state) => ({ ...state, cpf: change || '' }))
                }}
                id="cpf"
                valueInput={inputsData.cpf}
                mask="cpf"
                label="CPF"
                placeholder="Digite seu CPF"
                error={fieldErrors?.cpf}
              />

              <Input
                setValue={(change) => {
                  setInputsData((state) => ({
                    ...state,
                    birthDate: change || ''
                  }))
                }}
                id="birthDate"
                valueInput={inputsData.birthDate}
                type="date"
                label="Data de Nascimento"
                error={fieldErrors?.birthDate}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input
                setValue={(change) => {
                  setInputsData((state) => ({ ...state, email: change || '' }))
                }}
                id="email"
                valueInput={inputsData.email}
                label="E-mail"
                placeholder="Digite seu E-mail"
                error={fieldErrors?.email}
              />
              <Input
                setValue={(change) => {
                  setInputsData((state) => ({
                    ...state,
                    telephone: change || ''
                  }))
                }}
                id="telefone"
                valueInput={inputsData.telephone}
                mask="telephone"
                label="Telefone"
                placeholder="Digite seu telefone"
                error={fieldErrors?.telephone}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input
                valueInput={inputsData.cep}
                setValue={(change) => {
                  setInputsData((state) => ({
                    ...state,
                    cep: change || ''
                  }))
                }}
                label="CEP"
                id="cep"
                placeholder="Digite seu CEP"
                error={fieldErrors?.cep}
              />
              <Input
                valueInput={inputsData.number}
                setValue={(change) => {
                  setInputsData((state) => ({
                    ...state,
                    number: change || ''
                  }))
                }}
                label="Numero"
                placeholder="1023"
                error={fieldErrors?.number}
              />
            </div>

            <div
              className={`h-0 ${
                address ? 'h-auto opacity-100' : 'opacity-0 '
              } overflow-hidden transition-all duration-300`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  valueInput={address?.street || ''}
                  setValue={() => {}}
                  label="Logradouro"
                  disabled
                />
                <Input
                  valueInput={address?.state || ''}
                  setValue={() => {}}
                  label="Estado"
                  disabled
                />
                <Input
                  valueInput={address?.city || ''}
                  setValue={() => {}}
                  label="Cidade"
                  disabled
                />
                <Input
                  valueInput={address?.neighborhood || ''}
                  setValue={() => {}}
                  label="Bairro"
                  disabled
                />
              </div>
            </div>

            <hr />
            <div className=" w-full flex items-center justify-center pt-14">
              <h3 className="font-bold text-3xl relative after:absolute after:left-0 after:w-full after:-bottom-2 after:bg-primary-500 after:h-1">
                Dados do Cartão
              </h3>
            </div>
            <Input
              setValue={(change) => {
                setCardData((state) => ({
                  ...state,
                  name: change || ''
                }))
              }}
              id="cardName"
              valueInput={cardData.name}
              label="Nome"
              mask="name"
              placeholder="Digite seu nome completo"
              error={fieldErrors?.name}
            />
            <Input
              setValue={(change) => {
                setCardData((state) => ({
                  ...state,
                  number: change || ''
                }))
              }}
              id="cardNumber"
              mask="card"
              valueInput={cardData.number}
              label="Numero do cartão"
              placeholder="Numero do cartão"
              error={fieldErrors?.number}
            />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <Input
                setValue={(change) => {
                  setCardData((state) => ({
                    ...state,
                    expiresAt: change || ''
                  }))
                }}
                id="cardExpires"
                type="month"
                min={`${new Date(Date.now()).getFullYear()}-${new Date(
                  Date.now()
                ).getMonth()}`}
                valueInput={cardData.expiresAt}
                label="Validade"
                error={fieldErrors?.expiresAt}
              />
              <Input
                setValue={(change) => {
                  setCardData((state) => ({
                    ...state,
                    cvv: change || ''
                  }))
                }}
                mask="number"
                id="cardCVV"
                valueInput={cardData.cvv}
                label="CVV"
                maxLength={3}
                placeholder="Chave de segurança"
                error={fieldErrors?.cvv}
              />
              <input
                id="hashCard"
                type="hidden"
                onRateChange={(e) => {
                  setCardData((state) => ({
                    ...state,
                    // @ts-ignore
                    hash: e.current.value || ''
                  }))
                }}
                value={cardData.hash}
              />
            </div>
          </form>
        </div>
        {fieldErrors?.hash && (
          <p className="text-red-500 text-center">
            algo deu errado - Favor verifique as informações do cartão
          </p>
        )}
        {selectedPlan && (
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-lg">
              Plano selecionado:
              <span> {selectedPlan.title}</span>
            </p>
            <p className="font-bold">
              Valor: <span> {convertToCurrency(selectedPlan.value)}</span>
            </p>

            <div className="flex items-center gap-3 mt-5">
              <input type="checkbox" name="confirm" id="confirm" />
              <label htmlFor="confirm">Confirmo as informações acima.</label>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center">
          <Button onClick={handleButton} type="button" disabled={sendingInfo}>
            {sendingInfo ? (
              <div className="flex items-center justify-center gap-5">
                <div>
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-8 h-8 text-gray-200 animate-spin  fill-primary-500"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
                Enviando informações...
              </div>
            ) : (
              'Contrate agora!'
            )}
          </Button>
        </div>
        <hr className="border-black" />
        <div className="flex flex-col items-center justify-center space-y-14">
          <div>
            <div className="flex items-start gap-5">
              <Image
                src="/images/safessl.png"
                alt="Image Safe SSL"
                width={75}
                height={75}
              />
              <div className="flex flex-col justify-around gap-3">
                <p className="text-zinc-500">Certificado SSL 128 bits</p>
                <p className="font-bold text-xl">
                  Você esta em um Ambiente seguro
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="border-black" />
          <div className="py-14">
            <p className="text-xl font-light text-justify">
              Confiando na qualidade de nosso serviço fornecemos 7(sete) dias de
              garantia para que você possa experimentar todos os benefícios que
              proporcionamos. Durante esse período você pode cancelar de forma
              gratuita e sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </Base>
  )
}
