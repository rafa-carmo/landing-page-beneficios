import {
  createClient,
  ssrExchange,
  dedupExchange,
  fetchExchange,
  cacheExchange
} from 'urql'

const inServerSide = typeof window === 'undefined'

const ssrCache = ssrExchange({ isClient: !inServerSide })
const url = process.env.GRAPHCMS_URL ?? '/'
const client = createClient({
  url,
  exchanges: [dedupExchange, fetchExchange, cacheExchange, ssrCache]
})

export { client, ssrCache }
