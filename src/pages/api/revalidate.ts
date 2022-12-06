import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  revalidated?: boolean
  message?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/')
    await res.revalidate('/medicina_online')
    await res.revalidate('/assistencia_funeral')
    await res.revalidate('/success')
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    res.status(500).json({ error: 'Error revalidating' })
  }
}
