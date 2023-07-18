import MainContent from "@/components/MainContent/MainContent"
import About from "@/components/About/About"
import Filter from "@/components/Filter/Filter"
import MainSlider from "@/components/MainSlider/MainSlider"

export default function Home() {
  return (
    <main>
      <MainSlider />
      <About />
      <Filter />
      <MainContent />
    </main>
  )
}
