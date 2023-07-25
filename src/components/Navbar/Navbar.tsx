import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-[50px]">
        <li>
          <a className="text-white" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a className="text-white" href="#projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="text-white" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
