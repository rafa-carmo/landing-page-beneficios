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

  const medicinaOnlineData: MedicinaOnlineTemplateProps = {
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
    value: 39.9
  }

  return {
    props: {
      medicinaOnlineData
    }
  }
}
