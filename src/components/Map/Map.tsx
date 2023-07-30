import Image from "next/image";

// import images
import MAP_VECTOR from "../../../public/images/map.svg"

export default function Map() {
  return (
    <div className="h-full w-[800px] max-w-full">
      <Image className="h-full w-full object-fill" src={MAP_VECTOR} alt="Map Vector" />
    </div>
  );
}
