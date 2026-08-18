import { ClinicSlider } from "./clinic-slider"
import images from "@/app/data/clinic.json"

export function Clinic() {
  return (
    <section className="mt-2 p-8 w-full gap-8 flex flex-col items-center justify-center">
      <h2 className="text-blue-dark text-3xl font-bold text-center">
        Sobre a CLARE Odontologia
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="order-1 md:order-2 min-w-72 md:min-w-96 flex flex-col gap-2 items-center justify-center">
          <ClinicSlider 
            // images={["foo.jpg", "bar.jpg"]}
            images={images}
          />
          <span className="text-sm">
            CLARE Odontologia - CRO 028.624
          </span>
        </div>
        <p className="order-2 md:order-1 text-justify whitespace-pre-wrap text-base md:text-lg">      
{`A CLARE Odontologia nasceu com a proposta de oferecer uma odontologia diferenciada e moderna, focada não apenas no sorriso, mas também no bem-estar e na saúde integral, de forma acolhedora e personalizada, enxergando cada paciente de forma única.

Além da atuação como responsável técnica, a clínica conta com uma equipe de profissionais especialistas em diferentes áreas da odontologia.

Essa integração entre especialidades permite proporcionar tratamentos mais completos, individualizados e eficientes, entregando excelência clínica, conforto e cuidado em cada etapa.

O ambiente foi pensado para oferecer uma experiência sofisticada, tranquila e humanizada, unindo tecnologia e bem-estar.

Cada paciente é atendido de forma individualizada, respeitando suas necessidades, objetivos e estilo de vida.`}
        </p>
      </div>
    </section>
  )
}
