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
            {state.language == "de" && "Über uns"}
            {state.language == "en" && "About"}
            {state.language == "tj" && "Дар бораи мо"}
            {state.language == "ru" && "О нас"}
          </a>
        </li>
        <li>
          <a className="text-white" href="#projects">
            {state.language == "de" && "Projekte"}
            {state.language == "en" && "Projects"}
            {state.language == "tj" && "Лоиҳаҳо"}
            {state.language == "ru" && "Проекты"}
          </a>
        </li>
        <li>
          <a className="text-white" href="#projects">
            {state.language == "de" && "Kontakt"}
            {state.language == "en" && "Contacts"}
            {state.language == "tj" && "Тамос"}
            {state.language == "ru" && "Контакты"}
          </a>
        </li>
      </ul>
    </nav>
  );
}
