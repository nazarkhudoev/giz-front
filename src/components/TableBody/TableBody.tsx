import { data } from "@/app/data/projects";

interface DataInterface {
  id: number;
  title: string;
  subtitle: string;
  image: any;
  district: string;
  status: string;
}

export default function TableBody() {
  return (
    <div>
      <div className="flex items-center justify-between p-3 mt-4 bg-[#F9F9F9] border">
        <p className="text-lg font-medium">Project name</p>
        <p className="text-lg font-medium">Implemented</p>
        <p className="text-lg font-medium">District | Town/Village</p>
        <p className="text-lg font-medium">Status</p>
        <p className="text-lg font-medium">Action</p>
      </div>
      <div>
        {data.map((project: DataInterface) => {
          return (
            <div
              className="flex items-center justify-between p-3 border"
              key={project.id}
            >
              <div>
                <p className="text-[#333] font-semibold">Tuth business</p>
                <p className="text-[#828282] text-sm">agriculture</p>
              </div>
              <p className="text-[#828282]">2020</p>
              <div>
                {/* <p>Shuhdara</p>
                <p>Tusyon</p> */}
                <p className="text-[#828282]">Shuhdara | Tusyon</p>
              </div>
              <p
                className={`py-2 px-4 rounded-[11px] capitalize font-medium ${
                  project.status == "pending" && "bg-[#FEFFE5] text-[#FFBC10]"
                } ${
                  project.status == "published" && "bg-[#F0FFF8] text-[#18AB56]"
                } ${
                  project.status == "deleted" && "bg-[#FFF0F0] text-[#EB5757]"
                }
                `}
              >
                {project.status}
              </p>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
