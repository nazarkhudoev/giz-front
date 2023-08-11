"use client"
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

export default function Navbar() {
  const state = useAppSelector((state) => state.LanguageReducer);
  return (
    <nav>
      <ul className="flex items-center gap-[50px]">
        <li>
          <a className="text-white" href="#about">
            {state.language == "de" && "adwqdqw"}
            {state.language == "en" && "ABOUT"}
            {state.language == "tj" && "ДАР БОРАИ МО"}
            {state.language == "ru" && "О НАС"}
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
