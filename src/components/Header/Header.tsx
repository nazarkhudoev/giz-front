"use client"
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import CustomSwitch from "../CustomSwitch/CustomSwitch";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-28 py-10 bg-[#C30F08]">
      <Logo />
      <div className="flex items-center gap-[90px]">
        <Navbar />
        {/* <LanguageSwitch /> */}
        <CustomSwitch />
      </div>
    </header>
  );
}
