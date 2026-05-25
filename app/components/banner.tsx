export function Banner() {
  return (
    <div className={`
      relative flex items-center justify-start
      bg-[url('/assets/banner.png')]
      w-full bg-cover bg-center
      h-80 sm:h-100 md:h-120
      px-4 sm:px-8 md:px-16
    `}>
      <p className={`
        z-10 text-blue-light font-bold 
        text-4xl sm:text-5xl md:text-6xl 
        w-3/4 sm:w-1/2 
      `}>
        Cuidar do seu sorriso é investir no seu bem-estar!
      </p>
    </div>
  )
}
