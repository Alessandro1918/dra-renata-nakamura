import { TechItem } from "./technology-item"

export function Technology() {
  return (
    <section className="mt-2 p-8 w-full gap-8 flex flex-col lg:flex-row items-center justify-center text-white bg-linear-to-b lg:bg-linear-to-r from-blue-dark to-blue-light to-20%">
      <img 
        src="/assets/dental-scanner.png"
        className="size-64"
      />
      <div className="flex flex-col flex-1 gap-8 lg:ml-16">
        <h2 className="text-4xl font-bold">
          Tecnologia para uma experiência mais confortável e precisa
        </h2>
        <p className="text-justify">
          Utilizamos recursos digitais que permitem diagnósticos mais precisos, planejamento detalhado e tratamentos mais confortáveis.
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-2 lg:ml-16">
        <TechItem text="Escaneamento intraoral" />
        <TechItem text="Planejamento digital 3D" />
        <TechItem text="Mais precisão e previsibilidade" />
        <TechItem text="Mais conforto para o paciente" />
        <TechItem text="Sem moldagens convencionais" />
      </div>
    </section>
  )
}
