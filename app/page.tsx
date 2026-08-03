import { Header } from "./components/header"
import { Banner } from "./components/banner"
import { DoctorHighLights } from "./components/doctor-highlights"
import { Doctor } from "./components/doctor"
import { Clinic } from "./components/clinic"
import { Treaments } from "./components/treatments"
import { TreatmentStepByStep } from "./components/treatment-step-by-step"
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
      <Clinic />
      <Treaments />
      <TreatmentStepByStep />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
