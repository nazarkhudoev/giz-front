"use client";
import { useState } from "react"
import Image, { StaticImageData } from "next/image";
import { data } from "../data/projects"
import MainSlider from "@/components/MainSlider/MainSlider";

interface ProjectInterface {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
  district: string;
}

export default function SingleProject({ params }: { params: { projectID: string } }) {

  const project = data.find((doc: any) => doc.id == params.projectID) as ProjectInterface;
  const images = [];

  const [imageIndex, setImageIndex] = useState(0);
  const [width, setWidth] = useState(300)

  const handleNextImage = () => {
    setImageIndex((prevIndex) => prevIndex + 1)
    setWidth((prevWidth) => prevWidth + 300)
  }

  const handlePreviousImage = () => {
    setImageIndex((prevIndex) => prevIndex - 1)
    setWidth((prevWidth) => prevWidth - 300)
  }

  for (let i = 0; i < data.length; i++) {
    const objectImage = data[i].image;

    images.push(objectImage);
  }
  return (
    <div>
      <MainSlider />
      <section className="project-container px-28 py-12">
        <h2 className="text-center uppercase font-semibold text-lg text-[#C30F08]">{project?.title}</h2>
        <p>{project.subtitle}</p>
        <div className="flex items-center justify-between">
          <button onClick={handlePreviousImage} className="w-[100px] h-[100px] bg-red-400">-</button>
          <div className="image-container">
            {/* <div className="slider-container"> */}
            <div className={`flex items-center justify-center gap-5 border border-blue-500 relative left-[900px]`}>
              {images.map((image: any, index: number) => {
                return (
                  <div>
                    <Image
                      src={image.src}
                      alt="Gallery Item"
                      width={200}
                      height={200}
                      className={`${index == imageIndex && "active-image"}`}
                    // className="object-cover aspect-square"
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <button onClick={handleNextImage} className="w-[100px] h-[100px] bg-red-400">+</button>
        </div>
      </section>
    </div>
  )
}