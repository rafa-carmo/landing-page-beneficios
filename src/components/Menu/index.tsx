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

const menuItems = [
  {
    name: 'Pagina Inicial',
    link: '#',
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
    link: '#',
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
    link: '#',
    icon: (
      <FirstAidKit
        size={22}
        weight="regular"
        className="group-hover:text-primary-500 transition-colors duration-300"
      />
    )
  }
]

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="border-b-2 border-b-black/75">
      <div className=" flex container mx-auto pt-2 pb-5">
        <div className="flex-1">
          <div className="flex items-center">
            <Book size={50} weight="bold" />
            {/* Logo */}
            <h2 className="font-bold text-5xl">Logo</h2>
          </div>
        </div>

        <div className="hidden flex-1 justify-between items-end pb-2 lg:flex">
          <nav className="hidden md:flex gap-10 font-medium text-zinc-700 text-lg">
            <ul className="group transition duration-300">
              <a href="#" className="hover:text-zinc-900">
                Medicina Online
              </a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </ul>

            <ul className="group transition duration-300">
              <a href="#" className="hover:text-zinc-900">
                Assistencia funeral
              </a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </ul>

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
        className={`fixed left-0 top-0 bottom-0 right-0 z-30 opacity-0 pointer-events-none ${
          showMenu && 'opacity-100 pointer-events-auto'
        } transition-all`}
      >
        <button
          onClick={() => setShowMenu(false)}
          className="absolute bg-white/70 left-0 top-0 bottom-0 right-0 z-40 cursor-default"
        ></button>
        <button
          onClick={() => setShowMenu(false)}
          className="absolute right-0 top-5 z-50"
        >
          <X size={32} weight="bold" />
        </button>
        <div className="relative bg-white w-fit h-screen flex flex-col z-50">
          <div className="border-b py-5 flex items-center justify-center">
            Logo - <b className="font-bold">Beneficios</b>
          </div>
          <nav className="py-5">
            <ul className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <li
                  key={`mobile-${item.name}`}
                  className="group transition duration-300 py-2"
                >
                  <a
                    href={item.link}
                    className="text-zinc-700 flex items-center gap-2 pl-2 pr-10"
                  >
                    {item.icon}
                    {item.name}
                  </a>
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
