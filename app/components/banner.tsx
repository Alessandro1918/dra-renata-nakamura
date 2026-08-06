export function Banner() {
  return (
    <section className={`
      relative flex flex-col items-start justify-center
      bg-[url('/assets/banner.png')]
      w-full bg-cover bg-center
      h-80 lg:h-100 xl:h-120
      px-4 lg:px-8 xl:px-16
      gap-4 lg:gap-8 xl:gap-12
    `}>
      <p className={`
        z-10 text-blue-light font-bold 
        text-2xl lg:text-4xl xl:text-6xl
        w-3/4 lg:w-2/3 xl:w-1/2
      `}>
        Seu sorriso merece um tratamento planejado exclusivamente para você
      </p>
      <p className={`
        z-10 text-blue-dark font-bold 
        text-xs lg:text-lg xl:text-lg 
        w-3/4 lg:w-2/3 xl:w-1/2
      `}>
        Planejamento individualizado, tecnologia digital e um atendimento acolhedor para transformar seu sorriso com segurança, conforto e resultados que fazem sentido para você
      </p>
    </section>
  )
}
