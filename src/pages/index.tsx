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
  const request = await client.query(HomepageDocument, {}).toPromise()
  const data: HomepageQuery = request.data
  const homeData = homeMapper(data)

  return {
    props: {
      homeData
    } // will be passed to the page component as props
  }
}
