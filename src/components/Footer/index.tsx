import Image from 'next/image'
import Link from 'next/link'

import { socialMediaIcons, socialMediasProps } from '../../utils/icons'

type SocialMedia = {
  icon: socialMediasProps
  url: string
}

export interface FooterProps {
  values: string
  about: string
  socialMedias: SocialMedia[]
}

export function Footer({ values, about, socialMedias }: FooterProps) {
  return (
    <footer className=" pt-14 bg-gradient-to-b  from-primary-500/40 to-primary-500">
      <div className="container mx-auto">
        <div className="flex items-center text-zinc-100 pb-24">
          <Image
            src="/images/logo.png"
            width={200}
            height={150}
            alt="logo Viver Mais"
          />
        </div>
        <div className="pt-10 grid grid-cols-3 gap-24 text-zinc-100 text-shadow-lg">
          <div className="flex flex-col gap-5">
            <h4 className="font-bold ">Viver Mais</h4>
            <p className="font-thin">{values}</p>
          </div>
          <div className="flex flex-col gap-5 text-zinc-100">
            <h4 className="font-bold ">Sobre nós</h4>
            <p className="font-thin">{about}</p>
          </div>

          <div className="pt-10 flex gap-5">
            {socialMedias.map((media) => (
              <Link
                key={`footer-${media.url}`}
                href={media.url}
                className="text-zinc-200 hover:text-zinc-400 transition-colors duration-300"
                target="_blank"
              >
                {socialMediaIcons[media.icon]}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full text-center pt-10 pb-2 text-zinc-100 font-semibold relative">
          <span>© 2022 -- Viver Mais.</span>
          <span className="absolute right-0 font-thin">
            Desenvolvido por{' '}
            <Link
              href="https://rafaelcarmo.dev"
              target="_blank"
              rel="noreferrer"
            >
              Rafael
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
