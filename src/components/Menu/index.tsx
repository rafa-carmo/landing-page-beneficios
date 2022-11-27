import Link from 'next/link'
import {
  Book,
  FacebookLogo,
  FirstAidKit,
  House,
  InstagramLogo,
  List,
  X
} from 'phosphor-react'
import { useState } from 'react'

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
  )
}

const menuItems = [
  {
    name: 'Pagina Inicial',
    link: '/',
    icon: (
      <House
        size={22}
        weight="regular"
        className="group-hover:text-primary-500 transition-colors duration-300"
      />
    )
  },
  {
    name: 'Medicina Online',
    link: '/medicina_online',
    icon: (
      <FirstAidKit
        size={22}
        weight="regular"
        className="group-hover:text-primary-500 transition-colors duration-300"
      />
    )
  },
  {
    name: 'Assistencia funeral',
    link: '/assistencia_funeral',
    icon: (
      <FirstAidKit
        size={22}
        weight="regular"
        className="group-hover:text-primary-500 transition-colors duration-300"
      />
    )
  }
]

type Icons = keyof typeof icons

type MenuItem = {
  name: string
  link: string
  icon: Icons
}

export interface MenuProps {
  items: MenuItem[]
}

export default function Menu({ items }: MenuProps) {
  const [showMenu, setShowMenu] = useState(true)
  return (
    <div className="border-b-2 border-b-black/75 bg-white">
      <div className=" flex container mx-auto pt-2 pb-5">
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Book size={50} weight="bold" />
            {/* Logo */}
            <h2 className="font-bold text-5xl">Logo</h2>
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
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                  </ul>
                )
            )}
            <ul className="group transition duration-300">
              <a href="#" className="hover:text-zinc-900">
                Contato
              </a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </ul>
          </nav>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-zinc-500 hover:text-zinc-400 transition-colors duration-300"
            >
              <FacebookLogo size={32} weight="bold" />
            </a>

            <a
              href="#"
              className="text-zinc-500 hover:text-zinc-400 transition-colors duration-300"
            >
              <InstagramLogo size={32} weight="bold" />
            </a>
          </div>
        </div>

        <div className="flex items-center lg:hidden">
          <button onClick={() => setShowMenu(true)}>
            {/* <List size={32} weight="light" />
             */}
            <div className="HAMBURGER-ICON space-y-2">
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 bottom-0 right-0 z-[99] opacity-0 pointer-events-none ${
          showMenu && 'opacity-100 pointer-events-auto'
        } transition-all`}
      >
        <button
          onClick={() => setShowMenu(false)}
          className="absolute bg-white/70 left-0 top-0 bottom-0 right-0 z-50 cursor-default"
        ></button>
        <button
          onClick={() => setShowMenu(false)}
          className="absolute right-0 top-5 z-50"
        >
          <X size={32} weight="bold" />
        </button>
        <div className="fixed bg-white w-fit h-screen flex flex-col z-50">
          <div className="border-b py-5 flex items-center justify-center">
            Logo - <b className="font-bold">Beneficios</b>
          </div>
          <nav className="py-5">
            <ul className="flex flex-col space-y-6">
              {items.map((item) => (
                <li
                  key={`mobile-${item.name}`}
                  className="group transition duration-300 py-2"
                >
                  <Link
                    href={item.link}
                    className="text-zinc-700 flex items-center gap-2 pl-2 pr-10"
                  >
                    {icons[item.icon]}
                    {item.name}
                  </Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-500"></span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
