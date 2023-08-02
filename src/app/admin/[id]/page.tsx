"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// import { data } from "@/app/data/projects";

import { API_KEY } from "@/app/configs/API_KEY";
import { Projectinterface } from "@/app/interfaces/ProjectInterface";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProject } from "@/redux/features/projectsSlice";
import axios from "axios";

export default function UpdateProject({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.ProjectsReducer);

  useEffect(() => {
    dispatch(fetchProject());
  }, []);

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

  const project = state.projects.find(
    (doc: Projectinterface) => doc.project_id == params.id
  );

  // const [englishName, setEnglishName] = useState<string>("");
  const englishName = useRef<any>();
  // const [englishDescription, setEnglishDescription] = useState<string>("");
  const englishDescription = useRef<any>();
  // const [englishAddress, setEnglishAddress] = useState<string>("");
  const englishAddress = useRef<any>();

  // const [tajikName, setTajikName] = useState<string>("");
  const tajikName = useRef<any>();
  // const [tajikDescription, setTajikDescription] = useState<string>("");
  const tajikDescription = useRef<any>();
  // const [tajikAddress, setTajikAddress] = useState<string>("");
  const tajikAddress = useRef<any>();

  // const [russianName, setRussianName] = useState<string>("");
  const russianName = useRef<any>();
  // const [russainDescription, setRussainDescription] = useState<string>("");
  const russainDescription = useRef<any>();
  // const [russianAddress, setRussianAddress] = useState<string>("");
  const russianAddress = useRef<any>();

  // const [germanName, setGermanName] = useState<string>("");
  const germanName = useRef<any>();
  // const [germanDescription, setGermanDescription] = useState<string>("");
  const germanDescription = useRef<any>();
  // const [germanAddress, setGermanAddress] = useState<string>("");
  const germanAddress = useRef<any>();

  // const [category, setCategory] = useState<string>("");
  const category = useRef<any>();
  const [district, setDistrict] = useState<string>("");
  const [village, setVillage] = useState<string>("");
  const [file, setFile] = useState("");
  const [banner, setBanner] = useState<any>("");
  // const [x, setX] = useState<number>();
  const x = useRef<any>();
  // const [y, setY] = useState<number>();
  const y = useRef<any>();

  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    englishName.current.value = project?.name_en;
    tajikName.current.value = project?.name_tj;
    russianName.current.value = project?.name_ru;
    germanName.current.value = project?.name_de;
    englishDescription.current.value = project?.short_en;
    tajikDescription.current.value = project?.short_tj;
    russainDescription.current.value = project?.short_ru;
    germanDescription.current.value = project?.short_de;
    category.current.value = project?.category_id;
    // englishAddress.current.value = project?.adress_en;
    // russianAddress.current.value = project?.adress_ru;
    // tajikAddress.current.value = project?.adress_tj;
    // germanAddress.current.value = project?.adress_de;
  }, [state.projects, project]);

  const getBanner = () => {};
  const getFile = () => {};

  function handleSubmit(e: any) {
    e.preventDefault();

    const updatedProject = {
      name_en: englishName.current.value,
      name_ru: russianName.current.value,
      name_de: germanName.current.value,
      name_tj: tajikName.current.value,
      short_en: englishDescription.current.value,
      short_ru: russainDescription.current.value,
      short_de: germanDescription.current.value,
      short_tj: tajikDescription.current.value,
      category_id: category.current.value,
      banner_url: "hello world!",
      implementation: "implementation",
      location: [parseInt(x.current.value), parseInt(y.current.value)],
    };

    axios
      .post(`${API_KEY}/update/project/${project?.project_id}`, updatedProject)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(updatedProject);
    setIsSaved(true);
  }

  return (
    <div className="bg-[#D3D3D3] px-24 py-12">
      <div>
        <h3>PROJECTS DETAILS</h3>
        <div className="divider">EN</div>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="mt-3 flex items-center gap-10">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Name*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Type the project’s name..."
              ref={englishName}
              // value={englishName}
              // onChange={(e) => setEnglishName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Category*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Describe the project..."
              ref={category}
              // onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </section>
        <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Description*</label>
            <textarea
              className="w-full min-h-[260px] p-3 resize-none"
              placeholder="Describe the project..."
              ref={englishDescription}
              // value={englishDescription}
              // onChange={(e) => setEnglishDescription(e.target.value)}
            ></textarea>
          </div>
        </section>
        {/* <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Address*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Address"
              ref={englishAddress}
              // value={englishAddress}
              // onChange={(e) => setEnglishAddress(e.target.value)}
            />
          </div>
        </section> */}
        <section className="mt-5 flex items-start gap-10">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">X*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="X"
              ref={x}
              // value={x}
              // onChange={(e) => setX(parseInt(e.target.value))}
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Y*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Y"
              ref={y}
              // onChange={(e) => setY(parseInt(e.target.value))}
            />
          </div>
        </section>
        <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Banner*</label>
            <span>1362x450</span>
            <div className="flex items-center gap-5 mt-3 rounded-[5px]">
              <label
                htmlFor="file"
                className="w-[158px] h-[53px] bg-[#C30F08] text-white flex items-center justify-center cursor-pointer rounded-[5px]"
              >
                Browse File
              </label>
              <input
                type="file"
                className="choose-file"
                id="file"
                value={banner}
                onChange={getBanner}
                // onChange={(e) => setFile(e.target.value)}
              />
              <span>filename.png</span>
            </div>
          </div>
        </section>
        <div className="my-2">
          <div className="divider">TJ</div>
        </div>
        <section className="mt-3 flex items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Name*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Type the project’s name..."
              ref={tajikName}
              // value={tajikName}
              // onChange={(e) => setTajikName(e.target.value)}
            />
          </div>
        </section>
        <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Description*</label>
            <textarea
              className="w-full min-h-[260px] p-3 resize-none"
              placeholder="Describe the project..."
              ref={tajikDescription}
              // value={tajikDescription}
              // onChange={(e) => setTajikDescription(e.target.value)}
            ></textarea>
          </div>
        </section>
        {/* <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Address*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Address"
              ref={tajikAddress}
              // value={tajikAddress}
              // onChange={(e) => setTajikAddress(e.target.value)}
            />
          </div>
        </section> */}
        <div className="my-2">
          <div className="divider">RU</div>
        </div>
        <section className="mt-3 flex items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Name*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Type the project’s name..."
              ref={russianName}
              // value={russianName}
              // onChange={(e) => setRussianName(e.target.value)}
            />
          </div>
        </section>
        <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Description*</label>
            <textarea
              className="w-full min-h-[260px] p-3 resize-none"
              placeholder="Describe the project..."
              ref={russainDescription}
              // value={russainDescription}
              // onChange={(e) => setRussainDescription(e.target.value)}
            ></textarea>
          </div>
        </section>
        {/* <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Address*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Address"
              ref={russianAddress}
              // value={russianAddress}
              // onChange={(e) => setRussianAddress(e.target.value)}
            />
          </div>
        </section> */}
        <div className="my-2">
          <div className="divider">DE</div>
        </div>
        <section className="mt-3 flex items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Name*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Type the project’s name..."
              ref={germanName}
              // value={germanName}
              // onChange={(e) => setGermanName(e.target.value)}
            />
          </div>
        </section>
        <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Description*</label>
            <textarea
              className="w-full min-h-[260px] p-3 resize-none"
              placeholder="Describe the project..."
              ref={germanDescription}
              // onChange={(e) => setGermanDescription(e.target.value)}
            ></textarea>
          </div>
        </section>
        {/* <section className="mt-5">
          <div className="flex flex-col items-start justify-start">
            <label className="text-[24px] font-medium mb-2">Address*</label>
            <input
              className="border border-gray-500 w-[475px] h-[55px] p-3"
              type="text"
              placeholder="Address"
              ref={germanAddress}
              // onChange={(e) => setGermanAddress(e.target.value)}
            />
          </div>
        </section> */}
        <div className="mt-5 flex items-center justify-end gap-10">
          <Link
            href={"/admin"}
            className="w-[140px] h-[50px] bg-[#C30F08] text-white uppercase rounded-[5px] flex items-center justify-center"
          >
            cancel
          </Link>
          <button className="w-[140px] h-[50px] bg-[#C30F08] text-white uppercase rounded-[5px]">
            save
          </button>
        </div>

        {isSaved == true && (
          <>
            <div className="flex flex-col items-start justify-start">
              <label className="text-[24px] font-medium mb-2 uppercase">
                Documents (only pDF)
              </label>
              <span className="text-sm text-gray-500 mb-3">max size 2 mb</span>
              <label
                htmlFor="file"
                className="w-[158px] h-[53px] bg-[#C30F08] text-white flex items-center justify-center cursor-pointer rounded-[5px]"
              >
                Add
              </label>
              <input
                type="file"
                className="choose-file"
                id="file"
                value={file}
                onChange={getFile}
                // onChange={(e) => setFile(e.target.value)}
              />
              <div className="flex items-center gap-5 mt-5">
                <div className="w-[110px] h-[110px] bg-[#E8A805]"></div>
                <div className="w-[110px] h-[110px] bg-[#E8A805]"></div>
                <div className="w-[110px] h-[110px] bg-[#E8A805]"></div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[100px]">
              <label className="text-[24px] font-medium mb-2 uppercase">
                media files (png, jpg)
              </label>
              <span className="text-sm text-gray-500 mb-3">max size 2 mb</span>
              <label
                htmlFor="file"
                className="w-[158px] h-[53px] bg-[#C30F08] text-white flex items-center justify-center cursor-pointer rounded-[5px]"
              >
                Choose photo
              </label>
              <input
                type="file"
                className="choose-file"
                id="file"
                value={file}
                onChange={getFile}
                // onChange={(e) => setFile(e.target.value)}
              />
              <div className="flex items-center gap-10 mt-10">
                <p>pizdataya.png</p>
                <div className="flex items-center gap-8">
                  <p>Title</p>
                  <div className="flex items-center gap-3">
                    <input className="w-[300px] h-[40px] p-2" type="text" />
                    <button className="px-4 h-[40px] bg-[#C30F08] text-white">
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              {/* <p>{file}</p> */}
            </div>
          </>
        )}
      </form>
    </div>
  );
}
