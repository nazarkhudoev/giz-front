import MainContent from "@/components/MainContent/MainContent";
import About from "@/components/About/About";
import Filter from "@/components/Filter/Filter";
import MainSlider from "@/components/MainSlider/MainSlider";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import('@/components/About/About'), { ssr: false })

export default function Home() {
  return (
    <main>
      <MainSlider />
      <NoSSR />
      {/* <About /> */}
      <Filter />
      <MainContent />
    </main>
  );
}
