import { Footer } from '../../components/Footer'
import Menu, { MenuProps } from '../../components/Menu'
import { WhatasappButton } from '../../components/WhatsappButton'

export interface BaseProps {
  menu: MenuProps
  className?: string
  children?: React.ReactNode
}

export function Base({ menu, children, className }: BaseProps) {
  return (
    <main
      className={`h-full min-h-screen flex flex-col justify-between relative ${className}`}
    >
      <Menu {...menu} />
      <WhatasappButton />
      {children}
      <Footer />
    </main>
  )
}
