export function Footer() {

  const whatsappPhone = 5511996352193

  return (
    <div className="w-full flex-col p-8 pb-2 bg-blue-light text-white">
      <div className="flex flex-col gap-2 items-start justify-center">
        <div className="flex flex-col">
          <span className="text-xl underline">
            Dra. Renata Nakamura
          </span>
          <span className="text-sm">
            CROSP 104.277
          </span>
        </div>
        <a href="https://www.google.com/maps/place/CLARE+Odontologia/@-23.633255,-46.6400069,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b18fd62b19d:0x9cb5f5fb2f46a981!8m2!3d-23.633255!4d-46.637432!16s%2Fg%2F11pzywnw70">
          Av. Diederichsen, 1.256 (sala 01) - Vila Guarani, São Paulo
        </a>
        <a href={`tel:${whatsappPhone}`}>
          (11) 99635-2193
        </a>
        <span>
          Horário de funcionamento:{<br/>}
          2ª à 6ª: 09h às 19h{<br/>}
          Sáb.: 09h às 13h
        </span>
      </div>

      <div className="mt-4 flex justify-center">
        <span className="text-xs">
          Design e desenvolvimento:{` `}
          <a 
            className="font-semibold"
            href="https://www.linkedin.com/in/alessandro-bentivegna-cesta-0058a785/"
            aria-label="author linkedin button"
          >
            Alessandro B. Cesta
          </a>
        </span>  
      </div>
    </div>
  )
}
