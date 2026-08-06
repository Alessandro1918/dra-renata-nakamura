// const treatments = [ "Clínica Geral", "Ortodontia", "Implante", "Prótese", "Endodontia", "Periodontia", "Cirurgia", "Clareamento" ]
import treatments from "@/app/data/treatments.json"
import { TreatmentItem } from "./treatment-item"

export function Treaments() {
  return (
    <section className="p-4 sm:p-8 w-full gap-8 flex flex-col items-center justify-center">
      <h2 className="text-blue-dark text-3xl font-bold text-center">
        Tratamentos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
        {
          treatments.map(e => {
            return (
              <TreatmentItem key={e.title} {...e}/>
            )
          })
        }
      </div>
    </section>
  )
}
