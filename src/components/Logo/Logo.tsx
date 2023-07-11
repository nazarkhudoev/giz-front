import Image from "next/image";

import LogoImage from "../../../public/images/logo.png";

export default function Logo() {
  return (
    <div>
      <Image src={LogoImage} alt="Logo" width={200} height={200} />
    </div>
  );
}
