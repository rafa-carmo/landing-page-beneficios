import { GetStaticProps } from 'next'

import {
  MedicOnlinePageDocument,
  MedicOnlinePageQuery
} from '../generated/graphql'
import { client } from '../lib/urql'
import { getAPIClient } from '../services/axios'
import { GetPlans } from '../services/types'
import {
  MedicinaOnlineTemplate,
  MedicinaOnlineTemplateProps
} from '../templates/MedicinaOnline'
import { medicOnlineMapper } from '../utils/mappers'

interface MedicinaOnlineData {
  medicinaOnlineData: MedicinaOnlineTemplateProps
}

export default function MedicinaOnlinePage({
  medicinaOnlineData
}: MedicinaOnlineData) {
  return <MedicinaOnlineTemplate {...medicinaOnlineData} />
}

export const getStaticProps: GetStaticProps = async () => {
  const request = await client.query(MedicOnlinePageDocument, {}).toPromise()
  const data: MedicOnlinePageQuery = request.data

  const medicinaOnlineData = medicOnlineMapper(data)

  return {
    props: {
      medicinaOnlineData
    }
  }
}
