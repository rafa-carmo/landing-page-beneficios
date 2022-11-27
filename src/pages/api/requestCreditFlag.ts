import type { NextApiRequest, NextApiResponse } from 'next'

import { getAPIClient } from '../../services/axios'

type ResponseData = {
  error?: string
  creditFlag?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { digits } = req.query

    if (!digits) {
      return res.status(400).json({
        error: 'digits are required'
      })
    }
    if (digits.length > 6 || digits.length < 6) {
      return res.status(400).json({
        error: 'digits must have 6 numbers'
      })
    }

    const request = await (await getAPIClient()).get(`/card-brands/${digits}`)
    if (request.status !== 200) {
      return res.status(500).json({ error: 'Flag not founded' })
    }
    const data = request.data
    // console.log(data.data)
    res.status(200).json({ creditFlag: data.CardBrand.id })
  }
}
