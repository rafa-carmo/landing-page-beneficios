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
            link: '#',
            icon: 'aid'
          }
        ]
      }
    }
  }

  return {
    props: {
      assistenciaFuneralPage
    }
  }
}
