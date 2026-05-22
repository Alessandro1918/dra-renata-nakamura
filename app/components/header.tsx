export function Header() {

  const whatsappPhone = 5511996352193
  const whatsappText = 
`Boa tarde!
Vi o site de vocês, e gostaria de marcar uma consulta.`
  const whatsappEncodedText = encodeURIComponent(whatsappText)
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappPhone}&text=${whatsappEncodedText}`

  return (
    <div className="w-full h-72 gap-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold">
        DRA. RENATA NAKAMURA
      </h1>
      <h3 className="text-lg sm:text-xl text-center">
        Odontologia moderna, integrativa e humanizada em São Paulo
      </h3>
      <a             
        href={whatsappUrl}
        className="bg-cyan-800 px-8 py-4 rounded-full font-bold"
      >
        Agende sua consulta
      </a>
    </div>
  )
}
