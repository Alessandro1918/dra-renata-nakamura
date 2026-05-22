export function Doctor() {
  return (
    <div className="py-8 w-full gap-8 flex flex-col items-center justify-center bg-foreground text-black">
      <h2 className="text-3xl font-bold text-cyan-800">
        Sobre a Doutora
      </h2>
      <div className="px-8 flex flex-col md:flex-row gap-8">
        <div className="min-w-96 flex flex-col gap-2 items-center justify-center">
          <img
            src="/assets/doctor.png"
            className="aspect-auto rounded-lg"
          />
          <span className="text-sm">
            Dra. Renata Nakamura - CROSP 104.277
          </span>
        </div>
        <p className="text-justify whitespace-pre-wrap">      
{`A Dra. Renata Nakamura é cirurgiã-dentista formada pela Universidade Metodista de São Paulo, atuando desde 2011 com foco em odontologia estética, funcional e integrativa, proporcionando tratamentos personalizados e atendimento humanizado. Possui ampla experiência como clínica geral e especialização em Ortodontia, desde 2016, pela Faculdade São Leopoldo Mandic. 

Ao longo da sua trajetória profissional, realizou diversos cursos de atualização e aperfeiçoamento, sempre buscando em unir tecnologia, saúde bucal e qualidade de vida, oferecendo uma experiência acolhedora e moderna para cada paciente. Entre os tratamentos realizados estão alinhadores estéticos, estética dental, prevenção, harmonização do sorriso e acompanhamento personalizado.`}
        </p>
      </div>
    </div>
  )
}
