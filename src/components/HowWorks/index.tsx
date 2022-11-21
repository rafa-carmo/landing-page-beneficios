export interface HowWorksProps {
  image?: string
  title: string
  text: string
}

export function HowWorks({ title, text, image }: HowWorksProps) {
  return (
    <div className="bg-primary-500 grid grid-cols-1 md:grid-cols-2 my-28">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image ? image : '/images/how-works.jpg'}
        alt="Happy family"
        className="hidden md:block opacity-70"
      />
      <div className="flex flex-col items-center justify-around p-10 gap-10 md:gap-0 h-[548px] text-zinc-100">
        <h3 className="font-bold text-5xl">Como funciona?</h3>
        <p className="font-semibold md:text-xl">{title}</p>
        <p className="text-center font-medium md:text-lg">{text}</p>
      </div>
    </div>
  )
}
