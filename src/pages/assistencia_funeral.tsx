import { GetStaticProps } from 'next'

import { FuneralPageDocument, FuneralPageQuery } from '../generated/graphql'
import { client } from '../lib/urql'
import {
  AssistenciaFuneralTemplate,
  AssistenciaFuneralTemplateProps
} from '../templates/AssistenciaFuneral/index'
import { funeralPageMapper } from '../utils/mappers'

interface AssistenciaFuneralPageProps {
  assistenciaFuneralPage: AssistenciaFuneralTemplateProps
}

export default function AssistenciaFuneral({
  assistenciaFuneralPage
}: AssistenciaFuneralPageProps) {
  return <AssistenciaFuneralTemplate {...assistenciaFuneralPage} />
}

export const getStaticProps: GetStaticProps = async () => {
  const request = await client.query(FuneralPageDocument, {}).toPromise()
  const data: FuneralPageQuery = request.data

  const assistenciaFuneralPage = funeralPageMapper(data)

  return {
    props: {
      assistenciaFuneralPage
    }
  }
}
