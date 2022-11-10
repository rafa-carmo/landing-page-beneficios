import {
  Buildings,
  DeviceMobile,
  EnvelopeSimple,
  MapPinLine
} from 'phosphor-react'

const contacts = [
  {
    value: '(21) 1234-5678',
    icon: <DeviceMobile size={24} />
  },
  {
    value: 'email@dominio.com.br',
    icon: <EnvelopeSimple size={24} />
  },
  {
    value: '99.999.999/0001-99',
    icon: <Buildings size={24} />
  },
  {
    value: 'Endereço, N° 123, Nova iguaçu',
    icon: <MapPinLine size={24} />
  }
]

export function Contact() {
  return (
    <div className="container mx-auto relative mb-14">
      <h3 className="font-bold text-4xl">Entre em contato:</h3>
      <div className="pl-5 mt-10">
        <p className="max-w-sm py-10 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae arcu
          lorem cras lacus amet. In cras odio enim rhoncus consectetur.{' '}
        </p>
        <div className="flex flex-col gap-5">
          {contacts.map((contact) => (
            <div key={contact.value} className="flex items-center gap-5">
              <div className="text-primary-500">{contact.icon}</div>
              {contact.value}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-14 shadow-2xl p-14 bg-white">
        <form action="" className="flex flex-col w-[668px]">
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
          <button className="w-full bg-primary-500 rounded mt-2 text-zinc-100 p-2 text-lg">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
