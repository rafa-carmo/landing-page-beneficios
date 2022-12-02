import { GetStaticProps } from 'next'

import { HomepageDocument, HomepageQuery } from '../generated/graphql'
import { client } from '../lib/urql'
import { HomeTemplate, HomeTemplateProps } from '../templates/Home'
import { homeMapper } from '../utils/mappers'

interface HomeProps {
  homeData: HomeTemplateProps
}

export default function Home({ homeData }: HomeProps) {
  return <HomeTemplate {...homeData} />
}

export const getStaticProps: GetStaticProps = async () => {
  // const request = await client.query(HomepageDocument, {}).toPromise()
  // const data: HomepageQuery = request.data
  // const homeData = homeMapper(data)

  const homeData: HomeTemplateProps = {
    base: {
      menu: {
        items: [
          {
            name: 'Pagina Inicial',
            link: '/',
            icon: 'home'
          },
          {
            name: 'Medicina Online',
            link: '/medicina_online',
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
    slider: {
      sliders: [
        {
          title: 'Médico Especialista Online 24hs',
          subtitle:
            'Mais de 25 especialidades (Adulto e Infantil) em todo o Brasil',
          image: '/images/medico.jpg',
          button: {
            title: 'Contratar',
            url: '#'
          }
        },
        {
          title: 'Plano Funeral Familiar',
          subtitle:
            'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          image: '/images/plano.jpg',
          button: {
            title: 'Contratar',
            url: '#'
          }
        }
      ]
    },
    pricing: {
      tiers: [
        {
          name: 'Assistência Funeral',
          href: '/assistencia_funeral',
          priceMonthly: 23.9,
          from: true,
          description: 'All the basics for starting a new business',
          includedFeatures: [
            'Urna',
            'Higienização e ornamentação do corpo',
            'Coroa de flores',
            'Véu',
            'Cavaletes, castiçais e cristo',
            'Carro fúnebre',
            'Registro em cartório',
            'Livro de presença',
            'Locação de sala para velório',
            'Taxas de sepultamento',
            'Locação de jazigo',
            'Cremação',
            'Sepultamento',
            'Traslado'
          ]
        },
        {
          name: 'Médico na tela 24hrs',
          href: '#',
          priceMonthly: 39.9,
          from: false,
          description: 'All the basics for starting a new business',
          includedFeatures: [
            'Clínico Geral',
            'Pediatra',
            'Alergia e Imunologia',
            'Infectologia',
            'Cardiologista',
            'Neurologia',
            'Nutrologia e Medicina Esportiva',
            'Cirurgia Geral',
            'Oftalmologia',
            'Ortopedia e Traumatologia',
            'Otorrinolaringologista',
            'Dermatologista',
            'Endocrinologia',
            'Pneumologista',
            'Gastroenterologia',
            'Psiquiatria',
            'Geriatria',
            'Ginecologia',
            'Urologista',
            'Reumatologia'
          ]
        }
      ]
    },
    partnership: {
      partners: [
        {
          name: 'sulamerica',
          image: '/images/sulamerica.jpg'
        },
        {
          name: 'previsul',
          image: '/images/previsul.jpg'
        }
      ]
    },
    howWorks: {
      title: 'Simples e facil de usar',
      text: 'Temos o objetivo de trazer excelentes assistências, benefícios e descontos para nossos associados. Não perca tempo e comece hoje a economizar e ter uma vida com mais qualidade de forma simples. Selecione o plano certo para você e sua família, adicione seus dados, efetue o pagamento e você já será nosso associado. Nossa central de atendimento está pronta para ajudar em todos os planos, basta entrar em contato em nosso Whatsapp que responderemos o mais rápido possível. '
    },
    contact: {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae arcu lorem cras lacus amet. In cras odio enim rhoncus consectetur.',
      contacts: [
        {
          value: '(21) 1234-5678 | (21) 1234-5678',
          icon: 'celular'
        },
        {
          value: 'email@dominio.com.br',
          icon: 'email'
        },
        {
          value: '48.225.290/0001-06',
          icon: 'empresa'
        },
        {
          value: 'Endereço, N° 123, Nova iguaçu',
          icon: 'map'
        }
      ]
    }
  }
  return {
    props: {
      homeData
    } // will be passed to the page component as props
  }
}
