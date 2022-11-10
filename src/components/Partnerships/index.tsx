const parcerias = [
  {
    nome: 'sulamerica',
    imagem: '/images/sulamerica.jpg'
  },
  {
    nome: 'previsul',
    imagem: '/images/previsul.jpg'
  }
]

export function Partnerships() {
  return (
    <div className="container mx-auto border-t border-b my-4 py-4">
      <h3 className="text-center text-5xl text-zinc-600 font-bold py-9">
        Em parceria com:
      </h3>
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-5 flex-wrap">
        {parcerias.map((parceria) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={parceria.imagem}
            alt={parceria.nome}
            className="w-96"
            key={parceria.nome}
          />
        ))}
      </div>
    </div>
  )
}
