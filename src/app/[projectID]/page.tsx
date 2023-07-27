"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { data } from "../data/projects";
import MainSlider from "@/components/MainSlider/MainSlider";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../../public/images/img_1.jpg";

interface ProjectInterface {
  id: number;
  title: string;
  subtitle: string;
  image: any;
  district: string;
}

export default function SingleProject({
  params,
}: {
  params: { projectID: string };
}) {
  const project = data.find(
    (doc: any) => doc.id == params.projectID
  ) as ProjectInterface;
  const images = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    images.push(element);
  }
  return (
    <div>
      <MainSlider />
      <section className="project-container px-28 py-12">
        <h2 className="text-center uppercase font-semibold mb-3 text-lg text-[#C30F08]">
          {project?.title}
        </h2>
        <p>{project.subtitle}</p>
        <div className="flex items-center justify-between">
          <div className="container">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              {images.map((image: any) => {
                return (
                  <SwiperSlide key={image.id}>
                    <Image
                      key={image.id}
                      src={image.image.src}
                      // src={slide_image_1}
                      alt="Gallery Item"
                      width={200}
                      height={200}
                      // className="object-cover aspect-square"
                    />
                  </SwiperSlide>
                );
              })}
              <div className="swiper-pagination flex justify-center items-center gap-2"></div>
              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow arr-container">
                  <div className="w-40 h-40 bg-red-500 rounded-full"></div>
                  {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                </div>
                <div className="swiper-button-next slider-arrow">
                  {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                  <div className="w-40 h-40 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </Swiper>
            <div className="slider-container">
              {/* {images.map((image: any, index: number) => {
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
              })} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
