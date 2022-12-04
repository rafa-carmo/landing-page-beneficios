import Head from 'next/head'
import { useState } from 'react'

import { Footer, FooterProps } from '../../components/Footer'
import Menu, { MenuProps } from '../../components/Menu'
import { WhatasappButton } from '../../components/WhatsappButton'

type MetaTag = {
  description: string
  image: string
}
export interface BaseProps {
  menu: MenuProps
  className?: string
  children?: React.ReactNode
  footer: FooterProps
  title?: string
  meta?: MetaTag
}

export function Base({
  menu,
  children,
  className,
  footer,
  title,
  meta
}: BaseProps) {
  return (
    <main
      className={`h-full min-h-screen flex flex-col justify-between relative ${className}`}
    >
      <Head>
        <title>{title || 'Viver Mais'}</title>
        <meta
          name="description"
          content={meta?.description || 'Viver mais'}
        ></meta>
      </Head>

      {menu.socialMedias.map((media) => {
        const type = media.icon === 'facebook' ? 'og' : media.icon
        if (media.icon === 'whataspp') return ''
        return (
          <Head key={`meta-${media.url}`}>
            <meta
              property={`${type}:card`}
              content="summary_large_image"
            ></meta>
            <meta property={`${type}:url`} content={media.url}></meta>
            <meta property={`${type}:title`} content="Viver Mais"></meta>
            <meta
              property={`${type}:description`}
              content={meta?.description || 'Viver mais'}
            ></meta>
            <meta property={`${type}:image`} content="/images/logo.png"></meta>
          </Head>
        )
      })}
      <Menu {...menu} />
      <WhatasappButton />
      {children}
      <Footer {...footer} />
    </main>
  )
}
