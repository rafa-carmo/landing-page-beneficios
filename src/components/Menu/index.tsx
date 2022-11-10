import { Book, FacebookLogo, InstagramLogo } from 'phosphor-react'

export default function Menu() {
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

        <div className="flex flex-1 justify-between items-end pb-2">
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
      </div>
    </div>
  )
}
