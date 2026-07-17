import { Header } from "./components/header"
import { Banner } from "./components/banner"
import { DoctorHighLights } from "./components/doctor-highlights"
import { Doctor } from "./components/doctor"
import { Office } from "./components/office"
import { Location } from "./components/location"
import { Treaments } from "./components/treatments"
import { Reviews } from "./components/reviews"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <Banner />
      <DoctorHighLights />
      <Doctor />
      <Office />
      <Location />
      <Treaments />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
