import jwt from 'jwt-simple'
import { GetServerSideProps } from 'next'

type RequestTokenQuery = {
  token?: string
}

import { PDFFuneral, PdfFuneral, PdfView } from '../components/PdfFuneral'

interface PDFPRops {
  viewer: PDFFuneral
}

export default function PdfTest({ viewer }: PDFPRops) {
  return <PdfView {...viewer} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token }: RequestTokenQuery = context.query
  if (!token) {
    return {
      notFound: true
    }
  }
  const data = jwt.decode(token, process.env.JWT_SECRET || 'pssd')

  return {
    props: {
      viewer: data
    } // will be passed to the page component as props
  }
}
