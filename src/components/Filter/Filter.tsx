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

export default function Filter() {
  return (
    <nav className="flex items-center gap-16 px-28 mt-10">
      <p>Filter:</p>
      <section className="flex items-center gap-10">
        <div className="py-5">
          <Select>
            <SelectTrigger className="min-w-[80px] text-black">
              <SelectValue className="text-black" placeholder={"Region"} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup className="text-black">
                <SelectItem value="RU">
                  <div className="text-black">
                    <p>TJ</p>
                  </div>
                </SelectItem>
                <SelectItem value="EN">
                  <div className="text-black">
                    <p className="w-10">EN</p>
                  </div>
                </SelectItem>
                <SelectItem value="GR">
                  <div className="text-black">
                    <p>DE</p>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="py-5">
          <Select>
            <SelectTrigger className="min-w-[80px] text-black">
              <SelectValue className="text-black" placeholder={"City"} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup className="text-black">
                <SelectItem value="RU">
                  <div className="text-black">
                    <p>TJ</p>
                  </div>
                </SelectItem>
                <SelectItem value="EN">
                  <div className="text-black">
                    <p>EN</p>
                  </div>
                </SelectItem>
                <SelectItem value="GR">
                  <div className="text-black">
                    <p>DE</p>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="py-5">
          <Select>
            <SelectTrigger className="min-w-[80px] text-black">
              <SelectValue className="text-black" placeholder={"Projects"} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup className="text-black">
                <SelectItem value="RU">
                  <div className="text-black">
                    <p>TJ</p>
                  </div>
                </SelectItem>
                <SelectItem value="EN">
                  <div className="text-black">
                    <p>EN</p>
                  </div>
                </SelectItem>
                <SelectItem value="GR">
                  <div className="text-black">
                    <p>DE</p>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>
    </nav>
  );
}
