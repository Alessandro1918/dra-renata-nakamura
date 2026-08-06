import { FaInstagram } from "react-icons/fa"
import { SlPhone } from "react-icons/sl"
import { ReactGoogleMaps } from "./map"

export function Footer() {

  const telPhone = 996352193

  return (
    <footer className="w-full flex-col p-8 pb-2 bg-blue-light text-white">
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="w-full lg:w-2/3 order-1 lg:order-2 flex flex-col gap-4">
          <ReactGoogleMaps />

          <div className="flex flex-col">
            <span>Av. Diederichsen, 1.256 (sala 01) - Vila Guarani, São Paulo</span>
            <span className="font-semibold">Como chegar:</span>
            <a 
              // href="https://waze.com/ul/h6gycd9xwy&navigate=yes"
              href="https://waze.com/ul?ll=-23.6333702%2C-46.6400939&navigate=yes"
              className="mt-2 gap-2 flex flex-row items-center underline"
            >
              <img 
                className="size-6 rounded-sm object-cover"
                src="https://waze-gps-maps-traffic-alerts-sat-nav.br.aptoide.com/_next/image?url=https%3A%2F%2Fcdn.aptoide.com%2Fimgs%2F3%2Fa%2F8%2F3a84d64738faf282d9aac44e0ec8291e_icon.png&w=256&q=75"
              />
              Waze
            </a>
            <a 
              className="mt-2 gap-2 flex flex-row items-center underline"
              href="https://www.google.com/maps/dir//CLARE+Odontologia,+Av.+Diederichsen,+1.256+-+Vila+Guarani,+São+Paulo+-+SP,+04310-001/@-23.609344,-46.6878464,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce5b18fd62b19d:0x9cb5f5fb2f46a981!2m2!1d-46.637519!2d-23.6333702?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
            >
              <img 
                className="size-6"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/960px-Google_Maps_icon_%282015-2020%29.svg.png?_=20200220195824"
              />
              Google Maps
            </a>
          </div>

          <div className="bg-white w-1/2 h-px mx-auto visible lg:hidden"/>
        </div>

        <div className="w-full lg:w-1/3 order-2 lg:order-1 flex flex-col items-start justify-center">
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
            className="mt-4 underline flex flex-row items-center gap-1" 
            href={`tel:${telPhone}`}
          >
            <SlPhone /> (11) 99635-2193
          </a>

          <span className="mt-4">
            Horário de funcionamento:{<br/>}
            2ª à 6ª: 09h às 19h{<br/>}
            Sáb.: 09h às 13h
          </span>
        </div>
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
    </footer>
  )
}
