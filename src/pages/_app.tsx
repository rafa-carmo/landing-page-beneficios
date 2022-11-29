import type { AppProps } from 'next/app'
import { Provider } from 'urql'

import '../../public/styles/main.css'
import { client, ssrCache } from '../lib/urql'

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}
