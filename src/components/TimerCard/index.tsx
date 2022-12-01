interface TimerCardProps {
  value: string
  type: string
}

export function TimerCard({ type, value }: TimerCardProps) {
  const isPlural = Number(value) > 1
  return (
    <div className="border rounded-md p-2 md:p-5 text-center text-sm bg-primary-500 text-zinc-100 md:font-bold flex flex-col md:flex-row items-center justify-center md:gap-2">
      <p>{value}</p>
      <p>
        {type}
        {isPlural && 's'}
      </p>
    </div>
  )
}
