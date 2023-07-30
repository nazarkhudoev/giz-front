"use client";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import CustomSwitch from "../CustomSwitch/CustomSwitch";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <header
      id="header"
      className="flex items-center justify-between px-28 py-10 bg-[#C30F08]"
    >
      <Logo />
      <div className="flex items-center gap-[90px]">
        <Navbar />
        <CustomSwitch />
        {/* {path != "/admin" && (
          <>
            <Navbar />
            <CustomSwitch />
          </>
        )} */}
        {/* <LanguageSwitch /> */}
      </div>
    </header>
  );
}
