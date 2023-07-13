import Image from "next/image";

// import images
import MAP_VECTOR from "../../../public/images/map.svg"

export default function Map() {
  return (
    <div>
      <Image src={MAP_VECTOR} alt="Map Vector" />
    </div>
  );
}
