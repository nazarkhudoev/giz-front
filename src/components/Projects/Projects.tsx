"use client";

import { useAppSelector } from "@/redux/hooks";
// import { data } from "@/app/data/projects";
import Image from "next/image";
import type { StaticImageData } from 'next/image';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";

import { API_KEY } from "@/app/configs/API_KEY";
import { Projectinterface } from "@/app/interfaces/ProjectInterface";
import { fetchProject } from "@/redux/features/projectsSlice";

import "./Projects.css"

import uca_card from "../../../public/images/media/uca/UCA_Photo_1.png"
import dairy from "../../../public/images/media/dairy/Khuf_1_Photo_1.png"
import entrepreneurship_center from "../../../public/images/media/uca/UCA_Photo_1.png"
// import foodSafety from "../../../public/images/media/uca/UCA_Photo_1.png"
import gosstand from "../../../public/images/media/gosstand/Gos_st_Photo_1.png"


import vegetable from "../../../public/images/media/vegetable/Derzud_Photo_2.png"
import TVETCentre from "../../../public/images/media/tvetcentre/tvet_uca_Photo_1.png"
import cooperative from "../../../public/images/media/cooperativezindagi/Coop - zind_Photo_1.png"

type Images = {
  uca: any;
  dairy: any;
  entrepreneurship_center: any;
  foodSafety: any;
  vegetable: any;
  TVETCentre: any;
  cooperative : any;

};

export default function Projects() {

  const cardImages:any = {uca: uca_card, dairy: dairy, entrepreneurship_center, gosstand, vegetable, TVETCentre, cooperative};

  const dispatch = useAppDispatch();
  const state:any = useAppSelector((state) => state.ProjectsReducer);

  // useEffect(() => {
  //   dispatch(fetchProject());
  // }, []);

  const [projects, setProjects] = useState<Projectinterface[]>(
    state.filteredData
  );

  useEffect(() => {
    if (state.filteredData.length < 1) {
      setProjects(state.projects);
    } else {
      setProjects(state.filteredData);
    }
  }, [projects, state.projects, state.filteredData]);

  const [active, setActive] = useState<number | null>(null);

  const handleAccordion = (index: number, project: Projectinterface) => {
    let activeProject = projects.find(
      (doc) => doc.project_id == project.project_id
    );
    setActive(index);
    console.log(activeProject);

    if (active == index) {
      setActive(null);
    }
  };

  return (
    <div className="bg-[#F0F0F0] rounded-[30px] w-[550px] h-full overflow-y-scroll relative px-3 projects__container">
      <h3 className="text-center py-3 sticky top-0 z-50 bg-[#F0F0F0]">
        Projects
      </h3>
      <section className="flex flex-col items-start justify-start gap-3 pb-5">
        {state.loading && <div>loading</div>}
        {!state.loading && state.error ? <div>Error: {state.error}</div> : null}
        {!state.loading &&
          state.projects?.length > 0 &&
          projects.map((project: Projectinterface, index: number) => {
            return (
              <div
                key={project.project_id}
                onClick={() => handleAccordion(index, project)}
                className={`${active == index ? "card collapsed__card" : "card"
                  }`}
              >
                <div
                  className={`${active == index
                      ? "collapsed__image_container"
                      : "card__image"
                    }`}
                >
                  
                  <Image
                    className={`${active == index
                        ? "default__image collapsed__image"
                        : "default__image"
                      }`}
                    src={cardImages[project.banner_url]}
                    alt="Project Image"
                  />
                </div>
                <div
                  className={`${active == index
                      ? "card__info collapsed__info"
                      : "card__info"
                    }`}
                >
                  <h6 className="text-[15px] font-bold">{project.name_en}</h6>
                  <p
                    className={`${active == index
                        ? "default__text collapsed__text"
                        : "default__text"
                      }`}
                  >
                    {project.short_en}
                  </p>

                  <div></div>
                </div>
                <Link
                  href={`/${project.project_id}`}
                  className={`${active == index
                      ? "absolute bottom-5 left-[60px] opacity-1"
                      : "absolute opacity-0"
                    }`}
                >
                  read more
                </Link>
              </div>
            );
          })}
      </section>
    </div>
  );
}
