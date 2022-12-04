import Image from 'next/image'
import Link from 'next/link'
import {
  FacebookLogo,
  FirstAid,
  FirstAidKit,
  House,
  InstagramLogo,
  List,
  X
} from 'phosphor-react'
import { useState } from 'react'

import { socialMediaIcons, socialMediasProps } from '../../utils/icons'

const icons = {
  home: (
    <House
      size={22}
      weight="regular"
      className="group-hover:text-primary-500 transition-colors duration-300"
    />
  ),
  aid: (
    <FirstAidKit
      size={22}
      weight="regular"
      className="group-hover:text-primary-500 transition-colors duration-300"
    />
  ),
  cross: (
    <FirstAid
      size={22}
      weight="regular"
      className="group-hover:text-primary-500 transition-colors duration-300"
    />
  )
}

type Icons = keyof typeof icons

type MenuItem = {
  name: string
  link: string
  icon: Icons
}

type SocialMedia = {
  icon: socialMediasProps
  url: string
}

export interface MenuProps {
  items: MenuItem[]
  socialMedias: SocialMedia[]
}

export default function Menu({ items, socialMedias }: MenuProps) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="border-b-2 border-b-black/75 bg-white">
      <div className="flex container mx-auto pt-2 pb-5 relative">
        <div className="flex-1"></div>
        <div className="absolute">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              width={200}
              height={150}
              alt="logo Viver Mais"
            />
          </Link>
        </div>

        <div className="hidden flex-1 justify-between items-end pb-2 lg:flex">
          <nav className="hidden md:flex gap-10 font-medium text-zinc-700 text-lg">
            {items.map(
              (item) =>
                item.name !== 'Pagina Inicial' && (
                  <ul
                    className="group transition duration-300"
                    key={`menu-${item.name}`}
                  >
                    <Link href={item.link} className="hover:text-zinc-900">
                      {item.name}
                    </Link>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-500"></span>
                  </ul>
                )
            )}
            <ul className="group transition duration-300">
              <Link href="/#contact" className="hover:text-zinc-900">
                Contato
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-500"></span>
            </ul>
          </nav>

          <div className="flex gap-4">
            {socialMedias.map((media) => (
              <Link
                key={`head-${media.url}`}
                href={media.url}
                target="_blank"
                className="text-zinc-500 hover:text-zinc-400 transition-colors duration-300"
              >
                {socialMediaIcons[media.icon]}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex p-5 items-center lg:hidden">
          <button onClick={() => setShowMenu(true)}>
            <div className="HAMBURGER-ICON space-y-2">
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 bottom-0 right-0 z-40  ${
          showMenu
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } transition-all`}
      >
        <button
          onClick={() => setShowMenu(false)}
          className="absolute bg-white/70 left-0 top-0 bottom-0 right-0 z-40 cursor-default"
        ></button>
        <button
          onClick={() => setShowMenu(false)}
          className="absolute right-0 top-5 z-40"
        >
          <X size={32} weight="bold" />
        </button>
        <div className="fixed bg-white w-fit h-screen flex flex-col justify-between z-40">
          <div>
            <div className="border-b py-5 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                width={125}
                height={125}
                alt="Logo viver mais"
              />
            </div>
            <nav className="py-5">
              <ul className="divide-y divide-primary-500">
                {items.map((item) => (
                  <li
                    key={`mobile-${item.name}`}
                    className="group transition duration-300 flex items-center  justify-center py-5"
                  >
                    <Link
                      href={item.link}
                      className="text-zinc-700 flex items-center justify-center gap-2 pl-2 pr-10"
                    >
                      {icons[item.icon]}
                      {item.name}
                    </Link>
                    {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-500"></span> */}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex p-5 gap-5 items-center justify-center border-t border-primary-500">
            {socialMedias.map((media) => (
              <Link key={media.url} href={media.url} target="_blank">
                {socialMediaIcons[media.icon]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
