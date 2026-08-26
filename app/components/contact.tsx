import { ContactButton } from "./contact-button";

export function Contact() {
  return (
    <section className="mt-2 w-full flex items-center justify-center">
      <div className="p-8 m-8 gap-8 w-full flex flex-col items-center justify-center bg-stone-200 rounded-4xl">
        {/* <h2 className="text-2xl font-bold text-blue-dark">
          Agende sua avaliação
        </h2> */}
        <span className="text-justify">
          Agende uma avaliação e descubra o plano de cuidado mais adequado para o seu sorriso!
        </span>
        <ContactButton text="Agende sua consulta" />
      </div>
    </section>
  )
}
