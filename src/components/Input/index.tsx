import { InputHTMLAttributes } from 'react'

type InputProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="font-bold text-zinc-400" htmlFor={props.id}>
        {label}
      </label>
      <input
        id={props.id}
        className="w-full border py-2 px-4 mt-1 rounded-lg form-input"
        {...props}
      />
    </div>
  )
}
