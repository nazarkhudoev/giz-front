"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/ui/select";

import { districtsData } from "../../../public/data/District";
import { regionsData } from "../../../public/data/Region";

// region, village, projects
import { selectFilter, seacrhFilter } from "@/redux/features/projectsSlice";
import { useAppDispatch } from "@/redux/hooks";

import "./Filter.css"

export default function Filter() {
  const dispatch = useAppDispatch();

  const handleSelectFilter = (value: string) => {
    dispatch(selectFilter(value));
  };

  const handleSearchFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(seacrhFilter(event.target.value));
  };

  // properties.District Name

  return (
    <nav className="flex items-center flex-wrap gap-16 px-28 mt-10 projects__filter">
      <p>Filter:</p>
      <section className="flex items-center flex-wrap gap-10">
        <div>
          <Select onValueChange={handleSelectFilter}>
            <SelectTrigger className="min-w-[120px] text-center text-black">
              <SelectValue className="text-black" placeholder={"All"} />
              <SelectValue className="text-black" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup className="text-black custom__select-group">
                {districtsData.features.map((district) => {
                  return (
                    <SelectItem
                      key={district.id}
                      value={district.properties["District Name"]}
                    >
                      <div className="text-black">
                        <p>{district.properties["District Name"]}</p>
                      </div>
                    </SelectItem>
                  );
                })}
                {/* <SelectItem value="All">
                  <div className="text-black">
                    <p>All</p>
                  </div>
                </SelectItem>
                <SelectItem value="Rushon">
                  <div className="text-black">
                    <p>Rushon</p>
                  </div>
                </SelectItem>
                <SelectItem value="Vakhon">
                  <div className="text-black">
                    <p>Vakhon</p>
                  </div>
                </SelectItem>
                <SelectItem value="Darvoz">
                  <div className="text-black">
                    <p>Darvoz</p>
                  </div>
                </SelectItem>
                <SelectItem value="Vanj">
                  <div className="text-black">
                    <p>Vanj</p>
                  </div>
                </SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <input
            onChange={(event) => handleSearchFilter(event)}
            className="border h-[40px] px-2"
            type="text"
            placeholder="Search..."
          />
        </div>
      </section>
    </nav>
  );
}
