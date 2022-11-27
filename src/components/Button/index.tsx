import { ButtonHTMLAttributes } from 'react'
type ButtonProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, size = 'medium' }: ButtonProps) {
  return (
    <button className="bg-primary-300 text-zinc-100 font-light text-lg py-4 px-10 rounded-sm hover:bg-primary-500 transition-colors">
      {children}
    </button>
  )
}
