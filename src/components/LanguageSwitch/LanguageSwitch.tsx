"use client";
import { useState } from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/ui/select";

import TajikFlag from "../../../public/icons/ru.svg";
import EnglishFlag from "../../../public/icons/en.svg";
import GermanFlag from "../../../public/icons/de.svg";

export default function LanguageSwitch() {
  const [lang, setlang] = useState("EN");
  const [active, setActive] = useState("")

  return (
    <div className="switch-btn">
      <Select>
        <SelectTrigger className="w-[80px] border-none text-white">
          <SelectValue className="text-white" placeholder={lang} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup className="text-black">
            <SelectItem value="RU">
              <div className="flex items-center text-black gap-2">
                <p className="w-16 switch-txt">TJ</p>
                <Image src={TajikFlag} alt="Logo" />
              </div>
            </SelectItem>
            <SelectItem value="EN">
              <div className="flex items-center text-black gap-2">
                <p className="w-16 switch-txt">EN</p>
                <Image src={EnglishFlag} alt="Logo" />
              </div>
            </SelectItem>
            <SelectItem value="GR">
              <div className="flex items-center text-black gap-2">
                <p className="w-16 switch-txt">DE</p>
                <Image src={GermanFlag} alt="Logo" />
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
