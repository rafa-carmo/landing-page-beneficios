import Link from 'next/link'
import { WhatsappLogo } from 'phosphor-react'

interface WhatsappButtonProps {
  whatsappLink: string
}

export function WhatasappButton({ whatsappLink }: WhatsappButtonProps) {
  return (
    <Link href={whatsappLink} className="fixed right-0 bottom-0 p-5 z-30">
      <button
        title="Whatsapp"
        className="text-green-500 rounded-full p-1 border border-transparent hover:border-zinc-200 hover:bg-zinc-100 transition-all duration-300"
      >
        <WhatsappLogo size={52} weight="fill" />
      </button>
    </Link>
  )
}
