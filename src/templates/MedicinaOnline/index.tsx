import Image from 'next/image'
import Script from 'next/script'
import { Check } from 'phosphor-react'
import { useEffect, useState } from 'react'

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

const planItems = [
  'Psicólogos credenciados pela SulAmérica',
  'Atendimento por vídeo chamadas',
  'Não pague por consulta',
  'Atendimentos ilimitados',
  'Utilize em 72 horas após contratação',
  'Seja acompanhado pelo mesmo Psicólogo'
]

const cards = [
  {
    title: 'Depressão',
    text: 'Distúrbio caracterizado por depressão persistente ou perda de interesse em atividades.',
    image: '/images/medico/sadWomam.png',
    alt: 'sad womam'
  },
  {
    title: 'Ansiedade',
    text: 'A ansiedade é um conjunto de doenças marcadas pela preocupação excessiva ou constante.',
    image: '/images/medico/anxiety.svg',
    alt: 'anxiety person'
  },
  {
    title: 'Transtornos de personalidade',
    text: 'Os transtornos de personalidade são padrões persistentes e generalizados no modo de pensar e agir.',
    image: '/images/medico/Personality-disorder.svg',
    alt: 'People illustrations by Storyset'
  },
  {
    title: 'Transtorno de estresse pós-traumático',
    text: 'É um tipo de transtorno de ansiedade gerado por algum trauma vivenciado.',
    image: '/images/medico/Post-traumatic stress disorder.svg',
    alt: 'People illustrations by Storyset'
  }
]

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
          <div className="container mx-auto grid grid-cols-4 gap-1 md:gap-5">
            <TimerCard type="Dia" value={expires.days} />
            <TimerCard type="Hora" value={expires.hours} />
            <TimerCard type="Minuto" value={expires.minutes} />
            <TimerCard type="Segundo" value={expires.seconds} />
          </div>
        )}
      </div>

      <hr className="my-24 border-black container mx-auto" />

      <div className="flex container mx-auto gap-1 items-center justify-center relative">
        <div className="max-w-4xl text-center space-y-5  relative z-10 p-10">
          <h3 className="font-bold font-poppins text-xl md:text-4xl md:tracking-wide md:leading-10">
            Terapia On-line com Psicólogos licenciados SulAmérica
          </h3>
          <h2 className="text-lg md:text-2xl font-inter">
            Sessões de aconselhamento no conforto da sua casa. Consultas
            ilimitadas, pague apenas a mensalidade.
          </h2>

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
      <div className="bg-gradient-to-r  from-sky-500 to-indigo-500/50  mt-32 py-20">
        <h3 className="font-bold text-xl md:text-3xl text-white text-shadow-lg font-poppins text-center">
          Atendemos diversas demandas e tratamentos
        </h3>
        <div className="w-full my-16 pb-10 max-w-7xl mx-auto flex gap-10 flex-wrap justify-center">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-64 h-80 bg-white  shadow-lg rounded-lg flex flex-col items-center justify-around py-6 px-5 shadow-violet-500"
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

      <div className="">
        <div className="container mx-auto flex flex-col items-center justify-center my-12 gap-24 ">
          <div className="text-center">
            <h3 className="font-poppins font-bold text-xl">
              Médico na Tela sem burocracia!
            </h3>
            <h4 className="font-poppins font-bold text-lg text-black/75">
              Simples e rápido
            </h4>
          </div>
          <div className="relative">
            <div className="absolute -right-32 top-5 bottom-5 z-0">
              <div className="  w-40 h-40 my-auto">
                <Image src="/images/articles.svg" alt="person" fill />
              </div>
            </div>
            <div className="w-80 shadow-lg flex flex-col font-roboto gap-5 px-4 py-8 gap-y-10 rounded-lg border relative z-10 bg-white">
              <span className="text-center font-bold text-lg">
                Médico na tela
              </span>
              <div>
                <span className="pl-5 font-bold">por apenas:</span>
                <p className="text-center flex items-end justify-center text-2xl">
                  <span className="flex gap-2 items-end">
                    R$: <strong className="text-7xl">29</strong>
                  </span>
                  <em className="flex flex-col">
                    ,90 <strong>/mês</strong>
                  </em>
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-5">
                <span className="flex items-center justify-start sm:gap-5">
                  <Check
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                    weight="bold"
                  />
                  <p className="text-sm">Medico na tela</p>
                </span>
                <span className="flex items-center justify-start sm:gap-5">
                  <Check
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                    weight="bold"
                  />
                  <p className="text-sm">Psicólogo na Tela</p>
                </span>
                <span className="flex items-center justify-start sm:gap-5">
                  <Check
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                    weight="bold"
                  />
                  <p className="text-sm">Desconto Farmácia</p>
                </span>
              </div>

              <button
                onClick={handleClickScroll}
                className="mx-auto py-2 px-3 bg-primary-500 rounded-lg w-3/4 font-bold text-sm md:text-lg text-zinc-100"
              >
                Assinar agora!
              </button>
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
