// const treatments = [ "Clínica Geral", "Ortodontia", "Implante", "Prótese", "Endodontia", "Periodontia", "Cirurgia", "Clareamento" ]
import treatments from "@/app/data/treatments.json"

export function Treaments() {
  return (
    <div className="p-4 sm:p-8 w-full gap-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-blue-dark">
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
    </div>
  )
}

type TreatmentItemProps = {
  title: string,
  description: string
}

function TreatmentItem({ title, description }: TreatmentItemProps) {
  return (
    <div className="p-4 flex flex-col gap-2 bg-white rounded-lg shadow-lg">
      <span className="font-bold">
        {title}
      </span>
      <p>
        {description}
      </p>
    </div>
  )
}
