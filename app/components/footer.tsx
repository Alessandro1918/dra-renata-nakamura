import { FaInstagram } from "react-icons/fa"

export function Footer() {

  const telPhone = 996352193

  return (
    <div className="w-full flex-col p-8 pb-2 bg-blue-light text-white">
      <div className="flex flex-col items-start justify-center">
        <span className="text-xl font-bold">
          Dra. Renata Nakamura
        </span>
        <span className="text-sm">
          CROSP 104.277
        </span>
        <a 
          href="https://www.instagram.com/dra.renatanakamura"
          className="text-sm underline flex flex-row items-center gap-1" 
        >
          <FaInstagram /> dra.renatanakamura
        </a>

        <span className="mt-4 text-xl font-bold">
          Clare Odontologia
        </span>
        <span className="text-sm">
          CROSP 028.624
        </span>
        <a 
          href="https://www.instagram.com/dra.renatanakamura"
          className="text-sm underline flex flex-row items-center gap-1" 
        >
          <FaInstagram /> clare.odontologia
        </a>

        <a 
          className="mt-4"
          href="https://www.google.com/maps/place/CLARE+Odontologia/@-23.633255,-46.6400069,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b18fd62b19d:0x9cb5f5fb2f46a981!8m2!3d-23.633255!4d-46.637432!16s%2Fg%2F11pzywnw70"
        >
          Av. Diederichsen, 1.256 (sala 01) - Vila Guarani, São Paulo
        </a>

        <a 
          className="mt-4 underline" 
          href={`tel:${telPhone}`}
        >
          (11) 99635-2193
        </a>

        <span className="mt-4">
          Horário de funcionamento:{<br/>}
          2ª à 6ª: 09h às 19h{<br/>}
          Sáb.: 09h às 13h
        </span>
      </div>

      <div className="mt-4 flex justify-center">
        <span className="text-xs">
          Design e desenvolvimento:{` `}
          <a 
            className="font-semibold underline"
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
