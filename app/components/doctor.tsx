export function Doctor() {
  return (
    <section className="p-8 w-full gap-8 flex flex-col items-center justify-center">
      <h2 className="text-blue-dark text-3xl font-bold text-center">
        Sobre a Doutora Renata Nakamura
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="min-w-72 md:min-w-96 flex flex-col gap-2 items-center justify-center">
          <img
            src="/assets/doctor.png"
            className="aspect-auto rounded-lg"
          />
          <span className="text-sm">
            Dra. Renata Nakamura - CROSP 104.277
          </span>
        </div>
        <p className="text-justify whitespace-pre-wrap">      
{`A Dra. Renata Nakamura é cirurgiã-dentista formada pela Universidade Metodista de São Paulo e atua desde 2011 oferecendo uma odontologia que une estética, função e bem-estar. Especialista em Ortodontia pela Faculdade São Leopoldo Mandic desde 2016, proporciona tratamentos personalizados, com atendimento humanizado e foco na saúde integral de cada paciente.

Em constante atualização, alia conhecimento científico, tecnologia e planejamento individualizado para oferecer uma experiência acolhedora, confortável e resultados naturais e duradouros.

Seu diferencial está na abordagem integrada da saúde bucal, considerando não apenas a estética do sorriso, mas também aspectos relacionados à função, respiração e desenvolvimento facial, proporcionando tratamentos mais completos e personalizados.

Entre os tratamentos oferecidos estão alinhadores estéticos, ortodontia, planejamento estético e reabilitação do sorriso, além de cuidados preventivos para promover saúde e qualidade de vida.`}
        </p>
      </div>
    </section>
  )
}
