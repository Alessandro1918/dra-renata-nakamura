import steps from "@/app/data/treatment-steps.json"
import { TreatmentSlider } from "./treatment-slider"
import { TreatmentStep } from "./treatment-step"

export function TreatmentStepByStep() {
  return (
    <section className="p-8 w-full gap-8 flex flex-col items-center justify-center">
      <h2 className="text-blue-dark text-3xl font-bold text-center">
        Um passo a passo pensado para você
      </h2>

      {/* Mobile (< lg): */}
      <div className="size-full visible lg:hidden">
        <TreatmentSlider steps={steps}/>
      </div>

      {/* Desktop (>= lg): */}
      <div className={`
        max-lg:hidden visible
        flex flex-row gap-8
        w-full px-8
      `}>
        {
          steps.map(e => {
            return (
              <TreatmentStep key={e.index} {...e}/>
            )
          })
        }
      </div>
    </section>
  )
}
