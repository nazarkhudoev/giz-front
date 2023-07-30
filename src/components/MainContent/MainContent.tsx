import Map from "../Map/Map";
import Projects from "../Projects/Projects";

export default function MainContent() {
  return (
    <div
      id="projects"
      className="flex items-start justify-between h-[700px] gap-10 px-28 pt-[50px] pb-[100px]"
    >
      <Projects />
      <Map />
    </div>
  );
}
