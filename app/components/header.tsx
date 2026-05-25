import { ContactButton } from "./contact-button"

export function Header() {

  return (
    <div className="w-full h-72 gap-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold">
        DRA. RENATA NAKAMURA
      </h1>
      <h3 className="text-lg sm:text-xl text-center">
        Odontologia moderna, integrativa e humanizada em São Paulo
      </h3>
      <ContactButton text="Agende sua consulta" />
    </div>
  )
}
