import { Header } from "./components/header"
import { Banner } from "./components/banner"
import { Doctor } from "./components/doctor"
import { Office } from "./components/office"
import { Treaments } from "./components/treatments"
import { Reviews } from "./components/reviews"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <Banner />
      <Doctor />
      <Office />
      <Treaments />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
