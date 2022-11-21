import { Footer } from '../../components/Footer'
import Menu, { MenuProps } from '../../components/Menu'
import { WhatasappButton } from '../../components/WhatsappButton'

export interface BaseProps {
  menu: MenuProps
  children?: React.ReactNode
}

export function Base({ menu, children }: BaseProps) {
  return (
    <main className="h-full min-h-screen flex flex-col justify-between relative">
      <Menu {...menu} />
      <WhatasappButton />
      {children}
      <Footer />
    </main>
  )
}
