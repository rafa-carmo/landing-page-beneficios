import { GetStaticProps } from 'next'

import { HomeTemplate, HomeTemplateProps } from '../templates/Home'

interface HomeProps {
  homeData: HomeTemplateProps
}

export default function Home({ homeData }: HomeProps) {
  return <HomeTemplate {...homeData} />
}

export const getStaticProps: GetStaticProps = async () => {
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
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
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
