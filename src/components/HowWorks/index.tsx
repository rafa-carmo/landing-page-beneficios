export function HowWorks() {
  return (
    <div className="bg-primary-500 grid grid-cols-1 md:grid-cols-2 my-28">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/how-works.jpg"
        alt="Happy family"
        className="hidden md:block opacity-70"
      />
      <div className="flex flex-col items-center justify-around p-10 gap-10 md:gap-0 h-[548px] text-zinc-100">
        <h3 className="font-bold text-5xl">Como funciona?</h3>
        <p className="font-semibold md:text-xl">Simples e fácil de usar</p>
        <p className="text-center font-medium md:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting
        </p>
      </div>
    </div>
  )
}
