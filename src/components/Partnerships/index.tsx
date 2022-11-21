type Partner = {
  name: string
  image: string
}
export interface PartnershipsProps {
  partners: Partner[]
}

export function Partnerships({ partners }: PartnershipsProps) {
  return (
    <div className="container mx-auto border-t border-b my-4 py-4">
      <h3 className="text-center text-5xl text-zinc-600 font-bold py-9">
        Em parceria com:
      </h3>
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-5 flex-wrap">
        {partners.map((partner) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={partner.image}
            alt={partner.name}
            className="w-96"
            key={partner.name}
          />
        ))}
      </div>
    </div>
  )
}
