import axios from 'axios'

export async function getAPIClient(ctx?: any) {
  const api = axios.create({
    baseURL: process.env.GALAXY_PAY_BASE_URL,
    headers:
      process.env.NODE_ENV === 'development'
        ? {
            'Accept-Encoding': 'application/json'
          }
        : undefined
  })

  const base64 = Buffer.from(
    `${process.env.GALAXY_ID}:${process.env.GALAXY_HASH}`
  ).toString('base64')

  const requestData = await api.post(
    '/token',
    {
      grant_type: 'authorization_code',
      scope:
        'customers.read customers.write plans.read plans.write transactions.read transactions.write webhooks.write cards.read cards.write card-brands.read subscriptions.read subscriptions.write charges.read charges.write boletos.read carnes.read payment-methods.read'
    },
    {
      headers: {
        Authorization: `Basic ${base64}`
      }
    }
  )

  const token = requestData.data.access_token

  api.defaults.headers['Authorization'] = `Bearer ${token}`

  return api
}
