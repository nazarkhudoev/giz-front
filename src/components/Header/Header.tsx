import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-28 py-10 bg-[#C30F08]">
      <Logo />
      <div className="flex items-center gap-14">
        <Navbar />
        <LanguageSwitch />
      </div>
    </header>
  );
}
