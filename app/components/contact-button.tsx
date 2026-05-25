export function ContactButton(props: {text: string}) {

  const whatsappPhone = 5511996352193
  const whatsappText = 
`Boa tarde!
Vi o site de vocês, e gostaria de marcar uma consulta.`
  const whatsappEncodedText = encodeURIComponent(whatsappText)
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappPhone}&text=${whatsappEncodedText}`

  return (
    <a
      href={whatsappUrl}
      className="px-8 py-4 rounded-full bg-blue-dark font-bold text-white"
    >
      {props.text}
    </a>
  )
}
