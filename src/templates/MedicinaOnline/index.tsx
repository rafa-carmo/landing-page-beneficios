import axios from 'axios'
import Image from 'next/image'
import Script from 'next/script'
import { CreditCard } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input/index'
import { TimerCard } from '../../components/TimerCard'
import { countDown } from '../../utils/monthsToSeconds'
import { convertToCurrency } from '../../utils/valueConvert'
import { Base, BaseProps } from '../Base'

export interface MedicinaOnlineTemplateProps {
  base: BaseProps
  value: number
}

type ExpiresProps = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export function MedicinaOnlineTemplate({
  base,
  value
}: MedicinaOnlineTemplateProps) {
  const [loop, setLoop] = useState(0)
  const [expires, setExpires] = useState<ExpiresProps | null>(null)
  const [inputsData, setInputsData] = useState({
    name: '',
    cpf: '',
    birthDate: '',
    email: '',
    telephone: '',
    cep: ''
  })

  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    expiresAt: '',
    cvv: '',
    hash: ''
  })
  const waitTime = async (seconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds))
  }

  const handleClickScroll = () => {
    const element = document.getElementById('formRegister')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
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

  function handleSubmit() {
    // @ts-ignore
    const hashCard = document.getElementById('hashCard').value
  }

  const handleButton = async () => {
    if (typeof window !== 'undefined') {
      const token = process.env.NEXT_PUBLIC_GALAXY_TOKEN

      // @ts-ignore
      const galaxPay = new GalaxPay(token, false)

      const card = galaxPay.newCard({
        number: cardData.number,
        holder: cardData.name,
        expiresAt: cardData.expiresAt,
        cvv: cardData.cvv
      })

      await galaxPay.hashCreditCard(card, (hash: string) => {
        setCardData((state) => ({ ...state, hash }))
      })
      await waitTime(100)
    }
    handleSubmit()
  }

  useEffect(() => {
    setTimeout(() => {
      setExpires(countDown(new Date().getFullYear(), new Date().getMonth()))
      setLoop(loop + 1)
    }, 1000)
    return
  }, [loop])
  return (
    <Base {...base} className="bg-primary-300/25">
      <Script
        src="https://js.galaxpay.com.br/checkout.min.js"
        strategy="lazyOnload"
      />
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 bottom-0 opacity-20">
          <Image
            src="/images/medico.jpg"
            alt="medico"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/images/medico.jpg"
          />
        </div>

        <div className="container mx-auto max-w-3xl my-24 space-y-20 p-4 md:p-0 relative z-20">
          <h3 className="text-3xl font-bold mx-auto text-center  uppercase">
            Oferta exclusiva para este Mês, essa é sua chance de ter um médico a
            sua disposição sempre que precisar.
          </h3>

          <h4 className="text-xl font-bold mx-auto text-center uppercase">
            Oferta por tempo limitado
          </h4>
          {expires && (
            <div className="container mx-auto grid grid-cols-4 gap-1 md:gap-5">
              <TimerCard type="Dia" value={expires.days} />
              <TimerCard type="Hora" value={expires.hours} />
              <TimerCard type="Minuto" value={expires.minutes} />
              <TimerCard type="Segundo" value={expires.seconds} />
            </div>
          )}
          <div className="flex items-center ">
            <button
              onClick={handleClickScroll}
              className="mx-auto p-5 bg-primary-500 rounded-lg w-full font-bold text-xl text-zinc-100"
            >
              Quero Assinar agora!
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div className="container mx-auto max-w-3xl space-y-24 my-12 p-4 md:p-0 ">
        <div className="flex flex-col space-y-24 justify-around uppercase">
          <h3 className="text-center font-bold text-4xl ">Contrate agora</h3>
          <div className="space-y-20">
            <h4 className="text-center font-bold text-4xl">
              Assistencia medica 24 horas por dia
            </h4>
            <div className="space-y-4">
              <h4 className="text-center font-bold text-4xl text-primary-500 ">
                Por apenas
              </h4>
              <h4 className="text-center font-bold text-7xl text-green-500 text-shadow-lg font-outline-1">
                {convertToCurrency(value)}
              </h4>
            </div>
            <div className="w-full flex items-center justify-center">
              <Image
                src="/images/warranty.png"
                alt="imagem de garantia"
                width={125}
                height={125}
              />
            </div>
          </div>
          <hr className="border-black" />
        </div>
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
              />
            </div>
            <Input
              setValue={() => {}}
              valueInput=""
              label="CEP"
              id="cep"
              placeholder="Digite seu CEP"
            />

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
                valueInput={cardData.expiresAt}
                label="Validade"
                placeholder="Validade (MM/AA)"
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
              />
              <input
                id="hashCard"
                type="hidden"
                onChange={(change) => {
                  setCardData((state) => ({
                    ...state,
                    hash: change.currentTarget.value || ''
                  }))
                }}
                value={cardData.hash}
                maxLength={3}
              />
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleButton}
            type="button"
            className="cursor-pointer bg-primary-300 text-zinc-100 font-bold text-lg py-4 px-10 rounded-sm hover:bg-primary-500 transition-colors"
          >
            Contrate agora!
          </button>
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
