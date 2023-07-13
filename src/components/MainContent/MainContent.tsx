import Map from "../Map/Map";
import Projects from "../Projects/Projects";

export default function MainContent() {
  return (
    <div className="flex items-start justify-between gap-10 px-28">
      <Projects />
      <Map />
    </div>
  );
}
