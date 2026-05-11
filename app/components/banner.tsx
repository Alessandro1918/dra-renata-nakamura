export function Banner() {
  return (
    <div className={`
      relative flex items-center justify-start
      bg-[url('/assets/banner.png')]
      w-full h-144 bg-cover 
      bg-top sm:bg-center 
      px-4 sm:px-8
    `}>
      <p className={`
        z-10 text-primary font-bold text-5xl 
        w-3/4 sm:w-1/2 
      `}>
        Cuidar do seu sorriso é investir no seu bem-estar!
      </p>
    </div>
  )
}
