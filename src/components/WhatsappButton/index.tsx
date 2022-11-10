import { WhatsappLogo } from 'phosphor-react'

export function WhatasappButton() {
  return (
    <div className="fixed right-0 bottom-0 p-5 z-30">
      <button
        title="Whatsapp"
        className="text-green-500 rounded-full p-1 border border-transparent hover:border-zinc-200 hover:bg-zinc-100 transition-all duration-300"
      >
        <WhatsappLogo size={52} weight="fill" />
      </button>
    </div>
  )
}
