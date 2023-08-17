"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import zindagi_banner from "./images/media/cooperativezindagi/Coop - zind_Banner_1.png"
// import zindagi_photo_1 from "./images/media/cooperativezindagi/Coop - zind_Photo_1.png"
// import zindagi_photo_2 from "./images/media/cooperativezindagi/Coop - zind_Photo_2.png"
// import zindagi_photo_3 from "./images/media/cooperativezindagi/Coop - zind_Photo_3.png"
// import zindagi_photo_4 from "./images/media/cooperativezindagi/Coop - zind_Photo_4.png"

// import khuf_1_banner from "./media/dairy/Khuf_1_Banner_1.png"
// import khuf_1_photo_1 from "./media/dairy/Khuf_1_Photo_1.png"
// import khuf_1_photo_2 from "./media/dairy/Khuf_1_Photo_2.png"
// import khuf_1_photo_3 from "./media/dairy/Khuf_1_Photo_3.png"
// import khuf_1_photo_4 from "./media/dairy/Khuf_1_Photo_4.png"

// import gos_banner from "./media/gosstand/Gos_st_Banner_1.png"
// import gos_photo_1 from "./media/gosstand/Gos_st_Photo_1.png"
// import gos_photo_2 from "./media/gosstand/Gos_st_Photo_2.png"
// import gos_photo_3 from "./media/gosstand/Gos_st_Photo_3.png"
// import gos_photo_4 from "./media/gosstand/Gos_st_Photo_4.png"

// import tvetcentre_banner from "./media/tvetcentre/tvet_uca_Banner_1.png"
// import tvetcentre_photo_1 from "./media/tvetcentre/tvet_uca_Photo_1.png"
// import tvetcentre_photo_2 from "./media/tvetcentre/tvet_uca_Photo_2.png"
// import tvetcentre_photo_3 from "./media/tvetcentre/tvet_uca_Photo_3.png"
// import tvetcentre_photo_4 from "./media/tvetcentre/tvet_uca_Photo_4.png"

// import uca_banner from "./media/uca/UCA_Banner_1.png"
// import uca_photo_1 from "./media/uca/UCA_Photo_1.png"
// import uca_photo_2 from "./media/uca/UCA_Photo_2.png"
// import uca_photo_3 from "./media/uca/UCA_Photo_3.png"
// import uca_photo_4 from "./media/uca/UCA_Photo_4.png"

// import derzud_banner from "./media/vegetable/Derzud_Banner_1.png"
// import derzud_photo_1 from "./media/vegetable/Derzud_Photo_1.png"
// import derzud_photo_2 from "./media/vegetable/Derzud_Photo_2.png"
// import derzud_photo_3 from "./media/vegetable/Derzud_Photo_3.png"
// import derzud_photo_4 from "./media/vegetable/Derzud_Photo_4.png"

// import food_lab_banner from "./media/foodsafety/Food_lab_Banner_1.png"
// import food_lab_photo_1 from "./media/foodsafety/Food_lab_Photo_1.png"
// import food_lab_photo_2 from "./media/foodsafety/Food_lab_Photo_2.png"
// import food_lab_photo_3 from "./media/foodsafety/Food_lab_Photo_3.png"
// import food_lab_photo_4 from "./media/foodsafety/Food_lab_Photo_4.png"



import { useAppSelector } from "@/redux/hooks";

export default function SingleProject() {

    const media_mock = [
        ["./images/media/dairy/Khuf_1_Banner_1.jpg", "./images/media/dairy/Khuf_1_Photo_1.jpg", "./images/media/dairy/Khuf_1_Photo_2.jpg", "./images/media/dairy/Khuf_1_Photo_3.jpg", "./images/media/dairy/Khuf_1_Photo_4.jpg"],
        ["./images/media/vegetable/Derzud_Banner_1.jpg", "./images/media/vegetable/Derzud_Photo_1.jpg", "./images/media/vegetable/Derzud_Photo_2.jpg", "./images/media/vegetable/Derzud_Photo_3.jpg", "./images/media/vegetable/Derzud_Photo_4.jpg"],
        ["./images/media/uca/UCA_Banner_1.jpg", "./images/media/uca/UCA_Photo_1.jpg", "./images/media/uca/UCA_Photo_2.jpg", "./images/media/uca/UCA_Photo_3.jpg", "./images/media/uca/UCA_Photo_4.jpg"],
        ["./images/media/gosstand/Gos_st_Banner_1.jpg", "./images/media/gosstand/Gos_st_Photo_1.jpg", "./images/media/gosstand/Gos_st_Photo_2.jpg", "./images/media/gosstand/Gos_st_Photo_3.jpg", "./images/media/gosstand/Gos_st_Photo_4.jpg"],
        ["./images/media/tvetcentre/tvet_uca_Banner_1.jpg", "./images/media/tvetcentre/tvet_uca_Photo_1.jpg", "./images/media/tvetcentre/tvet_uca_Photo_2.jpg", "./images/media/tvetcentre/tvet_uca_Photo_3.jpg", "./images/media/tvetcentre/tvet_uca_Photo_4.jpg"],
        ["./images/media/cooperativezindagi/Coop - zind_Banner_1.jpg", "./images/media/cooperativezindagi/Coop - zind_Banner_1.jpg", "./images/media/cooperativezindagi/Coop - zind_Banner_1.jpg", "./images/media/cooperativezindagi/Coop - zind_Banner_1.jpg", "./images/media/cooperativezindagi/Coop - zind_Banner_1.jpg"],
        ["./images/media/foodsafety/Food_lab_Banner_1.jpg", "./images/media/foodsafety/Food_lab_Photo_1.jpg", "./images/media/foodsafety/Food_lab_Photo_2.jpg", "./images/media/foodsafety/Food_lab_Photo_3.jpg", "./images/media/foodsafety/Food_lab_Photo_4.jpg"]

    ]

    const state: any = useAppSelector((state) => state.ProjectsReducer);

    const [project, setProject] = useState(state.viewProject);

    const [id, setId] = useState(state.viewProject.project_id);




    return (
        <div>
            <section className="project-container  px-5 py-12 flex flex-col gap-5 lg:px-28  sm:px-5  ">
                <div>
                    <Image width={100} height={50} className="w-[100%]" src={media_mock[id - 1][0]} alt="Project Placeholder image" />
                </div>

                <h2 className="text-center uppercase font-semibold mb-3 text-lg text-[#C30F08]">
                    {project.name_en}
                </h2>
                <p>{project.short_en}</p>
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
                            navigation={
                                {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                    clickable: true,
                                } as any
                            }
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="swiper_container"
                        >

                            {id != 0 ? media_mock[id - 1].filter((el, i)=> {if(i!=0){return el}}).map((image: any, index: number) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Image
                                            key={index}
                                            src={image}
                                            // src={slide_image_1}
                                            alt="Gallery Item"
                                            width={200}
                                            height={200}
                                        // className="object-cover aspect-square"
                                        />
                                    </SwiperSlide>
                                );
                            }) : ""

                            }
                            <div className="swiper-pagination flex justify-center items-center gap-2"></div>
                            <div className="slider-controler">
                                <div className="swiper-button-prev slider-arrow arr-container">
                                    <AiOutlineArrowLeft className="arrows" />
                                </div>
                                <div className="swiper-button-next slider-arrow">
                                    <AiOutlineArrowRight className="arrows" />
                                </div>
                            </div>
                        </Swiper>

                    </div>
                </div>
            </section>
        </div>
    );
}


// export async function GenerateStaticParams() {
//   const state:any = useAppSelector((state) => state.ProjectsReducer);
// const project = state.projects.find(
//     (doc: Projectinterface) => doc.project_id == params.projectID
//   );

// }