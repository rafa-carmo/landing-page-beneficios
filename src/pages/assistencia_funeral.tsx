import { GetStaticProps } from 'next'

import {
  AssistenciaFuneralTemplate,
  AssistenciaFuneralTemplateProps
} from '../templates/AssistenciaFuneral/index'

interface AssistenciaFuneralPageProps {
  assistenciaFuneralPage: AssistenciaFuneralTemplateProps
}

export default function AssistenciaFuneral({
  assistenciaFuneralPage
}: AssistenciaFuneralPageProps) {
  return <AssistenciaFuneralTemplate {...assistenciaFuneralPage} />
}

export const getStaticProps: GetStaticProps = async () => {
  const assistenciaFuneralPage: AssistenciaFuneralTemplateProps = {
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
        ],
        socialMedias: [
          { icon: 'facebook', url: 'https://facebook.com' },
          { icon: 'instagram', url: 'https://instagram.com' }
        ]
      },
      footer: {
        about: 'Melhore a sua qualidade de vida e de sua família.',
        values:
          'Transparência, qualidade, cliente em primeiro lugar e relacionamento.',
        socialMedias: [
          { icon: 'facebook', url: 'https://facebook.com' },
          { icon: 'instagram', url: 'https://instagram.com' }
        ]
      }
    },
    contract: [
      ` <strong>1°</strong> Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.`,
      `<strong>2°</strong> Lorem Ipsum is simply dummy text of the printing and typesetting
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
            `,
      `<strong>3°</strong> Lorem Ipsum is simply dummy text of the printing and typesetting
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
            `
    ],
    plans: [
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
    ],
    aggregates: [
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
  }

  return {
    props: {
      assistenciaFuneralPage
    }
  }
}
