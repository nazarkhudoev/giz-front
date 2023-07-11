import Filter from "@/components/Filter/Filter"
import MainContent from "@/components/MainContent/MainContent"
import MainSlider from "@/components/MainSlider/MainSlider"

export default function Home() {
  return (
    <main>
      <MainSlider />
      <Filter />
      <MainContent />
    </main>
  )
}
