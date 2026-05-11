import { Header } from "./components/header"
import { Banner } from "./components/banner"
import { Treaments } from "./components/treatments"

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <Banner />
      <Treaments />
    </div>
  )
}
