import { Header } from "./components/header"
import { Banner } from "./components/banner"
import { Doctor } from "./components/doctor"
import { Treaments } from "./components/treatments"
import { Office } from "./components/office"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <Banner />
      <Doctor />
      <Treaments />
      <Office />
      <Footer />
    </div>
  )
}
