import { GetStaticProps } from 'next'

import { getAPIClient } from '../services/axios'
import { GetPlans } from '../services/types'
import {
  MedicinaOnlineTemplate,
  MedicinaOnlineTemplateProps
} from '../templates/MedicinaOnline'

interface MedicinaOnlineData {
  medicinaOnlineData: MedicinaOnlineTemplateProps
}

export default function MedicinaOnlinePage({
  medicinaOnlineData
}: MedicinaOnlineData) {
  return <MedicinaOnlineTemplate {...medicinaOnlineData} />
}

export const getStaticProps: GetStaticProps = async () => {
  // const request = await (
  //   await getAPIClient()
  // ).get(`/plans?galaxPayIds=438&startAt=0&limit=1`)

  // console.log(
  //   data.data.Plans[0].PlanPrices.filter(
  //     (plan) => plan.payment === 'creditcard'
  //   )
  // )

  // const data: GetPlans = request.data
  // const valueNotFormated = String(
  //   data.Plans[0].PlanPrices.filter((plan) => plan.payment === 'creditcard')[0]
  //     .value
  // )

  // const value = parseFloat(
  //   `${valueNotFormated.slice(0, -2)}.${valueNotFormated.slice(-2)}`
  // )

  const medicinaOnlineData = {
    base: {
      menu: {
        items: [
          {
            name: 'Pagina Inicial',
            link: '#',
            icon: 'home'
          },
          {
            name: 'Medicina Online',
            link: '#',
            icon: 'aid'
          },
          {
            name: 'Assistencia funeral',
            link: '/assistencia_funeral',
            icon: 'aid'
          }
        ]
      }
    },
    title: 'Terapia On-line com Psicólogos licenciados Docway',
    subtitle:
      'Sessões de aconselhamento no conforto da sua casa. Consultas ilimitadas, pague apenas a mensalidade.',
    planItems: [
      'Psicólogos credenciados pela DocWay',
      'Atendimento por vídeo chamadas',
      'Não pague por consulta',
      'Atendimentos ilimitados',
      'Utilize em 72 horas após contratação',
      'Seja acompanhado pelo mesmo Psicólogo'
    ],
    cards: [
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
    ],
    priceArea: 'Médico na Tela sem burocracia!',
    cardsPrice: [
      {
        id: '001',
        title: 'Plano 1',
        value: 39.9,
        inclidesItems: [
          'Psicólogo na tela',
          'Cardiologista na Tela',
          'Ortopedista na Tela',
          'Ginecologista na Tela',
          'Pediatra na Tela'
        ]
      },
      {
        id: '002',
        title: 'Plano 2',
        value: 29.9,
        inclidesItems: ['Clinico Geral na Tela', 'Pediatra na Tela']
      }
    ]
  }

  return {
    props: {
      medicinaOnlineData
    }
  }
}
