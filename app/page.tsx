import { Banner } from "./components/banner"
import { Header } from "./components/header"

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <Banner />
    </div>
  )
}
