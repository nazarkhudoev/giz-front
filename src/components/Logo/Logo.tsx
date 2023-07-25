import Image from "next/image";
import Link from "next/link";

import LogoImage from "../../../public/images/logo.png";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={LogoImage} alt="Logo" width={200} height={200} />
    </Link>
  );
}
