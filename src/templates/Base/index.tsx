import { Footer } from '../../components/Footer'
import Menu from '../../components/Menu'
import { WhatasappButton } from '../../components/WhatsappButton'

interface BaseProps {
  children: React.ReactNode
}

export function Base({ children }: BaseProps) {
  return (
    <main className="h-full min-h-screen flex flex-col justify-between relative">
      <Menu />
      <WhatasappButton />
      {children}
      <Footer />
    </main>
  )
}
