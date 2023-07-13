"use client"
import { useState, useRef } from "react"
import Select from "react-select";

export default function CustomSwitch() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>();
  const [placeholder, setPlaceholder] = useState<any>(selectedLanguage);

  const options = [
    { value: "EN", label: "EN" },
    { value: "DE", label: "DE" },
    { value: "RU", label: "RU" }
  ]

  function handleSelectChange(e: any) {
    setSelectedLanguage(e.value);
  }

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      value={selectedLanguage}
      onChange={handleSelectChange}
      placeholder={selectedLanguage}
      className="w-24 z-50"
      isSearchable={false}
    />
  )
}