"use client"

import { data } from "@/app/data/projects";
import Image from "next/image";
import { useState } from "react";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

export default function Projects() {
  const [active, setActive] = useState(0);

  const handleAccordion = (index: number) => {
    setActive(index)

  }

  return (
    <div className="bg-[#F0F0F0] rounded-[30px] w-[550px] h-[620px] overflow-y-scroll relative px-3 projects__container">
      <h3 className="text-center py-2 sticky top-0 z-50 bg-[#F0F0F0]">Projects</h3>
      <section className="flex flex-col items-start justify-start gap-3">
        {data.map((project: any, index: number) => {
          return (
            <div
              key={project.id}
              onClick={() => handleAccordion(index)}
              className={`${active == index ? "card collapsed__card" : "card"}`}
            >
              <div className={`${active == index ? "collapsed__image_container" : "card__image"}`}>
                <Image
                  className={`${active == index ? "default__image collapsed__image" : "default__image"}`}
                  src={project.image} alt="Project Image" />
              </div>
              <div
                className={`${active == index ? "card__info collapsed__info" : "card__info"}`}
              >
                <h6 className="text-[15px] font-bold">{project.title}</h6>
                <p className={`${active == index ? "default__text collapsed__text" : "default__text"}`}>
                  {project.subtitle}
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  );
}
