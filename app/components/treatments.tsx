const treatments = [
  "Clínica Geral",
  "Ortodontia",
  "Implante",
  "Prótese",
  "Endodontia",
  "Periodontia",
  "Cirurgia",
  "Clareamento"
]

export function Treaments() {
  return (
    <div className="w-full p-8 bg-primary flex flex-col gap-4">
      <span className="text-background text-3xl font-bold">
        Tratamentos:
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {
          treatments.map(e => {
            return (
              <TreatmentItem key={e} name={e}/>
            )
          })
        }
      </div>
    </div>
  )
}

type TreatmentItemProps = {
  name: string
}

function TreatmentItem({name}: TreatmentItemProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="w-2 h-4 rounded-full bg-secondary" />
      <span className="text-background font-bold">
        {name}
      </span>
    </div>
  )
}
