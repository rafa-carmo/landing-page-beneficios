import {
  Buildings,
  DeviceMobile,
  EnvelopeSimple,
  MapPinLine,
  PaperPlaneTilt
} from 'phosphor-react'

const icons = {
  celular: <DeviceMobile size={24} />,
  email: <EnvelopeSimple size={24} />,
  empresa: <Buildings size={24} />,
  map: <MapPinLine size={24} />
}
type Icons = keyof typeof icons
interface Contact {
  value: string
  icon: Icons
}
export interface ContactProps {
  description?: string
  contacts: Contact[]
}

export function Contact({ description, contacts }: ContactProps) {
  return (
    <div className="container mx-auto relative mb-14 ">
      <h3 className="font-bold text-4xl text-center md:text-left">
        Entre em contato:
      </h3>
      <div className="px-5 xl:pl-5 mt-10 pt-10">
        <p className="xl:max-w-sm mb-10 text-sm line-clamp-3 overflow-hidden text-center xl:text-left">
          {description}
        </p>
        <div className="flex xl:flex-col gap-5 flex-wrap justify-center">
          {contacts.map((contact) => (
            <div key={contact.value} className="flex items-center gap-5">
              <div className="text-primary-500">{icons[contact.icon]}</div>
              {contact.value}
            </div>
          ))}
        </div>
      </div>
      <div className="relative xl:absolute right-0 top-14 xl:shadow-2xl mb-8 xl:mb-0 p-4 xl:p-14 bg-white">
        <form action="" className="flex flex-col w-full xl:w-[668px]">
          <span className="font-semibold text-lg tracking-wide mb-10">
            Envie uma mensagem.
          </span>
          <div className="w-full flex flex-col gap-5">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full py-2 px-4 outline-0 border border-primary-500 shadow rounded"
              placeholder="Nome"
            />
            <input
              type="text"
              name="email"
              id="email"
              className="w-full py-2 px-4 outline-0 border border-primary-500 shadow rounded"
              placeholder="E-mail"
            />
            <input
              type="text"
              name="telephone"
              id="telephone"
              className="w-full py-2 px-4 outline-0 border border-primary-500 shadow rounded"
              placeholder="Telefone"
            />
            <textarea
              name="message"
              id="message"
              className=" py-2 px-4 border outline-0 b border-primary-500 shadow rounded resize-none"
              placeholder="Digite sua mensagem"
              cols={30}
              rows={5}
            ></textarea>
          </div>
          <button className="w-full bg-primary-500 rounded mt-2 text-zinc-100 p-2 text-lg flex gap-2 items-center justify-center">
            <PaperPlaneTilt size={22} weight="light" /> Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
