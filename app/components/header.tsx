import { ContactButton } from "./contact-button"

export function Header() {

  return (
    <header className="w-full h-72 gap-8 flex flex-col items-center justify-center bg-blue-light text-white">
      <h1 className="text-2xl sm:text-4xl font-bold text-nowrap">
        DRA. RENATA NAKAMURA
      </h1>
      <h3 className="text-lg sm:text-xl text-center">
        Odontologia moderna, integrativa e humanizada em São Paulo
      </h3>
      <ContactButton text="Agende sua consulta" />
    </header>
  )
}
