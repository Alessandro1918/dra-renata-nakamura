export function ContactButton(props: {text: string}) {

  const whatsappPhone = 5511996352193
  const whatsappText = 
`Olá! Gostaria de agendar uma consulta na Clare Odontologia.
Cheguei até vocês através do site e gostaria de verificar os horários disponíveis, por favor.`
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
