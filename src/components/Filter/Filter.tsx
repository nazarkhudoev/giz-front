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

// region, village, projects
import { selectFilter, seacrhFilter } from "@/redux/features/projectsSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function Filter() {
  const dispatch = useAppDispatch();

  const handleSelectFilter = (value: string) => {
    dispatch(selectFilter(value));
  };

  const handleSearchFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(seacrhFilter(event.target.value));
  };

  return (
    <nav className="flex items-center gap-16 px-28 mt-10">
      <p>Filter:</p>
      <section className="flex items-center gap-10">
        <div>
          <Select onValueChange={handleSelectFilter}>
            <SelectTrigger className="min-w-[120px] text-center text-black">
              <SelectValue className="text-black" placeholder={"All"} />
              <SelectValue className="text-black" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup className="text-black">
                <SelectItem value="All">
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
                </SelectItem>
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
