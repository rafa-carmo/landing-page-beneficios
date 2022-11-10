interface ButtonProps {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

export function Button({ children, size = 'medium' }: ButtonProps) {
  return (
    <button className="bg-primary-500 text-zinc-100 font-light text-lg py-4 px-10 rounded-sm hover:bg-primary-300 transition-colors">
      {children}
    </button>
  )
}
