import { ContactButton } from "./contact-button";

export function Contact() {
  return (
    <div className="w-full flex items-center justify-center bg-foreground text-black">
      <div className="p-8 m-8 gap-8 size-full flex flex-col items-center justify-center bg-stone-200 rounded-4xl">
        <h2 className="text-2xl font-bold text-cyan-800">
          Agende sua avaliação
        </h2>
        <span>
          Conheça uma odontologia moderna, personalizada e acolhedora.
        </span>
        <ContactButton text="Falar no Whatsapp" />
      </div>
    </div>
  )
}
