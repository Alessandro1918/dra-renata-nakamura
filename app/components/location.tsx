import { ReactGoogleMaps } from "./map"

export function Location() {
  return (
    <div className="py-8 w-full gap-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-blue-dark">
        Localização
      </h2>
      <div className="px-8 flex flex-col md:flex-row gap-8">
        <ReactGoogleMaps />

        <div className="flex flex-col">
          <span className="font-bold">Endereço:</span>
          <span>Av. Diederichsen, 1.256 (sala 01) - Vila Guarani, São Paulo</span>
          <br/>
          <span className="font-bold">Como chegar:</span>
          <a 
            // href="https://waze.com/ul/h6gycd9xwy&navigate=yes"
            href="https://waze.com/ul?ll=-23.6333702%2C-46.6400939&navigate=yes"
            className="mt-2 gap-2 flex flex-row items-center"
          >
            <img 
              className="size-6 rounded-sm object-cover"
              src="https://waze-gps-maps-traffic-alerts-sat-nav.br.aptoide.com/_next/image?url=https%3A%2F%2Fcdn.aptoide.com%2Fimgs%2F3%2Fa%2F8%2F3a84d64738faf282d9aac44e0ec8291e_icon.png&w=256&q=75"
            />
            Waze
          </a>
          <a 
            className="mt-2 gap-2 flex flex-row items-center"
            href="https://www.google.com/maps/dir//CLARE+Odontologia,+Av.+Diederichsen,+1.256+-+Vila+Guarani,+São+Paulo+-+SP,+04310-001/@-23.609344,-46.6878464,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce5b18fd62b19d:0x9cb5f5fb2f46a981!2m2!1d-46.637519!2d-23.6333702?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
          >
            <img 
              className="size-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/960px-Google_Maps_icon_%282015-2020%29.svg.png?_=20200220195824"
            />
            Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}
