import { GetStaticProps } from 'next'
import { CheckCircle } from 'phosphor-react'

import { SuccessPageDocument, SuccessPageQuery } from '../generated/graphql'
import { client } from '../lib/urql'
import { Base, BaseProps } from '../templates/Base'

interface SuccessProps {
  base: BaseProps
  contacts: string
}

export default function Success({ base, contacts }: SuccessProps) {
  return (
    <Base {...base}>
      <main className="container mx-auto w-full max-w-2xl shadow-lg p-10 rounded-lg border space-y-14 my-24">
        <div className="flex items-center justify-center w-full text-primary-500">
          <CheckCircle size={60} />
        </div>
        <h2 className="text-center font-poppins font-bold text-2xl">
          Seu cadastro foi concluido com sucesso.
        </h2>
        <p className="text-center font-poppins">
          Em até 3 dias uteis enviaremos um e-mail com suas informações de
          acesso.
        </p>
        <div className="text-right font-poppins text-sm space-y-1">
          <p>
            Atenciosamente equipe{' '}
            <strong className="font-bold text-primary-500">Viver Mais</strong>
          </p>
          <div className="text-xs">
            <p>Qualquer duvida entre em contato com nossos atendentes</p>
            <p>{contacts}</p>
          </div>
        </div>
      </main>
    </Base>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const request = await client.query(SuccessPageDocument, {}).toPromise()
  const data: SuccessPageQuery = request.data

  const SuccessPage = {
    base: {
      menu: {
        items: data.menus[0].links.map((menu) => ({
          name: menu.name,
          link: menu.url,
          icon: 'home'
        })),
        socialMedias: data.socialMedias.map((media) => ({
          icon: media.icon,
          url: media.url
        }))
      },
      footer: {
        values: data.abouts[0].valores || '',
        about: data.abouts[0].about || '',
        socialMedias: data.socialMedias.map((media) => ({
          icon: media.icon,
          url: media.url
        }))
      }
    },
    contacts: data.contacts.filter((item) => item.icon === 'celular')[0].value
  }

  return {
    props: SuccessPage
  }
}
