"use client"
import { useState, useRef, useId } from "react"
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

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      value={selectedLanguage}
      onChange={handleSelectChange}
      placeholder={selectedLanguage}
      className="w-24 z-50"
      styles={style}
      isSearchable={false}
      // Warning: Prop `id` did not match. Server: "react-select-3-live-region" Client: "react-select-2-live-region"
      // Solution: try to add prop instanceId set as unique string and should work
      instanceId={useId()}
    />
  )
}