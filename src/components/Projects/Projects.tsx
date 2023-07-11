import { data } from "@/app/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-[#F0F0F0] rounded-[30px] w-[450px] p-3">
      <h3 className="text-center my-4">Projects</h3>
      <section className="flex flex-col items-start justify-start gap-5">
        {data.map((project: any) => {
          return (
            <div className="flex items-center gap-5 w-full bg-white rounded-xl px-3 py-2">
              <div>
                <Image className="min-w-[90px] h-[90px] object-cover rounded" src={project.image} alt="Project Image" />
              </div>
              <div>
                <h6 className="text-[15px]">{project.title}</h6>
                <p className="project-subtitle text-sm">{project.subtitle}</p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  );
}
