import { ImageSlider } from "./image-slider"

export function Office() {
  return (
    <div className="py-8 w-full gap-8 flex flex-col items-center justify-center bg-foreground text-black">
      <h2 className="text-3xl font-bold text-cyan-800">
        Sobre a Clare Odontologia
      </h2>
      <div className="px-8 flex flex-col md:flex-row gap-8">
        <div className="order-1 md:order-2 min-w-96 flex flex-col gap-2 items-center justify-center">
          <ImageSlider 
            images={[
              "/assets/office/consult1.jpg", 
              "/assets/office/consult2.jpg"
            ]}
          />
          <span className="text-sm">
            Clare Odontologia - CRO 028624
          </span>
        </div>
        <p className="order-2 md:order-1 text-justify whitespace-pre-wrap">      
{`A Clare Odontologia nasceu com a proposta de oferecer uma odontologia diferenciada e moderna, focada não apenas no sorriso, mas também no bem-estar e na saúde integral, de forma acolhedora e personalizada, enxergando cada paciente de forma única.
Além da atuação da Dra. Renata Nakamura, a clínica conta com uma equipe de profissionais especialistas em diferentes áreas da odontologia.
Essa integração entre especialidades permite proporcionar tratamentos mais completos, individualizados e eficientes, entregando excelência clínica, conforto e cuidado em cada etapa.
O ambiente foi pensado para oferecer uma experiência sofisticada, tranquila e humanizada, unindo tecnologia e bem-estar.
Cada paciente é atendido de forma individualizada, respeitando suas necessidades, objetivos e estilo de vida.`}
        </p>
      </div>
    </div>
  )
}
