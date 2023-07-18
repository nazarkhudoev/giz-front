"use client"
import { useState, useId } from "react"
import Select from "react-select";

import Flag1 from "../../../public/icons/de.svg"
import Flag2 from "../../../public/icons/en.svg"

export default function CustomSwitch() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>();
  const [placeholder, setPlaceholder] = useState<any>(selectedLanguage);

  const options = [
    { value: "DE", label: <div className="flex items-center gap-1"><img src={Flag1.src} className="rounded-[15px]" height="20px" width="20px" /><p>DE</p> </div> },
    { value: "EN", label: <div className="flex items-center gap-1"><img src={Flag2.src} className="rounded-[15px]" height="20px" width="20px" /><p>EN</p> </div> },
    // { value: "RU", label: "RU" }
  ]

  // <div><img src={copyIcon} height="30px" width="30px"/>Chocolate </div>

  function handleSelectChange(e: any) {
    setSelectedLanguage(e.value);
    console.log(e.value);
  }

  const style = {
    control: (base: any, state: any) => ({
      ...base,
      background: "transparent",
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: state.isFocused ? 0 : 0
      }
    })
  };

  let content: any = ""

  if (selectedLanguage == "DE") {
    content = <div className="flex items-center gap-1"> <p className="text-sm font-light">DE</p><img src={Flag1.src} className="rounded-[15px]" height="20px" width="20px" /> </div>
  } else if (selectedLanguage == "EN") {
    content = <div className="flex items-center gap-1"><p className="text-sm font-light">EN</p><img src={Flag2.src} className="rounded-[15px]" height="20px" width="20px" /> </div>
  }

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      value={selectedLanguage}
      onChange={handleSelectChange}
      placeholder={content}
      className="w-24 z-50"
      styles={style}
      isSearchable={false}
      // Warning: Prop `id` did not match. Server: "react-select-3-live-region" Client: "react-select-2-live-region"
      // Solution: try to add prop instanceId set as unique string and should work
      instanceId={useId()}
    />
  )
}